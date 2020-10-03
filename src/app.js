// Passo a passo

//1. Importar o express;
//2. Declarar a variável app atribuindo o método do express;
//3. Importar rota;
//4. Usar a rota criada;
//5. Exportar o app.


const express = require("express");
const app = express();
const musicas = require("./routes/musicasRoute");

const index = require('./routes/index.js'); //Para usar o index JS

//Usar a rota criada

app.use(express.static('public')); // para fazer a imagem do erro aparecer no browser

app.use("/", musicas); //endpoint. Mostrará o JSON completo

app.use('/olah', index); // para usar o index.js

//Fazer um get para retornar erro

app.get("*", (req, res) => {
    res.status(400).sendFile("./views/404.html", { root: __dirname})
});


module.exports = app;








