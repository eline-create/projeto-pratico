// Passo a passo


//1. Importar o app
//2. Declarar a variavel "port" e atribuir valor
//3. "Escutar" o app mostrando no console qual caminho está usando

const app =  require("./src/app");
const port = 8080;

app.listen(port, () => {
    console.log(`Executando em http:localhost: ${port}`);

});