import type { INodeProperties } from 'n8n-workflow';

export const logisticaOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['logistica'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar uma logística',
				action: 'Criar logística',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir uma logística',
				action: 'Excluir logística',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter uma logística pelo ID',
				action: 'Obter logística',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todas as logísticas',
				action: 'Obter todas as logísticas',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar uma logística',
				action: 'Atualizar logística',
			},
		],
		default: 'getAll',
	},
];

export const logisticaFields: INodeProperties[] = [
	// ----------------------------------
	//        logistica: get / delete
	// ----------------------------------
	{
		displayName: 'ID da Logística',
		name: 'logisticaId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['logistica'],
				operation: ['get', 'delete', 'update'],
			},
		},
		description: 'ID da logística',
	},

	// ----------------------------------
	//        logistica: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['logistica'],
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
				resource: ['logistica'],
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
				resource: ['logistica'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Tipo de Integração',
				name: 'tipoIntegracao',
				type: 'options',
				default: '',
				options: [
					{ name: 'AmazonDBA', value: 'AmazonDBA' },
					{ name: 'B2WEntrega', value: 'B2WEntrega' },
					{ name: 'B2WO2O', value: 'B2WO2O' },
					{ name: 'Correios', value: 'Correios' },
					{ name: 'CorreiosLog', value: 'CorreiosLog' },
					{ name: 'CustomLogistic', value: 'CustomLogistic' },
					{ name: 'DafitiMilkrun', value: 'DafitiMilkrun' },
					{ name: 'Envvias', value: 'Envvias' },
					{ name: 'Frenet', value: 'Frenet' },
					{ name: 'FreteDescomplicado', value: 'FreteDescomplicado' },
					{ name: 'Intelipost', value: 'Intelipost' },
					{ name: 'Jadlog', value: 'Jadlog' },
					{ name: 'Jamef', value: 'Jamef' },
					{ name: 'Kangu', value: 'Kangu' },
					{ name: 'LogisticaAliExpress', value: 'LogisticaAliExpress' },
					{ name: 'LogisticaShopee', value: 'LogisticaShopee' },
					{ name: 'Loggi', value: 'Loggi' },
					{ name: 'MagaluEntregas', value: 'MagaluEntregas' },
					{ name: 'Mandae', value: 'Mandae' },
					{ name: 'MelhorEnvio', value: 'MelhorEnvio' },
					{ name: 'MercadoEnvios', value: 'MercadoEnvios' },
					{ name: 'OlistFulfillment', value: 'OlistFulfillment' },
					{ name: 'TotalExpress', value: 'TotalExpress' },
				],
				description: 'Tipo da integração logística',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'options',
				default: 'H',
				options: [
					{ name: 'Habilitado', value: 'H' },
					{ name: 'Desabilitado', value: 'D' },
				],
				description: 'Situação da logística',
			},
			{
				displayName: 'Logísticas Reversas',
				name: 'logisticasReversas',
				type: 'boolean',
				default: false,
				description: 'Whether to filter only logistics that have reverse service',
			},
		],
	},

	// ----------------------------------
	//        logistica: create
	// ----------------------------------
	{
		displayName: 'Dados da Logística',
		name: 'logisticaData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		required: true,
		default: {},
		displayOptions: {
			show: {
				resource: ['logistica'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição da logística',
			},
			{
				displayName: 'Nome do Serviço',
				name: 'nomeServico',
				type: 'string',
				default: '',
				description: 'Nome do serviço de logística',
			},
			{
				displayName: 'Código do Serviço',
				name: 'codigoServico',
				type: 'string',
				default: '',
				description: 'Código do serviço de logística',
			},
			{
				displayName: 'Tipo de Integração',
				name: 'tipoIntegracao',
				type: 'string',
				default: '',
				description: 'Tipo da integração logística',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'options',
				default: 'H',
				options: [
					{ name: 'Habilitado', value: 'H' },
					{ name: 'Desabilitado', value: 'D' },
				],
				description: 'Situação da logística',
			},
			{
				displayName: 'Frete por Conta',
				name: 'fretePorConta',
				type: 'options',
				default: 'R',
				options: [
					{ name: 'Remetente (CIF)', value: 'R' },
					{ name: 'Destinatário (FOB)', value: 'D' },
				],
				description: 'De quem é a responsabilidade do frete',
			},
		],
	},

	// ----------------------------------
	//        logistica: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['logistica'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição da logística',
			},
			{
				displayName: 'Nome do Serviço',
				name: 'nomeServico',
				type: 'string',
				default: '',
				description: 'Nome do serviço de logística',
			},
			{
				displayName: 'Código do Serviço',
				name: 'codigoServico',
				type: 'string',
				default: '',
				description: 'Código do serviço de logística',
			},
			{
				displayName: 'Tipo de Integração',
				name: 'tipoIntegracao',
				type: 'string',
				default: '',
				description: 'Tipo da integração logística',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'options',
				default: 'H',
				options: [
					{ name: 'Habilitado', value: 'H' },
					{ name: 'Desabilitado', value: 'D' },
				],
				description: 'Situação da logística',
			},
			{
				displayName: 'Frete por Conta',
				name: 'fretePorConta',
				type: 'options',
				default: 'R',
				options: [
					{ name: 'Remetente (CIF)', value: 'R' },
					{ name: 'Destinatário (FOB)', value: 'D' },
				],
				description: 'De quem é a responsabilidade do frete',
			},
		],
	},
];
