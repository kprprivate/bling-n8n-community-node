import type { INodeProperties } from 'n8n-workflow';

export const ordemProducaoOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['ordemProducao'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar uma ordem de produção',
				action: 'Criar ordem de produção',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir uma ordem de produção',
				action: 'Excluir ordem de produção',
			},
			{
				name: 'Gerar sob Demanda',
				value: 'generateOnDemand',
				description: 'Gerar ordem de produção sob demanda',
				action: 'Gerar ordem de produção sob demanda',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter uma ordem de produção pelo ID',
				action: 'Obter ordem de produção',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todas as ordens de produção',
				action: 'Obter todas as ordens de produção',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar uma ordem de produção',
				action: 'Atualizar ordem de produção',
			},
		],
		default: 'getAll',
	},
];

export const ordemProducaoFields: INodeProperties[] = [
	// ----------------------------------
	//  ordemProducao: get / delete / update
	// ----------------------------------
	{
		displayName: 'ID da Ordem',
		name: 'ordemId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['ordemProducao'],
				operation: ['get', 'delete', 'update'],
			},
		},
		description: 'ID da ordem de produção',
	},

	// ----------------------------------
	//  ordemProducao: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['ordemProducao'],
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
				resource: ['ordemProducao'],
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
				resource: ['ordemProducao'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'string',
				default: '',
				description: 'Filtrar por situação da ordem de produção',
			},
			{
				displayName: 'ID do Depósito',
				name: 'idDeposito',
				type: 'number',
				default: 0,
				description: 'Filtrar por depósito',
			},
			{
				displayName: 'ID da Situação',
				name: 'idSituacao',
				type: 'number',
				default: 0,
				description: 'Filtrar por ID da situação',
			},
			{
				displayName: 'Data Início',
				name: 'dataInicio',
				type: 'string',
				default: '',
				description: 'Data de início (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Data Fim',
				name: 'dataFim',
				type: 'string',
				default: '',
				description: 'Data de fim (formato: YYYY-MM-DD)',
			},
		],
	},

	// ----------------------------------
	//  ordemProducao: create
	// ----------------------------------
	{
		displayName: 'Dados da Ordem',
		name: 'ordemData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		required: true,
		default: {},
		displayOptions: {
			show: {
				resource: ['ordemProducao'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'ID do Produto',
				name: 'idProduto',
				type: 'number',
				default: 0,
				description: 'ID do produto a ser produzido',
			},
			{
				displayName: 'Quantidade',
				name: 'quantidade',
				type: 'number',
				default: 0,
				description: 'Quantidade a ser produzida',
			},
			{
				displayName: 'ID do Depósito',
				name: 'idDeposito',
				type: 'number',
				default: 0,
				description: 'ID do depósito',
			},
			{
				displayName: 'Data de Previsão',
				name: 'dataPrevisao',
				type: 'string',
				default: '',
				description: 'Data de previsão (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Observação',
				name: 'observacao',
				type: 'string',
				default: '',
				description: 'Observação da ordem de produção',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'string',
				default: '',
				description: 'Situação da ordem de produção',
			},
			{
				displayName: 'Número',
				name: 'numero',
				type: 'number',
				default: 0,
				description: 'Número da ordem de produção',
			},
		],
	},

	// ----------------------------------
	//  ordemProducao: generateOnDemand
	// ----------------------------------
	{
		displayName: 'Dados de Demanda',
		name: 'demandData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		required: true,
		default: {},
		displayOptions: {
			show: {
				resource: ['ordemProducao'],
				operation: ['generateOnDemand'],
			},
		},
		options: [
			{
				displayName: 'ID do Produto',
				name: 'idProduto',
				type: 'number',
				default: 0,
				description: 'ID do produto a ser produzido',
			},
			{
				displayName: 'Quantidade',
				name: 'quantidade',
				type: 'number',
				default: 0,
				description: 'Quantidade a ser produzida',
			},
			{
				displayName: 'ID do Depósito',
				name: 'idDeposito',
				type: 'number',
				default: 0,
				description: 'ID do depósito de destino',
			},
			{
				displayName: 'Observação',
				name: 'observacao',
				type: 'string',
				default: '',
				description: 'Observação da demanda',
			},
		],
	},

	// ----------------------------------
	//  ordemProducao: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['ordemProducao'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'ID do Produto',
				name: 'idProduto',
				type: 'number',
				default: 0,
				description: 'ID do produto a ser produzido',
			},
			{
				displayName: 'Quantidade',
				name: 'quantidade',
				type: 'number',
				default: 0,
				description: 'Quantidade a ser produzida',
			},
			{
				displayName: 'ID do Depósito',
				name: 'idDeposito',
				type: 'number',
				default: 0,
				description: 'ID do depósito',
			},
			{
				displayName: 'Data de Previsão',
				name: 'dataPrevisao',
				type: 'string',
				default: '',
				description: 'Data de previsão (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Observação',
				name: 'observacao',
				type: 'string',
				default: '',
				description: 'Observação da ordem de produção',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'string',
				default: '',
				description: 'Situação da ordem de produção',
			},
		],
	},
];
