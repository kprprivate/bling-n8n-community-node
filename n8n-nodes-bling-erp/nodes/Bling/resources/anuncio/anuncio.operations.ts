import type { INodeProperties } from 'n8n-workflow';

export const anuncioOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['anuncio'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar um anúncio',
				action: 'Criar anúncio',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir um anúncio',
				action: 'Excluir anúncio',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter um anúncio pelo ID',
				action: 'Obter anúncio',
			},
			{
				name: 'Obter Categoria',
				value: 'getCategory',
				description: 'Obter uma categoria de anúncios pelo ID',
				action: 'Obter categoria de anúncio',
			},
			{
				name: 'Obter Categorias',
				value: 'getCategories',
				description: 'Obter categorias de anúncios',
				action: 'Obter categorias de anúncios',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todos os anúncios',
				action: 'Obter todos os anúncios',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar um anúncio',
				action: 'Atualizar anúncio',
			},
		],
		default: 'getAll',
	},
];

export const anuncioFields: INodeProperties[] = [
	// ----------------------------------
	//        anuncio: get / delete / update
	// ----------------------------------
	{
		displayName: 'ID do Anúncio',
		name: 'anuncioId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['anuncio'],
				operation: ['get', 'delete', 'update'],
			},
		},
		description: 'ID do anúncio',
	},

	// ----------------------------------
	//        anuncio: getCategory
	// ----------------------------------
	{
		displayName: 'ID da Categoria',
		name: 'categoryId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['anuncio'],
				operation: ['getCategory'],
			},
		},
		description: 'ID da categoria do anúncio',
	},

	// ----------------------------------
	//        anuncio: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['anuncio'],
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
				resource: ['anuncio'],
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
				resource: ['anuncio'],
				operation: ['getAll', 'getCategories'],
			},
		},
		options: [
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Publicado', value: 1 },
					{ name: 'Rascunho', value: 2 },
					{ name: 'Com Problema', value: 3 },
					{ name: 'Pausado', value: 4 },
				],
				description: 'Situação do anúncio',
			},
			{
				displayName: 'ID do Produto',
				name: 'idProduto',
				type: 'number',
				default: 0,
				description: 'ID do produto vinculado ao anúncio',
			},
			{
				displayName: 'Tipo de Integração',
				name: 'tipoIntegracao',
				type: 'string',
				default: '',
				description: 'Tipo de integração do anúncio',
			},
			{
				displayName: 'ID da Loja',
				name: 'idLoja',
				type: 'number',
				default: 0,
				description: 'ID da loja vinculada ao anúncio',
			},
		],
	},

	// ----------------------------------
	//        anuncio: create
	// ----------------------------------
	{
		displayName: 'Dados do Anúncio',
		name: 'anuncioData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		required: true,
		default: {},
		displayOptions: {
			show: {
				resource: ['anuncio'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'ID do Produto',
				name: 'idProduto',
				type: 'number',
				default: 0,
				description: 'ID do produto a ser anunciado',
			},
			{
				displayName: 'ID da Loja',
				name: 'idLoja',
				type: 'number',
				default: 0,
				description: 'ID da loja do anúncio',
			},
			{
				displayName: 'Preço',
				name: 'preco',
				type: 'number',
				default: 0,
				description: 'Preço do anúncio',
			},
			{
				displayName: 'ID da Categoria',
				name: 'idCategoria',
				type: 'number',
				default: 0,
				description: 'ID da categoria do anúncio',
			},
			{
				displayName: 'Título',
				name: 'titulo',
				type: 'string',
				default: '',
				description: 'Título do anúncio',
			},
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição do anúncio',
			},
			{
				displayName: 'Código',
				name: 'codigo',
				type: 'string',
				default: '',
				description: 'Código do anúncio',
			},
			{
				displayName: 'Tipo do Anúncio',
				name: 'tipoAnuncio',
				type: 'string',
				default: '',
				description: 'Tipo do anúncio',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Publicado', value: 1 },
					{ name: 'Rascunho', value: 2 },
					{ name: 'Com Problema', value: 3 },
					{ name: 'Pausado', value: 4 },
				],
				description: 'Situação do anúncio',
			},
		],
	},

	// ----------------------------------
	//        anuncio: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['anuncio'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Preço',
				name: 'preco',
				type: 'number',
				default: 0,
				description: 'Preço do anúncio',
			},
			{
				displayName: 'ID da Categoria',
				name: 'idCategoria',
				type: 'number',
				default: 0,
				description: 'ID da categoria do anúncio',
			},
			{
				displayName: 'Título',
				name: 'titulo',
				type: 'string',
				default: '',
				description: 'Título do anúncio',
			},
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição do anúncio',
			},
			{
				displayName: 'Código',
				name: 'codigo',
				type: 'string',
				default: '',
				description: 'Código do anúncio',
			},
			{
				displayName: 'Tipo do Anúncio',
				name: 'tipoAnuncio',
				type: 'string',
				default: '',
				description: 'Tipo do anúncio',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Publicado', value: 1 },
					{ name: 'Rascunho', value: 2 },
					{ name: 'Com Problema', value: 3 },
					{ name: 'Pausado', value: 4 },
				],
				description: 'Situação do anúncio',
			},
		],
	},
];
