import type { INodeProperties } from 'n8n-workflow';

export const caixaBancoOperations: INodeProperties[] = [
	{
		displayName: 'Operacao',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['caixaBanco'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Cria um lancamento de caixa/banco',
				action: 'Criar lancamento de caixa banco',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Exclui um lancamento de caixa/banco',
				action: 'Excluir lancamento de caixa banco',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obtem um lancamento de caixa/banco pelo ID',
				action: 'Obter lancamento de caixa banco',
			},
			{
				name: 'Obter Varios',
				value: 'getAll',
				description: 'Obtem todos os lancamentos de caixa/banco',
				action: 'Obter todos os lancamentos de caixa banco',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualiza um lancamento de caixa/banco',
				action: 'Atualizar lancamento de caixa banco',
			},
		],
		default: 'getAll',
	},
];

export const caixaBancoFields: INodeProperties[] = [
	// ----------------------------------
	//         caixaBanco: get, update, delete
	// ----------------------------------
	{
		displayName: 'ID do Lancamento',
		name: 'caixaBancoId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['caixaBanco'],
				operation: ['get', 'update', 'delete'],
			},
		},
		description: 'ID do lancamento de caixa/banco',
	},

	// ----------------------------------
	//         caixaBanco: create
	// ----------------------------------
	{
		displayName: 'Dados do Lancamento',
		name: 'caixaBancoData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['caixaBanco'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Data',
				name: 'data',
				type: 'string',
				default: '',
				description: 'Data do lancamento (ex: 2025-01-01)',
			},
			{
				displayName: 'Valor',
				name: 'valor',
				type: 'number',
				default: 0,
				description: 'Valor do lancamento',
			},
			{
				displayName: 'Debito/Credito',
				name: 'debCred',
				type: 'options',
				default: 'C',
				options: [
					{ name: 'Credito', value: 'C' },
					{ name: 'Debito', value: 'D' },
				],
				description: 'Tipo do lancamento: Credito ou Debito',
			},
			{
				displayName: 'Competencia',
				name: 'competencia',
				type: 'string',
				default: '',
				description: 'Data de competencia do lancamento (ex: 2025-01-01)',
			},
			{
				displayName: 'Observacoes',
				name: 'observacoes',
				type: 'string',
				default: '',
				description: 'Observacoes do lancamento',
			},
			{
				displayName: 'ID da Conta Contabil',
				name: 'idContaContabil',
				type: 'number',
				default: 0,
				description: 'ID da conta contabil/financeira vinculada ao lancamento',
			},
			{
				displayName: 'Transferencia',
				name: 'transferencia',
				type: 'string',
				default: '',
				description: 'Indica se o lancamento e uma transferencia',
			},
			{
				displayName: 'ID da Conta Financeira',
				name: 'idContaFinanceira',
				type: 'number',
				default: 0,
				description: 'ID da conta financeira vinculada',
			},
			{
				displayName: 'ID da Categoria',
				name: 'idCategoria',
				type: 'number',
				default: 0,
				description: 'ID da categoria do lancamento',
			},
			{
				displayName: 'ID do Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'ID do contato vinculado ao lancamento',
			},
		],
	},

	// ----------------------------------
	//         caixaBanco: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['caixaBanco'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Data',
				name: 'data',
				type: 'string',
				default: '',
				description: 'Data do lancamento (ex: 2025-01-01)',
			},
			{
				displayName: 'Valor',
				name: 'valor',
				type: 'number',
				default: 0,
				description: 'Valor do lancamento',
			},
			{
				displayName: 'Debito/Credito',
				name: 'debCred',
				type: 'options',
				default: 'C',
				options: [
					{ name: 'Credito', value: 'C' },
					{ name: 'Debito', value: 'D' },
				],
				description: 'Tipo do lancamento: Credito ou Debito',
			},
			{
				displayName: 'Competencia',
				name: 'competencia',
				type: 'string',
				default: '',
				description: 'Data de competencia do lancamento (ex: 2025-01-01)',
			},
			{
				displayName: 'Observacoes',
				name: 'observacoes',
				type: 'string',
				default: '',
				description: 'Observacoes do lancamento',
			},
			{
				displayName: 'ID da Conta Contabil',
				name: 'idContaContabil',
				type: 'number',
				default: 0,
				description: 'ID da conta contabil/financeira vinculada ao lancamento',
			},
			{
				displayName: 'Transferencia',
				name: 'transferencia',
				type: 'string',
				default: '',
				description: 'Indica se o lancamento e uma transferencia',
			},
			{
				displayName: 'ID da Conta Financeira',
				name: 'idContaFinanceira',
				type: 'number',
				default: 0,
				description: 'ID da conta financeira vinculada',
			},
			{
				displayName: 'ID da Categoria',
				name: 'idCategoria',
				type: 'number',
				default: 0,
				description: 'ID da categoria do lancamento',
			},
			{
				displayName: 'ID do Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'ID do contato vinculado ao lancamento',
			},
		],
	},

	// ----------------------------------
	//         caixaBanco: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['caixaBanco'],
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
				resource: ['caixaBanco'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filtros',
		name: 'filters',
		type: 'collection',
		placeholder: 'Adicionar Filtro',
		default: {},
		displayOptions: {
			show: {
				resource: ['caixaBanco'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Data Inicial',
				name: 'dataInicial',
				type: 'string',
				default: '',
				description: 'Data inicial de consulta de movimentacoes (ex: 01/12/2024)',
			},
			{
				displayName: 'Data Final',
				name: 'dataFinal',
				type: 'string',
				default: '',
				description: 'Data final de consulta de movimentacoes (ex: 31/12/2024)',
			},
			{
				displayName: 'IDs das Categorias',
				name: 'idsCategorias',
				type: 'string',
				default: '',
				description: 'IDs das categorias de movimentacoes separados por virgula',
			},
			{
				displayName: 'ID da Conta Financeira',
				name: 'idContaFinanceira',
				type: 'number',
				default: 0,
				description: 'ID da conta financeira',
			},
			{
				displayName: 'Pesquisa',
				name: 'pesquisa',
				type: 'string',
				default: '',
				description: 'Pesquisa por descricao do lancamento',
			},
			{
				displayName: 'Valor',
				name: 'valor',
				type: 'number',
				default: 0,
				description: 'Valor do lancamento',
			},
			{
				displayName: 'Situacao de Conciliacao',
				name: 'situacaoConciliacao',
				type: 'options',
				default: 3,
				options: [
					{ name: 'Registros Conciliados', value: 1 },
					{ name: 'Registros Nao Conciliados', value: 2 },
					{ name: 'Todos os Registros', value: 3 },
				],
				description: 'Situacao da conciliacao do lancamento',
			},
			{
				displayName: 'Situacao',
				name: 'situacao',
				type: 'options',
				default: 'R',
				options: [
					{ name: 'Registros', value: 'R' },
					{ name: 'Excluidos', value: 'E' },
				],
				description: 'Situacao do lancamento',
			},
		],
	},
];
