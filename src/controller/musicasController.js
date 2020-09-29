// Passo a passo
//1. Importar JSON da pasta model;
//2. Criar o método para buscar todos os parâmetros; 
//3. Exportar o método.

const musicas =  require ("../model/musicas.json");

const getAll =  (req, res) => {
    console.log(req.url);
    res.status(200).send(musicas);
    
}

module.exports = { getAll }


