import type { INodeProperties } from 'n8n-workflow';

export const borderoOperations: INodeProperties[] = [
	{
		displayName: 'Operacao',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bordero'],
			},
		},
		options: [
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Remove um bordero pelo ID',
				action: 'Excluir bordero',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obtem um bordero pelo ID',
				action: 'Obter bordero',
			},
		],
		default: 'get',
	},
];

export const borderoFields: INodeProperties[] = [
	// ----------------------------------
	//         bordero: get, delete
	// ----------------------------------
	{
		displayName: 'ID do Bordero',
		name: 'borderoId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['bordero'],
				operation: ['get', 'delete'],
			},
		},
		description: 'ID do bordero',
	},
];
