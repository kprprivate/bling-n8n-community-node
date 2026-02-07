import type { INodeProperties } from 'n8n-workflow';

export const formaPagamentoOperations: INodeProperties[] = [
	{
		displayName: 'Operacao',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['formaPagamento'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Cria uma forma de pagamento',
				action: 'Criar forma de pagamento',
			},
			{
				name: 'Definir Padrao',
				value: 'getDefault',
				description: 'Altera o padrao de uma forma de pagamento',
				action: 'Definir padrao de forma de pagamento',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Remove uma forma de pagamento',
				action: 'Excluir forma de pagamento',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obtem uma forma de pagamento pelo ID',
				action: 'Obter forma de pagamento',
			},
			{
				name: 'Obter Varios',
				value: 'getAll',
				description: 'Obtem todas as formas de pagamento',
				action: 'Obter todas as formas de pagamento',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualiza uma forma de pagamento',
				action: 'Atualizar forma de pagamento',
			},
		],
		default: 'getAll',
	},
];

export const formaPagamentoFields: INodeProperties[] = [
	// ----------------------------------
	//         formaPagamento: get, update, delete, getDefault
	// ----------------------------------
	{
		displayName: 'ID da Forma de Pagamento',
		name: 'formaPagamentoId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['formaPagamento'],
				operation: ['get', 'update', 'delete', 'getDefault'],
			},
		},
		description: 'ID da forma de pagamento',
	},

	// ----------------------------------
	//         formaPagamento: create
	// ----------------------------------
	{
		displayName: 'Descricao',
		name: 'descricao',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['formaPagamento'],
				operation: ['create'],
			},
		},
		description: 'Descricao da forma de pagamento',
	},
	{
		displayName: 'Campos Adicionais',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['formaPagamento'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Tipo de Pagamento',
				name: 'tipoPagamento',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Dinheiro', value: 1 },
					{ name: 'Cheque', value: 2 },
					{ name: 'Cartao de Credito', value: 3 },
					{ name: 'Cartao de Debito', value: 4 },
					{ name: 'Cartao da Loja (Private Label)', value: 5 },
					{ name: 'Vale Alimentacao', value: 10 },
					{ name: 'Vale Refeicao', value: 11 },
					{ name: 'Vale Presente', value: 12 },
					{ name: 'Vale Combustivel', value: 13 },
					{ name: 'Duplicata Mercantil', value: 14 },
					{ name: 'Boleto Bancario', value: 15 },
					{ name: 'Deposito Bancario', value: 16 },
					{ name: 'PIX Dinamico', value: 17 },
					{ name: 'Transferencia Bancaria / Carteira Digital', value: 18 },
					{ name: 'Fidelidade / Cashback / Credito Virtual', value: 19 },
					{ name: 'PIX Estatico', value: 20 },
					{ name: 'Credito em Loja', value: 21 },
					{ name: 'Pagamento Eletronico nao Informado', value: 22 },
					{ name: 'Sem Pagamento', value: 90 },
					{ name: 'Outros', value: 99 },
				],
				description: 'Tipo de pagamento da forma',
			},
			{
				displayName: 'Situacao',
				name: 'situacao',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Inativa', value: 0 },
					{ name: 'Ativa', value: 1 },
				],
				description: 'Situacao da forma de pagamento',
			},
			{
				displayName: 'Padrao',
				name: 'padrao',
				type: 'options',
				default: 0,
				options: [
					{ name: 'Nao', value: 0 },
					{ name: 'Padrao', value: 1 },
					{ name: 'Padrao Devolucao', value: 2 },
				],
				description: 'Define se a forma de pagamento e padrao',
			},
			{
				displayName: 'Finalidade',
				name: 'finalidade',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Pagamentos', value: 1 },
					{ name: 'Recebimentos', value: 2 },
					{ name: 'Pagamentos e Recebimentos', value: 3 },
				],
				description: 'Finalidade da forma de pagamento',
			},
			{
				displayName: 'Condicao',
				name: 'condicao',
				type: 'string',
				default: '',
				description: 'Condicao de pagamento padrao (ex: 1x, 30/60/90)',
			},
			{
				displayName: 'Destino',
				name: 'destino',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Conta a Receber/Pagar', value: 1 },
					{ name: 'Ficha Financeira', value: 2 },
					{ name: 'Caixa e Bancos', value: 3 },
				],
				description: 'Destino do lancamento financeiro',
			},
			{
				displayName: 'Juros (%)',
				name: 'juros',
				type: 'number',
				default: 0,
				description: 'Valor de juros em porcentagem (ate 2 casas decimais)',
			},
			{
				displayName: 'Multa (%)',
				name: 'multa',
				type: 'number',
				default: 0,
				description: 'Valor de multa em porcentagem (ate 2 casas decimais)',
			},
			{
				displayName: 'Utiliza Dias Uteis',
				name: 'utilizaDiasUteis',
				type: 'boolean',
				default: false,
				description: 'Whether the payment method uses business days for postings',
			},
			{
				displayName: 'Taxa - Aliquota (%)',
				name: 'taxaAliquota',
				type: 'number',
				default: 0,
				description: 'Valor da aliquota sobre o valor da parcela',
			},
			{
				displayName: 'Taxa - Valor (R$)',
				name: 'taxaValor',
				type: 'number',
				default: 0,
				description: 'Valor em reais somado ao valor total da parcela',
			},
			{
				displayName: 'Taxa - Prazo (Dias)',
				name: 'taxaPrazo',
				type: 'number',
				default: 0,
				description: 'Prazo em dias que o dinheiro e retido antes de estar disponivel',
			},
			{
				displayName: 'Dados do Cartao (JSON)',
				name: 'dadosCartao',
				type: 'json',
				default: '{}',
				description: 'Dados do cartao em formato JSON (usado quando tipoPagamento e 3 ou 4). Campos: bandeira, tipo, cnpjCredenciadora, autoLiquidacao.',
			},
		],
	},

	// ----------------------------------
	//         formaPagamento: update
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['formaPagamento'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Descricao',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descricao da forma de pagamento',
			},
			{
				displayName: 'Tipo de Pagamento',
				name: 'tipoPagamento',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Dinheiro', value: 1 },
					{ name: 'Cheque', value: 2 },
					{ name: 'Cartao de Credito', value: 3 },
					{ name: 'Cartao de Debito', value: 4 },
					{ name: 'Cartao da Loja (Private Label)', value: 5 },
					{ name: 'Vale Alimentacao', value: 10 },
					{ name: 'Vale Refeicao', value: 11 },
					{ name: 'Vale Presente', value: 12 },
					{ name: 'Vale Combustivel', value: 13 },
					{ name: 'Duplicata Mercantil', value: 14 },
					{ name: 'Boleto Bancario', value: 15 },
					{ name: 'Deposito Bancario', value: 16 },
					{ name: 'PIX Dinamico', value: 17 },
					{ name: 'Transferencia Bancaria / Carteira Digital', value: 18 },
					{ name: 'Fidelidade / Cashback / Credito Virtual', value: 19 },
					{ name: 'PIX Estatico', value: 20 },
					{ name: 'Credito em Loja', value: 21 },
					{ name: 'Pagamento Eletronico nao Informado', value: 22 },
					{ name: 'Sem Pagamento', value: 90 },
					{ name: 'Outros', value: 99 },
				],
				description: 'Tipo de pagamento da forma',
			},
			{
				displayName: 'Situacao',
				name: 'situacao',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Inativa', value: 0 },
					{ name: 'Ativa', value: 1 },
				],
				description: 'Situacao da forma de pagamento',
			},
			{
				displayName: 'Padrao',
				name: 'padrao',
				type: 'options',
				default: 0,
				options: [
					{ name: 'Nao', value: 0 },
					{ name: 'Padrao', value: 1 },
					{ name: 'Padrao Devolucao', value: 2 },
				],
				description: 'Define se a forma de pagamento e padrao',
			},
			{
				displayName: 'Finalidade',
				name: 'finalidade',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Pagamentos', value: 1 },
					{ name: 'Recebimentos', value: 2 },
					{ name: 'Pagamentos e Recebimentos', value: 3 },
				],
				description: 'Finalidade da forma de pagamento',
			},
			{
				displayName: 'Condicao',
				name: 'condicao',
				type: 'string',
				default: '',
				description: 'Condicao de pagamento padrao (ex: 1x, 30/60/90)',
			},
			{
				displayName: 'Destino',
				name: 'destino',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Conta a Receber/Pagar', value: 1 },
					{ name: 'Ficha Financeira', value: 2 },
					{ name: 'Caixa e Bancos', value: 3 },
				],
				description: 'Destino do lancamento financeiro',
			},
			{
				displayName: 'Juros (%)',
				name: 'juros',
				type: 'number',
				default: 0,
				description: 'Valor de juros em porcentagem (ate 2 casas decimais)',
			},
			{
				displayName: 'Multa (%)',
				name: 'multa',
				type: 'number',
				default: 0,
				description: 'Valor de multa em porcentagem (ate 2 casas decimais)',
			},
			{
				displayName: 'Utiliza Dias Uteis',
				name: 'utilizaDiasUteis',
				type: 'boolean',
				default: false,
				description: 'Whether the payment method uses business days for postings',
			},
			{
				displayName: 'Taxa - Aliquota (%)',
				name: 'taxaAliquota',
				type: 'number',
				default: 0,
				description: 'Valor da aliquota sobre o valor da parcela',
			},
			{
				displayName: 'Taxa - Valor (R$)',
				name: 'taxaValor',
				type: 'number',
				default: 0,
				description: 'Valor em reais somado ao valor total da parcela',
			},
			{
				displayName: 'Taxa - Prazo (Dias)',
				name: 'taxaPrazo',
				type: 'number',
				default: 0,
				description: 'Prazo em dias que o dinheiro e retido antes de estar disponivel',
			},
			{
				displayName: 'Dados do Cartao (JSON)',
				name: 'dadosCartao',
				type: 'json',
				default: '{}',
				description: 'Dados do cartao em formato JSON (usado quando tipoPagamento e 3 ou 4). Campos: bandeira, tipo, cnpjCredenciadora, autoLiquidacao.',
			},
		],
	},

	// ----------------------------------
	//         formaPagamento: getDefault
	// ----------------------------------
	{
		displayName: 'Padrao',
		name: 'padrao',
		type: 'options',
		required: true,
		default: 1,
		displayOptions: {
			show: {
				resource: ['formaPagamento'],
				operation: ['getDefault'],
			},
		},
		options: [
			{ name: 'Pagamento', value: 1 },
			{ name: 'Devolucao', value: 2 },
			{ name: 'Fiado', value: 3 },
		],
		description: 'Tipo de padrao a ser definido para a forma de pagamento',
	},

	// ----------------------------------
	//         formaPagamento: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['formaPagamento'],
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
				resource: ['formaPagamento'],
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
				resource: ['formaPagamento'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Descricao',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descricao da forma de pagamento',
			},
			{
				displayName: 'Tipos de Pagamento',
				name: 'tiposPagamentos',
				type: 'string',
				default: '',
				description: 'IDs dos tipos de pagamento separados por virgula (1=Dinheiro, 2=Cheque, 3=Cartao Credito, etc)',
			},
			{
				displayName: 'Situacao',
				name: 'situacao',
				type: 'options',
				default: 1,
				options: [
					{ name: 'Inativa', value: 0 },
					{ name: 'Ativa', value: 1 },
				],
				description: 'Situacao da forma de pagamento',
			},
		],
	},
];
