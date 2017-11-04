# Ajuda Conselheiro

![travis](https://travis-ci.org/fga-gpp-mds/2017.2-AjudaConselheiro-Frontend.svg?branch=development)

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


O Ajuda Conselheiro é um sistema web que é direcionado para o Conselho de Alimentação Escolar (CAE) e foi inicialmente planejado pelo Tribunal de Contas da União (TCU), com o principal objetivo auxiliar os conselheiros a realizarem um melhor acompanhamento durante as realizações das visitas nas escolas.  

# Guia de instalação

Primeiramente, certifique-se de possuir uma versão do Node atualizada.

``` 
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
```
```
nvm install node
```
```
nvm use node
```

Depois certifique-se que tenha instalado o angular-cli. Se você é usuário do sistema operacional Linux basta inserir no terminal o seguinte comando:
```
npm install -g @angular/cli
```

Dentro da pasta do projeto, insira no terminal:
```
npm install
```
Para rodar o projeto, insira no terminal:
```
ng serve
```

Para rodar os testes basta inserir no terminal:
```
ng test
```
Para rodar a build antes de subir sua branch no projeto basta inserir no terminal:
```
ng build --prod
```
### Cobertura de código

Para verificar a cobertura de código entre na brach "development", certifique-se que ela estaja atualizada utilizando o seguinte comando:

```
git pull origin development
```

Agora que sua branch development está atualizada, insira no terminal:

```
ng test --code-coverage
 ```

Na pasta do projeto haverá uma sub-pasta chamada "coverage", dentro dela os dados estarão em "index.html".


## Navigation

Navigate to the app in http://localhost:8080

## Principais funcionalidades desenvolvidas até o momento:
- Manter Conselheiro
- Manter Agendamento
- Manter Checklist

## Contribuição

Para contribuir com o projeto Ajuda Conselheiro em sua manutenção e evolução, atente-se a <a href="https://github.com/fga-gpp-mds/2017.2-AjudaConselheiro-Backend/wiki/Plano-de-Gerenciamento-de-Configura%C3%A7%C3%A3o#3-github" > politica de branches e commits. </a> Acesse a página com as <a href="https://github.com/fga-gpp-mds/2017.2-AjudaConselheiro-Frontend/issues"> issues abertas </a> para ficar a par desenvolvimento.
Também é possivel ter acesso a toda documentação na <a href="https://github.com/fga-gpp-mds/2017.2-AjudaConselheiro-Frontend/wiki#boards?repos=102744721"> Wiki</a> do projeto.

## Licença
![GNU General Public License v3.0](https://github.com/fga-gpp-mds/2017.2-AjudaConselheiro-Frontend/blob/development/LICENSE)
