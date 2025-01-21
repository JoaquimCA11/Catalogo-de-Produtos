# Catálogo de Produtos - Projeto de JavaScript

## Descrição

Este é um projeto de JavaScript que exibe um catálogo de produtos fictícios utilizando manipulação de DOM e dados de uma API pública. O usuário pode visualizar os produtos e ordená-los por avaliações ou preço (do menor para o maior ou do maior para o menor). O projeto foi desenvolvido como parte do aprendizado de JavaScript e manipulação de APIs.

## Funcionalidades

- **Exibição de Produtos:** Os produtos são carregados dinamicamente de uma API externa (`https://fakestoreapi.com/products`) e exibidos na página.
- **Ordenação:** O usuário pode ordenar os produtos por:
  - Avaliações (do maior para o menor)
  - Preço (do menor para o maior)
  - Preço (do maior para o menor)
- **Interatividade:** A página interage com o usuário, atualizando a lista de produtos de acordo com as seleções feitas no formulário de ordenação.

## Tecnologias Utilizadas

- **HTML5:** Estruturação da página e formulários.
- **CSS3:** Estilização da página e dos elementos.
- **JavaScript:** Manipulação de DOM, Fetch API, Eventos e Ordenação de Dados.

## Como Funciona

### Estrutura da Página

1. **Formulário de Ordenação:** O usuário pode escolher um critério de ordenação (Avaliações ou Preço) e clicar no botão "Ordenar".
2. **Lista de Produtos:** Os produtos são listados com informações como nome, preço, imagem e avaliações.
3. **API:** Os dados dos produtos são obtidos da API `https://fakestoreapi.com/products`.

### Fluxo de Dados

1. Ao carregar a página, a aplicação faz uma requisição para a API e exibe os produtos.
2. O usuário pode escolher um critério de ordenação e, ao clicar em "Ordenar", a lista de produtos será reorganizada conforme a escolha.
3. As alterações são feitas de forma dinâmica, sem a necessidade de recarregar a página.
