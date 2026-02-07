import type { INodeProperties } from 'n8n-workflow';

export const produtoEstruturaOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['produtoEstrutura'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar uma estrutura para o produto',
				action: 'Criar estrutura do produto',
			},
			{
				name: 'Criar Componente',
				value: 'createComponent',
				description: 'Criar um componente na estrutura do produto',
				action: 'Criar componente na estrutura',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar uma estrutura do produto',
				action: 'Atualizar estrutura do produto',
			},
			{
				name: 'Atualizar Componente',
				value: 'updateComponent',
				description: 'Atualizar um componente da estrutura do produto',
				action: 'Atualizar componente da estrutura',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir uma estrutura do produto',
				action: 'Excluir estrutura do produto',
			},
			{
				name: 'Excluir Componente',
				value: 'deleteComponent',
				description: 'Excluir um componente da estrutura do produto',
				action: 'Excluir componente da estrutura',
			},
			{
				name: 'Listar Componentes',
				value: 'getComponents',
				description: 'Listar componentes de uma estrutura do produto',
				action: 'Listar componentes da estrutura',
			},
			{
				name: 'Listar Todas',
				value: 'getAll',
				description: 'Listar todas as estruturas do produto',
				action: 'Listar estruturas do produto',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter uma estrutura do produto',
				action: 'Obter estrutura do produto',
			},
		],
		default: 'getAll',
	},
];

export const produtoEstruturaFields: INodeProperties[] = [
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
				resource: ['produtoEstrutura'],
				operation: [
					'getAll',
					'get',
					'create',
					'update',
					'delete',
					'getComponents',
					'createComponent',
					'updateComponent',
					'deleteComponent',
				],
			},
		},
	},

	// ----------------------------------
	//        idEstrutura (get, update, delete, getComponents, createComponent, updateComponent, deleteComponent)
	// ----------------------------------
	{
		displayName: 'ID da Estrutura',
		name: 'idEstrutura',
		type: 'number',
		required: true,
		default: 0,
		description: 'ID da estrutura do produto',
		displayOptions: {
			show: {
				resource: ['produtoEstrutura'],
				operation: [
					'get',
					'update',
					'delete',
					'getComponents',
					'createComponent',
					'updateComponent',
					'deleteComponent',
				],
			},
		},
	},

	// ----------------------------------
	//        idComponente (updateComponent, deleteComponent)
	// ----------------------------------
	{
		displayName: 'ID do Componente',
		name: 'idComponente',
		type: 'number',
		required: true,
		default: 0,
		description: 'ID do componente da estrutura',
		displayOptions: {
			show: {
				resource: ['produtoEstrutura'],
				operation: ['updateComponent', 'deleteComponent'],
			},
		},
	},

	// ----------------------------------
	//        structureData (create)
	// ----------------------------------
	{
		displayName: 'Dados da Estrutura',
		name: 'structureData',
		type: 'collection',
		placeholder: 'Adicionar campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['produtoEstrutura'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Tipo',
				name: 'tipo',
				type: 'options',
				options: [
					{ name: 'Fabricação', value: 'F' },
					{ name: 'Beneficiamento', value: 'B' },
				],
				default: 'F',
				description: 'Tipo da estrutura do produto',
			},
			{
				displayName: 'Quantidade Disponível',
				name: 'quantidadeDisponivel',
				type: 'number',
				typeOptions: {
					numberPrecision: 4,
				},
				default: 0,
				description: 'Quantidade disponível da estrutura',
			},
			{
				displayName: 'Lançar Estoque',
				name: 'lancarEstoque',
				type: 'options',
				options: [
					{ name: 'Sim', value: 'S' },
					{ name: 'Não', value: 'N' },
				],
				default: 'S',
				description: 'Se deve lançar estoque ao criar a estrutura',
			},
			{
				displayName: 'Componentes (JSON)',
				name: 'componentes',
				type: 'json',
				default: '[]',
				description: 'Lista de componentes da estrutura (JSON). Cada componente deve conter idProduto e quantidade.',
			},
		],
	},

	// ----------------------------------
	//        componentData (createComponent)
	// ----------------------------------
	{
		displayName: 'Dados do Componente',
		name: 'componentData',
		type: 'collection',
		placeholder: 'Adicionar campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['produtoEstrutura'],
				operation: ['createComponent'],
			},
		},
		options: [
			{
				displayName: 'ID do Produto Componente',
				name: 'idProduto',
				type: 'number',
				default: 0,
				description: 'ID do produto que será adicionado como componente',
			},
			{
				displayName: 'Quantidade',
				name: 'quantidade',
				type: 'number',
				typeOptions: {
					numberPrecision: 4,
				},
				default: 1,
				description: 'Quantidade do componente na estrutura',
			},
			{
				displayName: 'Custo',
				name: 'custo',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Custo do componente',
			},
		],
	},

	// ----------------------------------
	//        updateFields (update, updateComponent)
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['produtoEstrutura'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Tipo',
				name: 'tipo',
				type: 'options',
				options: [
					{ name: 'Fabricação', value: 'F' },
					{ name: 'Beneficiamento', value: 'B' },
				],
				default: 'F',
				description: 'Tipo da estrutura do produto',
			},
			{
				displayName: 'Quantidade Disponível',
				name: 'quantidadeDisponivel',
				type: 'number',
				typeOptions: {
					numberPrecision: 4,
				},
				default: 0,
				description: 'Quantidade disponível da estrutura',
			},
			{
				displayName: 'Lançar Estoque',
				name: 'lancarEstoque',
				type: 'options',
				options: [
					{ name: 'Sim', value: 'S' },
					{ name: 'Não', value: 'N' },
				],
				default: 'S',
				description: 'Se deve lançar estoque na estrutura',
			},
			{
				displayName: 'Componentes (JSON)',
				name: 'componentes',
				type: 'json',
				default: '[]',
				description: 'Lista de componentes da estrutura (JSON)',
			},
		],
	},
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['produtoEstrutura'],
				operation: ['updateComponent'],
			},
		},
		options: [
			{
				displayName: 'ID do Produto Componente',
				name: 'idProduto',
				type: 'number',
				default: 0,
				description: 'ID do produto componente',
			},
			{
				displayName: 'Quantidade',
				name: 'quantidade',
				type: 'number',
				typeOptions: {
					numberPrecision: 4,
				},
				default: 1,
				description: 'Quantidade do componente na estrutura',
			},
			{
				displayName: 'Custo',
				name: 'custo',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Custo do componente',
			},
		],
	},
];
