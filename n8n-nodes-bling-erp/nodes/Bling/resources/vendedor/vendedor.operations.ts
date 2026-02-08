import type { INodeProperties } from 'n8n-workflow';

export const vendedorOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['vendedor'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar um vendedor',
				action: 'Criar vendedor',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir um vendedor',
				action: 'Excluir vendedor',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter um vendedor pelo ID',
				action: 'Obter vendedor',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todos os vendedores',
				action: 'Obter todos os vendedores',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar um vendedor',
				action: 'Atualizar vendedor',
			},
		],
		default: 'getAll',
	},
];

export const vendedorFields: INodeProperties[] = [
	// ----------------------------------
	//        vendedor: get / delete / update
	// ----------------------------------
	{
		displayName: 'ID do Vendedor',
		name: 'vendedorId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['vendedor'],
				operation: ['get', 'delete', 'update'],
			},
		},
		description: 'ID do vendedor',
	},

	// ----------------------------------
	//        vendedor: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['vendedor'],
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
				resource: ['vendedor'],
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
				resource: ['vendedor'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'options',
				default: '',
				options: [
					{ name: 'Ativo', value: 'A' },
					{ name: 'Inativo', value: 'I' },
				],
				description: 'Situação do vendedor',
			},
			{
				displayName: 'Nome do Contato',
				name: 'nomeContato',
				type: 'string',
				default: '',
				description: 'Nome do contato vinculado ao vendedor',
			},
			{
				displayName: 'ID do Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'ID do contato vinculado ao vendedor',
			},
		],
	},

	// ----------------------------------
	//        vendedor: create
	// ----------------------------------
	{
		displayName: 'Dados do Vendedor',
		name: 'vendedorData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		required: true,
		default: {},
		displayOptions: {
			show: {
				resource: ['vendedor'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'ID do Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'ID do contato vinculado ao vendedor',
			},
			{
				displayName: 'Desconto Limite (%)',
				name: 'descontoLimite',
				type: 'number',
				default: 0,
				description: 'Limite de desconto do vendedor (em porcentagem)',
			},
			{
				displayName: 'LPI Habilitado',
				name: 'lpiHabilitado',
				type: 'boolean',
				default: false,
				description: 'Whether LPI (Lista de Preço Independente) is enabled',
			},
			{
				displayName: 'Comissões',
				name: 'comissoes',
				type: 'fixedCollection',
				placeholder: 'Adicionar Comissão',
				default: {},
				typeOptions: {
					multipleValues: true,
				},
				options: [
					{
						name: 'comissao',
						displayName: 'Comissão',
						values: [
							{
								displayName: 'Desconto Máximo (%)',
								name: 'descontoMaximo',
								type: 'number',
								default: 0,
								description: 'Desconto máximo permitido',
							},
							{
								displayName: 'Alíquota (%)',
								name: 'aliquota',
								type: 'number',
								default: 0,
								description: 'Percentual de comissão',
							},
						],
					},
				],
				description: 'Comissões do vendedor',
			},
		],
	},

	// ----------------------------------
	//        vendedor: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['vendedor'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'ID do Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'ID do contato vinculado ao vendedor',
			},
			{
				displayName: 'Desconto Limite (%)',
				name: 'descontoLimite',
				type: 'number',
				default: 0,
				description: 'Limite de desconto do vendedor (em porcentagem)',
			},
			{
				displayName: 'LPI Habilitado',
				name: 'lpiHabilitado',
				type: 'boolean',
				default: false,
				description: 'Whether LPI (Lista de Preço Independente) is enabled',
			},
			{
				displayName: 'Comissões',
				name: 'comissoes',
				type: 'fixedCollection',
				placeholder: 'Adicionar Comissão',
				default: {},
				typeOptions: {
					multipleValues: true,
				},
				options: [
					{
						name: 'comissao',
						displayName: 'Comissão',
						values: [
							{
								displayName: 'Indice da Comissao',
								name: 'indice',
								type: 'number',
								default: 0,
								description: 'Indice (posicao) da comissao a ser atualizada (comeca em 0)',
							},
							{
								displayName: 'Desconto Máximo (%)',
								name: 'descontoMaximo',
								type: 'number',
								default: 0,
								description: 'Desconto máximo permitido',
							},
							{
								displayName: 'Alíquota (%)',
								name: 'aliquota',
								type: 'number',
								default: 0,
								description: 'Percentual de comissão',
							},
						],
					},
				],
				description: 'Comissões do vendedor',
			},
		],
	},
];
