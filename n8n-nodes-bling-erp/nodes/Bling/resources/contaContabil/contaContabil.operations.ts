import type { INodeProperties } from 'n8n-workflow';

export const contaContabilOperations: INodeProperties[] = [
	{
		displayName: 'Operacao',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contaContabil'],
			},
		},
		options: [
			{
				name: 'Obter',
				value: 'get',
				description: 'Obtem uma conta contabil pelo ID',
				action: 'Obter conta contabil',
			},
			{
				name: 'Obter Varios',
				value: 'getAll',
				description: 'Obtem todas as contas contabeis',
				action: 'Obter todas as contas contabeis',
			},
		],
		default: 'getAll',
	},
];

export const contaContabilFields: INodeProperties[] = [
	// ----------------------------------
	//         contaContabil: get
	// ----------------------------------
	{
		displayName: 'ID da Conta Contabil',
		name: 'contaContabilId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['contaContabil'],
				operation: ['get'],
			},
		},
		description: 'ID da conta contabil/financeira',
	},

	// ----------------------------------
	//         contaContabil: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['contaContabil'],
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
				resource: ['contaContabil'],
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
				resource: ['contaContabil'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Ocultar Invisiveis',
				name: 'ocultarInvisiveis',
				type: 'boolean',
				default: false,
				description: 'Whether to hide invisible financial accounts',
			},
			{
				displayName: 'Ocultar Tipo Conta Bancaria',
				name: 'ocultarTipoContaBancaria',
				type: 'boolean',
				default: false,
				description: 'Whether to hide financial accounts of bank account type',
			},
			{
				displayName: 'Situacoes',
				name: 'situacoes',
				type: 'multiOptions',
				default: [],
				options: [
					{ name: 'Ativo', value: 1 },
					{ name: 'Inativo', value: 2 },
					{ name: 'Pendente', value: 3 },
					{ name: 'Cancelada', value: 4 },
				],
				description: 'Situacao da conta financeira',
			},
			{
				displayName: 'Alias da Integracao',
				name: 'aliasIntegracao',
				type: 'string',
				default: '',
				description: 'Alias da integracao (ex: BlingPagamentos)',
			},
			{
				displayName: 'Ordenacao',
				name: 'ordenacao',
				type: 'options',
				default: 'descricao',
				options: [
					{ name: 'Descricao (A-Z)', value: 'descricao' },
					{ name: 'Descricao (Z-A)', value: '-descricao' },
				],
				description: 'Ordenacao dos resultados pelo campo descricao',
			},
		],
	},
];
