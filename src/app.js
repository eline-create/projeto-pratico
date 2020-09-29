// Passo a passo

//1. Importar o express;
//2. Declarar a variável app atribuindo o método do express;
//3. Importar rota;
//4. Usar a rota criada;
//5. Exportar o app.


const express = require("express");
const app = express();
const musicas = require("./routes/musicasRoute");


//Usar a rota criada

app.use("/", musicas); //endpoint

//Fazer um get para retornar erro

app.get("*", (req, res) => {
    res.status(400).sendFile("./views/404.html", { root: __dirname})
});


module.exports = app;
