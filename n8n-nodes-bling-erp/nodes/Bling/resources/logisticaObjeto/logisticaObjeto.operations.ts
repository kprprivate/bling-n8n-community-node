import type { INodeProperties } from 'n8n-workflow';

export const logisticaObjetoOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['logisticaObjeto'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar um objeto de logística',
				action: 'Criar objeto de logística',
			},
			{
				name: 'Criar Remessa',
				value: 'createShipment',
				description: 'Criar uma remessa para um objeto',
				action: 'Criar remessa de logística',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir um objeto de logística',
				action: 'Excluir objeto de logística',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter um objeto de logística pelo ID',
				action: 'Obter objeto de logística',
			},
			{
				name: 'Obter Etiqueta',
				value: 'getLabel',
				description: 'Obter etiqueta de um objeto de logística',
				action: 'Obter etiqueta de logística',
			},
			{
				name: 'Obter Remessa',
				value: 'getShipment',
				description: 'Obter uma remessa de um objeto',
				action: 'Obter remessa de logística',
			},
			{
				name: 'Obter Remessas',
				value: 'getShipments',
				description: 'Obter remessas de um objeto',
				action: 'Obter remessas de logística',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todos os objetos de logística',
				action: 'Obter todos os objetos de logística',
			},
		],
		default: 'getAll',
	},
];

export const logisticaObjetoFields: INodeProperties[] = [
	// ----------------------------------
	//   logisticaObjeto: get / delete / getLabel / getShipments
	// ----------------------------------
	{
		displayName: 'ID do Objeto',
		name: 'objetoId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['logisticaObjeto'],
				operation: ['get', 'delete', 'getLabel', 'getShipments', 'getShipment', 'createShipment'],
			},
		},
		description: 'ID do objeto de logística',
	},

	// ----------------------------------
	//   logisticaObjeto: getShipment
	// ----------------------------------
	{
		displayName: 'ID da Remessa',
		name: 'remessaId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['logisticaObjeto'],
				operation: ['getShipment'],
			},
		},
		description: 'ID da remessa',
	},

	// ----------------------------------
	//   logisticaObjeto: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['logisticaObjeto'],
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
				resource: ['logisticaObjeto'],
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
				resource: ['logisticaObjeto'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'ID da Logística',
				name: 'idLogistica',
				type: 'number',
				default: 0,
				description: 'Filtrar por logística',
			},
			{
				displayName: 'ID do Serviço',
				name: 'idServico',
				type: 'number',
				default: 0,
				description: 'Filtrar por serviço de logística',
			},
			{
				displayName: 'Código de Rastreamento',
				name: 'codigoRastreamento',
				type: 'string',
				default: '',
				description: 'Filtrar pelo código de rastreamento',
			},
			{
				displayName: 'ID do Pedido de Venda',
				name: 'idPedidoVenda',
				type: 'number',
				default: 0,
				description: 'Filtrar pelo ID do pedido de venda',
			},
		],
	},

	// ----------------------------------
	//   logisticaObjeto: create
	// ----------------------------------
	{
		displayName: 'Dados do Objeto',
		name: 'objetoData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		required: true,
		default: {},
		displayOptions: {
			show: {
				resource: ['logisticaObjeto'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'ID da Logística',
				name: 'idLogistica',
				type: 'number',
				default: 0,
				description: 'ID da logística',
			},
			{
				displayName: 'ID do Serviço',
				name: 'idServico',
				type: 'number',
				default: 0,
				description: 'ID do serviço de logística',
			},
			{
				displayName: 'ID do Pedido de Venda',
				name: 'idPedidoVenda',
				type: 'number',
				default: 0,
				description: 'ID do pedido de venda vinculado',
			},
			{
				displayName: 'Código de Rastreamento',
				name: 'codigoRastreamento',
				type: 'string',
				default: '',
				description: 'Código de rastreamento do objeto',
			},
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição do objeto',
			},
			{
				displayName: 'Peso (kg)',
				name: 'peso',
				type: 'number',
				default: 0,
				description: 'Peso do objeto em kg',
			},
			{
				displayName: 'Valor do Frete',
				name: 'valorFrete',
				type: 'number',
				default: 0,
				description: 'Valor do frete',
			},
			{
				displayName: 'Dimensões - Altura (cm)',
				name: 'altura',
				type: 'number',
				default: 0,
				description: 'Altura do objeto em cm',
			},
			{
				displayName: 'Dimensões - Largura (cm)',
				name: 'largura',
				type: 'number',
				default: 0,
				description: 'Largura do objeto em cm',
			},
			{
				displayName: 'Dimensões - Comprimento (cm)',
				name: 'comprimento',
				type: 'number',
				default: 0,
				description: 'Comprimento do objeto em cm',
			},
			{
				displayName: 'Diâmetro (cm)',
				name: 'diametro',
				type: 'number',
				default: 0,
				description: 'Diâmetro do objeto em cm',
			},
		],
	},

	// ----------------------------------
	//   logisticaObjeto: createShipment
	// ----------------------------------
	{
		displayName: 'Dados da Remessa',
		name: 'shipmentData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		required: true,
		default: {},
		displayOptions: {
			show: {
				resource: ['logisticaObjeto'],
				operation: ['createShipment'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição da remessa',
			},
			{
				displayName: 'Data de Envio',
				name: 'dataEnvio',
				type: 'string',
				default: '',
				description: 'Data do envio (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Observação',
				name: 'observacao',
				type: 'string',
				default: '',
				description: 'Observação da remessa',
			},
		],
	},
];
