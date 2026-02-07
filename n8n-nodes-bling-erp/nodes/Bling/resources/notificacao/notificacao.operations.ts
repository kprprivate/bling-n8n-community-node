import type { INodeProperties } from 'n8n-workflow';

export const notificacaoOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['notificacao'],
			},
		},
		options: [
			{
				name: 'Confirmar Leitura',
				value: 'confirmRead',
				description: 'Confirmar leitura de uma notificação',
				action: 'Confirmar leitura de notificação',
			},
			{
				name: 'Obter Contagem',
				value: 'getCount',
				description: 'Obter contagem de notificações não lidas',
				action: 'Obter contagem de notificações',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todas as notificações',
				action: 'Obter todas as notificações',
			},
		],
		default: 'getAll',
	},
];

export const notificacaoFields: INodeProperties[] = [
	// ----------------------------------
	//    notificacao: confirmRead
	// ----------------------------------
	{
		displayName: 'ID da Notificação',
		name: 'notificacaoId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['notificacao'],
				operation: ['confirmRead'],
			},
		},
		description: 'ID da notificação para confirmar leitura',
	},

	// ----------------------------------
	//    notificacao: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['notificacao'],
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
				resource: ['notificacao'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		description: 'Quantidade máxima de registros retornados (máx: 100)',
	},
];
