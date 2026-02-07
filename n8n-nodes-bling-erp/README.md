# n8n-nodes-bling-erp

[![npm version](https://img.shields.io/npm/v/n8n-nodes-bling-erp.svg)](https://www.npmjs.com/package/n8n-nodes-bling-erp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![n8n community node](https://img.shields.io/badge/n8n-community%20node-orange)](https://n8n.io)

Community node para [n8n](https://n8n.io/) que integra com a [API v3 do Bling ERP](https://developer.bling.com.br/referencia).

O Bling é um sistema ERP brasileiro amplamente utilizado para gestão empresarial — emissão de notas fiscais (NFe, NFCe, NFSe), controle de estoque, vendas, financeiro, logística e muito mais. Este node oferece cobertura completa da API v3 com **39 recursos** e mais de **220 operações**.

---

Community node for [n8n](https://n8n.io/) that integrates with the [Bling ERP API v3](https://developer.bling.com.br/referencia).

Bling is a Brazilian ERP system widely used for business management — invoicing (NFe, NFCe, NFSe), inventory control, sales, financial management, logistics and more. This node provides full coverage of the v3 API with **39 resources** and over **220 operations**.

---

## Índice / Table of Contents

- [Sobre / About](#sobre--about)
- [Instalação / Installation](#instalação--installation)
- [Configuração OAuth2 / OAuth2 Setup](#configuração-oauth2--oauth2-setup)
- [Recursos e Operações / Resources & Operations](#recursos-e-operações--resources--operations)
  - [Anúncio](#1-anúncio-advertisementlisting)
  - [Borderô](#2-borderô-border-document)
  - [Caixa/Banco](#3-caixabanco-cashbank)
  - [Campo Customizado](#4-campo-customizado-custom-field)
  - [Canal de Venda](#5-canal-de-venda-sales-channel)
  - [Categoria de Loja](#6-categoria-de-loja-store-category)
  - [Categoria de Produto](#7-categoria-de-produto-product-category)
  - [Categoria Receita/Despesa](#8-categoria-receitadespesa-incomeexpense-category)
  - [Conta a Pagar](#9-conta-a-pagar-accounts-payable)
  - [Conta a Receber](#10-conta-a-receber-accounts-receivable)
  - [Conta Contábil](#11-conta-contábil-accounting-account)
  - [Contato](#12-contato-contact)
  - [Contrato](#13-contrato-contract)
  - [Depósito](#14-depósito-warehouse)
  - [Empresa](#15-empresa-company)
  - [Estoque](#16-estoque-stock)
  - [Forma de Pagamento](#17-forma-de-pagamento-payment-method)
  - [Grupo de Produto](#18-grupo-de-produto-product-group)
  - [Homologação](#19-homologação-homologation)
  - [Logística](#20-logística-logistics)
  - [Logística - Objeto/Remessa](#21-logística---objetoremessa-logistics-objectshipment)
  - [Logística - Serviço](#22-logística---serviço-logistics-service)
  - [Natureza de Operação](#23-natureza-de-operação-operation-nature)
  - [NFCe](#24-nfce-nota-fiscal-de-consumidor-eletrônica)
  - [NFe](#25-nfe-nota-fiscal-eletrônica)
  - [NFSe](#26-nfse-nota-fiscal-de-serviço-eletrônica)
  - [Notificação](#27-notificação-notification)
  - [Ordem de Produção](#28-ordem-de-produção-production-order)
  - [Pedido de Compra](#29-pedido-de-compra-purchase-order)
  - [Pedido de Venda](#30-pedido-de-venda-sales-order)
  - [Produto](#31-produto-product)
  - [Produto - Estrutura](#32-produto---estrutura-product-structurebom)
  - [Produto - Fornecedor](#33-produto---fornecedor-product-supplier)
  - [Produto - Loja](#34-produto---loja-product-store)
  - [Produto - Lote](#35-produto---lote-product-lot)
  - [Produto - Variação](#36-produto---variação-product-variation)
  - [Proposta Comercial](#37-proposta-comercial-commercial-proposal)
  - [Situação](#38-situação-status)
  - [Vendedor](#39-vendedor-seller)
- [Bling ERP Trigger](#bling-erp-trigger)
- [Configurações Avançadas / Advanced Settings](#configurações-avançadas--advanced-settings)
- [Exemplos de Workflows / Workflow Examples](#exemplos-de-workflows--workflow-examples)
- [Compatibilidade / Compatibility](#compatibilidade--compatibility)
- [Desenvolvimento / Development](#desenvolvimento--development)
- [Changelog](#changelog)
- [Licença / License](#licença--license)
- [Links Úteis / Useful Links](#links-úteis--useful-links)

---

## Sobre / About

### PT-BR

O **Bling ERP** é uma das plataformas de gestão empresarial (ERP) mais populares do Brasil, utilizada por milhares de empresas para:

- Emissão de notas fiscais eletrônicas (NFe, NFCe, NFSe)
- Gestão de estoque e depósitos
- Controle de vendas e pedidos
- Contas a pagar e receber
- Cadastro de contatos (clientes, fornecedores)
- Logística e rastreamento
- Integrações com marketplaces

Este community node permite que você conecte o Bling ao n8n e automatize todos esses processos, utilizando a **API v3** oficial do Bling com autenticação OAuth2.

### EN

**Bling ERP** is one of the most popular business management platforms in Brazil, used by thousands of companies for invoicing, inventory management, sales, financial control, logistics and more.

This community node connects Bling to n8n, allowing you to automate all these processes using Bling's official **v3 API** with OAuth2 authentication.

---

## Instalação / Installation

### Via n8n UI (Recomendado / Recommended)

1. Acesse **Settings > Community Nodes** / Go to **Settings > Community Nodes**
2. Clique em **Install a community node** / Click **Install a community node**
3. Digite / Type: `n8n-nodes-bling-erp`
4. Clique em **Install** / Click **Install**

### Via npm (Self-hosted)

```bash
cd ~/.n8n
npm install n8n-nodes-bling-erp
```

Reinicie o n8n após a instalação. / Restart n8n after installation.

### Desenvolvimento Local / Local Development

```bash
git clone https://github.com/kprprivate/bling-n8n-community-node.git
cd bling-n8n-community-node/n8n-nodes-bling-erp
npm install
npm run build
npm link

# No diretório do n8n / In your n8n directory:
cd ~/.n8n
npm link n8n-nodes-bling-erp
```

---

## Configuração OAuth2 / OAuth2 Setup

### 1. Criar Aplicativo no Portal Bling / Create App in Bling Portal

1. Acesse o [Portal do Desenvolvedor Bling](https://developer.bling.com.br/aplicativos)
2. Clique em **Criar Aplicativo**
3. Preencha os dados:
   - **Nome do Aplicativo**: ex. "n8n Integration"
   - **URL de Callback**: use a URL fornecida pelo n8n (veja passo 3 abaixo)
4. Após criar, copie o **Client ID** e o **Client Secret**

### 2. Configurar Credencial no n8n / Configure Credential in n8n

1. No n8n, vá em **Credentials > New Credential**
2. Busque por **Bling OAuth2 API**
3. Preencha:
   - **Client ID**: cole o Client ID do portal Bling
   - **Client Secret**: cole o Client Secret do portal Bling
4. Copie a **OAuth Redirect URL** exibida pelo n8n

### 3. Configurar Callback URL / Configure Callback URL

1. Volte ao [Portal do Desenvolvedor Bling](https://developer.bling.com.br/aplicativos)
2. Edite seu aplicativo
3. Cole a **OAuth Redirect URL** do n8n no campo de callback
4. Salve

### 4. Conectar / Connect

1. No n8n, clique em **Connect my account** na credencial
2. Autorize o acesso na tela do Bling
3. A credencial ficará com status "Connected"

### URLs OAuth2

| Parâmetro | URL |
|---|---|
| Authorization URL | `https://bling.com.br/Api/v3/oauth/authorize` |
| Token URL | `https://bling.com.br/Api/v3/oauth/token` |
| API Base URL | `https://api.bling.com.br/Api/v3` |

### Renovação de Tokens / Token Refresh

O n8n gerencia automaticamente a renovação dos tokens OAuth2. Não é necessária nenhuma ação manual — quando o access token expira, o refresh token é usado automaticamente para obter um novo.

### Troubleshooting de Autenticação / Auth Troubleshooting

| Problema | Solução |
|---|---|
| "Invalid client" | Verifique se Client ID e Client Secret estão corretos |
| "Redirect URI mismatch" | A callback URL no portal Bling deve ser exatamente igual à do n8n |
| Token expirado | Reconecte a credencial clicando em "Connect my account" novamente |
| Erro 401 | Verifique se o aplicativo está ativo no portal Bling |

---

## Recursos e Operações / Resources & Operations

### 1. Anúncio (Advertisement/Listing)

Gerencia anúncios publicados em marketplaces integrados ao Bling.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter Todos | Lista todos os anúncios | GET | `/anuncios` |
| Obter | Obtém um anúncio por ID | GET | `/anuncios/{id}` |
| Criar | Cria um novo anúncio | POST | `/anuncios` |
| Atualizar | Atualiza um anúncio | PUT | `/anuncios/{id}` |
| Excluir | Remove um anúncio | DELETE | `/anuncios/{id}` |
| Obter Categorias | Lista categorias de anúncios | GET | `/anuncios/categorias` |
| Obter Categoria | Obtém uma categoria por ID | GET | `/anuncios/categorias/{id}` |

**Campos para Criar:**
- `idProduto` (number): ID do produto
- `idLoja` (number): ID da loja/marketplace
- `preco` (number): Preço do anúncio
- `idCategoria` (number): ID da categoria
- `titulo` (string): Título do anúncio
- `descricao` (string): Descrição
- `codigo` (string): Código do anúncio
- `tipoAnuncio` (string): Tipo do anúncio
- `situacao` (string): Situação

**Filtros do getAll:** `situacao`, `idProduto`, `tipoIntegracao`, `idLoja`

---

### 2. Borderô (Border Document)

Borderôs são documentos de controle financeiro que agrupam títulos para cobrança bancária.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter | Obtém um borderô por ID | GET | `/borderos/{id}` |
| Excluir | Remove um borderô | DELETE | `/borderos/{id}` |

**Campos obrigatórios:** `borderoId` (number): ID do borderô

---

### 3. Caixa/Banco (Cash/Bank)

Gerencia movimentações financeiras de caixas e contas bancárias.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria uma movimentação | POST | `/caixas` |
| Obter | Obtém uma movimentação por ID | GET | `/caixas/{id}` |
| Obter Todos | Lista movimentações | GET | `/caixas` |
| Atualizar | Atualiza uma movimentação | PUT | `/caixas/{id}` |
| Excluir | Remove uma movimentação | DELETE | `/caixas/{id}` |

**Campos para Criar:**
- `data` (string): Data da movimentação
- `valor` (number): Valor
- `debCred` (string): Débito ou Crédito
- `competencia` (string): Competência
- `observacoes` (string): Observações
- `idContaContabil` (number): ID da conta contábil
- `transferencia` (boolean): É transferência
- `idContaFinanceira` (number): ID da conta financeira
- `idCategoria` (number): ID da categoria
- `idContato` (number): ID do contato

**Filtros do getAll:** `dataInicial`, `dataFinal`, `idsCategorias`, `idContaFinanceira`, `pesquisa`, `valor`, `situacaoConciliacao`, `situacao`

---

### 4. Campo Customizado (Custom Field)

Gerencia campos personalizados que podem ser adicionados a diferentes módulos do Bling.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter Todos | Lista campos customizados | GET | `/campos-customizados/modulos/{id}` |
| Obter | Obtém um campo por ID | GET | `/campos-customizados/{id}` |
| Criar | Cria um campo customizado | POST | `/campos-customizados` |
| Atualizar | Atualiza um campo | PUT | `/campos-customizados/{id}` |
| Excluir | Remove um campo | DELETE | `/campos-customizados/{id}` |
| Obter Módulos | Lista módulos disponíveis | GET | `/campos-customizados/modulos` |
| Obter Tipos | Lista tipos de campos | GET | `/campos-customizados/tipos` |

**Campos para Criar:**
- `nome` (string): Nome do campo
- `idModulo` (number): ID do módulo
- `tipo` (string): Tipo do campo
- `situacao` (string): Situação
- `obrigatorio` (boolean): Obrigatório
- `tamanho` (number): Tamanho máximo
- `opcoes` (string): Opções (para campos de seleção)

---

### 5. Canal de Venda (Sales Channel)

Consulta canais de venda (marketplaces e lojas) integrados ao Bling.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter Todos | Lista canais de venda | GET | `/canais-venda` |
| Obter Tipos | Lista tipos de canais | GET | `/canais-venda/tipos` |

---

### 6. Categoria de Loja (Store Category)

Gerencia categorias utilizadas em lojas virtuais integradas ao Bling.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria uma categoria de loja | POST | `/categorias/lojas` |
| Obter | Obtém uma categoria por ID | GET | `/categorias/lojas/{id}` |
| Obter Todos | Lista categorias de loja | GET | `/categorias/lojas` |
| Atualizar | Atualiza uma categoria | PUT | `/categorias/lojas/{id}` |
| Excluir | Remove uma categoria | DELETE | `/categorias/lojas/{id}` |

**Campos para Criar:**
- `descricao` (string): Descrição da categoria
- `idLoja` (number): ID da loja
- `idCategoriaPai` (number): ID da categoria pai
- `codigo` (string): Código
- `idCategoriaProduto` (number): ID da categoria de produto

**Filtros do getAll:** `idLoja`, `idCategoriaProduto`, `idCategoriaProdutoPai`

---

### 7. Categoria de Produto (Product Category)

Gerencia a árvore de categorias para classificação de produtos.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria uma categoria | POST | `/categorias/produtos` |
| Obter | Obtém uma categoria por ID | GET | `/categorias/produtos/{id}` |
| Obter Todos | Lista categorias | GET | `/categorias/produtos` |
| Atualizar | Atualiza uma categoria | PUT | `/categorias/produtos/{id}` |
| Excluir | Remove uma categoria | DELETE | `/categorias/produtos/{id}` |

**Campos obrigatórios (create):** `descricao` (string): Descrição da categoria

**Campos opcionais:** `idCategoriaPai` (number): Categoria pai (para subcategorias)

---

### 8. Categoria Receita/Despesa (Income/Expense Category)

Gerencia categorias financeiras para classificação de receitas e despesas.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria uma categoria | POST | `/categorias/receitas-despesas` |
| Obter | Obtém uma categoria por ID | GET | `/categorias/receitas-despesas/{id}` |
| Obter Todos | Lista categorias | GET | `/categorias/receitas-despesas` |
| Atualizar | Atualiza uma categoria | PUT | `/categorias/receitas-despesas/{id}` |
| Excluir | Remove uma categoria | DELETE | `/categorias/receitas-despesas/{id}` |

**Campos obrigatórios (create):** `descricao` (string): Descrição

**Campos opcionais:** `idCategoriaPai` (number): Categoria pai, `tipo` (string): Tipo (receita/despesa)

---

### 9. Conta a Pagar (Accounts Payable)

Gerencia títulos financeiros de contas a pagar — fornecedores, despesas, obrigações.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria uma conta a pagar | POST | `/contas/pagar` |
| Obter | Obtém uma conta por ID | GET | `/contas/pagar/{id}` |
| Obter Todos | Lista contas a pagar | GET | `/contas/pagar` |
| Atualizar | Atualiza uma conta | PUT | `/contas/pagar/{id}` |
| Excluir | Remove uma conta | DELETE | `/contas/pagar/{id}` |
| Liquidar | Baixa/liquida uma conta | POST | `/contas/pagar/{id}/baixar` |

**Campos para Criar:**
- `vencimento` (string): Data de vencimento
- `valor` (number): Valor do título
- `contato` (number): ID do fornecedor/contato
- `historico` (string): Histórico/descrição
- `numeroDocumento` (string): Número do documento
- `competencia` (string): Competência
- `formaPagamento` (number): ID da forma de pagamento
- `portador` (number): ID do portador (conta financeira)
- `categoria` (number): ID da categoria
- `ocorrencia` (string): Tipo de ocorrência (Única, Parcelada, Mensal)
- `observacoes` (string): Observações

**Campos para Liquidar:**
- `dataPagamento` (string): Data do pagamento
- `valorPago` (number): Valor pago
- `juros` (number): Juros
- `desconto` (number): Desconto
- `acrescimo` (number): Acréscimo
- `tarifa` (number): Tarifa bancária
- `portador` (number): ID do portador

**Filtros do getAll:** `situacao`, `dataVencimentoInicial`, `dataVencimentoFinal`, `dataEmissaoInicial`, `dataEmissaoFinal`, `dataPagamentoInicial`, `dataPagamentoFinal`, `idContato`, `idPortador`, `idFormaPagamento`, `idCategoria`, `numeroDocumento`

---

### 10. Conta a Receber (Accounts Receivable)

Gerencia títulos financeiros de contas a receber — clientes, vendas, serviços.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria uma conta a receber | POST | `/contas/receber` |
| Obter | Obtém uma conta por ID | GET | `/contas/receber/{id}` |
| Obter Todos | Lista contas a receber | GET | `/contas/receber` |
| Atualizar | Atualiza uma conta | PUT | `/contas/receber/{id}` |
| Excluir | Remove uma conta | DELETE | `/contas/receber/{id}` |
| Liquidar | Baixa/liquida uma conta | POST | `/contas/receber/{id}/baixar` |

**Campos para Criar:**
- `vencimento` (string): Data de vencimento
- `valor` (number): Valor do título
- `contato` (number): ID do cliente/contato
- `historico` (string): Histórico/descrição
- `numeroDocumento` (string): Número do documento
- `competencia` (string): Competência
- `formaPagamento` (number): ID da forma de pagamento
- `portador` (number): ID do portador
- `categoria` (number): ID da categoria
- `vendedor` (number): ID do vendedor
- `ocorrencia` (string): Tipo de ocorrência
- `observacoes` (string): Observações

**Campos para Liquidar:**
- `dataRecebimento` (string): Data do recebimento
- `valorRecebido` (number): Valor recebido
- `juros` (number): Juros
- `desconto` (number): Desconto
- `acrescimo` (number): Acréscimo
- `tarifa` (number): Tarifa bancária
- `portador` (number): ID do portador

**Filtros do getAll:** `situacao`, `dataVencimentoInicial`, `dataVencimentoFinal`, `dataEmissaoInicial`, `dataEmissaoFinal`, `dataPagamentoInicial`, `dataPagamentoFinal`, `idContato`, `idPortador`, `idFormaPagamento`, `idCategoria`, `idVendedor`, `numeroDocumento`

---

### 11. Conta Contábil (Accounting Account)

Consulta contas do plano contábil cadastrado no Bling.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter Todos | Lista contas contábeis | GET | `/contas-contabeis` |
| Obter | Obtém uma conta por ID | GET | `/contas-contabeis/{id}` |

**Filtros do getAll:** `ocultarInvisiveis`, `ocultarTipoContaBancaria`, `situacoes`, `aliasIntegracao`, `ordenacao`

---

### 12. Contato (Contact)

Gerencia contatos (clientes, fornecedores, transportadoras) no Bling. É um dos recursos mais utilizados.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria um novo contato | POST | `/contatos` |
| Obter | Obtém um contato por ID | GET | `/contatos/{id}` |
| Obter Todos | Lista contatos | GET | `/contatos` |
| Atualizar | Atualiza um contato | PUT | `/contatos/{id}` |
| Excluir | Remove um contato | DELETE | `/contatos/{id}` |
| Obter Tipos | Lista tipos de contato | GET | `/contatos/tipos` |
| Alterar Situação | Altera situação do contato | PATCH | `/contatos/{id}/situacoes` |

**Campos obrigatórios (create):** `nome` (string): Nome do contato

**Campos opcionais (create/update):**
- `fantasia` (string): Nome fantasia
- `tipoPessoa` (options): Tipo de pessoa — `J` (Jurídica), `F` (Física), `E` (Estrangeiro)
- `contribuinte` (options): Contribuinte ICMS — `1` (Contribuinte), `2` (Isento), `9` (Não contribuinte)
- `numeroDocumento` (string): CPF/CNPJ
- `ie` (string): Inscrição Estadual
- `rg` (string): RG
- `orgaoEmissor` (string): Órgão emissor do RG
- `email` (string): E-mail
- `telefone` (string): Telefone fixo
- `celular` (string): Celular
- `fax` (string): Fax
- `outrasInformacoes` (string): Outras informações
- `observacao` (string): Observação
- `vendedor` (number): ID do vendedor
- `endereco` (collection): Endereço completo — `endereco`, `numero`, `complemento`, `bairro`, `cep`, `municipio`, `uf`, `pais`
- `tiposContato` (string): IDs dos tipos de contato
- `limiteCredito` (number): Limite de crédito
- `dataNascimento` (string): Data de nascimento
- `sexo` (options): Sexo — `M` (Masculino), `F` (Feminino)
- `naturalidade` (string): Naturalidade

**Situações para Alterar Situação:**
- `A` — Ativo
- `I` — Inativo
- `E` — Excluído
- `S` — Sem movimento

**Filtros do getAll:** `pesquisa`, `criterio`, `idContato`, `dataInclusaoInicial`, `dataInclusaoFinal`, `dataAlteracaoInicial`, `dataAlteracaoFinal`, `tipoPessoa`, `situacao`, `idTipoContato`, `idVendedor`, `numeroCpfCnpj`

---

### 13. Contrato (Contract)

Gerencia contratos de serviço recorrentes com clientes.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria um contrato | POST | `/contratos` |
| Obter | Obtém um contrato por ID | GET | `/contratos/{id}` |
| Obter Todos | Lista contratos | GET | `/contratos` |
| Atualizar | Atualiza um contrato | PUT | `/contratos/{id}` |
| Excluir | Remove um contrato | DELETE | `/contratos/{id}` |

**Campos para Criar:**
- `descricao` (string): Descrição do contrato
- `idContato` (number): ID do cliente
- `dataInicio` (string): Data de início
- `dataFim` (string): Data de término
- `valor` (number): Valor
- `situacao` (string): Situação
- `observacao` (string): Observação
- `idVendedor` (number): ID do vendedor
- `numero` (string): Número do contrato

**Filtros do getAll:** `situacao`, `idContato`, `dataInicio`, `dataFim`

---

### 14. Depósito (Warehouse)

Gerencia depósitos/armazéns para controle de estoque em múltiplas localizações.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria um depósito | POST | `/depositos` |
| Obter | Obtém um depósito por ID | GET | `/depositos/{id}` |
| Obter Todos | Lista depósitos | GET | `/depositos` |
| Atualizar | Atualiza um depósito | PUT | `/depositos/{id}` |

**Campos obrigatórios (create):** `descricao` (string): Descrição do depósito

**Campos opcionais:** `situacao` (string): Situação, `padrao` (boolean): Depósito padrão, `desconsiderarSaldo` (boolean): Desconsiderar saldo

**Filtros do getAll:** `descricao`, `situacao`

---

### 15. Empresa (Company)

Obtém os dados básicos da empresa vinculada à conta Bling.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter | Obtém dados da empresa | GET | `/empresas/me/dados-basicos` |

Retorna informações como razão social, CNPJ, endereço, regime tributário, etc.

---

### 16. Estoque (Stock)

Gerencia movimentações e saldos de estoque dos produtos.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter Saldos | Consulta saldos de estoque | GET | `/estoques/saldos` |
| Criar | Cria movimentação de estoque | POST | `/estoques` |
| Atualizar | Atualiza movimentação | PUT | `/estoques` |

**Campos para Criar/Atualizar:**
- `produto` (number): ID do produto
- `deposito` (number): ID do depósito
- `operacao` (string): Tipo de operação (Entrada/Saída)
- `quantidade` (number): Quantidade
- `preco` (number): Preço unitário
- `observacoes` (string): Observações

**Filtros do Obter Saldos:** `idsProdutos`, `idsDepositos`, `codigo`, `nome`

---

### 17. Forma de Pagamento (Payment Method)

Gerencia formas de pagamento disponíveis no sistema.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria forma de pagamento | POST | `/formas-pagamentos` |
| Obter | Obtém por ID | GET | `/formas-pagamentos/{id}` |
| Obter Todos | Lista formas de pagamento | GET | `/formas-pagamentos` |
| Atualizar | Atualiza forma de pagamento | PUT | `/formas-pagamentos/{id}` |
| Excluir | Remove forma de pagamento | DELETE | `/formas-pagamentos/{id}` |
| Definir Padrão | Define como padrão | PUT | `/formas-pagamentos/{id}/padrao` |

**Campos obrigatórios (create):** `descricao` (string): Descrição

**Campos opcionais:**
- `tipoPagamento` (string): Tipo de pagamento
- `situacao` (string): Situação (Ativo/Inativo)
- `padrao` (boolean): Padrão
- `finalidade` (string): Finalidade
- `condicao` (string): Condição de pagamento
- `destino` (string): Destino
- `juros` (number): Taxa de juros
- `multa` (number): Multa
- `utilizaDiasUteis` (boolean): Usar dias úteis
- `taxaAliquota` (number): Alíquota da taxa
- `taxaValor` (number): Valor da taxa
- `taxaPrazo` (number): Prazo da taxa
- `dadosCartao` (collection): Dados de cartão

**Filtros do getAll:** `descricao`, `tiposPagamentos`, `situacao`

---

### 18. Grupo de Produto (Product Group)

Gerencia grupos para organização hierárquica de produtos.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria um grupo | POST | `/grupos-produtos` |
| Obter | Obtém um grupo por ID | GET | `/grupos-produtos/{id}` |
| Obter Todos | Lista grupos | GET | `/grupos-produtos` |
| Atualizar | Atualiza um grupo | PUT | `/grupos-produtos/{id}` |
| Excluir | Remove um grupo | DELETE | `/grupos-produtos/{id}` |

**Campos obrigatórios (create):** `nome` (string): Nome do grupo

**Campos opcionais:** `idGrupoPai` (number): Grupo pai

**Filtros do getAll:** `nome`, `idGrupoPai`

---

### 19. Homologação (Homologation)

Gerencia homologações de produtos — processo de certificação junto a fornecedores.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter Todos | Lista homologações | GET | `/homologacao/produtos` |
| Obter | Obtém uma homologação por ID | GET | `/homologacao/produtos/{id}` |
| Criar | Cria uma homologação | POST | `/homologacao/produtos` |
| Atualizar | Atualiza uma homologação | PUT | `/homologacao/produtos/{id}` |
| Excluir | Remove uma homologação | DELETE | `/homologacao/produtos/{id}` |

**Campos para Criar:**
- `descricao` (string): Descrição
- `idProduto` (number): ID do produto
- `idFornecedor` (number): ID do fornecedor
- `situacao` (string): Situação
- `dataValidade` (string): Data de validade
- `observacao` (string): Observação

---

### 20. Logística (Logistics)

Gerencia integrações logísticas (transportadoras, Correios, etc.).

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria uma logística | POST | `/logisticas` |
| Obter | Obtém por ID | GET | `/logisticas/{id}` |
| Obter Todos | Lista logísticas | GET | `/logisticas` |
| Atualizar | Atualiza uma logística | PUT | `/logisticas/{id}` |
| Excluir | Remove uma logística | DELETE | `/logisticas/{id}` |

**Campos para Criar:**
- `descricao` (string): Descrição
- `nomeServico` (string): Nome do serviço
- `codigoServico` (string): Código do serviço
- `tipoIntegracao` (string): Tipo de integração
- `situacao` (string): Situação
- `fretePorConta` (string): Frete por conta de (Remetente/Destinatário)

**Filtros do getAll:** `tipoIntegracao`, `situacao`, `logisticasReversas`

---

### 21. Logística - Objeto/Remessa (Logistics Object/Shipment)

Gerencia objetos de rastreamento e remessas logísticas.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter Todos | Lista objetos logísticos | GET | `/logisticas/objetos` |
| Obter | Obtém um objeto por ID | GET | `/logisticas/objetos/{id}` |
| Criar | Cria um objeto logístico | POST | `/logisticas/objetos` |
| Excluir | Remove um objeto | DELETE | `/logisticas/objetos/{id}` |
| Obter Etiqueta | Obtém etiqueta de envio | GET | `/logisticas/objetos/{id}/etiqueta` |
| Obter Remessas | Lista remessas do objeto | GET | `/logisticas/remessas` |
| Obter Remessa | Obtém uma remessa | GET | `/logisticas/remessas/{id}` |
| Criar Remessa | Cria uma remessa | POST | `/logisticas/remessas` |

**Campos para Criar Objeto:**
- `idLogistica` (number): ID da logística
- `idServico` (number): ID do serviço
- `idPedidoVenda` (number): ID do pedido de venda
- `codigoRastreamento` (string): Código de rastreamento
- `descricao` (string): Descrição
- `peso` (number): Peso (kg)
- `valorFrete` (number): Valor do frete
- `altura` (number): Altura (cm)
- `largura` (number): Largura (cm)
- `comprimento` (number): Comprimento (cm)
- `diametro` (number): Diâmetro (cm)

**Campos para Criar Remessa:**
- `descricao` (string): Descrição
- `dataEnvio` (string): Data de envio
- `observacao` (string): Observação

**Filtros do getAll:** `idLogistica`, `idServico`, `codigoRastreamento`, `idPedidoVenda`

---

### 22. Logística - Serviço (Logistics Service)

Gerencia serviços de entrega vinculados a uma logística.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria um serviço | POST | `/logisticas/servicos` |
| Obter | Obtém por ID | GET | `/logisticas/servicos/{id}` |
| Obter Todos | Lista serviços | GET | `/logisticas/servicos` |
| Atualizar | Atualiza um serviço | PUT | `/logisticas/servicos/{id}` |
| Excluir | Remove um serviço | DELETE | `/logisticas/servicos/{id}` |

**Campos para Criar:**
- `descricao` (string): Descrição
- `idLogistica` (number): ID da logística pai
- `codigo` (string): Código
- `aliases` (string): Apelidos
- `situacao` (string): Situação
- `fretePorConta` (string): Frete por conta de
- `prazoEntrega` (number): Prazo de entrega (dias)

**Filtros do getAll:** `idLogistica`

---

### 23. Natureza de Operação (Operation Nature)

Consulta naturezas de operação fiscal (CFOP) cadastradas no Bling.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter Todos | Lista naturezas de operação | GET | `/naturezas-operacoes` |

---

### 24. NFCe (Nota Fiscal de Consumidor Eletrônica)

Gerencia notas fiscais de consumidor eletrônicas — emitidas em operações presenciais de venda ao consumidor final.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria uma NFCe | POST | `/nfce` |
| Obter | Obtém uma NFCe por ID | GET | `/nfce/{id}` |
| Obter Todos | Lista NFCes | GET | `/nfce` |
| Atualizar | Atualiza uma NFCe | PUT | `/nfce/{id}` |
| Excluir | Remove uma NFCe | DELETE | `/nfce/{id}` |
| Enviar | Envia NFCe para a SEFAZ | POST | `/nfce/{id}/enviar` |
| Lançar Contas | Lança contas financeiras | POST | `/nfce/{id}/lancar-contas` |
| Estornar Contas | Estorna contas | POST | `/nfce/{id}/estornar-contas` |
| Lançar Estoque | Lança movimentação de estoque | POST | `/nfce/{id}/lancar-estoque` |
| Estornar Estoque | Estorna estoque | POST | `/nfce/{id}/estornar-estoque` |

**Campos para Criar:**
- `tipo` (string): Tipo da nota
- `naturezaOperacao` (string): Natureza da operação (CFOP)
- `idContato` (number): ID do cliente
- `finalidade` (string): Finalidade
- `seguro` (number): Valor do seguro
- `despesas` (number): Outras despesas
- `desconto` (number): Desconto
- `observacoes` (string): Observações
- `itens` (json): Itens da nota

**Filtros do getAll:** `idTransportador`, `chaveAcesso`, `numero`, `serie`, `situacao`, `dataEmissaoInicial`, `dataEmissaoFinal`

---

### 25. NFe (Nota Fiscal Eletrônica)

Gerencia notas fiscais eletrônicas — o principal documento fiscal brasileiro para operações de circulação de mercadorias.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria uma NFe | POST | `/nfe` |
| Obter | Obtém uma NFe por ID | GET | `/nfe/{id}` |
| Obter Todos | Lista NFes | GET | `/nfe` |
| Atualizar | Atualiza uma NFe | PUT | `/nfe/{id}` |
| Excluir | Remove uma NFe | DELETE | `/nfe/{id}` |
| Enviar | Envia NFe para a SEFAZ | POST | `/nfe/{id}/enviar` |
| Lançar Contas | Lança contas financeiras | POST | `/nfe/{id}/lancar-contas` |
| Estornar Contas | Estorna contas | POST | `/nfe/{id}/estornar-contas` |
| Lançar Estoque | Lança movimentação de estoque | POST | `/nfe/{id}/lancar-estoque` |
| Estornar Estoque | Estorna estoque | POST | `/nfe/{id}/estornar-estoque` |

**Campos para Criar:**
- `tipo` (string): Tipo (Entrada/Saída)
- `naturezaOperacao` (string): Natureza da operação
- `finalidade` (string): Finalidade da NFe
- `data` (string): Data de emissão
- `contato` (number): ID do destinatário
- `itens` (json): Itens da nota
- `parcelas` (json): Parcelas de pagamento
- `transporte` (json): Dados de transporte
- `observacoes` (string): Observações
- `desconto` (number): Desconto total
- `outrasDespesas` (number): Outras despesas
- `loja` (number): ID da loja

**Filtros do getAll:** `dataEmissaoInicial`, `dataEmissaoFinal`, `situacao`, `tipo`, `idContato`, `idLoja`, `numero`, `serie`, `dataInclusaoInicial`, `dataInclusaoFinal`, `dataAlteracaoInicial`, `dataAlteracaoFinal`

---

### 26. NFSe (Nota Fiscal de Serviço Eletrônica)

Gerencia notas fiscais de serviço eletrônicas — emitidas para prestação de serviços.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria uma NFSe | POST | `/nfse` |
| Obter | Obtém uma NFSe por ID | GET | `/nfse/{id}` |
| Obter Todos | Lista NFSes | GET | `/nfse` |
| Atualizar | Atualiza uma NFSe | PUT | `/nfse/{id}` |
| Excluir | Remove uma NFSe | DELETE | `/nfse/{id}` |
| Enviar | Envia NFSe para prefeitura | POST | `/nfse/{id}/enviar` |
| Cancelar | Cancela uma NFSe | POST | `/nfse/{id}/cancelar` |
| Obter Config. | Obtém configurações de NFSe | GET | `/nfse/configuracoes` |

**Campos para Criar:**
- `idContato` (number): ID do tomador de serviço
- `descricao` (string): Descrição do serviço
- `valor` (number): Valor
- `dataEmissao` (string): Data de emissão
- `observacoes` (string): Observações
- `idMunicipio` (number): ID do município
- `impostos` (json): Impostos
- `servicos` (json): Serviços

**Filtros do getAll:** `situacao`, `dataEmissaoInicial`, `dataEmissaoFinal`

---

### 27. Notificação (Notification)

Gerencia notificações do sistema Bling.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter Todos | Lista notificações | GET | `/notificacoes` |
| Confirmar Leitura | Marca como lida | POST | `/notificacoes/{id}/confirmar-leitura` |
| Obter Contagem | Obtém contagem de não lidas | GET | `/notificacoes/contagem` |

---

### 28. Ordem de Produção (Production Order)

Gerencia ordens de produção para produtos manufaturados.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria uma ordem | POST | `/ordens-producao` |
| Obter | Obtém uma ordem por ID | GET | `/ordens-producao/{id}` |
| Obter Todos | Lista ordens | GET | `/ordens-producao` |
| Atualizar | Atualiza uma ordem | PUT | `/ordens-producao/{id}` |
| Excluir | Remove uma ordem | DELETE | `/ordens-producao/{id}` |
| Gerar sob Demanda | Gera ordem automaticamente | POST | `/ordens-producao/gerar-sob-demanda` |

**Campos para Criar:**
- `idProduto` (number): ID do produto
- `quantidade` (number): Quantidade a produzir
- `idDeposito` (number): ID do depósito destino
- `dataPrevisao` (string): Data de previsão
- `observacao` (string): Observação
- `situacao` (string): Situação
- `numero` (string): Número da ordem

**Campos para Gerar sob Demanda:**
- `idProduto` (number): ID do produto
- `quantidade` (number): Quantidade
- `idDeposito` (number): ID do depósito
- `observacao` (string): Observação

**Filtros do getAll:** `situacao`, `idDeposito`, `idSituacao`, `dataInicio`, `dataFim`

---

### 29. Pedido de Compra (Purchase Order)

Gerencia pedidos de compra junto a fornecedores.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria um pedido de compra | POST | `/pedidos/compras` |
| Obter | Obtém por ID | GET | `/pedidos/compras/{id}` |
| Obter Todos | Lista pedidos | GET | `/pedidos/compras` |
| Atualizar | Atualiza um pedido | PUT | `/pedidos/compras/{id}` |
| Excluir | Remove um pedido | DELETE | `/pedidos/compras/{id}` |
| Lançar Contas | Lança contas a pagar | POST | `/pedidos/compras/{id}/lancar-contas` |
| Estornar Contas | Estorna contas | POST | `/pedidos/compras/{id}/estornar-contas` |
| Lançar Estoque | Lança estoque (entrada) | POST | `/pedidos/compras/{id}/lancar-estoque` |
| Estornar Estoque | Estorna estoque | POST | `/pedidos/compras/{id}/estornar-estoque` |

**Campos para Criar:**
- `idFornecedor` (number): ID do fornecedor
- `numero` (string): Número do pedido
- `data` (string): Data do pedido
- `dataPrevista` (string): Data prevista de entrega
- `desconto` (number): Desconto
- `frete` (number): Valor do frete
- `outrasDespesas` (number): Outras despesas
- `observacoes` (string): Observações
- `observacoesInternas` (string): Observações internas
- `itens` (json): Itens do pedido

**Filtros do getAll:** `idFornecedor`, `valorSituacao`, `idSituacao`, `dataInicial`, `dataFinal`, `idsNotasFiscais`

---

### 30. Pedido de Venda (Sales Order)

Gerencia pedidos de venda — o recurso central para fluxos comerciais no Bling.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria um pedido de venda | POST | `/pedidos/vendas` |
| Obter | Obtém por ID | GET | `/pedidos/vendas/{id}` |
| Obter Todos | Lista pedidos | GET | `/pedidos/vendas` |
| Atualizar | Atualiza um pedido | PUT | `/pedidos/vendas/{id}` |
| Excluir | Remove um pedido | DELETE | `/pedidos/vendas/{id}` |
| Gerar NFe | Gera NFe a partir do pedido | POST | `/pedidos/vendas/{id}/gerar-nfe` |
| Gerar NFCe | Gera NFCe a partir do pedido | POST | `/pedidos/vendas/{id}/gerar-nfce` |
| Lançar Contas | Lança contas a receber | POST | `/pedidos/vendas/{id}/lancar-contas` |
| Estornar Contas | Estorna contas | POST | `/pedidos/vendas/{id}/estornar-contas` |
| Lançar Estoque | Lança estoque (saída) | POST | `/pedidos/vendas/{id}/lancar-estoque` |
| Estornar Estoque | Estorna estoque | POST | `/pedidos/vendas/{id}/estornar-estoque` |

**Campos para Criar:**
- `contato` (number): ID do cliente
- `data` (string): Data do pedido
- `dataPrevista` (string): Data prevista
- `dataSaida` (string): Data de saída
- `numero` (string): Número do pedido
- `numeroLoja` (string): Número na loja
- `loja` (number): ID da loja
- `naturezaOperacao` (number): ID da natureza de operação
- `vendedor` (number): ID do vendedor
- `observacoes` (string): Observações
- `observacoesInternas` (string): Observações internas
- `desconto` (number): Desconto total
- `outrasDespesas` (number): Outras despesas
- `fretePorConta` (string): Frete por conta de
- `frete` (number): Valor do frete
- `itens` (json): Itens do pedido
- `parcelas` (json): Parcelas de pagamento
- `transporte` (json): Dados de transporte

**Filtros do getAll:** `dataInclusaoInicial`, `dataInclusaoFinal`, `dataAlteracaoInicial`, `dataAlteracaoFinal`, `dataPrevistaInicial`, `dataPrevistaFinal`, `idSituacao`, `idContato`, `idLoja`, `numero`, `idVendedor`, `numeroLoja`

---

### 31. Produto (Product)

Gerencia o cadastro de produtos — mercadorias, serviços e kits.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria um produto | POST | `/produtos` |
| Obter | Obtém por ID | GET | `/produtos/{id}` |
| Obter Todos | Lista produtos | GET | `/produtos` |
| Atualizar | Atualiza um produto | PUT | `/produtos/{id}` |
| Excluir | Remove um produto | DELETE | `/produtos/{id}` |
| Alterar Situação | Ativa/inativa produto | PATCH | `/produtos/{id}/situacoes` |

**Campos obrigatórios (create):**
- `nome` (string): Nome do produto
- `tipo` (options): Tipo — `S` (Serviço), `P` (Produto), `N` (Uso/Consumo)
- `formato` (options): Formato — `S` (Simples), `V` (Com variações), `E` (Com composição)

**Campos opcionais (create/update):**
- `codigo` (string): SKU/código interno
- `preco` (number): Preço de venda
- `precoCusto` (number): Preço de custo
- `pesoLiquido` (number): Peso líquido (kg)
- `pesoBruto` (number): Peso bruto (kg)
- `unidade` (string): Unidade de medida (UN, KG, CX, etc.)
- `gtin` (string): Código de barras (GTIN/EAN)
- `gtinEmbalagem` (string): GTIN da embalagem
- `tipoProducao` (string): Tipo de produção
- `condicao` (string): Condição (Novo/Usado/Recondicionado)
- `volumes` (number): Número de volumes
- `itensPorCaixa` (number): Itens por caixa
- `descricaoCurta` (string): Descrição curta
- `descricaoComplementar` (string): Descrição complementar
- `observacoes` (string): Observações internas
- `categoria` (number): ID da categoria
- `marca` (string): Marca
- `ncm` (string): Código NCM (fiscal)
- `cest` (string): Código CEST (fiscal)
- `largura` (number): Largura (cm)
- `altura` (number): Altura (cm)
- `profundidade` (number): Profundidade (cm)
- `estoque` (collection): Dados de estoque
- `tributacao` (collection): Dados de tributação

**Situações:** `A` (Ativo), `I` (Inativo)

**Filtros do getAll:** `pesquisa`, `tipo`, `situacao`, `criterio`, `dataInclusaoInicial`, `dataInclusaoFinal`, `dataAlteracaoInicial`, `dataAlteracaoFinal`, `idCategoria`, `idLoja`, `codigo`, `idGrupoProduto`

---

### 32. Produto - Estrutura (Product Structure/BOM)

Gerencia estruturas de produtos compostos (Bill of Materials) — define quais componentes formam um produto.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter | Obtém uma estrutura | GET | `/produtos/estruturas/{idProduto}` |
| Criar | Cria uma estrutura | POST | `/produtos/estruturas` |
| Atualizar | Atualiza uma estrutura | PUT | `/produtos/estruturas/{id}` |
| Criar Componente | Adiciona componente | POST | `/produtos/estruturas/{id}/componentes` |
| Atualizar Componente | Atualiza componente | PUT | `/produtos/estruturas/{id}/componentes/{idComp}` |
| Excluir Componente | Remove componente | DELETE | `/produtos/estruturas/{id}/componentes/{idComp}` |

**Campos para Criar Estrutura:**
- `tipo` (string): Tipo de estrutura
- `quantidadeDisponivel` (number): Quantidade disponível
- `lancarEstoque` (boolean): Lançar estoque automaticamente
- `componentes` (json): Lista de componentes

**Campos para Criar Componente:**
- `idProduto` (number): ID do produto componente
- `quantidade` (number): Quantidade necessária
- `custo` (number): Custo do componente

---

### 33. Produto - Fornecedor (Product Supplier)

Gerencia a vinculação entre produtos e seus fornecedores.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter Todos | Lista fornecedores do produto | GET | `/produtos/fornecedores` |
| Obter | Obtém um vínculo | GET | `/produtos/fornecedores/{id}` |
| Criar | Vincula fornecedor ao produto | POST | `/produtos/fornecedores` |
| Atualizar | Atualiza vínculo | PUT | `/produtos/fornecedores/{id}` |
| Excluir | Remove vínculo | DELETE | `/produtos/fornecedores/{id}` |

**Campos para Criar:**
- `idFornecedor` (number): ID do fornecedor
- `codigo` (string): Código no fornecedor
- `precoCusto` (number): Preço de custo
- `precoCompra` (number): Preço de compra
- `padrao` (boolean): Fornecedor padrão
- `descricao` (string): Descrição
- `codigoBarras` (string): Código de barras
- `garantia` (string): Garantia

---

### 34. Produto - Loja (Product Store)

Gerencia a publicação e dados de produtos em lojas virtuais integradas.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter Todos | Lista produtos na loja | GET | `/produtos/lojas` |
| Obter | Obtém dados do produto na loja | GET | `/produtos/lojas/{id}` |
| Criar | Vincula produto à loja | POST | `/produtos/lojas` |
| Atualizar | Atualiza dados na loja | PUT | `/produtos/lojas/{id}` |
| Excluir | Remove vínculo | DELETE | `/produtos/lojas/{id}` |

**Campos para Criar:**
- `idLoja` (number): ID da loja
- `preco` (number): Preço na loja
- `precoPromocional` (number): Preço promocional
- `descricao` (string): Descrição para a loja
- `descricaoCurta` (string): Descrição curta
- `codigoLoja` (string): Código na loja
- `idCategoria` (number): ID da categoria na loja
- `tituloSeo` (string): Título SEO
- `metaTagsSeo` (string): Meta tags SEO
- `slug` (string): URL amigável (slug)
- `marca` (string): Marca
- `estoque` (number): Estoque na loja

---

### 35. Produto - Lote (Product Lot)

Gerencia lotes de produtos — rastreabilidade por fabricação e validade.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter Todos | Lista lotes do produto | GET | `/produtos/lotes` |
| Obter | Obtém um lote | GET | `/produtos/lotes/{id}` |
| Criar | Cria um lote | POST | `/produtos/lotes` |
| Atualizar | Atualiza um lote | PUT | `/produtos/lotes/{id}` |
| Excluir | Remove um lote | DELETE | `/produtos/lotes/{id}` |

**Campos para Criar:**
- `codigo` (string): Código do lote
- `dataFabricacao` (string): Data de fabricação
- `dataValidade` (string): Data de validade
- `quantidade` (number): Quantidade
- `idDeposito` (number): ID do depósito
- `observacoes` (string): Observações

---

### 36. Produto - Variação (Product Variation)

Gerencia variações de produtos (tamanho, cor, etc.).

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter Todos | Lista variações do produto | GET | `/produtos/{id}/variacoes` |
| Obter Atributos | Lista atributos de variação | GET | `/produtos/variacoes/atributos` |
| Gerar Combinações | Gera combinações de variações | POST | `/produtos/variacoes/combinacoes` |
| Criar | Cria uma variação | POST | `/produtos/{id}/variacoes` |

**Campos para Gerar Combinações:**
- `idProduto` (number): ID do produto pai
- `atributos` (json): Atributos para combinação
- `gerarCodigoAutomaticamente` (boolean): Gerar código automaticamente

**Campos para Criar Variação:**
- `nome` (string): Nome da variação
- `codigo` (string): Código/SKU
- `preco` (number): Preço
- `gtin` (string): Código de barras
- `gtinEmbalagem` (string): GTIN da embalagem
- `estoqueMinimo` (number): Estoque mínimo
- `estoqueMaximo` (number): Estoque máximo
- `pesoLiquido` (number): Peso líquido
- `pesoBruto` (number): Peso bruto
- `largura` (number): Largura (cm)
- `altura` (number): Altura (cm)
- `profundidade` (number): Profundidade (cm)
- `unidade` (string): Unidade de medida
- `volumes` (number): Volumes
- `precoCompra` (number): Preço de compra
- `precoCusto` (number): Preço de custo
- `situacao` (string): Situação
- `variacao` (json): Dados da variação (atributos)

---

### 37. Proposta Comercial (Commercial Proposal)

Gerencia propostas comerciais — orçamentos enviados a clientes potenciais.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria uma proposta | POST | `/propostas-comerciais` |
| Obter | Obtém uma proposta por ID | GET | `/propostas-comerciais/{id}` |
| Obter Todos | Lista propostas | GET | `/propostas-comerciais` |
| Atualizar | Atualiza uma proposta | PUT | `/propostas-comerciais/{id}` |
| Excluir | Remove uma proposta | DELETE | `/propostas-comerciais/{id}` |
| Alterar Situação | Altera situação da proposta | PATCH | `/propostas-comerciais/{id}/situacoes` |

**Campos para Criar:**
- `descricao` (string): Descrição
- `idContato` (number): ID do cliente
- `idVendedor` (number): ID do vendedor
- `valorTotal` (number): Valor total
- `data` (string): Data da proposta
- `dataValidade` (string): Data de validade
- `situacao` (string): Situação
- `observacao` (string): Observação
- `observacaoInterna` (string): Observação interna
- `desconto` (number): Desconto
- `numero` (string): Número da proposta

**Filtros do getAll:** `situacao`, `idContato`, `idVendedor`, `dataInicio`, `dataFim`

---

### 38. Situação (Status)

Gerencia situações (status) customizadas usadas em diferentes módulos do Bling.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Obter Todos | Lista situações | GET | `/situacoes` |
| Obter | Obtém uma situação por ID | GET | `/situacoes/{id}` |
| Obter Módulos | Lista módulos com situações | GET | `/situacoes/modulos` |
| Obter Transições | Lista transições de situação | GET | `/situacoes/transicoes` |
| Criar | Cria uma situação | POST | `/situacoes` |
| Atualizar | Atualiza uma situação | PUT | `/situacoes/{id}` |
| Excluir | Remove uma situação | DELETE | `/situacoes/{id}` |

**Campos para Criar:**
- `nome` (string): Nome da situação
- `idModulo` (number): ID do módulo
- `cor` (string): Cor (hexadecimal)

---

### 39. Vendedor (Seller)

Gerencia vendedores vinculados a contatos do Bling.

| Operação | Descrição | Método | Endpoint |
|---|---|---|---|
| Criar | Cria um vendedor | POST | `/vendedores` |
| Obter | Obtém por ID | GET | `/vendedores/{id}` |
| Obter Todos | Lista vendedores | GET | `/vendedores` |
| Atualizar | Atualiza um vendedor | PUT | `/vendedores/{id}` |
| Excluir | Remove um vendedor | DELETE | `/vendedores/{id}` |

**Campos para Criar:**
- `idContato` (number): ID do contato vinculado
- `descontoLimite` (number): Limite de desconto (%)
- `lpiHabilitado` (boolean): LPI habilitado
- `comissoes` (json): Regras de comissão

**Filtros do getAll:** `situacao`, `nomeContato`, `idContato`

---

## Bling ERP Trigger

O node **Bling ERP Trigger** monitora alterações em recursos do Bling via polling e dispara workflows automaticamente.

### Recursos Suportados

| Recurso | Eventos |
|---|---|
| Contato | Criado, Atualizado |
| Produto | Criado, Atualizado |
| Pedido de Venda | Criado, Atualizado |
| Pedido de Compra | Criado, Atualizado |
| NFe | Criado, Atualizado |
| NFCe | Criado, Atualizado |
| NFSe | Criado, Atualizado |
| Conta a Receber | Criado, Atualizado |
| Conta a Pagar | Criado, Atualizado |
| Contrato | Criado, Atualizado |
| Proposta Comercial | Criado, Atualizado |
| Vendedor | Criado, Atualizado |

### Mecanismo de Polling

O trigger utiliza polling periódico para detectar novos registros e atualizações:

1. **Intervalo**: Configurável no n8n (padrão: 1 minuto)
2. **Detecção**: Compara `dataInclusao` (criados) ou `dataAlteracao` (atualizados) com a última execução
3. **Deduplicação**: Mantém rolling window de 1000 IDs para evitar duplicatas
4. **Paginação**: Busca automaticamente todas as páginas de resultados novos

### Configuração

1. Adicione o node **Bling ERP Trigger** ao workflow
2. Selecione a **credencial OAuth2**
3. Escolha o **recurso** a monitorar
4. Escolha o **evento** (Criado / Atualizado)
5. Configure o **intervalo de polling** nas settings do workflow

---

## Configurações Avançadas / Advanced Settings

### Paginação

Todos os endpoints de listagem (`getAll`) suportam paginação:

- **Return All**: Quando ativado, busca automaticamente todas as páginas
- **Limit**: Define o número máximo de resultados (1-100 por página)
- O node gerencia automaticamente os parâmetros `pagina` e `limite` da API

### Rate Limiting

A API do Bling permite **3 requisições por segundo**. O node implementa um delay automático de **340ms** entre requisições para respeitar este limite. Ao usar "Return All" em recursos com muitos registros, o tempo total será proporcional ao número de páginas.

### Tratamento de Erros

- Todas as operações suportam `continueOnFail()` do n8n
- Erros da API são capturados e retornados como mensagem amigável
- Códigos HTTP comuns:
  - `400` — Dados inválidos (verifique campos obrigatórios)
  - `401` — Token expirado (reconecte a credencial)
  - `403` — Sem permissão para este recurso
  - `404` — Registro não encontrado
  - `429` — Rate limit excedido (aguarde e tente novamente)
  - `500` — Erro interno do Bling

---

## Exemplos de Workflows / Workflow Examples

### 1. Sincronizar Contatos com CRM

Monitora novos contatos criados no Bling e sincroniza com um CRM externo:

```
[Bling Trigger: Contato Criado] → [IF: Tipo = Cliente] → [HTTP Request: POST CRM API]
```

### 2. Emitir NFe Automaticamente ao Criar Pedido de Venda

Quando um novo pedido de venda é criado, gera e envia automaticamente a NFe:

```
[Bling Trigger: Pedido de Venda Criado] → [Bling: Pedido de Venda > Gerar NFe] → [Wait: 5s] → [Bling: NFe > Enviar]
```

### 3. Alerta de Estoque Baixo

Verifica saldos de estoque periodicamente e envia alerta quando abaixo do mínimo:

```
[Schedule Trigger: Diário] → [Bling: Estoque > Obter Saldos] → [IF: Quantidade < Mínimo] → [Telegram/Email: Alerta de Estoque Baixo]
```

### 4. Conciliação Financeira Automática

Monitora contas a receber liquidadas e registra no sistema financeiro:

```
[Bling Trigger: Conta a Receber Atualizada] → [IF: Status = Liquidada] → [Bling: Caixa/Banco > Criar Movimentação]
```

### 5. Fluxo Completo de Venda (Pedido → NFe → Estoque → Financeiro)

Automatiza todo o ciclo de venda:

```
[Webhook: Novo Pedido] → [Bling: Pedido de Venda > Criar]
                        → [Bling: Pedido de Venda > Gerar NFe]
                        → [Bling: NFe > Enviar]
                        → [Bling: Pedido de Venda > Lançar Estoque]
                        → [Bling: Pedido de Venda > Lançar Contas]
```

---

## Compatibilidade / Compatibility

| Requisito | Versão |
|---|---|
| n8n | >= 1.0.0 |
| Node.js | >= 18.0.0 |
| Bling API | v3 |

---

## Desenvolvimento / Development

### Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) >= 9
- [n8n](https://n8n.io/) instalado localmente para testes

### Build

```bash
cd n8n-nodes-bling-erp
npm install
npm run build    # tsc && gulp build:icons
```

### Desenvolvimento com watch

```bash
npm run dev      # tsc --watch
```

### Estrutura do Projeto

```
n8n-nodes-bling-erp/
├── credentials/
│   └── BlingOAuth2Api.credentials.ts    # Credencial OAuth2
├── nodes/
│   └── Bling/
│       ├── Bling.node.ts                # Node principal (39 recursos)
│       ├── BlingTrigger.node.ts         # Node trigger (polling)
│       ├── GenericFunctions.ts          # Helpers (API request, pagination)
│       ├── bling.svg                    # Ícone do node
│       └── resources/                   # 39 diretórios de recursos
│           ├── anuncio/
│           │   └── anuncio.operations.ts
│           ├── bordero/
│           │   └── bordero.operations.ts
│           ├── caixaBanco/
│           │   └── caixaBanco.operations.ts
│           ├── ...                      # (36 recursos adicionais)
│           └── vendedor/
│               └── vendedor.operations.ts
├── package.json
├── tsconfig.json
└── gulpfile.js
```

### Arquivos Principais

| Arquivo | Responsabilidade |
|---|---|
| `Bling.node.ts` | Define os 39 recursos, roteamento de operações e chamadas à API |
| `BlingTrigger.node.ts` | Implementa polling para 12 recursos com deduplicação |
| `GenericFunctions.ts` | `blingApiRequest()` e `blingApiRequestAllItems()` com rate limiting |
| `BlingOAuth2Api.credentials.ts` | Configuração OAuth2 (URLs, método de autenticação) |
| `*.operations.ts` | Define operações e campos de cada recurso (UI do n8n) |

---

## Changelog

### v0.1.0

- Release inicial
- 39 recursos da API Bling v3
- 220+ operações
- OAuth2 com refresh automático
- Bling ERP Trigger com 12 recursos
- Paginação automática
- Rate limiting (3 req/s)
- UI completa em português

---

## Licença / License

[MIT](LICENSE.md)

---

## Links Úteis / Useful Links

- [Repositório GitHub](https://github.com/kprprivate/bling-n8n-community-node)
- [npm Package](https://www.npmjs.com/package/n8n-nodes-bling-erp)
- [Documentação da API Bling v3](https://developer.bling.com.br/referencia)
- [Portal do Desenvolvedor Bling](https://developer.bling.com.br)
- [n8n Community Nodes](https://docs.n8n.io/integrations/community-nodes/)
- [n8n Documentation](https://docs.n8n.io/)
