import type { INodeProperties } from 'n8n-workflow';

export const homologacaoOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['homologacao'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar uma homologação',
				action: 'Criar homologação',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir uma homologação',
				action: 'Excluir homologação',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter uma homologação pelo ID',
				action: 'Obter homologação',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todas as homologações',
				action: 'Obter todas as homologações',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar uma homologação',
				action: 'Atualizar homologação',
			},
		],
		default: 'getAll',
	},
];

export const homologacaoFields: INodeProperties[] = [
	// ----------------------------------
	//    homologacao: get / delete / update
	// ----------------------------------
	{
		displayName: 'ID da Homologação',
		name: 'homologacaoId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['homologacao'],
				operation: ['get', 'delete', 'update'],
			},
		},
		description: 'ID da homologação',
	},

	// ----------------------------------
	//    homologacao: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['homologacao'],
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
				resource: ['homologacao'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		description: 'Quantidade máxima de registros retornados (máx: 100)',
	},

	// ----------------------------------
	//    homologacao: create
	// ----------------------------------
	{
		displayName: 'Dados da Homologação',
		name: 'homologacaoData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		required: true,
		default: {},
		displayOptions: {
			show: {
				resource: ['homologacao'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição da homologação',
			},
			{
				displayName: 'ID do Produto',
				name: 'idProduto',
				type: 'number',
				default: 0,
				description: 'ID do produto vinculado',
			},
			{
				displayName: 'ID do Fornecedor',
				name: 'idFornecedor',
				type: 'number',
				default: 0,
				description: 'ID do fornecedor vinculado',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'string',
				default: '',
				description: 'Situação da homologação',
			},
			{
				displayName: 'Data de Validade',
				name: 'dataValidade',
				type: 'string',
				default: '',
				description: 'Data de validade (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Observação',
				name: 'observacao',
				type: 'string',
				default: '',
				description: 'Observação da homologação',
			},
		],
	},

	// ----------------------------------
	//    homologacao: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['homologacao'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição da homologação',
			},
			{
				displayName: 'ID do Produto',
				name: 'idProduto',
				type: 'number',
				default: 0,
				description: 'ID do produto vinculado',
			},
			{
				displayName: 'ID do Fornecedor',
				name: 'idFornecedor',
				type: 'number',
				default: 0,
				description: 'ID do fornecedor vinculado',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'string',
				default: '',
				description: 'Situação da homologação',
			},
			{
				displayName: 'Data de Validade',
				name: 'dataValidade',
				type: 'string',
				default: '',
				description: 'Data de validade (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Observação',
				name: 'observacao',
				type: 'string',
				default: '',
				description: 'Observação da homologação',
			},
		],
	},
];
