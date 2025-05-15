# Projeto Stoq-IN-Casa

## Objetivo do Projeto

- Projeto para facilitar a lista de compras de sua casa

## Data de Inicio do Desenvolvimento

- 15/05/2025

## Entidades do Sistema

### Produto

*atributos*

- Nome do Produto -> Texto

- Preço Estimado -> Float

- Quantidade -> Numero Intero

- Data de Validade -> Texto

- Data de Cadastro -> Text

### Usuario

*atributos*

- Nome -> Texto

- Email -> Texto (unico)

- Senha -> Text

- é ADM -> Booleano

- Produtos do Cotidiano -> Lista[Texto]

- Data de Registro -> Texto

- Data da Ultima Alteração de Registros -> Texto

## Funcionalidades do Sistema

1. Gerenciar produtos comprado do armario de compras (CRUD)

2. Quando produtos estiverem para terminar o sistema monta uma lista de compras automatica, verificando os melhores preços em sites de mercados e retorna o melhor preço junto do mercado analizado para compor a lista

## Ideia futura 

- Por para o publico com taxa de assinatura

## Tecnologias usadas no sistema

- JavaScript (front e back)
- HTML + CSS (front)
- express (back)
- banco MySQL (adicionar em breve)