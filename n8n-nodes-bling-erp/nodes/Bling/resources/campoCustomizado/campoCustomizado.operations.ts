import type { INodeProperties } from 'n8n-workflow';

export const campoCustomizadoOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['campoCustomizado'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar um campo customizado',
				action: 'Criar campo customizado',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir um campo customizado',
				action: 'Excluir campo customizado',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter um campo customizado pelo ID',
				action: 'Obter campo customizado',
			},
			{
				name: 'Obter Módulos',
				value: 'getModules',
				description: 'Obter módulos disponíveis para campos customizados',
				action: 'Obter módulos de campos customizados',
			},
			{
				name: 'Obter Tipos',
				value: 'getTypes',
				description: 'Obter tipos disponíveis para campos customizados',
				action: 'Obter tipos de campos customizados',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todos os campos customizados',
				action: 'Obter todos os campos customizados',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar um campo customizado',
				action: 'Atualizar campo customizado',
			},
		],
		default: 'getAll',
	},
];

export const campoCustomizadoFields: INodeProperties[] = [
	// ----------------------------------
	//  campoCustomizado: get / delete / update
	// ----------------------------------
	{
		displayName: 'ID do Campo',
		name: 'campoId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['campoCustomizado'],
				operation: ['get', 'delete', 'update'],
			},
		},
		description: 'ID do campo customizado',
	},

	// ----------------------------------
	//  campoCustomizado: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['campoCustomizado'],
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
				resource: ['campoCustomizado'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		description: 'Quantidade máxima de registros retornados (máx: 100)',
	},

	// ----------------------------------
	//  campoCustomizado: create
	// ----------------------------------
	{
		displayName: 'Dados do Campo',
		name: 'fieldData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		required: true,
		default: {},
		displayOptions: {
			show: {
				resource: ['campoCustomizado'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Nome',
				name: 'nome',
				type: 'string',
				default: '',
				description: 'Nome do campo customizado',
			},
			{
				displayName: 'ID do Módulo',
				name: 'idModulo',
				type: 'number',
				default: 0,
				description: 'ID do módulo vinculado',
			},
			{
				displayName: 'Tipo',
				name: 'tipo',
				type: 'string',
				default: '',
				description: 'Tipo do campo customizado',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Ativo', value: 1 },
					{ name: 'Inativo', value: 0 },
				],
				description: 'Situação do campo customizado',
			},
			{
				displayName: 'Obrigatório',
				name: 'obrigatorio',
				type: 'boolean',
				default: false,
				description: 'Whether the custom field is required',
			},
			{
				displayName: 'Tamanho',
				name: 'tamanho',
				type: 'number',
				default: 0,
				description: 'Tamanho máximo do campo',
			},
			{
				displayName: 'Opções',
				name: 'opcoes',
				type: 'string',
				default: '',
				description: 'Opções do campo (separadas por vírgula, para campos do tipo lista)',
			},
		],
	},

	// ----------------------------------
	//  campoCustomizado: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['campoCustomizado'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Nome',
				name: 'nome',
				type: 'string',
				default: '',
				description: 'Nome do campo customizado',
			},
			{
				displayName: 'ID do Módulo',
				name: 'idModulo',
				type: 'number',
				default: 0,
				description: 'ID do módulo vinculado',
			},
			{
				displayName: 'Tipo',
				name: 'tipo',
				type: 'string',
				default: '',
				description: 'Tipo do campo customizado',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Ativo', value: 1 },
					{ name: 'Inativo', value: 0 },
				],
				description: 'Situação do campo customizado',
			},
			{
				displayName: 'Obrigatório',
				name: 'obrigatorio',
				type: 'boolean',
				default: false,
				description: 'Whether the custom field is required',
			},
			{
				displayName: 'Tamanho',
				name: 'tamanho',
				type: 'number',
				default: 0,
				description: 'Tamanho máximo do campo',
			},
			{
				displayName: 'Opções',
				name: 'opcoes',
				type: 'string',
				default: '',
				description: 'Opções do campo (separadas por vírgula, para campos do tipo lista)',
			},
		],
	},
];
