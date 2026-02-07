import type {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IPollFunctions,
} from 'n8n-workflow';

import { blingApiRequestAllItems } from './GenericFunctions';

export class BlingTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Bling ERP Trigger',
		name: 'blingTrigger',
		icon: 'file:bling.png',
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["event"] + ": " + $parameter["resource"]}}',
		description: 'Monitora novos ou atualizados registros no Bling ERP por polling',
		defaults: {
			name: 'Bling ERP Trigger',
		},
		inputs: [],
		outputs: ['main'],
		credentials: [
			{
				name: 'blingOAuth2Api',
				required: true,
			},
		],
		polling: true,
		properties: [
			{
				displayName: 'Recurso',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Contato', value: 'contato' },
					{ name: 'Conta a Pagar', value: 'contaPagar' },
					{ name: 'Conta a Receber', value: 'contaReceber' },
					{ name: 'Contrato', value: 'contrato' },
					{ name: 'NFCe', value: 'nfce' },
					{ name: 'NFe', value: 'nfe' },
					{ name: 'NFSe', value: 'nfse' },
					{ name: 'Pedido de Compra', value: 'pedidoCompra' },
					{ name: 'Pedido de Venda', value: 'pedidoVenda' },
					{ name: 'Produto', value: 'produto' },
					{ name: 'Proposta Comercial', value: 'propostaComercial' },
					{ name: 'Vendedor', value: 'vendedor' },
				],
				default: 'contato',
			},
			{
				displayName: 'Evento',
				name: 'event',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Criado', value: 'created', description: 'Dispara quando um registro é criado' },
					{ name: 'Atualizado', value: 'updated', description: 'Dispara quando um registro é atualizado' },
				],
				default: 'created',
			},
		],
	};

	async poll(this: IPollFunctions): Promise<INodeExecutionData[][] | null> {
		const resource = this.getNodeParameter('resource') as string;
		const event = this.getNodeParameter('event') as string;

		const staticData = this.getWorkflowStaticData('node');
		const lastPollTime = staticData.lastPollTime as string | undefined;
		const seenIds = (staticData.seenIds as number[]) || [];

		const now = new Date();
		const pollTime = now.toISOString().split('T')[0];

		// Map resource to endpoint and date filter params
		const resourceMap: Record<string, { endpoint: string; dateFieldPrefix: string }> = {
			contato: { endpoint: '/contatos', dateFieldPrefix: event === 'created' ? 'dataInclusao' : 'dataAlteracao' },
			produto: { endpoint: '/produtos', dateFieldPrefix: event === 'created' ? 'dataInclusao' : 'dataAlteracao' },
			pedidoVenda: { endpoint: '/pedidos/vendas', dateFieldPrefix: event === 'created' ? 'dataInclusao' : 'dataAlteracao' },
			pedidoCompra: { endpoint: '/pedidos/compras', dateFieldPrefix: event === 'created' ? 'dataInclusao' : 'dataAlteracao' },
			nfe: { endpoint: '/nfe', dateFieldPrefix: event === 'created' ? 'dataEmissao' : 'dataAlteracao' },
			nfce: { endpoint: '/nfce', dateFieldPrefix: event === 'created' ? 'dataEmissao' : 'dataAlteracao' },
			nfse: { endpoint: '/nfse', dateFieldPrefix: event === 'created' ? 'dataEmissao' : 'dataAlteracao' },
			contaReceber: { endpoint: '/contas/receber', dateFieldPrefix: event === 'created' ? 'dataInclusao' : 'dataAlteracao' },
			contaPagar: { endpoint: '/contas/pagar', dateFieldPrefix: event === 'created' ? 'dataInclusao' : 'dataAlteracao' },
			contrato: { endpoint: '/contratos', dateFieldPrefix: event === 'created' ? 'dataInclusao' : 'dataAlteracao' },
			propostaComercial: { endpoint: '/propostas-comerciais', dateFieldPrefix: event === 'created' ? 'dataInclusao' : 'dataAlteracao' },
			vendedor: { endpoint: '/vendedores', dateFieldPrefix: event === 'created' ? 'dataInclusao' : 'dataAlteracao' },
		};

		const config = resourceMap[resource];
		if (!config) {
			return null;
		}

		const qs: IDataObject = {};

		if (lastPollTime) {
			qs[`${config.dateFieldPrefix}Inicial`] = lastPollTime;
			qs[`${config.dateFieldPrefix}Final`] = pollTime;
		} else {
			// First poll - get records from last 24h
			const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
			qs[`${config.dateFieldPrefix}Inicial`] = yesterday.toISOString().split('T')[0];
			qs[`${config.dateFieldPrefix}Final`] = pollTime;
		}

		const items = await blingApiRequestAllItems.call(
			this,
			'GET',
			config.endpoint,
			{},
			qs,
		);

		// Deduplication by ID
		const newItems = items.filter((item) => {
			const id = item.id as number;
			return !seenIds.includes(id);
		});

		// Update seen IDs with rolling window of 1000
		const newIds = newItems.map((item) => item.id as number);
		const updatedSeenIds = [...seenIds, ...newIds].slice(-1000);

		staticData.lastPollTime = pollTime;
		staticData.seenIds = updatedSeenIds;

		if (newItems.length === 0) {
			return null;
		}

		return [newItems.map((item) => ({ json: item }))];
	}
}
