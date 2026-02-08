import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { blingApiRequest, blingApiRequestAllItems } from './GenericFunctions';

// Resource operations & fields imports
import { contatoOperations, contatoFields } from './resources/contato/contato.operations';
import { produtoOperations, produtoFields } from './resources/produto/produto.operations';
import { produtoVariacaoOperations, produtoVariacaoFields } from './resources/produtoVariacao/produtoVariacao.operations';
import { produtoFornecedorOperations, produtoFornecedorFields } from './resources/produtoFornecedor/produtoFornecedor.operations';
import { produtoEstruturaOperations, produtoEstruturaFields } from './resources/produtoEstrutura/produtoEstrutura.operations';
import { produtoLojaOperations, produtoLojaFields } from './resources/produtoLoja/produtoLoja.operations';
import { produtoLoteOperations, produtoLoteFields } from './resources/produtoLote/produtoLote.operations';
import { pedidoVendaOperations, pedidoVendaFields } from './resources/pedidoVenda/pedidoVenda.operations';
import { pedidoCompraOperations, pedidoCompraFields } from './resources/pedidoCompra/pedidoCompra.operations';
import { nfeOperations, nfeFields } from './resources/nfe/nfe.operations';
import { nfceOperations, nfceFields } from './resources/nfce/nfce.operations';
import { nfseOperations, nfseFields } from './resources/nfse/nfse.operations';
import { contaReceberOperations, contaReceberFields } from './resources/contaReceber/contaReceber.operations';
import { contaPagarOperations, contaPagarFields } from './resources/contaPagar/contaPagar.operations';
import { estoqueOperations, estoqueFields } from './resources/estoque/estoque.operations';
import { depositoOperations, depositoFields } from './resources/deposito/deposito.operations';
import { categoriaProdutoOperations, categoriaProdutoFields } from './resources/categoriaProduto/categoriaProduto.operations';
import { categoriaReceitaDespesaOperations, categoriaReceitaDespesaFields } from './resources/categoriaReceitaDespesa/categoriaReceitaDespesa.operations';
import { categoriaLojaOperations, categoriaLojaFields } from './resources/categoriaLoja/categoriaLoja.operations';
import { formaPagamentoOperations, formaPagamentoFields } from './resources/formaPagamento/formaPagamento.operations';
import { vendedorOperations, vendedorFields } from './resources/vendedor/vendedor.operations';
import { logisticaOperations, logisticaFields } from './resources/logistica/logistica.operations';
import { logisticaServicoOperations, logisticaServicoFields } from './resources/logisticaServico/logisticaServico.operations';
import { logisticaObjetoOperations, logisticaObjetoFields } from './resources/logisticaObjeto/logisticaObjeto.operations';
import { situacaoOperations, situacaoFields } from './resources/situacao/situacao.operations';
import { campoCustomizadoOperations, campoCustomizadoFields } from './resources/campoCustomizado/campoCustomizado.operations';
import { canalVendaOperations, canalVendaFields } from './resources/canalVenda/canalVenda.operations';
import { naturezaOperacaoOperations, naturezaOperacaoFields } from './resources/naturezaOperacao/naturezaOperacao.operations';
import { empresaOperations, empresaFields } from './resources/empresa/empresa.operations';
import { notificacaoOperations, notificacaoFields } from './resources/notificacao/notificacao.operations';
import { grupoProdutoOperations, grupoProdutoFields } from './resources/grupoProduto/grupoProduto.operations';
import { contaContabilOperations, contaContabilFields } from './resources/contaContabil/contaContabil.operations';
import { homologacaoOperations, homologacaoFields } from './resources/homologacao/homologacao.operations';
import { caixaBancoOperations, caixaBancoFields } from './resources/caixaBanco/caixaBanco.operations';
import { anuncioOperations, anuncioFields } from './resources/anuncio/anuncio.operations';
import { borderoOperations, borderoFields } from './resources/bordero/bordero.operations';
import { contratoOperations, contratoFields } from './resources/contrato/contrato.operations';
import { propostaComercialOperations, propostaComercialFields } from './resources/propostaComercial/propostaComercial.operations';
import { ordemProducaoOperations, ordemProducaoFields } from './resources/ordemProducao/ordemProducao.operations';

export class Bling implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Bling ERP',
		name: 'bling',
		icon: 'file:bling.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Integração com a API v3 do Bling ERP',
		defaults: {
			name: 'Bling ERP',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'blingOAuth2Api',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Recurso',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Anúncio', value: 'anuncio' },
					{ name: 'Borderô', value: 'bordero' },
					{ name: 'Caixa/Banco', value: 'caixaBanco' },
					{ name: 'Campo Customizado', value: 'campoCustomizado' },
					{ name: 'Canal de Venda', value: 'canalVenda' },
					{ name: 'Categoria de Loja', value: 'categoriaLoja' },
					{ name: 'Categoria de Produto', value: 'categoriaProduto' },
					{ name: 'Categoria Receita/Despesa', value: 'categoriaReceitaDespesa' },
					{ name: 'Conta a Pagar', value: 'contaPagar' },
					{ name: 'Conta a Receber', value: 'contaReceber' },
					{ name: 'Conta Contábil', value: 'contaContabil' },
					{ name: 'Contato', value: 'contato' },
					{ name: 'Contrato', value: 'contrato' },
					{ name: 'Depósito', value: 'deposito' },
					{ name: 'Empresa', value: 'empresa' },
					{ name: 'Estoque', value: 'estoque' },
					{ name: 'Forma de Pagamento', value: 'formaPagamento' },
					{ name: 'Grupo de Produto', value: 'grupoProduto' },
					{ name: 'Homologação', value: 'homologacao' },
					{ name: 'Logística', value: 'logistica' },
					{ name: 'Logística - Objeto/Remessa', value: 'logisticaObjeto' },
					{ name: 'Logística - Serviço', value: 'logisticaServico' },
					{ name: 'Natureza de Operação', value: 'naturezaOperacao' },
					{ name: 'NFCe', value: 'nfce' },
					{ name: 'NFe', value: 'nfe' },
					{ name: 'NFSe', value: 'nfse' },
					{ name: 'Notificação', value: 'notificacao' },
					{ name: 'Ordem de Produção', value: 'ordemProducao' },
					{ name: 'Pedido de Compra', value: 'pedidoCompra' },
					{ name: 'Pedido de Venda', value: 'pedidoVenda' },
					{ name: 'Produto', value: 'produto' },
					{ name: 'Produto - Estrutura', value: 'produtoEstrutura' },
					{ name: 'Produto - Fornecedor', value: 'produtoFornecedor' },
					{ name: 'Produto - Loja', value: 'produtoLoja' },
					{ name: 'Produto - Lote', value: 'produtoLote' },
					{ name: 'Produto - Variação', value: 'produtoVariacao' },
					{ name: 'Proposta Comercial', value: 'propostaComercial' },
					{ name: 'Situação', value: 'situacao' },
					{ name: 'Vendedor', value: 'vendedor' },
				],
				default: 'contato',
			},
			// Operations
			...contatoOperations,
			...produtoOperations,
			...produtoVariacaoOperations,
			...produtoFornecedorOperations,
			...produtoEstruturaOperations,
			...produtoLojaOperations,
			...produtoLoteOperations,
			...pedidoVendaOperations,
			...pedidoCompraOperations,
			...nfeOperations,
			...nfceOperations,
			...nfseOperations,
			...contaReceberOperations,
			...contaPagarOperations,
			...estoqueOperations,
			...depositoOperations,
			...categoriaProdutoOperations,
			...categoriaReceitaDespesaOperations,
			...categoriaLojaOperations,
			...formaPagamentoOperations,
			...vendedorOperations,
			...logisticaOperations,
			...logisticaServicoOperations,
			...logisticaObjetoOperations,
			...situacaoOperations,
			...campoCustomizadoOperations,
			...canalVendaOperations,
			...naturezaOperacaoOperations,
			...empresaOperations,
			...notificacaoOperations,
			...grupoProdutoOperations,
			...contaContabilOperations,
			...homologacaoOperations,
			...caixaBancoOperations,
			...anuncioOperations,
			...borderoOperations,
			...contratoOperations,
			...propostaComercialOperations,
			...ordemProducaoOperations,
			// Fields
			...contatoFields,
			...produtoFields,
			...produtoVariacaoFields,
			...produtoFornecedorFields,
			...produtoEstruturaFields,
			...produtoLojaFields,
			...produtoLoteFields,
			...pedidoVendaFields,
			...pedidoCompraFields,
			...nfeFields,
			...nfceFields,
			...nfseFields,
			...contaReceberFields,
			...contaPagarFields,
			...estoqueFields,
			...depositoFields,
			...categoriaProdutoFields,
			...categoriaReceitaDespesaFields,
			...categoriaLojaFields,
			...formaPagamentoFields,
			...vendedorFields,
			...logisticaFields,
			...logisticaServicoFields,
			...logisticaObjetoFields,
			...situacaoFields,
			...campoCustomizadoFields,
			...canalVendaFields,
			...naturezaOperacaoFields,
			...empresaFields,
			...notificacaoFields,
			...grupoProdutoFields,
			...contaContabilFields,
			...homologacaoFields,
			...caixaBancoFields,
			...anuncioFields,
			...borderoFields,
			...contratoFields,
			...propostaComercialFields,
			...ordemProducaoFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		for (let i = 0; i < items.length; i++) {
			try {
				let responseData: IDataObject | IDataObject[] = {};

				// ==================== CONTATO ====================
				if (resource === 'contato') {
					if (operation === 'create') {
						const body: IDataObject = {
							nome: this.getNodeParameter('nome', i) as string,
						};
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
						Object.assign(body, additionalFields);
						const response = await blingApiRequest.call(this, 'POST', '/contatos', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('contatoId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/contatos/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = {};
						Object.assign(qs, filters);
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/contatos', {}, qs);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limite = limit;
							const response = await blingApiRequest.call(this, 'GET', '/contatos', {}, qs);
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('contatoId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/contatos/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/contatos/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('contatoId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/contatos/${id}`);
						responseData = { success: true };
					} else if (operation === 'getTypes') {
						const response = await blingApiRequest.call(this, 'GET', '/contatos/tipos');
						responseData = response.data as IDataObject[];
					} else if (operation === 'changeSituation') {
						const id = this.getNodeParameter('contatoId', i) as number;
						const situacao = this.getNodeParameter('situacao', i) as string;
						const response = await blingApiRequest.call(this, 'PATCH', `/contatos/${id}/situacoes`, { situacao });
						responseData = response.data as IDataObject;
					}

				// ==================== PRODUTO ====================
				} else if (resource === 'produto') {
					if (operation === 'create') {
						const body: IDataObject = {
							nome: this.getNodeParameter('nome', i) as string,
							tipo: this.getNodeParameter('tipo', i) as string,
							formato: this.getNodeParameter('formato', i) as string,
						};
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
						Object.assign(body, additionalFields);
						const response = await blingApiRequest.call(this, 'POST', '/produtos', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('produtoId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/produtos/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = {};
						Object.assign(qs, filters);
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/produtos', {}, qs);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limite = limit;
							const response = await blingApiRequest.call(this, 'GET', '/produtos', {}, qs);
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('produtoId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/produtos/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/produtos/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('produtoId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/produtos/${id}`);
						responseData = { success: true };
					} else if (operation === 'changeSituation') {
						const id = this.getNodeParameter('produtoId', i) as number;
						const situacao = this.getNodeParameter('situacao', i) as string;
						const response = await blingApiRequest.call(this, 'PATCH', `/produtos/${id}/situacoes`, { situacao });
						responseData = response.data as IDataObject;
					}

				// ==================== PRODUTO VARIAÇÃO ====================
				} else if (resource === 'produtoVariacao') {
					if (operation === 'getAll') {
						const idProdutoPai = this.getNodeParameter('idProdutoPai', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/produtos/variacoes/${idProdutoPai}`);
						responseData = response.data as IDataObject[];
					} else if (operation === 'getAttributes') {
						const idProdutoPai = this.getNodeParameter('idProdutoPai', i) as number;
						const body = this.getNodeParameter('attributeData', i, {}) as IDataObject;
						const response = await blingApiRequest.call(this, 'PATCH', `/produtos/variacoes/${idProdutoPai}/atributos`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'generateCombinations') {
						const body = this.getNodeParameter('combinationData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/produtos/variacoes/atributos/gerar-combinacoes', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'create') {
						const body = this.getNodeParameter('variationData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/produtos', body);
						responseData = response.data as IDataObject;
					}

				// ==================== PRODUTO FORNECEDOR ====================
				} else if (resource === 'produtoFornecedor') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/produtos/fornecedores');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/produtos/fornecedores', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'get') {
						const id = this.getNodeParameter('produtoFornecedorId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/produtos/fornecedores/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'create') {
						const body = this.getNodeParameter('supplierData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/produtos/fornecedores', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'update') {
						const id = this.getNodeParameter('produtoFornecedorId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/produtos/fornecedores/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/produtos/fornecedores/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('produtoFornecedorId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/produtos/fornecedores/${id}`);
						responseData = { success: true };
					}

				// ==================== PRODUTO ESTRUTURA ====================
				} else if (resource === 'produtoEstrutura') {
					if (operation === 'get') {
						const id = this.getNodeParameter('produtoEstruturaId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/produtos/estruturas/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'create') {
						const body = this.getNodeParameter('structureData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/produtos/estruturas', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'update') {
						const id = this.getNodeParameter('produtoEstruturaId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/produtos/estruturas/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/produtos/estruturas/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'createComponent') {
						const id = this.getNodeParameter('produtoEstruturaId', i) as number;
						const body = this.getNodeParameter('componentData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', `/produtos/estruturas/${id}/componentes`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'updateComponent') {
						const id = this.getNodeParameter('produtoEstruturaId', i) as number;
						const idComponente = this.getNodeParameter('idComponente', i) as number;
						const updateFields = this.getNodeParameter('componentUpdateFields', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'PATCH', `/produtos/estruturas/${id}/componentes/${idComponente}`, updateFields);
						responseData = response.data as IDataObject;
					} else if (operation === 'deleteComponent') {
						const id = this.getNodeParameter('produtoEstruturaId', i) as number;
						const idComponente = this.getNodeParameter('idComponente', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/produtos/estruturas/${id}/componentes/${idComponente}`);
						responseData = { success: true };
					}

				// ==================== PRODUTO LOJA ====================
				} else if (resource === 'produtoLoja') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/produtos/lojas');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/produtos/lojas', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'get') {
						const id = this.getNodeParameter('produtoLojaId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/produtos/lojas/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'create') {
						const body = this.getNodeParameter('storeData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/produtos/lojas', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'update') {
						const id = this.getNodeParameter('produtoLojaId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/produtos/lojas/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/produtos/lojas/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('produtoLojaId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/produtos/lojas/${id}`);
						responseData = { success: true };
					}

				// ==================== PRODUTO LOTE ====================
				} else if (resource === 'produtoLote') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/produtos/lotes');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/produtos/lotes', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'get') {
						const id = this.getNodeParameter('loteId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/produtos/lotes/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'create') {
						const body = this.getNodeParameter('loteData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'PUT', '/produtos/lotes', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'update') {
						const id = this.getNodeParameter('loteId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'PUT', `/produtos/lotes/${id}`, updateFields);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('loteId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/produtos/lotes/${id}`);
						responseData = { success: true };
					}

				// ==================== PEDIDO DE VENDA ====================
				} else if (resource === 'pedidoVenda') {
					if (operation === 'create') {
						const body: IDataObject = {};
						const fields = this.getNodeParameter('orderData', i) as IDataObject;
						Object.assign(body, fields);
						const response = await blingApiRequest.call(this, 'POST', '/pedidos/vendas', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('pedidoVendaId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/pedidos/vendas/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = {};
						Object.assign(qs, filters);
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/pedidos/vendas', {}, qs);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limite = limit;
							const response = await blingApiRequest.call(this, 'GET', '/pedidos/vendas', {}, qs);
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('pedidoVendaId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/pedidos/vendas/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/pedidos/vendas/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('pedidoVendaId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/pedidos/vendas/${id}`);
						responseData = { success: true };
					} else if (operation === 'generateNfe') {
						const id = this.getNodeParameter('pedidoVendaId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/pedidos/vendas/${id}/gerar-nfe`);
						responseData = response.data as IDataObject;
					} else if (operation === 'generateNfce') {
						const id = this.getNodeParameter('pedidoVendaId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/pedidos/vendas/${id}/gerar-nfce`);
						responseData = response.data as IDataObject;
					} else if (operation === 'postAccounts') {
						const id = this.getNodeParameter('pedidoVendaId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/pedidos/vendas/${id}/lancar-contas`);
						responseData = response.data as IDataObject;
					} else if (operation === 'reverseAccounts') {
						const id = this.getNodeParameter('pedidoVendaId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/pedidos/vendas/${id}/estornar-contas`);
						responseData = response.data as IDataObject;
					} else if (operation === 'postStock') {
						const id = this.getNodeParameter('pedidoVendaId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/pedidos/vendas/${id}/lancar-estoque`);
						responseData = response.data as IDataObject;
					} else if (operation === 'reverseStock') {
						const id = this.getNodeParameter('pedidoVendaId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/pedidos/vendas/${id}/estornar-estoque`);
						responseData = response.data as IDataObject;
					}

				// ==================== PEDIDO DE COMPRA ====================
				} else if (resource === 'pedidoCompra') {
					if (operation === 'create') {
						const body = this.getNodeParameter('orderData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/pedidos/compras', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('pedidoCompraId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/pedidos/compras/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = {};
						Object.assign(qs, filters);
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/pedidos/compras', {}, qs);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limite = limit;
							const response = await blingApiRequest.call(this, 'GET', '/pedidos/compras', {}, qs);
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('pedidoCompraId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/pedidos/compras/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/pedidos/compras/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('pedidoCompraId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/pedidos/compras/${id}`);
						responseData = { success: true };
					} else if (operation === 'postAccounts') {
						const id = this.getNodeParameter('pedidoCompraId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/pedidos/compras/${id}/lancar-contas`);
						responseData = response.data as IDataObject;
					} else if (operation === 'reverseAccounts') {
						const id = this.getNodeParameter('pedidoCompraId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/pedidos/compras/${id}/estornar-contas`);
						responseData = response.data as IDataObject;
					} else if (operation === 'postStock') {
						const id = this.getNodeParameter('pedidoCompraId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/pedidos/compras/${id}/lancar-estoque`);
						responseData = response.data as IDataObject;
					} else if (operation === 'reverseStock') {
						const id = this.getNodeParameter('pedidoCompraId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/pedidos/compras/${id}/estornar-estoque`);
						responseData = response.data as IDataObject;
					}

				// ==================== NFE ====================
				} else if (resource === 'nfe') {
					if (operation === 'create') {
						const body = this.getNodeParameter('nfeData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/nfe', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('nfeId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/nfe/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = {};
						Object.assign(qs, filters);
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/nfe', {}, qs);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limite = limit;
							const response = await blingApiRequest.call(this, 'GET', '/nfe', {}, qs);
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('nfeId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/nfe/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/nfe/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('nfeId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/nfe/${id}`);
						responseData = { success: true };
					} else if (operation === 'send') {
						const id = this.getNodeParameter('nfeId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/nfe/${id}/enviar`);
						responseData = response.data as IDataObject;
					} else if (operation === 'postAccounts') {
						const id = this.getNodeParameter('nfeId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/nfe/${id}/lancar-contas`);
						responseData = response.data as IDataObject;
					} else if (operation === 'reverseAccounts') {
						const id = this.getNodeParameter('nfeId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/nfe/${id}/estornar-contas`);
						responseData = response.data as IDataObject;
					} else if (operation === 'postStock') {
						const id = this.getNodeParameter('nfeId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/nfe/${id}/lancar-estoque`);
						responseData = response.data as IDataObject;
					} else if (operation === 'reverseStock') {
						const id = this.getNodeParameter('nfeId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/nfe/${id}/estornar-estoque`);
						responseData = response.data as IDataObject;
					}

				// ==================== NFCE ====================
				} else if (resource === 'nfce') {
					if (operation === 'create') {
						const body = this.getNodeParameter('nfceData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/nfce', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('nfceId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/nfce/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = {};
						Object.assign(qs, filters);
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/nfce', {}, qs);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limite = limit;
							const response = await blingApiRequest.call(this, 'GET', '/nfce', {}, qs);
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('nfceId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/nfce/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/nfce/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('nfceId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/nfce/${id}`);
						responseData = { success: true };
					} else if (operation === 'send') {
						const id = this.getNodeParameter('nfceId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/nfce/${id}/enviar`);
						responseData = response.data as IDataObject;
					} else if (operation === 'postAccounts') {
						const id = this.getNodeParameter('nfceId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/nfce/${id}/lancar-contas`);
						responseData = response.data as IDataObject;
					} else if (operation === 'reverseAccounts') {
						const id = this.getNodeParameter('nfceId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/nfce/${id}/estornar-contas`);
						responseData = response.data as IDataObject;
					} else if (operation === 'postStock') {
						const id = this.getNodeParameter('nfceId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/nfce/${id}/lancar-estoque`);
						responseData = response.data as IDataObject;
					} else if (operation === 'reverseStock') {
						const id = this.getNodeParameter('nfceId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/nfce/${id}/estornar-estoque`);
						responseData = response.data as IDataObject;
					}

				// ==================== NFSE ====================
				} else if (resource === 'nfse') {
					if (operation === 'create') {
						const body = this.getNodeParameter('nfseData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/nfse', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('nfseId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/nfse/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = {};
						Object.assign(qs, filters);
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/nfse', {}, qs);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limite = limit;
							const response = await blingApiRequest.call(this, 'GET', '/nfse', {}, qs);
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('nfseId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/nfse/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/nfse/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('nfseId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/nfse/${id}`);
						responseData = { success: true };
					} else if (operation === 'send') {
						const id = this.getNodeParameter('nfseId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/nfse/${id}/enviar`);
						responseData = response.data as IDataObject;
					} else if (operation === 'cancel') {
						const id = this.getNodeParameter('nfseId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/nfse/${id}/cancelar`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getConfig') {
						const response = await blingApiRequest.call(this, 'GET', '/nfse/configuracoes');
						responseData = response.data as IDataObject;
					}

				// ==================== CONTA A RECEBER ====================
				} else if (resource === 'contaReceber') {
					if (operation === 'create') {
						const body = this.getNodeParameter('accountData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/contas/receber', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('contaReceberId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/contas/receber/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = {};
						Object.assign(qs, filters);
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/contas/receber', {}, qs);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limite = limit;
							const response = await blingApiRequest.call(this, 'GET', '/contas/receber', {}, qs);
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('contaReceberId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/contas/receber/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/contas/receber/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('contaReceberId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/contas/receber/${id}`);
						responseData = { success: true };
					} else if (operation === 'settle') {
						const id = this.getNodeParameter('contaReceberId', i) as number;
						const body = this.getNodeParameter('settleData', i, {}) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', `/contas/receber/${id}/baixar`, body);
						responseData = response.data as IDataObject;
					}

				// ==================== CONTA A PAGAR ====================
				} else if (resource === 'contaPagar') {
					if (operation === 'create') {
						const body = this.getNodeParameter('accountData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/contas/pagar', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('contaPagarId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/contas/pagar/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = {};
						Object.assign(qs, filters);
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/contas/pagar', {}, qs);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limite = limit;
							const response = await blingApiRequest.call(this, 'GET', '/contas/pagar', {}, qs);
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('contaPagarId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/contas/pagar/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/contas/pagar/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('contaPagarId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/contas/pagar/${id}`);
						responseData = { success: true };
					} else if (operation === 'settle') {
						const id = this.getNodeParameter('contaPagarId', i) as number;
						const body = this.getNodeParameter('settleData', i, {}) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', `/contas/pagar/${id}/baixar`, body);
						responseData = response.data as IDataObject;
					}

				// ==================== ESTOQUE ====================
				} else if (resource === 'estoque') {
					if (operation === 'getBalances') {
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = {};
						Object.assign(qs, filters);
						const response = await blingApiRequest.call(this, 'GET', '/estoques/saldos', {}, qs);
						responseData = response.data as IDataObject[];
					} else if (operation === 'create') {
						const body = this.getNodeParameter('stockData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/estoques', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'update') {
						const body = this.getNodeParameter('stockData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'PUT', '/estoques', body);
						responseData = response.data as IDataObject;
					}

				// ==================== DEPÓSITO ====================
				} else if (resource === 'deposito') {
					if (operation === 'create') {
						const body: IDataObject = {
							descricao: this.getNodeParameter('descricao', i) as string,
						};
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
						Object.assign(body, additionalFields);
						const response = await blingApiRequest.call(this, 'POST', '/depositos', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('depositoId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/depositos/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/depositos');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/depositos', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('depositoId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/depositos/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/depositos/${id}`, body);
						responseData = response.data as IDataObject;
					}

				// ==================== CATEGORIA DE PRODUTO ====================
				} else if (resource === 'categoriaProduto') {
					if (operation === 'create') {
						const body: IDataObject = {
							descricao: this.getNodeParameter('descricao', i) as string,
						};
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
						Object.assign(body, additionalFields);
						const response = await blingApiRequest.call(this, 'POST', '/categorias/produtos', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('categoriaId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/categorias/produtos/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/categorias/produtos');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/categorias/produtos', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('categoriaId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/categorias/produtos/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/categorias/produtos/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('categoriaId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/categorias/produtos/${id}`);
						responseData = { success: true };
					}

				// ==================== CATEGORIA RECEITA/DESPESA ====================
				} else if (resource === 'categoriaReceitaDespesa') {
					if (operation === 'create') {
						const body: IDataObject = {
							descricao: this.getNodeParameter('descricao', i) as string,
						};
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
						Object.assign(body, additionalFields);
						const response = await blingApiRequest.call(this, 'POST', '/categorias/receitas-despesas', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('categoriaId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/categorias/receitas-despesas/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/categorias/receitas-despesas');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/categorias/receitas-despesas', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('categoriaId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/categorias/receitas-despesas/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/categorias/receitas-despesas/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('categoriaId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/categorias/receitas-despesas/${id}`);
						responseData = { success: true };
					}

				// ==================== CATEGORIA DE LOJA ====================
				} else if (resource === 'categoriaLoja') {
					if (operation === 'create') {
						const body = this.getNodeParameter('categoryData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/categorias/lojas', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('categoriaId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/categorias/lojas/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/categorias/lojas');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/categorias/lojas', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('categoriaId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/categorias/lojas/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/categorias/lojas/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('categoriaId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/categorias/lojas/${id}`);
						responseData = { success: true };
					}

				// ==================== FORMA DE PAGAMENTO ====================
				} else if (resource === 'formaPagamento') {
					if (operation === 'create') {
						const body: IDataObject = {
							descricao: this.getNodeParameter('descricao', i) as string,
						};
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
						Object.assign(body, additionalFields);
						const response = await blingApiRequest.call(this, 'POST', '/formas-pagamentos', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('formaPagamentoId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/formas-pagamentos/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/formas-pagamentos');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/formas-pagamentos', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('formaPagamentoId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/formas-pagamentos/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/formas-pagamentos/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('formaPagamentoId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/formas-pagamentos/${id}`);
						responseData = { success: true };
					} else if (operation === 'getDefault') {
						const response = await blingApiRequest.call(this, 'GET', '/formas-pagamentos/padrao');
						responseData = response.data as IDataObject;
					}

				// ==================== VENDEDOR ====================
				} else if (resource === 'vendedor') {
					if (operation === 'create') {
						const body: IDataObject = {};
						const fields = this.getNodeParameter('vendedorData', i) as IDataObject;
						Object.assign(body, fields);
						const response = await blingApiRequest.call(this, 'POST', '/vendedores', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('vendedorId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/vendedores/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = {};
						Object.assign(qs, filters);
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/vendedores', {}, qs);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limite = limit;
							const response = await blingApiRequest.call(this, 'GET', '/vendedores', {}, qs);
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('vendedorId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/vendedores/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/vendedores/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('vendedorId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/vendedores/${id}`);
						responseData = { success: true };
					}

				// ==================== LOGÍSTICA ====================
				} else if (resource === 'logistica') {
					if (operation === 'create') {
						const body = this.getNodeParameter('logisticaData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/logisticas', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('logisticaId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/logisticas/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/logisticas');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/logisticas', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('logisticaId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/logisticas/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/logisticas/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('logisticaId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/logisticas/${id}`);
						responseData = { success: true };
					}

				// ==================== LOGÍSTICA SERVIÇO ====================
				} else if (resource === 'logisticaServico') {
					if (operation === 'create') {
						const body = this.getNodeParameter('servicoData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/logisticas/servicos', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('servicoId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/logisticas/servicos/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/logisticas/servicos');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/logisticas/servicos', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('servicoId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/logisticas/servicos/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/logisticas/servicos/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('servicoId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/logisticas/servicos/${id}`);
						responseData = { success: true };
					}

				// ==================== LOGÍSTICA OBJETO/REMESSA ====================
				} else if (resource === 'logisticaObjeto') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = {};
						Object.assign(qs, filters);
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/logisticas/objetos', {}, qs);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limite = limit;
							const response = await blingApiRequest.call(this, 'GET', '/logisticas/objetos', {}, qs);
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'get') {
						const id = this.getNodeParameter('objetoId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/logisticas/objetos/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'create') {
						const body = this.getNodeParameter('objetoData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/logisticas/objetos', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('objetoId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/logisticas/objetos/${id}`);
						responseData = { success: true };
					} else if (operation === 'getLabel') {
						const id = this.getNodeParameter('objetoId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/logisticas/objetos/${id}/etiqueta`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getShipments') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/logisticas/remessas');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/logisticas/remessas', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'getShipment') {
						const id = this.getNodeParameter('remessaId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/logisticas/remessas/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'createShipment') {
						const body = this.getNodeParameter('shipmentData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/logisticas/remessas', body);
						responseData = response.data as IDataObject;
					}

				// ==================== SITUAÇÃO ====================
				} else if (resource === 'situacao') {
					if (operation === 'getAll') {
						const idModulo = this.getNodeParameter('idModulo', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/situacoes/modulos/${idModulo}`);
						responseData = response.data as IDataObject[];
					} else if (operation === 'get') {
						const id = this.getNodeParameter('situacaoId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/situacoes/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getModules') {
						const response = await blingApiRequest.call(this, 'GET', '/situacoes/modulos');
						responseData = response.data as IDataObject[];
					} else if (operation === 'getTransitions') {
						const id = this.getNodeParameter('situacaoId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/situacoes/${id}/transicoes`);
						responseData = response.data as IDataObject[];
					} else if (operation === 'create') {
						const body = this.getNodeParameter('situacaoData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/situacoes', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'update') {
						const id = this.getNodeParameter('situacaoId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/situacoes/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/situacoes/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('situacaoId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/situacoes/${id}`);
						responseData = { success: true };
					}

				// ==================== CAMPO CUSTOMIZADO ====================
				} else if (resource === 'campoCustomizado') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/campos-customizados');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/campos-customizados', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'get') {
						const id = this.getNodeParameter('campoId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/campos-customizados/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'create') {
						const body = this.getNodeParameter('fieldData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/campos-customizados', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'update') {
						const id = this.getNodeParameter('campoId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/campos-customizados/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/campos-customizados/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('campoId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/campos-customizados/${id}`);
						responseData = { success: true };
					} else if (operation === 'getModules') {
						const response = await blingApiRequest.call(this, 'GET', '/campos-customizados/modulos');
						responseData = response.data as IDataObject[];
					} else if (operation === 'getTypes') {
						const response = await blingApiRequest.call(this, 'GET', '/campos-customizados/tipos');
						responseData = response.data as IDataObject[];
					}

				// ==================== CANAL DE VENDA ====================
				} else if (resource === 'canalVenda') {
					if (operation === 'getAll') {
						const response = await blingApiRequest.call(this, 'GET', '/canais-venda');
						responseData = response.data as IDataObject[];
					} else if (operation === 'getTypes') {
						const response = await blingApiRequest.call(this, 'GET', '/canais-venda/tipos');
						responseData = response.data as IDataObject[];
					}

				// ==================== NATUREZA DE OPERAÇÃO ====================
				} else if (resource === 'naturezaOperacao') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/naturezas-operacoes');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/naturezas-operacoes', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					}

				// ==================== EMPRESA ====================
				} else if (resource === 'empresa') {
					if (operation === 'get') {
						const response = await blingApiRequest.call(this, 'GET', '/empresas/me/dados-basicos');
						responseData = response.data as IDataObject;
					}

				// ==================== NOTIFICAÇÃO ====================
				} else if (resource === 'notificacao') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/notificacoes');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/notificacoes', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'confirmRead') {
						const id = this.getNodeParameter('notificacaoId', i) as number;
						const response = await blingApiRequest.call(this, 'POST', `/notificacoes/${id}/confirmar-leitura`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getCount') {
						const response = await blingApiRequest.call(this, 'GET', '/notificacoes/quantidade');
						responseData = response.data as IDataObject;
					}

				// ==================== GRUPO DE PRODUTO ====================
				} else if (resource === 'grupoProduto') {
					if (operation === 'create') {
						const body: IDataObject = {
							nome: this.getNodeParameter('nome', i) as string,
						};
						const response = await blingApiRequest.call(this, 'POST', '/grupos-produtos', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('grupoId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/grupos-produtos/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/grupos-produtos');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/grupos-produtos', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('grupoId', i) as number;
						const body: IDataObject = {
							nome: this.getNodeParameter('nome', i) as string,
						};
						const response = await blingApiRequest.call(this, 'PUT', `/grupos-produtos/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('grupoId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/grupos-produtos/${id}`);
						responseData = { success: true };
					}

				// ==================== CONTA CONTÁBIL ====================
				} else if (resource === 'contaContabil') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/contas-contabeis');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/contas-contabeis', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'get') {
						const id = this.getNodeParameter('contaContabilId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/contas-contabeis/${id}`);
						responseData = response.data as IDataObject;
					}

				// ==================== HOMOLOGAÇÃO ====================
				} else if (resource === 'homologacao') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/homologacao/produtos');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/homologacao/produtos', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'get') {
						const id = this.getNodeParameter('homologacaoId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/homologacao/produtos/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'create') {
						const body = this.getNodeParameter('homologacaoData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/homologacao/produtos', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'update') {
						const id = this.getNodeParameter('homologacaoId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'PUT', `/homologacao/produtos/${id}`, updateFields);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('homologacaoId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/homologacao/produtos/${id}`);
						responseData = { success: true };
					}

				// ==================== CAIXA/BANCO ====================
				} else if (resource === 'caixaBanco') {
					if (operation === 'create') {
						const body = this.getNodeParameter('caixaBancoData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/caixas', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('caixaBancoId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/caixas/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/caixas');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await blingApiRequest.call(this, 'GET', '/caixas', {}, { limite: limit });
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('caixaBancoId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/caixas/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/caixas/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('caixaBancoId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/caixas/${id}`);
						responseData = { success: true };
					}

				// ==================== ANÚNCIO ====================
				} else if (resource === 'anuncio') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = {};
						Object.assign(qs, filters);
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/anuncios', {}, qs);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limite = limit;
							const response = await blingApiRequest.call(this, 'GET', '/anuncios', {}, qs);
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'get') {
						const id = this.getNodeParameter('anuncioId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/anuncios/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'create') {
						const body = this.getNodeParameter('anuncioData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/anuncios', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'update') {
						const id = this.getNodeParameter('anuncioId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/anuncios/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/anuncios/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('anuncioId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/anuncios/${id}`);
						responseData = { success: true };
					} else if (operation === 'getCategories') {
						const qs: IDataObject = {};
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						Object.assign(qs, filters);
						const response = await blingApiRequest.call(this, 'GET', '/anuncios/categorias', {}, qs);
						responseData = response.data as IDataObject[];
					} else if (operation === 'getCategory') {
						const id = this.getNodeParameter('categoryId', i) as number;
						const qs: IDataObject = {};
						const filters = this.getNodeParameter('filters', i, {}) as IDataObject;
						Object.assign(qs, filters);
						const response = await blingApiRequest.call(this, 'GET', `/anuncios/categorias/${id}`, {}, qs);
						responseData = response.data as IDataObject;
					}

				// ==================== BORDERÔ ====================
				} else if (resource === 'bordero') {
					if (operation === 'get') {
						const id = this.getNodeParameter('borderoId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/borderos/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('borderoId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/borderos/${id}`);
						responseData = { success: true };
					}

				// ==================== CONTRATO ====================
				} else if (resource === 'contrato') {
					if (operation === 'create') {
						const body = this.getNodeParameter('contratoData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/contratos', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('contratoId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/contratos/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = {};
						Object.assign(qs, filters);
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/contratos', {}, qs);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limite = limit;
							const response = await blingApiRequest.call(this, 'GET', '/contratos', {}, qs);
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('contratoId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/contratos/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/contratos/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('contratoId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/contratos/${id}`);
						responseData = { success: true };
					}

				// ==================== PROPOSTA COMERCIAL ====================
				} else if (resource === 'propostaComercial') {
					if (operation === 'create') {
						const body = this.getNodeParameter('propostaData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/propostas-comerciais', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('propostaId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/propostas-comerciais/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = {};
						Object.assign(qs, filters);
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/propostas-comerciais', {}, qs);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limite = limit;
							const response = await blingApiRequest.call(this, 'GET', '/propostas-comerciais', {}, qs);
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('propostaId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/propostas-comerciais/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/propostas-comerciais/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('propostaId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/propostas-comerciais/${id}`);
						responseData = { success: true };
					} else if (operation === 'changeSituation') {
						const id = this.getNodeParameter('propostaId', i) as number;
						const situacao = this.getNodeParameter('situacao', i) as number;
						const response = await blingApiRequest.call(this, 'PATCH', `/propostas-comerciais/${id}/situacoes`, { situacao });
						responseData = response.data as IDataObject;
					}

				// ==================== ORDEM DE PRODUÇÃO ====================
				} else if (resource === 'ordemProducao') {
					if (operation === 'create') {
						const body = this.getNodeParameter('ordemData', i) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/ordens-producao', body);
						responseData = response.data as IDataObject;
					} else if (operation === 'get') {
						const id = this.getNodeParameter('ordemId', i) as number;
						const response = await blingApiRequest.call(this, 'GET', `/ordens-producao/${id}`);
						responseData = response.data as IDataObject;
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = {};
						Object.assign(qs, filters);
						if (returnAll) {
							responseData = await blingApiRequestAllItems.call(this, 'GET', '/ordens-producao', {}, qs);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limite = limit;
							const response = await blingApiRequest.call(this, 'GET', '/ordens-producao', {}, qs);
							responseData = response.data as IDataObject[];
						}
					} else if (operation === 'update') {
						const id = this.getNodeParameter('ordemId', i) as number;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						const current = await blingApiRequest.call(this, 'GET', `/ordens-producao/${id}`);
						const body: IDataObject = { ...(current.data as IDataObject), ...updateFields };
						const response = await blingApiRequest.call(this, 'PUT', `/ordens-producao/${id}`, body);
						responseData = response.data as IDataObject;
					} else if (operation === 'delete') {
						const id = this.getNodeParameter('ordemId', i) as number;
						await blingApiRequest.call(this, 'DELETE', `/ordens-producao/${id}`);
						responseData = { success: true };
					} else if (operation === 'generateOnDemand') {
						const body = this.getNodeParameter('demandData', i, {}) as IDataObject;
						const response = await blingApiRequest.call(this, 'POST', '/ordens-producao/gerar-sob-demanda', body);
						responseData = response.data as IDataObject;
					}
				}

				// Normalize response
				if (Array.isArray(responseData)) {
					returnData.push(...responseData.map((item) => ({ json: item })));
				} else {
					returnData.push({ json: responseData as IDataObject });
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ json: { error: (error as Error).message } });
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
