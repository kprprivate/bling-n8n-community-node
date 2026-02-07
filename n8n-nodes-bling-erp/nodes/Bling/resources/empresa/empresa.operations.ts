import type { INodeProperties } from 'n8n-workflow';

export const empresaOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['empresa'],
			},
		},
		options: [
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter dados da empresa',
				action: 'Obter dados da empresa',
			},
		],
		default: 'get',
	},
];

export const empresaFields: INodeProperties[] = [];
