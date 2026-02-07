import type { INodeProperties } from 'n8n-workflow';

export const propostaComercialOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['propostaComercial'],
			},
		},
		options: [
			{
				name: 'Alterar Situação',
				value: 'changeSituation',
				description: 'Alterar situação de uma proposta comercial',
				action: 'Alterar situação de proposta comercial',
			},
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar uma proposta comercial',
				action: 'Criar proposta comercial',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Excluir uma proposta comercial',
				action: 'Excluir proposta comercial',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter uma proposta comercial pelo ID',
				action: 'Obter proposta comercial',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todas as propostas comerciais',
				action: 'Obter todas as propostas comerciais',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar uma proposta comercial',
				action: 'Atualizar proposta comercial',
			},
		],
		default: 'getAll',
	},
];

export const propostaComercialFields: INodeProperties[] = [
	// ----------------------------------
	//  propostaComercial: get / delete / update / changeSituation
	// ----------------------------------
	{
		displayName: 'ID da Proposta',
		name: 'propostaId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['propostaComercial'],
				operation: ['get', 'delete', 'update', 'changeSituation'],
			},
		},
		description: 'ID da proposta comercial',
	},

	// ----------------------------------
	//  propostaComercial: changeSituation
	// ----------------------------------
	{
		displayName: 'Situação',
		name: 'situacao',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['propostaComercial'],
				operation: ['changeSituation'],
			},
		},
		description: 'ID da nova situação da proposta comercial',
	},

	// ----------------------------------
	//  propostaComercial: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['propostaComercial'],
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
				resource: ['propostaComercial'],
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
				resource: ['propostaComercial'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'number',
				default: 0,
				description: 'Filtrar por situação da proposta',
			},
			{
				displayName: 'ID do Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'Filtrar por contato vinculado',
			},
			{
				displayName: 'ID do Vendedor',
				name: 'idVendedor',
				type: 'number',
				default: 0,
				description: 'Filtrar por vendedor',
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
	//  propostaComercial: create
	// ----------------------------------
	{
		displayName: 'Dados da Proposta',
		name: 'propostaData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		required: true,
		default: {},
		displayOptions: {
			show: {
				resource: ['propostaComercial'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição da proposta comercial',
			},
			{
				displayName: 'ID do Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'ID do contato vinculado',
			},
			{
				displayName: 'ID do Vendedor',
				name: 'idVendedor',
				type: 'number',
				default: 0,
				description: 'ID do vendedor vinculado',
			},
			{
				displayName: 'Valor Total',
				name: 'valorTotal',
				type: 'number',
				default: 0,
				description: 'Valor total da proposta',
			},
			{
				displayName: 'Data',
				name: 'data',
				type: 'string',
				default: '',
				description: 'Data da proposta (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Data de Validade',
				name: 'dataValidade',
				type: 'string',
				default: '',
				description: 'Data de validade da proposta (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'number',
				default: 0,
				description: 'ID da situação da proposta',
			},
			{
				displayName: 'Observação',
				name: 'observacao',
				type: 'string',
				default: '',
				description: 'Observação da proposta',
			},
			{
				displayName: 'Observação Interna',
				name: 'observacaoInterna',
				type: 'string',
				default: '',
				description: 'Observação interna da proposta',
			},
			{
				displayName: 'Desconto',
				name: 'desconto',
				type: 'number',
				default: 0,
				description: 'Valor do desconto',
			},
			{
				displayName: 'Número',
				name: 'numero',
				type: 'number',
				default: 0,
				description: 'Número da proposta',
			},
		],
	},

	// ----------------------------------
	//  propostaComercial: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['propostaComercial'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição da proposta comercial',
			},
			{
				displayName: 'ID do Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'ID do contato vinculado',
			},
			{
				displayName: 'ID do Vendedor',
				name: 'idVendedor',
				type: 'number',
				default: 0,
				description: 'ID do vendedor vinculado',
			},
			{
				displayName: 'Valor Total',
				name: 'valorTotal',
				type: 'number',
				default: 0,
				description: 'Valor total da proposta',
			},
			{
				displayName: 'Data',
				name: 'data',
				type: 'string',
				default: '',
				description: 'Data da proposta (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Data de Validade',
				name: 'dataValidade',
				type: 'string',
				default: '',
				description: 'Data de validade da proposta (formato: YYYY-MM-DD)',
			},
			{
				displayName: 'Situação',
				name: 'situacao',
				type: 'number',
				default: 0,
				description: 'ID da situação da proposta',
			},
			{
				displayName: 'Observação',
				name: 'observacao',
				type: 'string',
				default: '',
				description: 'Observação da proposta',
			},
			{
				displayName: 'Observação Interna',
				name: 'observacaoInterna',
				type: 'string',
				default: '',
				description: 'Observação interna da proposta',
			},
			{
				displayName: 'Desconto',
				name: 'desconto',
				type: 'number',
				default: 0,
				description: 'Valor do desconto',
			},
		],
	},
];
