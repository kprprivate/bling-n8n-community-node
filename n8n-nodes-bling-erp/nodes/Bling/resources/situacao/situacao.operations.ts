import type { INodeProperties } from 'n8n-workflow';

export const situacaoOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['situacao'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar uma situação',
				action: 'Criar situação',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir uma situação',
				action: 'Excluir situação',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter uma situação pelo ID',
				action: 'Obter situação',
			},
			{
				name: 'Obter Módulos',
				value: 'getModules',
				description: 'Obter situações de um módulo',
				action: 'Obter situações de módulo',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todas as situações',
				action: 'Obter todas as situações',
			},
			{
				name: 'Obter Transições',
				value: 'getTransitions',
				description: 'Obter transições de um módulo',
				action: 'Obter transições de módulo',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar uma situação',
				action: 'Atualizar situação',
			},
		],
		default: 'getAll',
	},
];

export const situacaoFields: INodeProperties[] = [
	// ----------------------------------
	//        situacao: get / delete / update
	// ----------------------------------
	{
		displayName: 'ID da Situação',
		name: 'situacaoId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['situacao'],
				operation: ['get', 'delete', 'update'],
			},
		},
		description: 'ID da situação',
	},

	// ----------------------------------
	//        situacao: getModules / getTransitions
	// ----------------------------------
	{
		displayName: 'ID do Módulo',
		name: 'idModulo',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['situacao'],
				operation: ['getModules', 'getTransitions'],
			},
		},
		description: 'ID do módulo do sistema',
	},

	// ----------------------------------
	//        situacao: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['situacao'],
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
				resource: ['situacao'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		description: 'Quantidade máxima de registros retornados (máx: 100)',
	},

	// ----------------------------------
	//        situacao: create
	// ----------------------------------
	{
		displayName: 'Dados da Situação',
		name: 'situacaoData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		required: true,
		default: {},
		displayOptions: {
			show: {
				resource: ['situacao'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Nome',
				name: 'nome',
				type: 'string',
				default: '',
				description: 'Nome da situação',
			},
			{
				displayName: 'ID do Módulo',
				name: 'idModulo',
				type: 'number',
				default: 0,
				description: 'ID do módulo do sistema',
			},
			{
				displayName: 'Cor',
				name: 'cor',
				type: 'string',
				default: '',
				description: 'Cor da situação em hexadecimal (ex: #FF0000)',
			},
		],
	},

	// ----------------------------------
	//        situacao: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['situacao'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Nome',
				name: 'nome',
				type: 'string',
				default: '',
				description: 'Nome da situação',
			},
			{
				displayName: 'ID do Módulo',
				name: 'idModulo',
				type: 'number',
				default: 0,
				description: 'ID do módulo do sistema',
			},
			{
				displayName: 'Cor',
				name: 'cor',
				type: 'string',
				default: '',
				description: 'Cor da situação em hexadecimal (ex: #FF0000)',
			},
		],
	},
];
