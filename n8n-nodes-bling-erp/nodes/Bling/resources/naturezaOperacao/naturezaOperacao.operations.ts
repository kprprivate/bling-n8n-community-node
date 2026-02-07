import type { INodeProperties } from 'n8n-workflow';

export const naturezaOperacaoOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['naturezaOperacao'],
			},
		},
		options: [
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todas as naturezas de operação',
				action: 'Obter todas as naturezas de operação',
			},
		],
		default: 'getAll',
	},
];

export const naturezaOperacaoFields: INodeProperties[] = [
	// ----------------------------------
	//    naturezaOperacao: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['naturezaOperacao'],
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
				resource: ['naturezaOperacao'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		description: 'Quantidade máxima de registros retornados (máx: 100)',
	},
];
