import type { INodeProperties } from 'n8n-workflow';

export const pedidoCompraOperations: INodeProperties[] = [
	{
		displayName: 'Operacao',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['pedidoCompra'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Cria um pedido de compra',
				action: 'Criar pedido de compra',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Exclui um pedido de compra',
				action: 'Excluir pedido de compra',
			},
			{
				name: 'Estornar Contas',
				value: 'reverseAccounts',
				description: 'Estorna as contas de um pedido de compra',
				action: 'Estornar contas de pedido de compra',
			},
			{
				name: 'Estornar Estoque',
				value: 'reverseStock',
				description: 'Estorna o estoque de um pedido de compra',
				action: 'Estornar estoque de pedido de compra',
			},
			{
				name: 'Lancar Contas',
				value: 'postAccounts',
				description: 'Lanca as contas de um pedido de compra',
				action: 'Lancar contas de pedido de compra',
			},
			{
				name: 'Lancar Estoque',
				value: 'postStock',
				description: 'Lanca o estoque de um pedido de compra',
				action: 'Lancar estoque de pedido de compra',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obtem um pedido de compra pelo ID',
				action: 'Obter pedido de compra',
			},
			{
				name: 'Obter Varios',
				value: 'getAll',
				description: 'Obtem todos os pedidos de compra',
				action: 'Obter todos os pedidos de compra',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualiza um pedido de compra',
				action: 'Atualizar pedido de compra',
			},
		],
		default: 'getAll',
	},
];

export const pedidoCompraFields: INodeProperties[] = [
	// ----------------------------------
	//         pedidoCompra: get, update, delete, postAccounts, reverseAccounts, postStock, reverseStock
	// ----------------------------------
	{
		displayName: 'ID do Pedido de Compra',
		name: 'pedidoCompraId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['pedidoCompra'],
				operation: [
					'get',
					'update',
					'delete',
					'postAccounts',
					'reverseAccounts',
					'postStock',
					'reverseStock',
				],
			},
		},
		description: 'ID do pedido de compra',
	},

	// ----------------------------------
	//         pedidoCompra: create
	// ----------------------------------
	{
		displayName: 'Dados do Pedido',
		name: 'orderData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['pedidoCompra'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'ID do Fornecedor',
				name: 'idFornecedor',
				type: 'number',
				default: 0,
				description: 'ID do contato do tipo fornecedor',
			},
			{
				displayName: 'Numero',
				name: 'numero',
				type: 'string',
				default: '',
				description: 'Numero do pedido de compra',
			},
			{
				displayName: 'Data',
				name: 'data',
				type: 'string',
				default: '',
				description: 'Data do pedido de compra (ex: 2023-01-01)',
			},
			{
				displayName: 'Data Prevista',
				name: 'dataPrevista',
				type: 'string',
				default: '',
				description: 'Data prevista de entrega (ex: 2023-01-15)',
			},
			{
				displayName: 'Desconto',
				name: 'desconto',
				type: 'number',
				default: 0,
				description: 'Valor do desconto do pedido',
			},
			{
				displayName: 'Frete',
				name: 'frete',
				type: 'number',
				default: 0,
				description: 'Valor do frete do pedido',
			},
			{
				displayName: 'Outras Despesas',
				name: 'outrasDespesas',
				type: 'number',
				default: 0,
				description: 'Valor de outras despesas do pedido',
			},
			{
				displayName: 'Observacoes',
				name: 'observacoes',
				type: 'string',
				default: '',
				description: 'Observacoes do pedido de compra',
			},
			{
				displayName: 'Observacoes Internas',
				name: 'observacoesInternas',
				type: 'string',
				default: '',
				description: 'Observacoes internas do pedido de compra',
			},
			{
				displayName: 'Itens (JSON)',
				name: 'itens',
				type: 'json',
				default: '[]',
				description: 'Array de itens do pedido de compra em formato JSON',
			},
		],
	},

	// ----------------------------------
	//         pedidoCompra: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['pedidoCompra'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'ID do Fornecedor',
				name: 'idFornecedor',
				type: 'number',
				default: 0,
				description: 'ID do contato do tipo fornecedor',
			},
			{
				displayName: 'Numero',
				name: 'numero',
				type: 'string',
				default: '',
				description: 'Numero do pedido de compra',
			},
			{
				displayName: 'Data',
				name: 'data',
				type: 'string',
				default: '',
				description: 'Data do pedido de compra (ex: 2023-01-01)',
			},
			{
				displayName: 'Data Prevista',
				name: 'dataPrevista',
				type: 'string',
				default: '',
				description: 'Data prevista de entrega (ex: 2023-01-15)',
			},
			{
				displayName: 'Desconto',
				name: 'desconto',
				type: 'number',
				default: 0,
				description: 'Valor do desconto do pedido',
			},
			{
				displayName: 'Frete',
				name: 'frete',
				type: 'number',
				default: 0,
				description: 'Valor do frete do pedido',
			},
			{
				displayName: 'Outras Despesas',
				name: 'outrasDespesas',
				type: 'number',
				default: 0,
				description: 'Valor de outras despesas do pedido',
			},
			{
				displayName: 'Observacoes',
				name: 'observacoes',
				type: 'string',
				default: '',
				description: 'Observacoes do pedido de compra',
			},
			{
				displayName: 'Observacoes Internas',
				name: 'observacoesInternas',
				type: 'string',
				default: '',
				description: 'Observacoes internas do pedido de compra',
			},
			{
				displayName: 'Itens (JSON)',
				name: 'itens',
				type: 'json',
				default: '[]',
				description: 'Array de itens do pedido de compra em formato JSON',
			},
		],
	},

	// ----------------------------------
	//         pedidoCompra: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['pedidoCompra'],
				operation: ['getAll'],
			},
		},
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limite',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		displayOptions: {
			show: {
				resource: ['pedidoCompra'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filtros',
		name: 'filters',
		type: 'collection',
		placeholder: 'Adicionar Filtro',
		default: {},
		displayOptions: {
			show: {
				resource: ['pedidoCompra'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'ID do Fornecedor',
				name: 'idFornecedor',
				type: 'number',
				default: 0,
				description: 'ID do contato do tipo fornecedor',
			},
			{
				displayName: 'Valor da Situacao',
				name: 'valorSituacao',
				type: 'number',
				default: 0,
				description: 'Valor da situacao do pedido de compra',
			},
			{
				displayName: 'ID da Situacao',
				name: 'idSituacao',
				type: 'number',
				default: 0,
				description: 'ID da situacao do pedido de compra',
			},
			{
				displayName: 'Data Inicial',
				name: 'dataInicial',
				type: 'string',
				default: '',
				description: 'Data inicial do periodo da compra (ex: 2023-01-01)',
			},
			{
				displayName: 'Data Final',
				name: 'dataFinal',
				type: 'string',
				default: '',
				description: 'Data final do periodo da compra (ex: 2023-01-31)',
			},
			{
				displayName: 'IDs das Notas Fiscais',
				name: 'idsNotasFiscais',
				type: 'string',
				default: '',
				description: 'IDs das notas fiscais de entrada separados por virgula',
			},
		],
	},
];
