const prompt = require("prompt-sync")();

console.log("**********\nCALCULADORA\n**********");
console.log("Menú");
console.log("1.- Sumar");
console.log("2.- Restar");
console.log("3.- Multiplicación");
console.log("4.- División");
console.log("5.- Salir");

let fin = false;
let opcion = 0;

while (!fin) {
    opcion = parseInt(prompt("Opción: "));
    switch (opcion) {
        case 1:
            let sumando1 = parseInt(prompt("Inserte primer sumando: "));
            let sumando2 = parseInt(prompt("Inserte segundo sumando: "));
            console.log("Resultado suma: ", (sumando1 + sumando2));
            break;
        case 2:
            let minuendo = parseInt(prompt("Inserte minuendo: "));
            let sustraendo = parseInt(prompt("Inserte sustraendo: "));
            console.log("Resultado resta: ", (minuendo - sustraendo));
            break;
        case 3:
            let multiplicando = parseInt(prompt("Inserte multiplicando: "));
            let multiplicador = parseInt(prompt("Inserte multiplicador: "));
            console.log("Resultado multiplicación: ", (multiplicando * multiplicador));
            break;
        case 4:
            let dividendo = parseInt(prompt("Inserte dividendo: "));
            let divisor = parseInt(prompt("Inserte divisor: "));
            console.log("Resultado división: ", (dividendo / divisor));
            break;
        case 5:
            fin = true;
            break;
    }
}
console.log("Programa finalizado");
