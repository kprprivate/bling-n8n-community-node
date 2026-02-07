import type { INodeProperties } from 'n8n-workflow';

export const contatoOperations: INodeProperties[] = [
	{
		displayName: 'Operacao',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contato'],
			},
		},
		options: [
			{
				name: 'Alterar Situacao',
				value: 'changeSituation',
				description: 'Altera a situacao de um contato',
				action: 'Alterar situacao de um contato',
			},
			{
				name: 'Criar',
				value: 'create',
				description: 'Cria um novo contato',
				action: 'Criar um contato',
			},
			{
				name: 'Deletar',
				value: 'delete',
				description: 'Deleta um contato',
				action: 'Deletar um contato',
			},
			{
				name: 'Obter',
				value: 'get',
				description: 'Obtem um contato pelo ID',
				action: 'Obter um contato',
			},
			{
				name: 'Obter Todos',
				value: 'getAll',
				description: 'Obtem todos os contatos',
				action: 'Obter todos os contatos',
			},
			{
				name: 'Obter Tipos',
				value: 'getTypes',
				description: 'Obtem os tipos de contato',
				action: 'Obter tipos de contato',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualiza um contato',
				action: 'Atualizar um contato',
			},
		],
		default: 'getAll',
	},
];

export const contatoFields: INodeProperties[] = [
	// ----------------------------------
	//         contato: contatoId
	// ----------------------------------
	{
		displayName: 'ID do Contato',
		name: 'contatoId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['contato'],
				operation: ['get', 'update', 'delete', 'changeSituation'],
			},
		},
		description: 'ID do contato',
	},

	// ----------------------------------
	//         contato: create - nome
	// ----------------------------------
	{
		displayName: 'Nome',
		name: 'nome',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['contato'],
				operation: ['create'],
			},
		},
		description: 'Nome do contato',
	},

	// ----------------------------------
	//         contato: create - additionalFields
	// ----------------------------------
	{
		displayName: 'Campos Adicionais',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['contato'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Fantasia',
				name: 'fantasia',
				type: 'string',
				default: '',
				description: 'Nome fantasia do contato',
			},
			{
				displayName: 'Tipo Pessoa',
				name: 'tipoPessoa',
				type: 'options',
				options: [
					{ name: 'Juridica', value: 'J' },
					{ name: 'Fisica', value: 'F' },
					{ name: 'Estrangeiro', value: 'E' },
				],
				default: 'J',
				description: 'Tipo de pessoa do contato',
			},
			{
				displayName: 'Contribuinte',
				name: 'contribuinte',
				type: 'options',
				options: [
					{ name: 'Contribuinte ICMS', value: 1 },
					{ name: 'Contribuinte isento', value: 2 },
					{ name: 'Nao contribuinte', value: 9 },
				],
				default: 9,
				description: 'Indicador de contribuinte do contato',
			},
			{
				displayName: 'CPF/CNPJ',
				name: 'numeroDocumento',
				type: 'string',
				default: '',
				description: 'CPF ou CNPJ do contato',
			},
			{
				displayName: 'Inscricao Estadual',
				name: 'ie',
				type: 'string',
				default: '',
				description: 'Inscricao estadual do contato',
			},
			{
				displayName: 'RG',
				name: 'rg',
				type: 'string',
				default: '',
				description: 'RG do contato',
			},
			{
				displayName: 'Orgao Emissor',
				name: 'orgaoEmissor',
				type: 'string',
				default: '',
				description: 'Orgao emissor do RG',
			},
			{
				displayName: 'E-mail',
				name: 'email',
				type: 'string',
				placeholder: 'nome@email.com',
				default: '',
				description: 'E-mail do contato',
			},
			{
				displayName: 'Telefone',
				name: 'telefone',
				type: 'string',
				default: '',
				description: 'Telefone do contato',
			},
			{
				displayName: 'Celular',
				name: 'celular',
				type: 'string',
				default: '',
				description: 'Celular do contato',
			},
			{
				displayName: 'Fax',
				name: 'fax',
				type: 'string',
				default: '',
				description: 'Fax do contato',
			},
			{
				displayName: 'Outras Informacoes',
				name: 'outrasInformacoes',
				type: 'string',
				default: '',
				description: 'Outras informacoes do contato',
			},
			{
				displayName: 'Observacao',
				name: 'observacao',
				type: 'string',
				default: '',
				description: 'Observacao do contato',
			},
			{
				displayName: 'ID Vendedor',
				name: 'vendedor',
				type: 'number',
				default: 0,
				description: 'ID do vendedor vinculado ao contato',
			},
			{
				displayName: 'Endereco',
				name: 'endereco',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Adicionar Endereco',
				options: [
					{
						displayName: 'Endereco',
						name: 'enderecoData',
						values: [
							{
								displayName: 'Endereco',
								name: 'endereco',
								type: 'string',
								default: '',
								description: 'Logradouro do endereco',
							},
							{
								displayName: 'Numero',
								name: 'numero',
								type: 'string',
								default: '',
								description: 'Numero do endereco',
							},
							{
								displayName: 'Complemento',
								name: 'complemento',
								type: 'string',
								default: '',
								description: 'Complemento do endereco',
							},
							{
								displayName: 'Bairro',
								name: 'bairro',
								type: 'string',
								default: '',
								description: 'Bairro do endereco',
							},
							{
								displayName: 'CEP',
								name: 'cep',
								type: 'string',
								default: '',
								description: 'CEP do endereco',
							},
							{
								displayName: 'Municipio',
								name: 'municipio',
								type: 'string',
								default: '',
								description: 'Municipio do endereco',
							},
							{
								displayName: 'UF',
								name: 'uf',
								type: 'string',
								default: '',
								description: 'UF do endereco',
							},
							{
								displayName: 'Pais',
								name: 'pais',
								type: 'string',
								default: '',
								description: 'Pais do endereco',
							},
						],
					},
				],
				description: 'Endereco do contato',
			},
			{
				displayName: 'ID Tipo Contato',
				name: 'tiposContato',
				type: 'string',
				default: '',
				description: 'IDs dos tipos de contato (separados por virgula)',
			},
			{
				displayName: 'Limite de Credito',
				name: 'limiteCredito',
				type: 'number',
				default: 0,
				description: 'Limite de credito do contato',
			},
			{
				displayName: 'Data de Nascimento',
				name: 'dataNascimento',
				type: 'string',
				default: '',
				description: 'Data de nascimento do contato (AAAA-MM-DD)',
			},
			{
				displayName: 'Sexo',
				name: 'sexo',
				type: 'options',
				options: [
					{ name: 'Masculino', value: 'M' },
					{ name: 'Feminino', value: 'F' },
				],
				default: 'M',
				description: 'Sexo do contato',
			},
			{
				displayName: 'Naturalidade',
				name: 'naturalidade',
				type: 'string',
				default: '',
				description: 'Naturalidade do contato',
			},
		],
	},

	// ----------------------------------
	//         contato: update - updateFields
	// ----------------------------------
	{
		displayName: 'Campos para Atualizar',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['contato'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Nome',
				name: 'nome',
				type: 'string',
				default: '',
				description: 'Nome do contato',
			},
			{
				displayName: 'Fantasia',
				name: 'fantasia',
				type: 'string',
				default: '',
				description: 'Nome fantasia do contato',
			},
			{
				displayName: 'Tipo Pessoa',
				name: 'tipoPessoa',
				type: 'options',
				options: [
					{ name: 'Juridica', value: 'J' },
					{ name: 'Fisica', value: 'F' },
					{ name: 'Estrangeiro', value: 'E' },
				],
				default: 'J',
				description: 'Tipo de pessoa do contato',
			},
			{
				displayName: 'Contribuinte',
				name: 'contribuinte',
				type: 'options',
				options: [
					{ name: 'Contribuinte ICMS', value: 1 },
					{ name: 'Contribuinte isento', value: 2 },
					{ name: 'Nao contribuinte', value: 9 },
				],
				default: 9,
				description: 'Indicador de contribuinte do contato',
			},
			{
				displayName: 'CPF/CNPJ',
				name: 'numeroDocumento',
				type: 'string',
				default: '',
				description: 'CPF ou CNPJ do contato',
			},
			{
				displayName: 'Inscricao Estadual',
				name: 'ie',
				type: 'string',
				default: '',
				description: 'Inscricao estadual do contato',
			},
			{
				displayName: 'RG',
				name: 'rg',
				type: 'string',
				default: '',
				description: 'RG do contato',
			},
			{
				displayName: 'Orgao Emissor',
				name: 'orgaoEmissor',
				type: 'string',
				default: '',
				description: 'Orgao emissor do RG',
			},
			{
				displayName: 'E-mail',
				name: 'email',
				type: 'string',
				placeholder: 'nome@email.com',
				default: '',
				description: 'E-mail do contato',
			},
			{
				displayName: 'Telefone',
				name: 'telefone',
				type: 'string',
				default: '',
				description: 'Telefone do contato',
			},
			{
				displayName: 'Celular',
				name: 'celular',
				type: 'string',
				default: '',
				description: 'Celular do contato',
			},
			{
				displayName: 'Observacao',
				name: 'observacao',
				type: 'string',
				default: '',
				description: 'Observacao do contato',
			},
			{
				displayName: 'ID Vendedor',
				name: 'vendedor',
				type: 'number',
				default: 0,
				description: 'ID do vendedor vinculado ao contato',
			},
			{
				displayName: 'Endereco',
				name: 'endereco',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Adicionar Endereco',
				options: [
					{
						displayName: 'Endereco',
						name: 'enderecoData',
						values: [
							{
								displayName: 'Endereco',
								name: 'endereco',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Numero',
								name: 'numero',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Complemento',
								name: 'complemento',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Bairro',
								name: 'bairro',
								type: 'string',
								default: '',
							},
							{
								displayName: 'CEP',
								name: 'cep',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Municipio',
								name: 'municipio',
								type: 'string',
								default: '',
							},
							{
								displayName: 'UF',
								name: 'uf',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Pais',
								name: 'pais',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'Limite de Credito',
				name: 'limiteCredito',
				type: 'number',
				default: 0,
				description: 'Limite de credito do contato',
			},
		],
	},

	// ----------------------------------
	//         contato: getAll - returnAll
	// ----------------------------------
	{
		displayName: 'Retornar Todos',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['contato'],
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
				resource: ['contato'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		description: 'Max number of results to return',
	},

	// ----------------------------------
	//         contato: getAll - filters
	// ----------------------------------
	{
		displayName: 'Filtros',
		name: 'filters',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['contato'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Pesquisa',
				name: 'pesquisa',
				type: 'string',
				default: '',
				description: 'Pesquisa por nome ou documento do contato',
			},
			{
				displayName: 'Criterio',
				name: 'criterio',
				type: 'options',
				options: [
					{ name: 'Todos', value: 0 },
					{ name: 'Clientes', value: 1 },
					{ name: 'Fornecedores', value: 2 },
					{ name: 'Vendedores', value: 3 },
					{ name: 'Transportadoras', value: 4 },
				],
				default: 0,
				description: 'Criterio de busca do contato',
			},
			{
				displayName: 'ID Contato',
				name: 'idContato',
				type: 'number',
				default: 0,
				description: 'ID do contato para filtro',
			},
			{
				displayName: 'Data Inclusao Inicial',
				name: 'dataInclusaoInicial',
				type: 'string',
				default: '',
				description: 'Data de inclusao inicial (AAAA-MM-DD)',
			},
			{
				displayName: 'Data Inclusao Final',
				name: 'dataInclusaoFinal',
				type: 'string',
				default: '',
				description: 'Data de inclusao final (AAAA-MM-DD)',
			},
			{
				displayName: 'Data Alteracao Inicial',
				name: 'dataAlteracaoInicial',
				type: 'string',
				default: '',
				description: 'Data de alteracao inicial (AAAA-MM-DD)',
			},
			{
				displayName: 'Data Alteracao Final',
				name: 'dataAlteracaoFinal',
				type: 'string',
				default: '',
				description: 'Data de alteracao final (AAAA-MM-DD)',
			},
			{
				displayName: 'Tipo Pessoa',
				name: 'tipoPessoa',
				type: 'options',
				options: [
					{ name: 'Juridica', value: 'J' },
					{ name: 'Fisica', value: 'F' },
					{ name: 'Estrangeiro', value: 'E' },
				],
				default: 'J',
				description: 'Tipo de pessoa do contato',
			},
			{
				displayName: 'Situacao',
				name: 'situacao',
				type: 'options',
				options: [
					{ name: 'Ativo', value: 'A' },
					{ name: 'Excluido', value: 'E' },
					{ name: 'Inativo', value: 'I' },
					{ name: 'Sem movimentacao', value: 'S' },
				],
				default: 'A',
				description: 'Situacao do contato',
			},
			{
				displayName: 'ID Tipo Contato',
				name: 'idTipoContato',
				type: 'number',
				default: 0,
				description: 'ID do tipo de contato',
			},
			{
				displayName: 'ID Vendedor',
				name: 'idVendedor',
				type: 'number',
				default: 0,
				description: 'ID do vendedor vinculado',
			},
			{
				displayName: 'Numero CPF/CNPJ',
				name: 'numeroCpfCnpj',
				type: 'string',
				default: '',
				description: 'Numero do CPF ou CNPJ',
			},
		],
	},

	// ----------------------------------
	//         contato: changeSituation - situacao
	// ----------------------------------
	{
		displayName: 'Situacao',
		name: 'situacao',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['contato'],
				operation: ['changeSituation'],
			},
		},
		options: [
			{ name: 'Ativo', value: 'A' },
			{ name: 'Inativo', value: 'I' },
			{ name: 'Excluido', value: 'E' },
			{ name: 'Sem movimentacao', value: 'S' },
		],
		default: 'A',
		description: 'Nova situacao do contato',
	},
];
