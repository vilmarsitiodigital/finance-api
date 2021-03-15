<h3 align="center">
  Api Express para gerenciamento financeiro
</h3>

<p align="center">Projeto teste Code7</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/vilmarsitiodigital/finance-api?color=purple">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/vilmarsitiodigital/finance-api?color=purple">

  <a href="https://github.com/vilmarsitiodigital/finance-api/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/vilmarsitiodigital/finance-api?color=purple">
  </a>

  <a href="https://github.com/vilmarsitiodigital/finance-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/vilmarsitiodigital/finance-api?color=purple">
  </a>

  <a href="https://github.com/vilmarsitiodigital/finance-api/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/vilmarsitiodigital/finance-api?color=purple">
  </a>
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=FiNance%20-%20VilmarBatistaf&uri=https%3A%2F%2Fgithub.com%2Fvilmarsitiodigital%2Ffinance-api%2Fblob%2Fmain%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 💵 About the project

O objetivo desse projeto é o relacionamento de dívidas com nossos clientes (usuários do JSONPlaceholder). 

Cada usuário é uma pessoa com dívidas, na qual iremos fazer o cadastro no nosso sistema.

Para acessar o **web client**, clique aqui: [Finance Web](https://github.com/vilmarsitiodigital/finance-web)<br />

## 🚀 Technologies

Tecnologias que usei para desenvolver esta API

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [MongoDB](https://www.mongodb.com/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

Importe `Insomnia.json` no aplicativo Insomnia ou clique em [Run in Insomnia](#insomniaButton)

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- Uma instância de [MongoDB](https://www.mongodb.com/)

> Obs.: Eu recomendo usar docker

**Clonar o projeto e acessar a pasta**

```bash
$ git clone https://github.com/vilmarsitiodigital/finance-api.git && cd finance-api
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker

# Create the instance of mongoDB using docker
$ docker run --name finance-mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name finance-redis -p 6379:6379 -d -t redis:alpine

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork vilmarsitiodigital/finance-api
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd finance-api

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'Feature: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💚 by Vilmar Batista 🤝 [See my linkedin](https://www.linkedin.com/in/vilmarbatista/)
