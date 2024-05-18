const prompt = require('prompt-sync')();
const Contacto = require('./contacto.js');
const Agenda = require('./agenda.js');

function ObtenerOpcion(texto) {
    let leido = false;
    let valorLeido = 0;

    while(!leido) {
        try {
            valorLeido = parseInt(prompt(texto));
            leido = true;
        }
        catch {
            console.log("ERROR: Tienes que instroducir un número.");
        }

    }
    return valorLeido;
}

function MostrarMenu() {
    console.log("--- MENU ---");
    console.log("1.- Mostrar contactos");
    console.log("2.- Buscar contactos");
    console.log("3.- Crear nuevo contacto ");
    console.log("4.- Borrar contactos");
    console.log("5.- Guardar contactos");
    console.log("6.- Salir");
}

