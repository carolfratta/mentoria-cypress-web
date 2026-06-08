# Mentoria Cypress Web

Projeto de automação de testes web desenvolvido com Cypress utilizando JavaScript, Page Object Model (POM), Custom Commands e Faker para geração de massa dinâmica.

## Tecnologias Utilizadas

- Cypress
- JavaScript
- Faker JS
- Git
- GitHub

## Boas Práticas Aplicadas

- Page Object Model (POM)
- Custom Commands
- Fixtures
- Massa dinâmica com Faker
- Reutilização de código
- Testes responsivos (Mobile e Desktop)

## Funcionalidades Automatizadas

### Login

Cenários automatizados:

- Login com sucesso
- Login com e-mail vazio
- Login com senha vazia
- Login com e-mail inválido
- Login com senha inválida
- Navegação para tela de cadastro

### Cadastro de Usuário

Cenários automatizados:

- Cadastro realizado com sucesso
- Cadastro com e-mail inválido
- Cadastro com e-mail sem caractere @

### Checkout

Cenários automatizados:

- Checkout utilizando Mobile Banking
- Checkout utilizando Direct Bank Transfer
- Checkout utilizando Paypal
- Validação de campos obrigatórios
- Validação de pagamento não selecionado
- Seleção de país
- Aceite dos termos de uso

## Testes Responsivos

Os cenários de Login e Checkout são executados nos seguintes dispositivos:

- iPhone XR
- Samsung S10
- Macbook 16

## Instalação

Clone o repositório:

```bash
git clone https://github.com/carolfratta/mentoria-cypress-web.git
```

Acesse a pasta do projeto:

```bash
cd mentoria-cypress-web
```

Instale as dependências:

```bash
npm install
```

## Execução

Modo interativo:

```bash
npx cypress open
```

Modo headless:

```bash
npx cypress run
```

## Autora

Caroline Fratta

QA Engineer