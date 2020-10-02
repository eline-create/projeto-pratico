// Passo a passo

//1. Importar o Express;
//2. Importar o Router;
//3. Importar o controller;
//4. Criar a rota que traz os itens;
//5. Exportar o Router.

const express = require('express');
const route = express.Router();
const controller = require('../controller/musicasController');

//Filtrando as músicas

route.get("/", controller.getAll);
route.get("/musicas", controller.getAll);


// Filtrando por id

route.get("/musicas/:id", controller.getById);


//Extras
// Filtrando por artista ()


//route.get("/musicas/artista/:artista", controller.getByArtista)

route.get("/musicas/artista/:artista", controller.getArtista)



module.exports = route;
