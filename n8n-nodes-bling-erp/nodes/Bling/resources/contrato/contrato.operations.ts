import type { INodeProperties } from 'n8n-workflow';

export const contratoOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contrato'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar um contrato',
				action: 'Criar contrato',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir um contrato',
				action: 'Excluir contrato',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter um contrato pelo ID',
				action: 'Obter contrato',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todos os contratos',
				action: 'Obter todos os contratos',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar um contrato',
				action: 'Atualizar contrato',
			},
		],
		default: 'getAll',
	},
];

export const contratoFields: INodeProperties[] = [
	// ----------------------------------
	//    contrato: get / delete / update
	// ----------------------------------
	{
		displayName: 'ID do Contrato',
		name: 'contratoId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['contrato'],
				operation: ['get', 'delete', 'update'],
			},
		},
		description: 'ID do contrato',
	},

	// ----------------------------------
	//    contrato: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['contrato'],
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
				resource: ['contrato'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		description: 'Quantidade máxima de registros retornados (máx: 100)',
	},
	{
		displayName: 'Filtros',
		name: 'filters',
		type: 'collection',
		placeholder: 'Adicionar Filtro',
		default: {},
		displayOptions: {
			show: {
				resource: ['contrato'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'string',
				default: '',
				description: 'Filtrar por situação do contrato',
			},
			{
				displayName: 'ID do Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'Filtrar por contato vinculado',
			},
			{
				displayName: 'Data Início',
				name: 'dataInicio',
				type: 'string',
				default: '',
				description: 'Data de início (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Data Fim',
				name: 'dataFim',
				type: 'string',
				default: '',
				description: 'Data de fim (formato: YYYY-MM-DD)',
			},
		],
	},

	// ----------------------------------
	//    contrato: create
	// ----------------------------------
	{
		displayName: 'Dados do Contrato',
		name: 'contratoData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		required: true,
		default: {},
		displayOptions: {
			show: {
				resource: ['contrato'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição do contrato',
			},
			{
				displayName: 'ID do Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'ID do contato vinculado ao contrato',
			},
			{
				displayName: 'Data Início',
				name: 'dataInicio',
				type: 'string',
				default: '',
				description: 'Data de início do contrato (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Data Fim',
				name: 'dataFim',
				type: 'string',
				default: '',
				description: 'Data de fim do contrato (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Valor',
				name: 'valor',
				type: 'number',
				default: 0,
				description: 'Valor do contrato',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'string',
				default: '',
				description: 'Situação do contrato',
			},
			{
				displayName: 'Observação',
				name: 'observacao',
				type: 'string',
				default: '',
				description: 'Observação do contrato',
			},
			{
				displayName: 'ID do Vendedor',
				name: 'idVendedor',
				type: 'number',
				default: 0,
				description: 'ID do vendedor vinculado ao contrato',
			},
			{
				displayName: 'Número',
				name: 'numero',
				type: 'string',
				default: '',
				description: 'Número do contrato',
			},
		],
	},

	// ----------------------------------
	//    contrato: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['contrato'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição do contrato',
			},
			{
				displayName: 'ID do Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'ID do contato vinculado ao contrato',
			},
			{
				displayName: 'Data Início',
				name: 'dataInicio',
				type: 'string',
				default: '',
				description: 'Data de início do contrato (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Data Fim',
				name: 'dataFim',
				type: 'string',
				default: '',
				description: 'Data de fim do contrato (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Valor',
				name: 'valor',
				type: 'number',
				default: 0,
				description: 'Valor do contrato',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'string',
				default: '',
				description: 'Situação do contrato',
			},
			{
				displayName: 'Observação',
				name: 'observacao',
				type: 'string',
				default: '',
				description: 'Observação do contrato',
			},
			{
				displayName: 'ID do Vendedor',
				name: 'idVendedor',
				type: 'number',
				default: 0,
				description: 'ID do vendedor vinculado ao contrato',
			},
			{
				displayName: 'Número',
				name: 'numero',
				type: 'string',
				default: '',
				description: 'Número do contrato',
			},
		],
	},
];
