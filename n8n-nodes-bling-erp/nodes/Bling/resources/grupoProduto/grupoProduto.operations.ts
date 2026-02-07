import type { INodeProperties } from 'n8n-workflow';

export const grupoProdutoOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['grupoProduto'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar um novo grupo de produto',
				action: 'Criar grupo de produto',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter dados de um grupo de produto',
				action: 'Obter grupo de produto',
			},
			{
				name: 'Listar Todos',
				value: 'getAll',
				description: 'Listar todos os grupos de produto',
				action: 'Listar grupos de produto',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar um grupo de produto',
				action: 'Atualizar grupo de produto',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir um grupo de produto',
				action: 'Excluir grupo de produto',
			},
		],
		default: 'getAll',
	},
];

export const grupoProdutoFields: INodeProperties[] = [
	// ----------------------------------
	//        grupoId (get, update, delete)
	// ----------------------------------
	{
		displayName: 'ID do Grupo',
		name: 'grupoId',
		type: 'number',
		required: true,
		default: 0,
		description: 'ID do grupo de produto',
		displayOptions: {
			show: {
				resource: ['grupoProduto'],
				operation: ['get', 'update', 'delete'],
			},
		},
	},

	// ----------------------------------
	//        nome (create - required)
	// ----------------------------------
	{
		displayName: 'Nome',
		name: 'nome',
		type: 'string',
		required: true,
		default: '',
		description: 'Nome do grupo de produto',
		displayOptions: {
			show: {
				resource: ['grupoProduto'],
				operation: ['create'],
			},
		},
	},

	// ----------------------------------
	//        returnAll (getAll)
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether retornar todos os resultados ou limitar a quantidade',
		displayOptions: {
			show: {
				resource: ['grupoProduto'],
				operation: ['getAll'],
			},
		},
	},
	{
		displayName: 'Limite',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Quantidade máxima de resultados para retornar. Máximo: 100.',
		displayOptions: {
			show: {
				resource: ['grupoProduto'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
	},

	// ----------------------------------
	//        filters (getAll)
	// ----------------------------------
	{
		displayName: 'Filtros',
		name: 'filters',
		type: 'collection',
		placeholder: 'Adicionar filtro',
		default: {},
		displayOptions: {
			show: {
				resource: ['grupoProduto'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Nome',
				name: 'nome',
				type: 'string',
				default: '',
				description: 'Filtrar por nome do grupo',
			},
			{
				displayName: 'ID do Grupo Pai',
				name: 'idGrupoPai',
				type: 'number',
				default: 0,
				description: 'Filtrar por ID do grupo pai (subgrupos)',
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
				resource: ['grupoProduto'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Nome',
				name: 'nome',
				type: 'string',
				default: '',
				description: 'Nome do grupo de produto',
			},
			{
				displayName: 'ID do Grupo Pai',
				name: 'idGrupoPai',
				type: 'number',
				default: 0,
				description: 'ID do grupo pai para criar hierarquia de grupos',
			},
		],
	},
];
