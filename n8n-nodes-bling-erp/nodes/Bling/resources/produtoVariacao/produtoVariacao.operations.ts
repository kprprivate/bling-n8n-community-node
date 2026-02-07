import type { INodeProperties } from 'n8n-workflow';

export const produtoVariacaoOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['produtoVariacao'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar uma variação para o produto',
				action: 'Criar variação do produto',
			},
			{
				name: 'Gerar Combinações',
				value: 'generateCombinations',
				description: 'Gerar combinações de variações para o produto',
				action: 'Gerar combinações de variações',
			},
			{
				name: 'Listar Atributos',
				value: 'getAttributes',
				description: 'Listar atributos de variação do produto',
				action: 'Listar atributos de variação',
			},
			{
				name: 'Listar Todas',
				value: 'getAll',
				description: 'Listar todas as variações do produto',
				action: 'Listar todas as variações do produto',
			},
		],
		default: 'getAll',
	},
];

export const produtoVariacaoFields: INodeProperties[] = [
	// ----------------------------------
	//        idProdutoPai (all operations)
	// ----------------------------------
	{
		displayName: 'ID do Produto Pai',
		name: 'idProdutoPai',
		type: 'number',
		required: true,
		default: 0,
		description: 'ID do produto pai das variações',
		displayOptions: {
			show: {
				resource: ['produtoVariacao'],
				operation: ['getAll', 'getAttributes', 'generateCombinations', 'create'],
			},
		},
	},

	// ----------------------------------
	//        combinationData (generateCombinations)
	// ----------------------------------
	{
		displayName: 'Dados da Combinação',
		name: 'combinationData',
		type: 'collection',
		placeholder: 'Adicionar campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['produtoVariacao'],
				operation: ['generateCombinations'],
			},
		},
		options: [
			{
				displayName: 'Produto ID',
				name: 'idProduto',
				type: 'number',
				default: 0,
				description: 'ID do produto para gerar combinações',
			},
			{
				displayName: 'Atributos',
				name: 'atributos',
				type: 'json',
				default: '[]',
				description: 'Lista de atributos para gerar combinações (JSON)',
			},
			{
				displayName: 'Gerar Código Automaticamente',
				name: 'gerarCodigoAutomaticamente',
				type: 'boolean',
				default: false,
				description: 'Whether to gerar código SKU automaticamente para cada combinação',
			},
		],
	},

	// ----------------------------------
	//        variationData (create)
	// ----------------------------------
	{
		displayName: 'Dados da Variação',
		name: 'variationData',
		type: 'collection',
		placeholder: 'Adicionar campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['produtoVariacao'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Nome',
				name: 'nome',
				type: 'string',
				default: '',
				description: 'Nome da variação',
			},
			{
				displayName: 'Código (SKU)',
				name: 'codigo',
				type: 'string',
				default: '',
				description: 'Código SKU da variação',
			},
			{
				displayName: 'Preço',
				name: 'preco',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Preço de venda da variação',
			},
			{
				displayName: 'GTIN/EAN',
				name: 'gtin',
				type: 'string',
				default: '',
				description: 'Código GTIN/EAN da variação',
			},
			{
				displayName: 'GTIN/EAN Tributário',
				name: 'gtinEmbalagem',
				type: 'string',
				default: '',
				description: 'Código GTIN/EAN tributário da variação',
			},
			{
				displayName: 'Estoque Mínimo',
				name: 'estoqueMinimo',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Quantidade mínima de estoque da variação',
			},
			{
				displayName: 'Estoque Máximo',
				name: 'estoqueMaximo',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Quantidade máxima de estoque da variação',
			},
			{
				displayName: 'Peso Líquido (kg)',
				name: 'pesoLiquido',
				type: 'number',
				typeOptions: {
					numberPrecision: 3,
				},
				default: 0,
				description: 'Peso líquido da variação em kg',
			},
			{
				displayName: 'Peso Bruto (kg)',
				name: 'pesoBruto',
				type: 'number',
				typeOptions: {
					numberPrecision: 3,
				},
				default: 0,
				description: 'Peso bruto da variação em kg',
			},
			{
				displayName: 'Largura (cm)',
				name: 'largura',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Largura da variação em cm',
			},
			{
				displayName: 'Altura (cm)',
				name: 'altura',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Altura da variação em cm',
			},
			{
				displayName: 'Profundidade (cm)',
				name: 'profundidade',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Profundidade da variação em cm',
			},
			{
				displayName: 'Unidade',
				name: 'unidade',
				type: 'string',
				default: '',
				description: 'Unidade de medida da variação (ex: UN, KG, CX)',
			},
			{
				displayName: 'Volumes',
				name: 'volumes',
				type: 'number',
				default: 1,
				description: 'Número de volumes da variação',
			},
			{
				displayName: 'Custo de Produção',
				name: 'precoCompra',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Preço de custo/compra da variação',
			},
			{
				displayName: 'Preço de Custo',
				name: 'precoCusto',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Preço de custo da variação',
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
				description: 'Situação da variação',
			},
			{
				displayName: 'Atributos (JSON)',
				name: 'variacao',
				type: 'json',
				default: '{}',
				description: 'Objeto com os atributos da variação (ex: {"nome": "Cor:Azul;Tamanho:P"})',
			},
		],
	},
];
