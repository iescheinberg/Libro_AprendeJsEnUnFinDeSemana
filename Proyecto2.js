const prompt = require("prompt-sync")();

function Sumar() {
    let sumando1 = parseInt(prompt("Inserte primer sumando: "));
    let sumando2 = parseInt(prompt("Inserte segundo sumando: "));
    console.log("Resultado suma: ", (sumando1 + sumando2));
}

function Restar() {
    let minuendo = parseInt(prompt("Inserte minuendo: "));
    let sustraendo = parseInt(prompt("Inserte sustraendo: "));
    console.log("Resultado resta: ", (minuendo - sustraendo));
}

function Multiplicar() {
    let multiplicando = parseInt(prompt("Inserte multiplicando: "));
    let multiplicador = parseInt(prompt("Inserte multiplicador: "));
    console.log("Resultado multiplicación: ", (multiplicando * multiplicador));
}

function Dividir() {
    let dividendo = parseInt(prompt("Inserte dividendo: "));
    let divisor = parseInt(prompt("Inserte divisor: "));
    console.log("Resultado división: ", (dividendo / divisor));
}

function Calculadora() {
    let fin = false;
    let opcion = 0;

    while (!fin) {
        opcion = parseInt(prompt("Opción: "));
        switch (opcion) {
            case 1:
                Sumar();
                break;
            case 2:
                Restar();
                break;
            case 3:
                Multiplicar();
                break;
            case 4:
                Dividir();
                break;
            case 5:
                fin = true;
                break;
        }
    }
}



console.log("**********\nCALCULADORA\n**********");
console.log("Menú");
console.log("1.- Sumar");
console.log("2.- Restar");
console.log("3.- Multiplicación");
console.log("4.- División");
console.log("5.- Salir");
Calculadora();
console.log("Programa finalizado");