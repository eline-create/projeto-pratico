<h1> Projeto Prático </h1>

Este repositório faz parte de um conjunto de aulas semanais ministradas no curso de Desenvolvimento Web Back-End pela Reprograma em parceria com o Porto Digital/M.I.N.As.

Nesta semana (Semana 8/18), um projeto envolvendo criação de um servidor e manipulação de um JSON foi criado. 
Aqui observando o passo a passo descrito, é possível desenvolver este mesmo projeto com diversos temas e treinar/aprimorar uso do Node.JS, instalar alguns pacotes do NPM e codar em JavaScript.

Caso queira fazer o download deste repositório e utilizar com exercício é só entrar no link [GitHub](https://github.com/eline-create/projeto-pratico) e fazer um fork para a sua máquina. 

Se você não sabe como funciona o fork ou quer saber mais, acessar esse [link](https://www.lambda3.com.br/2016/02/mantendo-um-fork-atualizado-no-github/), que também é um repositório do GitHub.

Para ver a continuação desse projeto você pode acessar o repositório do Projeto Prático 2 no [GitHub](https://github.com/eline-create/projeto-pratico2).


Para desenvolver este projeto, você precisa ter instalado em sua máquina:

1. Visual Studio Code;
2. Node.js;
3. Git bash(terminal);

Bibliotecas e dependências do node (Node-modules, Package.json, Nodemon, Express) foram utilizadas - Como este repositório já tem essas dependências instaladas você só precisa dá um NPM init -y no seu terminal, caso não funcione você pode seguir os passos de instalação e inicialização descritos mais à frente.


<h2> Vamos começar? </h2>

Para iniciar o projeto do zero é importante seguir alguns passos.

1. Crie um repositório no gitHub ou uma pasta local na sua máquina e depois faça um gitInit.
2. Crie a estrutura inicial de pastas e os arquivos necessários. Os arquivos contidos nas pastas serão criados logo mais. Vide exemplo a seguir:

```
pasta-do-projeto
├── src (Pasta raiz)
│   ├── controller
│   ├── model
│   ├── routes
│   ├── views
│   └── app.js
├── server.js

```

3. Para fazer o servidor funcionar, é necessário iniciar o npm com algumas dependências. Então, quando estiver com tudo organizadinho, não esqueça de fazer os comandos de instalação de pacotes para trabalhar com o JSON e o server.
Faça os seguintes comandos:

- npm install -y (package-lock.JSON);
- npm init -y (package.JSON);
- npm i --save -dev express (node modules);
- npm i --save -dev nodemon (nodemon).

4. Não esqueça de criar um arquivo .gitIgnore para o node_modules não subir para o repositório gitHub. Caso o .gitIgnore não funcione, siga os seguinte passos:
    a. Exclua o node_modules;
    b. Faça um novo commit e um push;
    c. Adicione o arquivo .gitIgnore.
    Importante lembrar: o arquivo 'node_modules/' será criado na raiz do projeto.

5. Criando os arquivos
    a. Crie o JSON com o tema escolhido. Neste caso será o musicas.json;
    b. Crie o arquivo da pasta controller, musicaController.js;
    c. Agora o arquivo de musicasRoute.js;
    d. Inicie o código no arquvo app.js, criado logo no início;
    e. Inicie o código no arquivo server.js. 

Após estes passos, já podemos fazer um primeiro teste com o servidor e averiguar se ele está rodando direitinho.

6. Vai lá no terminal e executa o comando nodemon server. Uma alternativa é usar o npm run nodemon.

7. Foram disponibizados, 3 temas (Jogos, séries e músicas) para execução do projeto prático. Aqui escolhi o tema música. A execução correta segue algumas regras contratuais. são elas:

#### Contratos que deverão ser entregues

| Recurso        | Descrição                            |
| -------------- | ------------------------------------ |
| `/musicas`     | Retorna todas as músicas             |
| `/musicas/:id` | Retorna apenas uma música específica |

#### Contratos opcionais

| Recurso         | Descrição                                 |
| --------------- | ----------------------------------------- |
| `/artistas`     | Retorna a lista de artistas               |
| `/artistas/:id` | Retorna o artista e lista de músicas dele |

#### Contratos para ir ao infinito e além

| Recurso                   | Descrição                                            |
| ------------------------- | ---------------------------------------------------- |
| `/albuns`                 | Retorna o álbum com a lista de músicas daquele album |
| `/albuns/[nome-do-album]` | Retorna um álbum específico filtrado pelo nome       |

---

8. Para fazer filtragem, apenas os arquivos JSONController.js e JSONRoute.js que são modificados.

9. Verificar se todos os contratos foram atendidos. Não esquecer de utilizar o postman. Caso queria é possível instalar uma extensão no Google Chrome chamada JSON Viewer para visualizar o JSON todo organizado direto no browser.

10. Subir o projeto para o gitHub e enviar link do repositório no GoogleClassroom.


PALAVRAS-CHAVES: Reprograma, Porto Digital/MINAs, JavaScript, JSON, Node.js, NPM, GitHub.