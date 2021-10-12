# BonJobsAPI

Projeto em Node.js, Express e Cors consumindo API 

Esse projeto é baseado em NODE.js, se você não tem ainda, você pode verificar com o seguinte comando:
```
node -v
```
Para instalar caso não tenha, use o seguinte comando: 
```
npm install
```
### Rodando o projeto:

Vai precisar instalar alguns pacotes npm, use o seguinte comando em seu terminal:
```
npm i express body-parser cors
```
E para executar o projeto chame o nodemon:
```
npx nodemon
```
Exibirá a seguinte mensagem:
> app running in http://localhost:3000
Você pode clicar no endereço e começar a utilizar as rotas. 

### Documentação da API
Nesse projeto temos as seguintes rotas disponíveis:

> /api/vagas

| ROTA | METHOD | DESCRIPTION |
| ----------------------- | --------------- | -------------------------------------|
| /api/vagas | GET | listar todas as vagas |
| /api/vaga | POST | criar um novo pastel |
| /api/vaga/id | GET | visualizar um pastel a partir do ID |
| /api/vaga/id | DELETE | remover um pastel a partir do ID |

