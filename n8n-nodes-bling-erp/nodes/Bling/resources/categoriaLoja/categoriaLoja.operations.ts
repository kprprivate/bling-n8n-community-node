import type { INodeProperties } from 'n8n-workflow';

export const categoriaLojaOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['categoriaLoja'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar uma categoria de loja',
				action: 'Criar categoria de loja',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir uma categoria de loja',
				action: 'Excluir categoria de loja',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter uma categoria de loja pelo ID',
				action: 'Obter categoria de loja',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todas as categorias de lojas',
				action: 'Obter todas as categorias de lojas',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar uma categoria de loja',
				action: 'Atualizar categoria de loja',
			},
		],
		default: 'getAll',
	},
];

export const categoriaLojaFields: INodeProperties[] = [
	// ----------------------------------
	//  categoriaLoja: get / delete / update
	// ----------------------------------
	{
		displayName: 'ID da Categoria',
		name: 'categoriaId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['categoriaLoja'],
				operation: ['get', 'delete', 'update'],
			},
		},
		description: 'ID da categoria de loja',
	},

	// ----------------------------------
	//  categoriaLoja: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['categoriaLoja'],
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
				resource: ['categoriaLoja'],
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
				resource: ['categoriaLoja'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'ID da Loja',
				name: 'idLoja',
				type: 'number',
				default: 0,
				description: 'Filtrar por loja',
			},
			{
				displayName: 'ID da Categoria de Produto',
				name: 'idCategoriaProduto',
				type: 'number',
				default: 0,
				description: 'Filtrar por categoria de produto',
			},
			{
				displayName: 'ID da Categoria de Produto Pai',
				name: 'idCategoriaProdutoPai',
				type: 'number',
				default: 0,
				description: 'Filtrar por categoria de produto pai',
			},
		],
	},

	// ----------------------------------
	//  categoriaLoja: create
	// ----------------------------------
	{
		displayName: 'Dados da Categoria',
		name: 'categoryData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		required: true,
		default: {},
		displayOptions: {
			show: {
				resource: ['categoriaLoja'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição da categoria de loja',
			},
			{
				displayName: 'ID da Loja',
				name: 'idLoja',
				type: 'number',
				default: 0,
				description: 'ID da loja vinculada',
			},
			{
				displayName: 'ID da Categoria Pai',
				name: 'idCategoriaPai',
				type: 'number',
				default: 0,
				description: 'ID da categoria pai para criação de subcategorias',
			},
			{
				displayName: 'Código',
				name: 'codigo',
				type: 'string',
				default: '',
				description: 'Código da categoria na loja',
			},
			{
				displayName: 'ID da Categoria de Produto',
				name: 'idCategoriaProduto',
				type: 'number',
				default: 0,
				description: 'ID da categoria de produto vinculada',
			},
		],
	},

	// ----------------------------------
	//  categoriaLoja: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['categoriaLoja'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição da categoria de loja',
			},
			{
				displayName: 'ID da Loja',
				name: 'idLoja',
				type: 'number',
				default: 0,
				description: 'ID da loja vinculada',
			},
			{
				displayName: 'ID da Categoria Pai',
				name: 'idCategoriaPai',
				type: 'number',
				default: 0,
				description: 'ID da categoria pai para criação de subcategorias',
			},
			{
				displayName: 'Código',
				name: 'codigo',
				type: 'string',
				default: '',
				description: 'Código da categoria na loja',
			},
			{
				displayName: 'ID da Categoria de Produto',
				name: 'idCategoriaProduto',
				type: 'number',
				default: 0,
				description: 'ID da categoria de produto vinculada',
			},
		],
	},
];
