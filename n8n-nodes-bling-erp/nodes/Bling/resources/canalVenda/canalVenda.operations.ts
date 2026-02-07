import type { INodeProperties } from 'n8n-workflow';

export const canalVendaOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['canalVenda'],
			},
		},
		options: [
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obter todos os canais de venda',
				action: 'Obter todos os canais de venda',
			},
			{
				name: 'Obter Tipos',
				value: 'getTypes',
				description: 'Obter tipos de canais de venda',
				action: 'Obter tipos de canais de venda',
			},
		],
		default: 'getAll',
	},
];

export const canalVendaFields: INodeProperties[] = [
	// ----------------------------------
	//        canalVenda: getAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['canalVenda'],
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
				resource: ['canalVenda'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		description: 'Quantidade máxima de registros retornados (máx: 100)',
	},
];
