import type { INodeProperties } from 'n8n-workflow';

export const contaPagarOperations: INodeProperties[] = [
	{
		displayName: 'Operacao',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contaPagar'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Cria uma nova conta a pagar',
				action: 'Criar uma conta a pagar',
			},
			{
				name: 'Deletar',
				value: 'delete',
				description: 'Deleta uma conta a pagar',
				action: 'Deletar uma conta a pagar',
			},
			{
				name: 'Liquidar',
				value: 'settle',
				description: 'Liquida uma conta a pagar',
				action: 'Liquidar uma conta a pagar',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obtem uma conta a pagar pelo ID',
				action: 'Obter uma conta a pagar',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obtem todas as contas a pagar',
				action: 'Obter todas as contas a pagar',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualiza uma conta a pagar',
				action: 'Atualizar uma conta a pagar',
			},
		],
		default: 'getAll',
	},
];

export const contaPagarFields: INodeProperties[] = [
	// ----------------------------------
	//         contaPagar: contaPagarId
	// ----------------------------------
	{
		displayName: 'ID da Conta a Pagar',
		name: 'contaPagarId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['contaPagar'],
				operation: ['get', 'update', 'delete', 'settle'],
			},
		},
		description: 'ID da conta a pagar',
	},

	// ----------------------------------
	//         contaPagar: create - accountData
	// ----------------------------------
	{
		displayName: 'Dados da Conta',
		name: 'accountData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['contaPagar'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Data de Vencimento',
				name: 'vencimento',
				type: 'string',
				default: '',
				description: 'Data de vencimento da conta (AAAA-MM-DD)',
			},
			{
				displayName: 'Valor',
				name: 'valor',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				description: 'Valor da conta a pagar',
			},
			{
				displayName: 'ID do Contato',
				name: 'contato',
				type: 'number',
				default: 0,
				description: 'ID do contato (fornecedor) vinculado a conta',
			},
			{
				displayName: 'Historico',
				name: 'historico',
				type: 'string',
				default: '',
				description: 'Historico/descricao da conta a pagar',
			},
			{
				displayName: 'Numero do Documento',
				name: 'numeroDocumento',
				type: 'string',
				default: '',
				description: 'Numero do documento da conta',
			},
			{
				displayName: 'Competencia',
				name: 'competencia',
				type: 'string',
				default: '',
				description: 'Data de competencia (AAAA-MM-DD)',
			},
			{
				displayName: 'ID Forma de Pagamento',
				name: 'formaPagamento',
				type: 'number',
				default: 0,
				description: 'ID da forma de pagamento',
			},
			{
				displayName: 'ID Portador',
				name: 'portador',
				type: 'number',
				default: 0,
				description: 'ID do portador (conta bancaria)',
			},
			{
				displayName: 'ID Categoria Receita/Despesa',
				name: 'categoria',
				type: 'number',
				default: 0,
				description: 'ID da categoria de receita/despesa',
			},
			{
				displayName: 'Ocorrencia',
				name: 'ocorrencia',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Adicionar Ocorrencia',
				options: [
					{
						displayName: 'Dados da Ocorrencia',
						name: 'ocorrenciaData',
						values: [
							{
								displayName: 'Tipo',
								name: 'tipo',
								type: 'options',
								options: [
									{ name: 'Unica', value: 1 },
									{ name: 'Parcelada', value: 2 },
									{ name: 'Mensal', value: 3 },
									{ name: 'Bimestral', value: 4 },
									{ name: 'Trimestral', value: 5 },
									{ name: 'Semestral', value: 6 },
									{ name: 'Anual', value: 7 },
									{ name: 'Semanal', value: 8 },
									{ name: 'Quinzenal', value: 9 },
								],
								default: 1,
								description: 'Tipo de ocorrencia',
							},
							{
								displayName: 'Numero de Parcelas',
								name: 'parcelas',
								type: 'number',
								default: 1,
								description: 'Numero de parcelas',
							},
							{
								displayName: 'Considerar Dias Uteis',
								name: 'considerarDiasUteis',
								type: 'boolean',
								default: false,
								description: 'Whether to consider business days',
							},
							{
								displayName: 'Dia de Vencimento',
								name: 'diaVencimento',
								type: 'number',
								default: 0,
								description: 'Dia fixo de vencimento',
							},
						],
					},
				],
				description: 'Configuracao de ocorrencia/recorrencia',
			},
			{
				displayName: 'Observacoes',
				name: 'observacoes',
				type: 'string',
				default: '',
				description: 'Observacoes da conta a pagar',
			},
		],
	},

	// ----------------------------------
	//         contaPagar: update - updateFields
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['contaPagar'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Data de Vencimento',
				name: 'vencimento',
				type: 'string',
				default: '',
				description: 'Data de vencimento da conta (AAAA-MM-DD)',
			},
			{
				displayName: 'Valor',
				name: 'valor',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				description: 'Valor da conta a pagar',
			},
			{
				displayName: 'ID do Contato',
				name: 'contato',
				type: 'number',
				default: 0,
				description: 'ID do contato (fornecedor) vinculado a conta',
			},
			{
				displayName: 'Historico',
				name: 'historico',
				type: 'string',
				default: '',
				description: 'Historico/descricao da conta a pagar',
			},
			{
				displayName: 'Numero do Documento',
				name: 'numeroDocumento',
				type: 'string',
				default: '',
				description: 'Numero do documento da conta',
			},
			{
				displayName: 'Competencia',
				name: 'competencia',
				type: 'string',
				default: '',
				description: 'Data de competencia (AAAA-MM-DD)',
			},
			{
				displayName: 'ID Forma de Pagamento',
				name: 'formaPagamento',
				type: 'number',
				default: 0,
				description: 'ID da forma de pagamento',
			},
			{
				displayName: 'ID Portador',
				name: 'portador',
				type: 'number',
				default: 0,
				description: 'ID do portador (conta bancaria)',
			},
			{
				displayName: 'ID Categoria Receita/Despesa',
				name: 'categoria',
				type: 'number',
				default: 0,
				description: 'ID da categoria de receita/despesa',
			},
			{
				displayName: 'Observacoes',
				name: 'observacoes',
				type: 'string',
				default: '',
				description: 'Observacoes da conta a pagar',
			},
		],
	},

	// ----------------------------------
	//         contaPagar: settle - settleData
	// ----------------------------------
	{
		displayName: 'Dados da Liquidacao',
		name: 'settleData',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['contaPagar'],
				operation: ['settle'],
			},
		},
		options: [
			{
				displayName: 'Data de Pagamento',
				name: 'dataPagamento',
				type: 'string',
				default: '',
				description: 'Data do pagamento (AAAA-MM-DD)',
			},
			{
				displayName: 'Valor Pago',
				name: 'valorPago',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				description: 'Valor pago',
			},
			{
				displayName: 'Juros',
				name: 'juros',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				description: 'Valor de juros',
			},
			{
				displayName: 'Desconto',
				name: 'desconto',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				description: 'Valor de desconto',
			},
			{
				displayName: 'Acrescimo',
				name: 'acrescimo',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				description: 'Valor de acrescimo',
			},
			{
				displayName: 'Tarifa',
				name: 'tarifa',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				description: 'Valor da tarifa bancaria',
			},
			{
				displayName: 'ID Portador',
				name: 'portador',
				type: 'number',
				default: 0,
				description: 'ID do portador (conta bancaria) de pagamento',
			},
		],
	},

	// ----------------------------------
	//         contaPagar: getAll - returnAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['contaPagar'],
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
				resource: ['contaPagar'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		description: 'Max number of results to return',
	},

	// ----------------------------------
	//         contaPagar: getAll - filters
	// ----------------------------------
	{
		displayName: 'Filtros',
		name: 'filters',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['contaPagar'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Situacao',
				name: 'situacao',
				type: 'options',
				options: [
					{ name: 'Em aberto', value: 1 },
					{ name: 'Paga', value: 2 },
					{ name: 'Parcialmente paga', value: 3 },
					{ name: 'Devolvida', value: 4 },
					{ name: 'Cancelada', value: 5 },
				],
				default: 1,
				description: 'Situacao da conta a pagar',
			},
			{
				displayName: 'Data Vencimento Inicial',
				name: 'dataVencimentoInicial',
				type: 'string',
				default: '',
				description: 'Data de vencimento inicial (AAAA-MM-DD)',
			},
			{
				displayName: 'Data Vencimento Final',
				name: 'dataVencimentoFinal',
				type: 'string',
				default: '',
				description: 'Data de vencimento final (AAAA-MM-DD)',
			},
			{
				displayName: 'Data Emissao Inicial',
				name: 'dataEmissaoInicial',
				type: 'string',
				default: '',
				description: 'Data de emissao inicial (AAAA-MM-DD)',
			},
			{
				displayName: 'Data Emissao Final',
				name: 'dataEmissaoFinal',
				type: 'string',
				default: '',
				description: 'Data de emissao final (AAAA-MM-DD)',
			},
			{
				displayName: 'Data Pagamento Inicial',
				name: 'dataPagamentoInicial',
				type: 'string',
				default: '',
				description: 'Data de pagamento inicial (AAAA-MM-DD)',
			},
			{
				displayName: 'Data Pagamento Final',
				name: 'dataPagamentoFinal',
				type: 'string',
				default: '',
				description: 'Data de pagamento final (AAAA-MM-DD)',
			},
			{
				displayName: 'ID Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'ID do contato (fornecedor) vinculado',
			},
			{
				displayName: 'ID Portador',
				name: 'idPortador',
				type: 'number',
				default: 0,
				description: 'ID do portador (conta bancaria)',
			},
			{
				displayName: 'ID Forma de Pagamento',
				name: 'idFormaPagamento',
				type: 'number',
				default: 0,
				description: 'ID da forma de pagamento',
			},
			{
				displayName: 'ID Categoria',
				name: 'idCategoria',
				type: 'number',
				default: 0,
				description: 'ID da categoria de receita/despesa',
			},
			{
				displayName: 'Numero Documento',
				name: 'numeroDocumento',
				type: 'string',
				default: '',
				description: 'Numero do documento',
			},
		],
	},
];
