import type { INodeProperties } from 'n8n-workflow';

export const nfseOperations: INodeProperties[] = [
	{
		displayName: 'Operacao',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['nfse'],
			},
		},
		options: [
			{
				name: 'Cancelar',
				value: 'cancel',
				description: 'Cancela uma nota fiscal de servico',
				action: 'Cancelar nota fiscal de servico',
			},
			{
				name: 'Criar',
				value: 'create',
				description: 'Cria uma nota fiscal de servico',
				action: 'Criar nota fiscal de servico',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Exclui uma nota fiscal de servico',
				action: 'Excluir nota fiscal de servico',
			},
			{
				name: 'Enviar',
				value: 'send',
				description: 'Envia uma nota fiscal de servico',
				action: 'Enviar nota fiscal de servico',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obtem uma nota fiscal de servico pelo ID',
				action: 'Obter nota fiscal de servico',
			},
			{
				name: 'Obter Varios',
				value: 'getAll',
				description: 'Obtem todas as notas fiscais de servico',
				action: 'Obter todas as notas fiscais de servico',
			},
			{
				name: 'Obter Configuracoes',
				value: 'getConfig',
				description: 'Obtem as configuracoes de nota fiscal de servico',
				action: 'Obter configuracoes de nota fiscal de servico',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualiza uma nota fiscal de servico',
				action: 'Atualizar nota fiscal de servico',
			},
		],
		default: 'getAll',
	},
];

export const nfseFields: INodeProperties[] = [
	// ----------------------------------
	//         nfse: get, update, delete, send, cancel
	// ----------------------------------
	{
		displayName: 'ID da NFSe',
		name: 'nfseId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['nfse'],
				operation: ['get', 'update', 'delete', 'send', 'cancel'],
			},
		},
		description: 'ID da nota fiscal de servico eletronica',
	},

	// ----------------------------------
	//         nfse: create
	// ----------------------------------
	{
		displayName: 'Dados da NFSe',
		name: 'nfseData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['nfse'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'ID do Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'ID do contato (prestador/tomador) vinculado a nota de servico',
			},
			{
				displayName: 'Descricao',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descricao do servico prestado',
			},
			{
				displayName: 'Valor',
				name: 'valor',
				type: 'number',
				default: 0,
				description: 'Valor do servico prestado',
			},
			{
				displayName: 'Data Emissao',
				name: 'dataEmissao',
				type: 'string',
				default: '',
				description: 'Data de emissao da nota (ex: 2023-01-01)',
			},
			{
				displayName: 'Observacoes',
				name: 'observacoes',
				type: 'string',
				default: '',
				description: 'Observacoes adicionais da nota de servico',
			},
			{
				displayName: 'ID do Municipio',
				name: 'idMunicipio',
				type: 'number',
				default: 0,
				description: 'ID do municipio do prestador de servico (codigo IBGE)',
			},
			{
				displayName: 'Impostos (JSON)',
				name: 'impostos',
				type: 'json',
				default: '{}',
				description: 'Impostos da nota de servico em formato JSON',
			},
			{
				displayName: 'Servicos (JSON)',
				name: 'servicos',
				type: 'json',
				default: '[]',
				description: 'Array de servicos da nota em formato JSON',
			},
		],
	},

	// ----------------------------------
	//         nfse: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['nfse'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'ID do Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'ID do contato (prestador/tomador) vinculado a nota de servico',
			},
			{
				displayName: 'Descricao',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descricao do servico prestado',
			},
			{
				displayName: 'Valor',
				name: 'valor',
				type: 'number',
				default: 0,
				description: 'Valor do servico prestado',
			},
			{
				displayName: 'Data Emissao',
				name: 'dataEmissao',
				type: 'string',
				default: '',
				description: 'Data de emissao da nota (ex: 2023-01-01)',
			},
			{
				displayName: 'Observacoes',
				name: 'observacoes',
				type: 'string',
				default: '',
				description: 'Observacoes adicionais da nota de servico',
			},
			{
				displayName: 'ID do Municipio',
				name: 'idMunicipio',
				type: 'number',
				default: 0,
				description: 'ID do municipio do prestador de servico (codigo IBGE)',
			},
			{
				displayName: 'Impostos (JSON)',
				name: 'impostos',
				type: 'json',
				default: '{}',
				description: 'Impostos da nota de servico em formato JSON',
			},
			{
				displayName: 'Servicos (JSON)',
				name: 'servicos',
				type: 'json',
				default: '[]',
				description: 'Array de servicos da nota em formato JSON',
			},
		],
	},

	// ----------------------------------
	//         nfse: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['nfse'],
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
				resource: ['nfse'],
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
				resource: ['nfse'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Situacao',
				name: 'situacao',
				type: 'options',
				default: 0,
				options: [
					{ name: 'Pendente', value: 0 },
					{ name: 'Emitida', value: 1 },
					{ name: 'Disponivel para Consulta', value: 2 },
					{ name: 'Cancelada', value: 3 },
				],
				description: 'Situacao da nota fiscal de servico',
			},
			{
				displayName: 'Data Emissao Inicial',
				name: 'dataEmissaoInicial',
				type: 'string',
				default: '',
				description: 'Data inicial do periodo de emissao (ex: 2022-12-01)',
			},
			{
				displayName: 'Data Emissao Final',
				name: 'dataEmissaoFinal',
				type: 'string',
				default: '',
				description: 'Data final do periodo de emissao (ex: 2023-01-01)',
			},
		],
	},
];
