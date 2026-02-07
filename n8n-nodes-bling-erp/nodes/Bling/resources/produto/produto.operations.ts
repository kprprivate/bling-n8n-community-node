import type { INodeProperties } from 'n8n-workflow';

export const produtoOperations: INodeProperties[] = [
	{
		displayName: 'Operacao',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['produto'],
			},
		},
		options: [
			{
				name: 'Alterar Situacao',
				value: 'changeSituation',
				description: 'Altera a situacao de um produto',
				action: 'Alterar situacao de um produto',
			},
			{
				name: 'Criar',
				value: 'create',
				description: 'Cria um novo produto',
				action: 'Criar um produto',
			},
			{
				name: 'Deletar',
				value: 'delete',
				description: 'Deleta um produto',
				action: 'Deletar um produto',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obtem um produto pelo ID',
				action: 'Obter um produto',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obtem todos os produtos',
				action: 'Obter todos os produtos',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualiza um produto',
				action: 'Atualizar um produto',
			},
		],
		default: 'getAll',
	},
];

export const produtoFields: INodeProperties[] = [
	// ----------------------------------
	//         produto: produtoId
	// ----------------------------------
	{
		displayName: 'ID do Produto',
		name: 'produtoId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['produto'],
				operation: ['get', 'update', 'delete', 'changeSituation'],
			},
		},
		description: 'ID do produto',
	},

	// ----------------------------------
	//         produto: create - required fields
	// ----------------------------------
	{
		displayName: 'Nome',
		name: 'nome',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['produto'],
				operation: ['create'],
			},
		},
		description: 'Nome do produto',
	},
	{
		displayName: 'Tipo',
		name: 'tipo',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['produto'],
				operation: ['create'],
			},
		},
		options: [
			{ name: 'Servico', value: 'S' },
			{ name: 'Produto', value: 'P' },
			{ name: 'Nenhum', value: 'N' },
		],
		default: 'P',
		description: 'Tipo do produto',
	},
	{
		displayName: 'Formato',
		name: 'formato',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['produto'],
				operation: ['create'],
			},
		},
		options: [
			{ name: 'Simples', value: 'S' },
			{ name: 'Com variacoes', value: 'V' },
			{ name: 'Com composicao', value: 'E' },
		],
		default: 'S',
		description: 'Formato do produto',
	},

	// ----------------------------------
	//         produto: create - additionalFields
	// ----------------------------------
	{
		displayName: 'Campos Adicionais',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['produto'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Codigo (SKU)',
				name: 'codigo',
				type: 'string',
				default: '',
				description: 'Codigo (SKU) do produto',
			},
			{
				displayName: 'Preco',
				name: 'preco',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				description: 'Preco de venda do produto',
			},
			{
				displayName: 'Preco de Custo',
				name: 'precoCusto',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				description: 'Preco de custo do produto',
			},
			{
				displayName: 'Peso Liquido (kg)',
				name: 'pesoLiquido',
				type: 'number',
				typeOptions: { numberPrecision: 3 },
				default: 0,
				description: 'Peso liquido do produto em kg',
			},
			{
				displayName: 'Peso Bruto (kg)',
				name: 'pesoBruto',
				type: 'number',
				typeOptions: { numberPrecision: 3 },
				default: 0,
				description: 'Peso bruto do produto em kg',
			},
			{
				displayName: 'Unidade',
				name: 'unidade',
				type: 'string',
				default: 'UN',
				description: 'Unidade de medida do produto',
			},
			{
				displayName: 'GTIN/EAN',
				name: 'gtin',
				type: 'string',
				default: '',
				description: 'Codigo GTIN/EAN do produto',
			},
			{
				displayName: 'GTIN/EAN Tributario',
				name: 'gtinEmbalagem',
				type: 'string',
				default: '',
				description: 'Codigo GTIN/EAN da embalagem tributaria',
			},
			{
				displayName: 'Tipo de Producao',
				name: 'tipoProducao',
				type: 'options',
				options: [
					{ name: 'Propria', value: 'P' },
					{ name: 'Terceiros', value: 'T' },
				],
				default: 'P',
				description: 'Tipo de producao do produto',
			},
			{
				displayName: 'Condicao',
				name: 'condicao',
				type: 'options',
				options: [
					{ name: 'Nao especificado', value: 0 },
					{ name: 'Novo', value: 1 },
					{ name: 'Usado', value: 2 },
					{ name: 'Recondicionado', value: 3 },
				],
				default: 0,
				description: 'Condicao do produto',
			},
			{
				displayName: 'Volumes',
				name: 'volumes',
				type: 'number',
				default: 1,
				description: 'Numero de volumes do produto',
			},
			{
				displayName: 'Itens por Caixa',
				name: 'itensPorCaixa',
				type: 'number',
				default: 0,
				description: 'Numero de itens por caixa',
			},
			{
				displayName: 'Descricao Curta',
				name: 'descricaoCurta',
				type: 'string',
				default: '',
				description: 'Descricao curta do produto',
			},
			{
				displayName: 'Descricao Complementar',
				name: 'descricaoComplementar',
				type: 'string',
				default: '',
				description: 'Descricao complementar do produto',
			},
			{
				displayName: 'Observacoes',
				name: 'observacoes',
				type: 'string',
				default: '',
				description: 'Observacoes do produto',
			},
			{
				displayName: 'ID Categoria',
				name: 'categoria',
				type: 'number',
				default: 0,
				description: 'ID da categoria do produto',
			},
			{
				displayName: 'Marca',
				name: 'marca',
				type: 'string',
				default: '',
				description: 'Marca do produto',
			},
			{
				displayName: 'NCM',
				name: 'ncm',
				type: 'string',
				default: '',
				description: 'Codigo NCM do produto',
			},
			{
				displayName: 'CEST',
				name: 'cest',
				type: 'string',
				default: '',
				description: 'Codigo CEST do produto',
			},
			{
				displayName: 'Largura (cm)',
				name: 'largura',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				description: 'Largura do produto em centimetros',
			},
			{
				displayName: 'Altura (cm)',
				name: 'altura',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				description: 'Altura do produto em centimetros',
			},
			{
				displayName: 'Profundidade (cm)',
				name: 'profundidade',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				description: 'Profundidade do produto em centimetros',
			},
			{
				displayName: 'Estoque',
				name: 'estoque',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Adicionar Estoque',
				options: [
					{
						displayName: 'Dados do Estoque',
						name: 'estoqueData',
						values: [
							{
								displayName: 'Minimo',
								name: 'minimo',
								type: 'number',
								typeOptions: { numberPrecision: 2 },
								default: 0,
								description: 'Estoque minimo do produto',
							},
							{
								displayName: 'Maximo',
								name: 'maximo',
								type: 'number',
								typeOptions: { numberPrecision: 2 },
								default: 0,
								description: 'Estoque maximo do produto',
							},
							{
								displayName: 'Crossdocking',
								name: 'crossdocking',
								type: 'number',
								default: 0,
								description: 'Dias de crossdocking',
							},
							{
								displayName: 'Localizacao',
								name: 'localizacao',
								type: 'string',
								default: '',
								description: 'Localizacao no deposito',
							},
						],
					},
				],
				description: 'Informacoes de estoque do produto',
			},
			{
				displayName: 'Tributacao',
				name: 'tributacao',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Adicionar Tributacao',
				options: [
					{
						displayName: 'Dados de Tributacao',
						name: 'tributacaoData',
						values: [
							{
								displayName: 'Origem',
								name: 'origem',
								type: 'options',
								options: [
									{ name: '0 - Nacional', value: 0 },
									{ name: '1 - Estrangeira (importacao direta)', value: 1 },
									{ name: '2 - Estrangeira (adquirida no mercado interno)', value: 2 },
								],
								default: 0,
								description: 'Origem do produto',
							},
							{
								displayName: 'Valor IPI Fixo',
								name: 'valorIPIFixo',
								type: 'number',
								typeOptions: { numberPrecision: 2 },
								default: 0,
								description: 'Valor fixo de IPI',
							},
							{
								displayName: 'Classe de Enquadramento IPI',
								name: 'classeEnquadramentoIpi',
								type: 'string',
								default: '',
								description: 'Classe de enquadramento do IPI',
							},
						],
					},
				],
				description: 'Informacoes de tributacao do produto',
			},
		],
	},

	// ----------------------------------
	//         produto: update - updateFields
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['produto'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Nome',
				name: 'nome',
				type: 'string',
				default: '',
				description: 'Nome do produto',
			},
			{
				displayName: 'Tipo',
				name: 'tipo',
				type: 'options',
				options: [
					{ name: 'Servico', value: 'S' },
					{ name: 'Produto', value: 'P' },
					{ name: 'Nenhum', value: 'N' },
				],
				default: 'P',
				description: 'Tipo do produto',
			},
			{
				displayName: 'Formato',
				name: 'formato',
				type: 'options',
				options: [
					{ name: 'Simples', value: 'S' },
					{ name: 'Com variacoes', value: 'V' },
					{ name: 'Com composicao', value: 'E' },
				],
				default: 'S',
				description: 'Formato do produto',
			},
			{
				displayName: 'Codigo (SKU)',
				name: 'codigo',
				type: 'string',
				default: '',
				description: 'Codigo (SKU) do produto',
			},
			{
				displayName: 'Preco',
				name: 'preco',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				description: 'Preco de venda do produto',
			},
			{
				displayName: 'Preco de Custo',
				name: 'precoCusto',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				description: 'Preco de custo do produto',
			},
			{
				displayName: 'Peso Liquido (kg)',
				name: 'pesoLiquido',
				type: 'number',
				typeOptions: { numberPrecision: 3 },
				default: 0,
				description: 'Peso liquido do produto em kg',
			},
			{
				displayName: 'Peso Bruto (kg)',
				name: 'pesoBruto',
				type: 'number',
				typeOptions: { numberPrecision: 3 },
				default: 0,
				description: 'Peso bruto do produto em kg',
			},
			{
				displayName: 'Unidade',
				name: 'unidade',
				type: 'string',
				default: 'UN',
				description: 'Unidade de medida do produto',
			},
			{
				displayName: 'GTIN/EAN',
				name: 'gtin',
				type: 'string',
				default: '',
				description: 'Codigo GTIN/EAN do produto',
			},
			{
				displayName: 'Condicao',
				name: 'condicao',
				type: 'options',
				options: [
					{ name: 'Nao especificado', value: 0 },
					{ name: 'Novo', value: 1 },
					{ name: 'Usado', value: 2 },
					{ name: 'Recondicionado', value: 3 },
				],
				default: 0,
				description: 'Condicao do produto',
			},
			{
				displayName: 'Descricao Curta',
				name: 'descricaoCurta',
				type: 'string',
				default: '',
				description: 'Descricao curta do produto',
			},
			{
				displayName: 'Descricao Complementar',
				name: 'descricaoComplementar',
				type: 'string',
				default: '',
				description: 'Descricao complementar do produto',
			},
			{
				displayName: 'Observacoes',
				name: 'observacoes',
				type: 'string',
				default: '',
				description: 'Observacoes do produto',
			},
			{
				displayName: 'ID Categoria',
				name: 'categoria',
				type: 'number',
				default: 0,
				description: 'ID da categoria do produto',
			},
			{
				displayName: 'Marca',
				name: 'marca',
				type: 'string',
				default: '',
				description: 'Marca do produto',
			},
			{
				displayName: 'NCM',
				name: 'ncm',
				type: 'string',
				default: '',
				description: 'Codigo NCM do produto',
			},
			{
				displayName: 'Estoque',
				name: 'estoque',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Adicionar Estoque',
				options: [
					{
						displayName: 'Dados do Estoque',
						name: 'estoqueData',
						values: [
							{
								displayName: 'Minimo',
								name: 'minimo',
								type: 'number',
								typeOptions: { numberPrecision: 2 },
								default: 0,
							},
							{
								displayName: 'Maximo',
								name: 'maximo',
								type: 'number',
								typeOptions: { numberPrecision: 2 },
								default: 0,
							},
							{
								displayName: 'Crossdocking',
								name: 'crossdocking',
								type: 'number',
								default: 0,
							},
							{
								displayName: 'Localizacao',
								name: 'localizacao',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'Tributacao',
				name: 'tributacao',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Adicionar Tributacao',
				options: [
					{
						displayName: 'Dados de Tributacao',
						name: 'tributacaoData',
						values: [
							{
								displayName: 'Origem',
								name: 'origem',
								type: 'options',
								options: [
									{ name: '0 - Nacional', value: 0 },
									{ name: '1 - Estrangeira (importacao direta)', value: 1 },
									{ name: '2 - Estrangeira (adquirida no mercado interno)', value: 2 },
								],
								default: 0,
							},
							{
								displayName: 'Valor IPI Fixo',
								name: 'valorIPIFixo',
								type: 'number',
								typeOptions: { numberPrecision: 2 },
								default: 0,
							},
						],
					},
				],
			},
		],
	},

	// ----------------------------------
	//         produto: getAll - returnAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['produto'],
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
				resource: ['produto'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		description: 'Max number of results to return',
	},

	// ----------------------------------
	//         produto: getAll - filters
	// ----------------------------------
	{
		displayName: 'Filtros',
		name: 'filters',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['produto'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Pesquisa',
				name: 'pesquisa',
				type: 'string',
				default: '',
				description: 'Pesquisa por nome, codigo ou referencia do produto',
			},
			{
				displayName: 'Tipo',
				name: 'tipo',
				type: 'options',
				options: [
					{ name: 'Todos', value: '' },
					{ name: 'Servico', value: 'S' },
					{ name: 'Produto', value: 'P' },
					{ name: 'Nenhum', value: 'N' },
				],
				default: '',
				description: 'Tipo do produto',
			},
			{
				displayName: 'Situacao',
				name: 'situacao',
				type: 'options',
				options: [
					{ name: 'Ativo', value: 'A' },
					{ name: 'Inativo', value: 'I' },
				],
				default: 'A',
				description: 'Situacao do produto',
			},
			{
				displayName: 'Criterio',
				name: 'criterio',
				type: 'options',
				options: [
					{ name: 'Todos', value: 0 },
					{ name: 'Produto com estoque positivo', value: 1 },
					{ name: 'Produto com estoque negativo', value: 2 },
					{ name: 'Produto com estoque zerado', value: 3 },
				],
				default: 0,
				description: 'Criterio de filtro de estoque',
			},
			{
				displayName: 'Data Inclusao Inicial',
				name: 'dataInclusaoInicial',
				type: 'string',
				default: '',
				description: 'Data de inclusao inicial (AAAA-MM-DD)',
			},
			{
				displayName: 'Data Inclusao Final',
				name: 'dataInclusaoFinal',
				type: 'string',
				default: '',
				description: 'Data de inclusao final (AAAA-MM-DD)',
			},
			{
				displayName: 'Data Alteracao Inicial',
				name: 'dataAlteracaoInicial',
				type: 'string',
				default: '',
				description: 'Data de alteracao inicial (AAAA-MM-DD)',
			},
			{
				displayName: 'Data Alteracao Final',
				name: 'dataAlteracaoFinal',
				type: 'string',
				default: '',
				description: 'Data de alteracao final (AAAA-MM-DD)',
			},
			{
				displayName: 'ID Categoria',
				name: 'idCategoria',
				type: 'number',
				default: 0,
				description: 'ID da categoria do produto',
			},
			{
				displayName: 'ID Loja',
				name: 'idLoja',
				type: 'number',
				default: 0,
				description: 'ID da loja do produto',
			},
			{
				displayName: 'Codigo',
				name: 'codigo',
				type: 'string',
				default: '',
				description: 'Codigo (SKU) do produto',
			},
			{
				displayName: 'ID Grupo Produto',
				name: 'idGrupoProduto',
				type: 'number',
				default: 0,
				description: 'ID do grupo de produto',
			},
		],
	},

	// ----------------------------------
	//         produto: changeSituation - situacao
	// ----------------------------------
	{
		displayName: 'Situacao',
		name: 'situacao',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['produto'],
				operation: ['changeSituation'],
			},
		},
		options: [
			{ name: 'Ativo', value: 'A' },
			{ name: 'Inativo', value: 'I' },
		],
		default: 'A',
		description: 'Nova situacao do produto',
	},
];
