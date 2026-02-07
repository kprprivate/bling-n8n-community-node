import type { INodeProperties } from 'n8n-workflow';

export const categoriaReceitaDespesaOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['categoriaReceitaDespesa'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar uma categoria de receita/despesa',
				action: 'Criar categoria de receita/despesa',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir uma categoria de receita/despesa',
				action: 'Excluir categoria de receita/despesa',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter uma categoria de receita/despesa pelo ID',
				action: 'Obter categoria de receita/despesa',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todas as categorias de receitas/despesas',
				action: 'Obter todas as categorias de receitas/despesas',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar uma categoria de receita/despesa',
				action: 'Atualizar categoria de receita/despesa',
			},
		],
		default: 'getAll',
	},
];

export const categoriaReceitaDespesaFields: INodeProperties[] = [
	// ----------------------------------
	//  categoriaReceitaDespesa: get / delete / update
	// ----------------------------------
	{
		displayName: 'ID da Categoria',
		name: 'categoriaId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['categoriaReceitaDespesa'],
				operation: ['get', 'delete', 'update'],
			},
		},
		description: 'ID da categoria de receita/despesa',
	},

	// ----------------------------------
	//  categoriaReceitaDespesa: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['categoriaReceitaDespesa'],
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
				resource: ['categoriaReceitaDespesa'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		description: 'Quantidade máxima de registros retornados (máx: 100)',
	},

	// ----------------------------------
	//  categoriaReceitaDespesa: create
	// ----------------------------------
	{
		displayName: 'Descrição',
		name: 'descricao',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['categoriaReceitaDespesa'],
				operation: ['create'],
			},
		},
		description: 'Descrição da categoria de receita/despesa',
	},
	{
		displayName: 'Campos Adicionais',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['categoriaReceitaDespesa'],
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
			{
				displayName: 'Tipo',
				name: 'tipo',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Receita', value: 1 },
					{ name: 'Despesa', value: 2 },
					{ name: 'Receita e Despesa', value: 3 },
				],
				description: 'Tipo da categoria',
			},
		],
	},

	// ----------------------------------
	//  categoriaReceitaDespesa: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['categoriaReceitaDespesa'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição da categoria de receita/despesa',
			},
			{
				displayName: 'ID da Categoria Pai',
				name: 'idCategoriaPai',
				type: 'number',
				default: 0,
				description: 'ID da categoria pai para criação de subcategorias',
			},
			{
				displayName: 'Tipo',
				name: 'tipo',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Receita', value: 1 },
					{ name: 'Despesa', value: 2 },
					{ name: 'Receita e Despesa', value: 3 },
				],
				description: 'Tipo da categoria',
			},
		],
	},
];
