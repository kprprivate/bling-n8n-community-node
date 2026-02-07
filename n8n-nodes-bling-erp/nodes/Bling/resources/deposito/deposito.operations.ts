import type { INodeProperties } from 'n8n-workflow';

export const depositoOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['deposito'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar um novo depósito',
				action: 'Criar depósito',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter dados de um depósito',
				action: 'Obter depósito',
			},
			{
				name: 'Listar Todos',
				value: 'getAll',
				description: 'Listar todos os depósitos',
				action: 'Listar depósitos',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar um depósito',
				action: 'Atualizar depósito',
			},
		],
		default: 'getAll',
	},
];

export const depositoFields: INodeProperties[] = [
	// ----------------------------------
	//        depositoId (get, update)
	// ----------------------------------
	{
		displayName: 'ID do Depósito',
		name: 'depositoId',
		type: 'number',
		required: true,
		default: 0,
		description: 'ID do depósito',
		displayOptions: {
			show: {
				resource: ['deposito'],
				operation: ['get', 'update'],
			},
		},
	},

	// ----------------------------------
	//        descricao (create - required)
	// ----------------------------------
	{
		displayName: 'Descrição',
		name: 'descricao',
		type: 'string',
		required: true,
		default: '',
		description: 'Descrição/nome do depósito',
		displayOptions: {
			show: {
				resource: ['deposito'],
				operation: ['create'],
			},
		},
	},

	// ----------------------------------
	//        additionalFields (create)
	// ----------------------------------
	{
		displayName: 'Campos Adicionais',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Adicionar campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['deposito'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'options',
				options: [
					{ name: 'Ativo', value: 'A' },
					{ name: 'Inativo', value: 'I' },
				],
				default: 'A',
				description: 'Situação do depósito',
			},
			{
				displayName: 'Padrão',
				name: 'padrao',
				type: 'boolean',
				default: false,
				description: 'Whether este depósito é o padrão',
			},
			{
				displayName: 'Desconsiderar Saldo',
				name: 'desconsiderarSaldo',
				type: 'boolean',
				default: false,
				description: 'Whether desconsiderar o saldo deste depósito no estoque geral',
			},
		],
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
				resource: ['deposito'],
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
				resource: ['deposito'],
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
				resource: ['deposito'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Filtrar por descrição do depósito',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'options',
				options: [
					{ name: 'Ativo', value: 'A' },
					{ name: 'Inativo', value: 'I' },
				],
				default: 'A',
				description: 'Filtrar por situação do depósito',
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
				resource: ['deposito'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição/nome do depósito',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'options',
				options: [
					{ name: 'Ativo', value: 'A' },
					{ name: 'Inativo', value: 'I' },
				],
				default: 'A',
				description: 'Situação do depósito',
			},
			{
				displayName: 'Padrão',
				name: 'padrao',
				type: 'boolean',
				default: false,
				description: 'Whether este depósito é o padrão',
			},
			{
				displayName: 'Desconsiderar Saldo',
				name: 'desconsiderarSaldo',
				type: 'boolean',
				default: false,
				description: 'Whether desconsiderar o saldo deste depósito no estoque geral',
			},
		],
	},
];
