import type { INodeProperties } from 'n8n-workflow';

export const nfceOperations: INodeProperties[] = [
	{
		displayName: 'Operacao',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['nfce'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Cria uma nota fiscal de consumidor',
				action: 'Criar nota fiscal de consumidor',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Exclui uma nota fiscal de consumidor',
				action: 'Excluir nota fiscal de consumidor',
			},
			{
				name: 'Enviar',
				value: 'send',
				description: 'Envia uma nota fiscal de consumidor para a Sefaz',
				action: 'Enviar nota fiscal de consumidor',
			},
			{
				name: 'Estornar Contas',
				value: 'reverseAccounts',
				description: 'Estorna as contas de uma nota fiscal de consumidor',
				action: 'Estornar contas de nota fiscal de consumidor',
			},
			{
				name: 'Estornar Estoque',
				value: 'reverseStock',
				description: 'Estorna o estoque de uma nota fiscal de consumidor',
				action: 'Estornar estoque de nota fiscal de consumidor',
			},
			{
				name: 'Lancar Contas',
				value: 'postAccounts',
				description: 'Lanca as contas de uma nota fiscal de consumidor',
				action: 'Lancar contas de nota fiscal de consumidor',
			},
			{
				name: 'Lancar Estoque',
				value: 'postStock',
				description: 'Lanca o estoque de uma nota fiscal de consumidor',
				action: 'Lancar estoque de nota fiscal de consumidor',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obtem uma nota fiscal de consumidor pelo ID',
				action: 'Obter nota fiscal de consumidor',
			},
			{
				name: 'Obter Varios',
				value: 'getAll',
				description: 'Obtem todas as notas fiscais de consumidor',
				action: 'Obter todas as notas fiscais de consumidor',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualiza uma nota fiscal de consumidor',
				action: 'Atualizar nota fiscal de consumidor',
			},
		],
		default: 'getAll',
	},
];

export const nfceFields: INodeProperties[] = [
	// ----------------------------------
	//         nfce: get, update, delete, send, postAccounts, reverseAccounts, postStock, reverseStock
	// ----------------------------------
	{
		displayName: 'ID da NFCe',
		name: 'nfceId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['nfce'],
				operation: [
					'get',
					'update',
					'delete',
					'send',
					'postAccounts',
					'reverseAccounts',
					'postStock',
					'reverseStock',
				],
			},
		},
		description: 'ID da nota fiscal de consumidor eletronica',
	},

	// ----------------------------------
	//         nfce: create
	// ----------------------------------
	{
		displayName: 'Dados da NFCe',
		name: 'nfceData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['nfce'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Tipo',
				name: 'tipo',
				type: 'number',
				default: 0,
				description: 'Tipo da nota fiscal (0=Entrada, 1=Saida)',
			},
			{
				displayName: 'Natureza da Operacao',
				name: 'naturezaOperacao',
				type: 'string',
				default: '',
				description: 'Natureza da operacao da nota fiscal',
			},
			{
				displayName: 'ID do Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'ID do contato vinculado a nota fiscal',
			},
			{
				displayName: 'Finalidade',
				name: 'finalidade',
				type: 'number',
				default: 1,
				description: 'Finalidade da nota fiscal (1=Normal, 2=Complementar, 3=Ajuste, 4=Devolucao)',
			},
			{
				displayName: 'Seguro',
				name: 'seguro',
				type: 'number',
				default: 0,
				description: 'Valor do seguro',
			},
			{
				displayName: 'Despesas',
				name: 'despesas',
				type: 'number',
				default: 0,
				description: 'Valor das despesas acessorias',
			},
			{
				displayName: 'Desconto',
				name: 'desconto',
				type: 'number',
				default: 0,
				description: 'Valor do desconto',
			},
			{
				displayName: 'Observacoes',
				name: 'observacoes',
				type: 'string',
				default: '',
				description: 'Observacoes adicionais da nota fiscal',
			},
			{
				displayName: 'Itens (JSON)',
				name: 'itens',
				type: 'json',
				default: '[]',
				description: 'Array de itens da nota fiscal em formato JSON',
			},
		],
	},

	// ----------------------------------
	//         nfce: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['nfce'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Tipo',
				name: 'tipo',
				type: 'number',
				default: 0,
				description: 'Tipo da nota fiscal (0=Entrada, 1=Saida)',
			},
			{
				displayName: 'Natureza da Operacao',
				name: 'naturezaOperacao',
				type: 'string',
				default: '',
				description: 'Natureza da operacao da nota fiscal',
			},
			{
				displayName: 'ID do Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'ID do contato vinculado a nota fiscal',
			},
			{
				displayName: 'Finalidade',
				name: 'finalidade',
				type: 'number',
				default: 1,
				description: 'Finalidade da nota fiscal (1=Normal, 2=Complementar, 3=Ajuste, 4=Devolucao)',
			},
			{
				displayName: 'Seguro',
				name: 'seguro',
				type: 'number',
				default: 0,
				description: 'Valor do seguro',
			},
			{
				displayName: 'Despesas',
				name: 'despesas',
				type: 'number',
				default: 0,
				description: 'Valor das despesas acessorias',
			},
			{
				displayName: 'Desconto',
				name: 'desconto',
				type: 'number',
				default: 0,
				description: 'Valor do desconto',
			},
			{
				displayName: 'Observacoes',
				name: 'observacoes',
				type: 'string',
				default: '',
				description: 'Observacoes adicionais da nota fiscal',
			},
			{
				displayName: 'Itens (JSON)',
				name: 'itens',
				type: 'json',
				default: '[]',
				description: 'Array de itens da nota fiscal em formato JSON',
			},
		],
	},

	// ----------------------------------
	//         nfce: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['nfce'],
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
				resource: ['nfce'],
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
				resource: ['nfce'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'ID do Transportador',
				name: 'idTransportador',
				type: 'number',
				default: 0,
				description: 'ID do contato do transportador',
			},
			{
				displayName: 'Chave de Acesso',
				name: 'chaveAcesso',
				type: 'string',
				default: '',
				description: 'Chave de acesso da nota fiscal de consumidor',
			},
			{
				displayName: 'Numero',
				name: 'numero',
				type: 'number',
				default: 0,
				description: 'Numero da nota fiscal de consumidor',
			},
			{
				displayName: 'Serie',
				name: 'serie',
				type: 'number',
				default: 0,
				description: 'Serie da nota fiscal de consumidor',
			},
			{
				displayName: 'Situacao',
				name: 'situacao',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Pendente', value: 1 },
					{ name: 'Cancelada', value: 2 },
					{ name: 'Aguardando Recibo', value: 3 },
					{ name: 'Rejeitada', value: 4 },
					{ name: 'Autorizada', value: 5 },
					{ name: 'Emitida DANFE', value: 6 },
					{ name: 'Registrada', value: 7 },
					{ name: 'Aguardando Protocolo', value: 8 },
					{ name: 'Denegada', value: 9 },
					{ name: 'Consulta Situacao', value: 10 },
					{ name: 'Bloqueada', value: 11 },
				],
				description: 'Situacao da nota fiscal de consumidor',
			},
			{
				displayName: 'Data Emissao Inicial',
				name: 'dataEmissaoInicial',
				type: 'string',
				default: '',
				description: 'Data e hora inicial de emissao (ex: 2021-12-01 00:00:00)',
			},
			{
				displayName: 'Data Emissao Final',
				name: 'dataEmissaoFinal',
				type: 'string',
				default: '',
				description: 'Data e hora final de emissao (ex: 2021-12-31 23:59:59)',
			},
		],
	},
];
