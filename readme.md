<h1> Semana 08 -  Projeto Prático </h1>


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

7. Foram disponibizados, 3 temas para execução do projeto prático. A execução correta segue algumas regras contratuais. são elas:

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

9. Verificar se todos os contratos foram atendidos. Não esquecer de utilizar o postman.

10. Subir o projeto para o gitHub e enviar link do repositório no GoogleClassroom.