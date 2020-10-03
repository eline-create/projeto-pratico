// Passo a passo
//1. Importar JSON da pasta model;
//2. Criar o método para buscar todos os parâmetros; 
//3. Exportar o método.

const musicas =  require ("../model/musicas.json");

//Monstrando todo o JSON

const getAll =  (req, res) => {
    console.log(req.url);
    res.status(200).send(musicas);
    
};

//Por item

//Passo a passo
//1. Criar método
//2. Retornar item daquele ID

const getById = (req, res) => {
    const id = req.params.id;

    const musicaFiltrada = musicas.find((musica) => musica.id == id)

    res.status(200).send(musicaFiltrada); 
};


//Filtrando por artista. Quais artista temos no JSON

const getByArtista = (req, res) => {
        const artistaFiltrado = musicas.map((musica) => musica.artista);
        res.status(200).send(artistaFiltrado);
    }

 // Passo a passo

 // 1. Pegar param da URL
 // 2. Fazer filter no JSON
 // 3. Retornar o musica - Método de comparação
// OBS: Usando o map, retornará o resultado de true e false

const getArtista = (req, res) => {
        const artista = req.params.artista
        const artistaFiltrado = musicas.filter((musica) => musica.artista.toUpperCase() == artista.toUpperCase());
        res.status(200).send(artistaFiltrado);
    };



//Filtrando por album -  Usando o map

const getAllAlbuns = (req, res) => {
    const albunsFiltrado = musicas.map((album) => album.musicas);
    res.status(200).send(albunsFiltrado)

};


const getAlbum = (req, res) => {
    const album = req.params.artista
    const albumFiltrado = musicas.filter((musica) => musica.album.toUpperCase() == album.toUpperCase());
    res.status(200).send(albumFiltrado);
};




module.exports = { 
    getAll, getById, getByArtista, getArtista, getAllAlbuns, getAlbum
 };