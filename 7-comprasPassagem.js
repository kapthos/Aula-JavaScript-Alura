console.log("Trabalhando com IF e Else");

listaDestinos = new Array('SP', 'RJ', 'BA');
const idadeComprador = 16;
const estaAcompanhado = true;

console.log(listaDestinos);

if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Compra feita com sucesso.");
    listaDestinos.splice(1, 1);
    console.log(listaDestinos);
} else {
        console.log("Cliente menor de idade.");
}