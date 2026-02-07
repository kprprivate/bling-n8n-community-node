import type { INodeProperties } from 'n8n-workflow';

export const produtoLojaOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['produtoLoja'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Vincular o produto a uma loja',
				action: 'Vincular produto a uma loja',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar vínculo do produto com a loja',
				action: 'Atualizar vínculo produto-loja',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Remover vínculo do produto com a loja',
				action: 'Remover vínculo produto-loja',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter dados do vínculo do produto com a loja',
				action: 'Obter vínculo produto-loja',
			},
			{
				name: 'Listar Todos',
				value: 'getAll',
				description: 'Listar todos os vínculos do produto com lojas',
				action: 'Listar vínculos produto-loja',
			},
		],
		default: 'getAll',
	},
];

export const produtoLojaFields: INodeProperties[] = [
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
				resource: ['produtoLoja'],
				operation: ['getAll', 'get', 'create', 'update', 'delete'],
			},
		},
	},

	// ----------------------------------
	//        idLoja (get, update, delete)
	// ----------------------------------
	{
		displayName: 'ID da Loja',
		name: 'idLoja',
		type: 'number',
		required: true,
		default: 0,
		description: 'ID da loja vinculada ao produto',
		displayOptions: {
			show: {
				resource: ['produtoLoja'],
				operation: ['get', 'update', 'delete'],
			},
		},
	},

	// ----------------------------------
	//        storeData (create)
	// ----------------------------------
	{
		displayName: 'Dados da Loja',
		name: 'storeData',
		type: 'collection',
		placeholder: 'Adicionar campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['produtoLoja'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'ID da Loja',
				name: 'idLoja',
				type: 'number',
				default: 0,
				description: 'ID da loja integrada no Bling',
			},
			{
				displayName: 'Preço',
				name: 'preco',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Preço do produto na loja',
			},
			{
				displayName: 'Preço Promocional',
				name: 'precoPromocional',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Preço promocional do produto na loja',
			},
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição do produto na loja',
			},
			{
				displayName: 'Descrição Curta',
				name: 'descricaoCurta',
				type: 'string',
				default: '',
				description: 'Descrição curta do produto na loja',
			},
			{
				displayName: 'Código na Loja',
				name: 'codigoLoja',
				type: 'string',
				default: '',
				description: 'Código do produto na loja integrada',
			},
			{
				displayName: 'ID da Categoria na Loja',
				name: 'idCategoria',
				type: 'number',
				default: 0,
				description: 'ID da categoria do produto na loja',
			},
			{
				displayName: 'Título SEO',
				name: 'tituloSeo',
				type: 'string',
				default: '',
				description: 'Título SEO do produto na loja',
			},
			{
				displayName: 'Meta Tags SEO',
				name: 'metaTagsSeo',
				type: 'string',
				default: '',
				description: 'Meta tags SEO do produto na loja',
			},
			{
				displayName: 'Slug/URL',
				name: 'slug',
				type: 'string',
				default: '',
				description: 'Slug (URL amigável) do produto na loja',
			},
			{
				displayName: 'Marca',
				name: 'marca',
				type: 'string',
				default: '',
				description: 'Marca do produto na loja',
			},
			{
				displayName: 'Estoque',
				name: 'estoque',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Quantidade em estoque na loja',
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
				resource: ['produtoLoja'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Preço',
				name: 'preco',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Preço do produto na loja',
			},
			{
				displayName: 'Preço Promocional',
				name: 'precoPromocional',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Preço promocional do produto na loja',
			},
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição do produto na loja',
			},
			{
				displayName: 'Descrição Curta',
				name: 'descricaoCurta',
				type: 'string',
				default: '',
				description: 'Descrição curta do produto na loja',
			},
			{
				displayName: 'Código na Loja',
				name: 'codigoLoja',
				type: 'string',
				default: '',
				description: 'Código do produto na loja integrada',
			},
			{
				displayName: 'ID da Categoria na Loja',
				name: 'idCategoria',
				type: 'number',
				default: 0,
				description: 'ID da categoria do produto na loja',
			},
			{
				displayName: 'Título SEO',
				name: 'tituloSeo',
				type: 'string',
				default: '',
				description: 'Título SEO do produto na loja',
			},
			{
				displayName: 'Meta Tags SEO',
				name: 'metaTagsSeo',
				type: 'string',
				default: '',
				description: 'Meta tags SEO do produto na loja',
			},
			{
				displayName: 'Slug/URL',
				name: 'slug',
				type: 'string',
				default: '',
				description: 'Slug (URL amigável) do produto na loja',
			},
			{
				displayName: 'Marca',
				name: 'marca',
				type: 'string',
				default: '',
				description: 'Marca do produto na loja',
			},
			{
				displayName: 'Estoque',
				name: 'estoque',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Quantidade em estoque na loja',
			},
		],
	},
];
