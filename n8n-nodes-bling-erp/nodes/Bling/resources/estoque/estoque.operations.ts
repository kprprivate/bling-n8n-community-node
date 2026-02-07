import type { INodeProperties } from 'n8n-workflow';

export const estoqueOperations: INodeProperties[] = [
	{
		displayName: 'Operacao',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['estoque'],
			},
		},
		options: [
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualiza um registro de estoque',
				action: 'Atualizar um registro de estoque',
			},
			{
				name: 'Criar',
				value: 'create',
				description: 'Cria um registro de estoque',
				action: 'Criar um registro de estoque',
			},
			{
				name: 'Obter Saldos',
				value: 'getBalances',
				description: 'Obtem os saldos de estoque',
				action: 'Obter saldos de estoque',
			},
		],
		default: 'getBalances',
	},
];

export const estoqueFields: INodeProperties[] = [
	// ----------------------------------
	//         estoque: create - stockData
	// ----------------------------------
	{
		displayName: 'Dados do Estoque',
		name: 'stockData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['estoque'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Produto',
				name: 'produto',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Adicionar Produto',
				options: [
					{
						displayName: 'Dados do Produto',
						name: 'produtoData',
						values: [
							{
								displayName: 'ID do Produto',
								name: 'id',
								type: 'number',
								default: 0,
								description: 'ID do produto',
							},
						],
					},
				],
				description: 'Produto vinculado ao registro de estoque',
			},
			{
				displayName: 'Deposito',
				name: 'deposito',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Adicionar Deposito',
				options: [
					{
						displayName: 'Dados do Deposito',
						name: 'depositoData',
						values: [
							{
								displayName: 'ID do Deposito',
								name: 'id',
								type: 'number',
								default: 0,
								description: 'ID do deposito',
							},
						],
					},
				],
				description: 'Deposito vinculado ao registro de estoque',
			},
			{
				displayName: 'Operacao',
				name: 'operacao',
				type: 'options',
				options: [
					{ name: 'Entrada', value: 'E' },
					{ name: 'Saida', value: 'S' },
					{ name: 'Balanco', value: 'B' },
				],
				default: 'E',
				description: 'Tipo de operacao de estoque',
			},
			{
				displayName: 'Quantidade',
				name: 'quantidade',
				type: 'number',
				typeOptions: { numberPrecision: 4 },
				default: 0,
				description: 'Quantidade da movimentacao de estoque',
			},
			{
				displayName: 'Preco de Custo',
				name: 'preco',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				description: 'Preco de custo unitario',
			},
			{
				displayName: 'Observacoes',
				name: 'observacoes',
				type: 'string',
				default: '',
				description: 'Observacoes da movimentacao de estoque',
			},
		],
	},

	// ----------------------------------
	//         estoque: update - stockData
	// ----------------------------------
	{
		displayName: 'Dados do Estoque',
		name: 'stockData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['estoque'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Produto',
				name: 'produto',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Adicionar Produto',
				options: [
					{
						displayName: 'Dados do Produto',
						name: 'produtoData',
						values: [
							{
								displayName: 'ID do Produto',
								name: 'id',
								type: 'number',
								default: 0,
								description: 'ID do produto',
							},
						],
					},
				],
				description: 'Produto vinculado ao registro de estoque',
			},
			{
				displayName: 'Deposito',
				name: 'deposito',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Adicionar Deposito',
				options: [
					{
						displayName: 'Dados do Deposito',
						name: 'depositoData',
						values: [
							{
								displayName: 'ID do Deposito',
								name: 'id',
								type: 'number',
								default: 0,
								description: 'ID do deposito',
							},
						],
					},
				],
				description: 'Deposito vinculado ao registro de estoque',
			},
			{
				displayName: 'Operacao',
				name: 'operacao',
				type: 'options',
				options: [
					{ name: 'Entrada', value: 'E' },
					{ name: 'Saida', value: 'S' },
					{ name: 'Balanco', value: 'B' },
				],
				default: 'E',
				description: 'Tipo de operacao de estoque',
			},
			{
				displayName: 'Quantidade',
				name: 'quantidade',
				type: 'number',
				typeOptions: { numberPrecision: 4 },
				default: 0,
				description: 'Quantidade da movimentacao de estoque',
			},
			{
				displayName: 'Preco de Custo',
				name: 'preco',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				description: 'Preco de custo unitario',
			},
			{
				displayName: 'Observacoes',
				name: 'observacoes',
				type: 'string',
				default: '',
				description: 'Observacoes da movimentacao de estoque',
			},
		],
	},

	// ----------------------------------
	//         estoque: getBalances - returnAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['estoque'],
				operation: ['getBalances'],
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
				resource: ['estoque'],
				operation: ['getBalances'],
				returnAll: [false],
			},
		},
		description: 'Max number of results to return',
	},

	// ----------------------------------
	//         estoque: getBalances - filters
	// ----------------------------------
	{
		displayName: 'Filtros',
		name: 'filters',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['estoque'],
				operation: ['getBalances'],
			},
		},
		options: [
			{
				displayName: 'IDs dos Produtos',
				name: 'idsProdutos',
				type: 'string',
				default: '',
				description: 'IDs dos produtos separados por virgula (ex: 123,456,789)',
			},
			{
				displayName: 'IDs dos Depositos',
				name: 'idsDepositos',
				type: 'string',
				default: '',
				description: 'IDs dos depositos separados por virgula (ex: 1,2,3)',
			},
			{
				displayName: 'Codigo do Produto',
				name: 'codigo',
				type: 'string',
				default: '',
				description: 'Codigo (SKU) do produto',
			},
			{
				displayName: 'Nome do Produto',
				name: 'nome',
				type: 'string',
				default: '',
				description: 'Nome do produto para filtro',
			},
		],
	},
];
