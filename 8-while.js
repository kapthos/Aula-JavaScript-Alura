console.log("\nTrabalhando com while \n");

listaDestinos = new Array('SP', 'RJ', 'BA', 'SC');
const idadeComprador = 16;
const estaAcompanhado = true;
const destino = "JC";

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;
let destinoExiste = false;

let contador = 0;
while(contador < 4){
    if (listaDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}
console.log("Destino disponível:", destinoExiste);