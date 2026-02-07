import type { INodeProperties } from 'n8n-workflow';

export const produtoFornecedorOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['produtoFornecedor'],
			},
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				description: 'Vincular um fornecedor ao produto',
				action: 'Vincular fornecedor ao produto',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar vínculo de fornecedor do produto',
				action: 'Atualizar fornecedor do produto',
			},
			{
				name: 'Excluir',
				value: 'delete',
				description: 'Remover vínculo de fornecedor do produto',
				action: 'Remover fornecedor do produto',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obter dados de um fornecedor do produto',
				action: 'Obter fornecedor do produto',
			},
			{
				name: 'Listar Todos',
				value: 'getAll',
				description: 'Listar todos os fornecedores do produto',
				action: 'Listar fornecedores do produto',
			},
		],
		default: 'getAll',
	},
];

export const produtoFornecedorFields: INodeProperties[] = [
	// ----------------------------------
	//        idProduto (all operations)
	// ----------------------------------
	{
		displayName: 'ID do Produto',
		name: 'idProduto',
		type: 'number',
		required: true,
		default: 0,
		description: 'ID do produto',
		displayOptions: {
			show: {
				resource: ['produtoFornecedor'],
				operation: ['getAll', 'get', 'create', 'update', 'delete'],
			},
		},
	},

	// ----------------------------------
	//        idFornecedor (get, update, delete)
	// ----------------------------------
	{
		displayName: 'ID do Fornecedor',
		name: 'idFornecedor',
		type: 'number',
		required: true,
		default: 0,
		description: 'ID do fornecedor vinculado ao produto',
		displayOptions: {
			show: {
				resource: ['produtoFornecedor'],
				operation: ['get', 'update', 'delete'],
			},
		},
	},

	// ----------------------------------
	//        supplierData (create)
	// ----------------------------------
	{
		displayName: 'Dados do Fornecedor',
		name: 'supplierData',
		type: 'collection',
		placeholder: 'Adicionar campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['produtoFornecedor'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'ID do Fornecedor',
				name: 'idFornecedor',
				type: 'number',
				default: 0,
				description: 'ID do contato fornecedor no Bling',
			},
			{
				displayName: 'Código do Produto no Fornecedor',
				name: 'codigo',
				type: 'string',
				default: '',
				description: 'Código do produto no cadastro do fornecedor',
			},
			{
				displayName: 'Preço de Custo',
				name: 'precoCusto',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Preço de custo do produto no fornecedor',
			},
			{
				displayName: 'Preço de Compra',
				name: 'precoCompra',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Preço de compra do produto no fornecedor',
			},
			{
				displayName: 'Padrão',
				name: 'padrao',
				type: 'boolean',
				default: false,
				description: 'Whether este é o fornecedor padrão do produto',
			},
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição do produto no fornecedor',
			},
			{
				displayName: 'Código de Barras do Fornecedor',
				name: 'codigoBarras',
				type: 'string',
				default: '',
				description: 'Código de barras do produto no fornecedor',
			},
			{
				displayName: 'Garantia (dias)',
				name: 'garantia',
				type: 'number',
				default: 0,
				description: 'Prazo de garantia do fornecedor em dias',
			},
		],
	},

	// ----------------------------------
	//        updateFields (update)
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['produtoFornecedor'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Código do Produto no Fornecedor',
				name: 'codigo',
				type: 'string',
				default: '',
				description: 'Código do produto no cadastro do fornecedor',
			},
			{
				displayName: 'Preço de Custo',
				name: 'precoCusto',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Preço de custo do produto no fornecedor',
			},
			{
				displayName: 'Preço de Compra',
				name: 'precoCompra',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Preço de compra do produto no fornecedor',
			},
			{
				displayName: 'Padrão',
				name: 'padrao',
				type: 'boolean',
				default: false,
				description: 'Whether este é o fornecedor padrão do produto',
			},
			{
				displayName: 'Descrição',
				name: 'descricao',
				type: 'string',
				default: '',
				description: 'Descrição do produto no fornecedor',
			},
			{
				displayName: 'Código de Barras do Fornecedor',
				name: 'codigoBarras',
				type: 'string',
				default: '',
				description: 'Código de barras do produto no fornecedor',
			},
			{
				displayName: 'Garantia (dias)',
				name: 'garantia',
				type: 'number',
				default: 0,
				description: 'Prazo de garantia do fornecedor em dias',
			},
		],
	},
];
