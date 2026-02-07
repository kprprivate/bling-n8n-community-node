import type { INodeProperties } from 'n8n-workflow';

export const logisticaServicoOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['logisticaServico'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar um serviço de logística',
				action: 'Criar serviço de logística',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir um serviço de logística',
				action: 'Excluir serviço de logística',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter um serviço de logística pelo ID',
				action: 'Obter serviço de logística',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todos os serviços de logística',
				action: 'Obter todos os serviços de logística',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar um serviço de logística',
				action: 'Atualizar serviço de logística',
			},
		],
		default: 'getAll',
	},
];

export const logisticaServicoFields: INodeProperties[] = [
	// ----------------------------------
	//    logisticaServico: get / delete / update
	// ----------------------------------
	{
		displayName: 'ID do Serviço',
		name: 'servicoId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['logisticaServico'],
				operation: ['get', 'delete', 'update'],
			},
		},
		description: 'ID do serviço de logística',
	},

	// ----------------------------------
	//    logisticaServico: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['logisticaServico'],
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
				resource: ['logisticaServico'],
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
				resource: ['logisticaServico'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'ID da Logística',
				name: 'idLogistica',
				type: 'number',
				default: 0,
				description: 'Filtrar serviços por logística',
			},
		],
	},

	// ----------------------------------
	//    logisticaServico: create
	// ----------------------------------
	{
		displayName: 'Dados do Serviço',
		name: 'servicoData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		required: true,
		default: {},
		displayOptions: {
			show: {
				resource: ['logisticaServico'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição do serviço',
			},
			{
				displayName: 'ID da Logística',
				name: 'idLogistica',
				type: 'number',
				default: 0,
				description: 'ID da logística vinculada',
			},
			{
				displayName: 'Código do Serviço',
				name: 'codigo',
				type: 'string',
				default: '',
				description: 'Código do serviço',
			},
			{
				displayName: 'Aliases',
				name: 'aliases',
				type: 'string',
				default: '',
				description: 'Apelidos do serviço',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'options',
				default: 'A',
				options: [
					{ name: 'Ativo', value: 'A' },
					{ name: 'Inativo', value: 'I' },
				],
				description: 'Situação do serviço',
			},
			{
				displayName: 'Frete por Conta',
				name: 'fretePorConta',
				type: 'options',
				default: 'R',
				options: [
					{ name: 'Remetente (CIF)', value: 'R' },
					{ name: 'Destinatário (FOB)', value: 'D' },
				],
				description: 'De quem é a responsabilidade do frete',
			},
			{
				displayName: 'Prazo de Entrega',
				name: 'prazoEntrega',
				type: 'number',
				default: 0,
				description: 'Prazo de entrega em dias',
			},
		],
	},

	// ----------------------------------
	//    logisticaServico: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['logisticaServico'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição do serviço',
			},
			{
				displayName: 'ID da Logística',
				name: 'idLogistica',
				type: 'number',
				default: 0,
				description: 'ID da logística vinculada',
			},
			{
				displayName: 'Código do Serviço',
				name: 'codigo',
				type: 'string',
				default: '',
				description: 'Código do serviço',
			},
			{
				displayName: 'Aliases',
				name: 'aliases',
				type: 'string',
				default: '',
				description: 'Apelidos do serviço',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'options',
				default: 'A',
				options: [
					{ name: 'Ativo', value: 'A' },
					{ name: 'Inativo', value: 'I' },
				],
				description: 'Situação do serviço',
			},
			{
				displayName: 'Frete por Conta',
				name: 'fretePorConta',
				type: 'options',
				default: 'R',
				options: [
					{ name: 'Remetente (CIF)', value: 'R' },
					{ name: 'Destinatário (FOB)', value: 'D' },
				],
				description: 'De quem é a responsabilidade do frete',
			},
			{
				displayName: 'Prazo de Entrega',
				name: 'prazoEntrega',
				type: 'number',
				default: 0,
				description: 'Prazo de entrega em dias',
			},
		],
	},
];
