import type { INodeProperties } from 'n8n-workflow';

export const categoriaProdutoOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['categoriaProduto'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar uma categoria de produto',
				action: 'Criar categoria de produto',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir uma categoria de produto',
				action: 'Excluir categoria de produto',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter uma categoria de produto pelo ID',
				action: 'Obter categoria de produto',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todas as categorias de produtos',
				action: 'Obter todas as categorias de produtos',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar uma categoria de produto',
				action: 'Atualizar categoria de produto',
			},
		],
		default: 'getAll',
	},
];

export const categoriaProdutoFields: INodeProperties[] = [
	// ----------------------------------
	//  categoriaProduto: get / delete / update
	// ----------------------------------
	{
		displayName: 'ID da Categoria',
		name: 'categoriaId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['categoriaProduto'],
				operation: ['get', 'delete', 'update'],
			},
		},
		description: 'ID da categoria de produto',
	},

	// ----------------------------------
	//  categoriaProduto: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['categoriaProduto'],
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
				resource: ['categoriaProduto'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		description: 'Quantidade máxima de registros retornados (máx: 100)',
	},

	// ----------------------------------
	//  categoriaProduto: create
	// ----------------------------------
	{
		displayName: 'Descrição',
		name: 'descricao',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['categoriaProduto'],
				operation: ['create'],
			},
		},
		description: 'Descrição da categoria de produto',
	},
	{
		displayName: 'Campos Adicionais',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['categoriaProduto'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'ID da Categoria Pai',
				name: 'idCategoriaPai',
				type: 'number',
				default: 0,
				description: 'ID da categoria pai para criação de subcategorias',
			},
		],
	},

	// ----------------------------------
	//  categoriaProduto: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['categoriaProduto'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição da categoria de produto',
			},
			{
				displayName: 'ID da Categoria Pai',
				name: 'idCategoriaPai',
				type: 'number',
				default: 0,
				description: 'ID da categoria pai para criação de subcategorias',
			},
		],
	},
];
