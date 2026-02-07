import type { INodeProperties } from 'n8n-workflow';

export const produtoLoteOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['produtoLote'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar um lote para o produto',
				action: 'Criar lote do produto',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar um lote do produto',
				action: 'Atualizar lote do produto',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir um lote do produto',
				action: 'Excluir lote do produto',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter dados de um lote do produto',
				action: 'Obter lote do produto',
			},
			{
				name: 'Listar Todos',
				value: 'getAll',
				description: 'Listar todos os lotes do produto',
				action: 'Listar lotes do produto',
			},
		],
		default: 'getAll',
	},
];

export const produtoLoteFields: INodeProperties[] = [
	// ----------------------------------
	//        idProduto (all operations)
	// ----------------------------------
	{
		displayName: 'ID do Produto',
		name: 'idProduto',
		type: 'number',
		required: true,
		default: 0,
		description: 'ID do produto',
		displayOptions: {
			show: {
				resource: ['produtoLote'],
				operation: ['getAll', 'get', 'create', 'update', 'delete'],
			},
		},
	},

	// ----------------------------------
	//        idLote (get, update, delete)
	// ----------------------------------
	{
		displayName: 'ID do Lote',
		name: 'idLote',
		type: 'number',
		required: true,
		default: 0,
		description: 'ID do lote do produto',
		displayOptions: {
			show: {
				resource: ['produtoLote'],
				operation: ['get', 'update', 'delete'],
			},
		},
	},

	// ----------------------------------
	//        loteData (create)
	// ----------------------------------
	{
		displayName: 'Dados do Lote',
		name: 'loteData',
		type: 'collection',
		placeholder: 'Adicionar campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['produtoLote'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Código do Lote',
				name: 'codigo',
				type: 'string',
				default: '',
				description: 'Código de identificação do lote',
			},
			{
				displayName: 'Data de Fabricação',
				name: 'dataFabricacao',
				type: 'string',
				default: '',
				description: 'Data de fabricação do lote (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Data de Validade',
				name: 'dataValidade',
				type: 'string',
				default: '',
				description: 'Data de validade do lote (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Quantidade',
				name: 'quantidade',
				type: 'number',
				typeOptions: {
					numberPrecision: 4,
				},
				default: 0,
				description: 'Quantidade disponível no lote',
			},
			{
				displayName: 'ID do Depósito',
				name: 'idDeposito',
				type: 'number',
				default: 0,
				description: 'ID do depósito onde o lote está armazenado',
			},
			{
				displayName: 'Observações',
				name: 'observacoes',
				type: 'string',
				default: '',
				description: 'Observações sobre o lote',
			},
		],
	},

	// ----------------------------------
	//        updateFields (update)
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['produtoLote'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Código do Lote',
				name: 'codigo',
				type: 'string',
				default: '',
				description: 'Código de identificação do lote',
			},
			{
				displayName: 'Data de Fabricação',
				name: 'dataFabricacao',
				type: 'string',
				default: '',
				description: 'Data de fabricação do lote (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Data de Validade',
				name: 'dataValidade',
				type: 'string',
				default: '',
				description: 'Data de validade do lote (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Quantidade',
				name: 'quantidade',
				type: 'number',
				typeOptions: {
					numberPrecision: 4,
				},
				default: 0,
				description: 'Quantidade disponível no lote',
			},
			{
				displayName: 'ID do Depósito',
				name: 'idDeposito',
				type: 'number',
				default: 0,
				description: 'ID do depósito onde o lote está armazenado',
			},
			{
				displayName: 'Observações',
				name: 'observacoes',
				type: 'string',
				default: '',
				description: 'Observações sobre o lote',
			},
		],
	},
];
