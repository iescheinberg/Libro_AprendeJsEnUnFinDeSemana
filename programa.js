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

function BuscarContacto() {
    console.log("Buscar contactos");
    console.log("1.- Por nombre");
    console.log("2.- Por teléfono");
    console.log("3.- Volver");

    let finBuscar = false;

    while(!finBuscar) {
        let opcion = ObtenerOpcion("Opción");
        switch(opcion) {
            case 1:
                let nombre = prompt("Introduzca el nombre a buscar: ");
                let encontradosNombre = AgendaContactos.BuscarContactosPorNombre(nombre);
                if(encontradosNombre.length > 0) {
                    console.log("####### CONTACTOS ENCONTRADOS #######");
                    for (contacto of encontradosNombre) {
                        contacto.MostrarContacto();
                    }
                    console.log("############################");
                } else {
                    console.log("No se han encontrado contactos con ese nombre.");
                }
                finBuscar = true;
                break;
            case 2:
                let telefono = prompt("Introduzca el teléfono a buscar: ");
                let encontradosTelefono = AgendaContactos.BuscarContactosPorTelefono(telefono);
                if(encontradosTelefono.length > 0) {
                    console.log("####### CONTACTOS ENCONTRADOS #######");
                    for (contacto of encontradosTelefono) {
                        contacto.MostrarContacto();
                    }
                    console.log("############################");
                } else {
                    console.log("No se han encontrado contactos con ese teléfono.");
                }
                finBuscar = true;
                break;
            case 3:
                finBuscar = true;
                break;
        }
    }
}

function ProcesoCrearContactos() {
    let contacto = new Contacto();
    contacto.Nombre = prompt("Introduzca el nombre del contacto: ");
    contacto.Apellidos = prompt("Apellidos del contacto: ");
    contacto.FechaNacimiento = prompt("Fecha Nacimiento del contacto: ");
    contacto.TelefonoMovil = prompt("Teléfono móvil del contacto: ");
    contacto.TelefonoFijo = prompt("Teléfono fijo del contacto: ");
    contacto.TelefonoTrabajo = prompt("Teléfono trabajo del contacto: ");
    contacto.Calle = prompt("Calle del contacto: ");
    contacto.Piso = prompt("Piso del contacto: ");
    contacto.Ciudad = prompt("Ciudad del contacto: ");
    contacto.CodigoPostal = prompt("Código postal del contacto: ");
    contacto.Email = prompt("Email del contacto: ");
    AgendaContactos.CrearNuevoContacto(contacto);
}

function BorrarContacto() {
    console.log("Buscar contactos a borrar: ");
    console.log("1.- Por nombre");
    console.log("2.- Por teléfono");
    console.log("3.- Volver");
    let finBuscar = false;

    while (!finBuscar) {
        let opcion = ObtenerOpcion("Opción: ");
        switch (opcion) {
            case 1:
                let nombre = prompt("Introduzca el nombre: ");
                AgendaContactos.BuscarContactosPorNombre(nombre);
                finBuscar = true;
                break;
            case 2:
                let telefono = prompt("Introduzca el teléfono: ");
                AgendaContactos.BuscarContactosPorTelefono(telefono);
                finBuscar = true;
                break;
            case 3:
                finBuscar = true;
                break;
        }
    }
}

let AgendaContactos = new Agenda("Agenda.txt");
if(!AgendaContactos.CargarContactos()) {
    console.log("ERROR: No se han podido cargar los contactos del fichero");
}
let fin = false;
while(!fin) {
    MostrarMenu();
    switch(ObtenerOpcion("Opción: ")) {
        case 1:
            AgendaContactos.MostrarContactos();
            break;
        case 2:
            BuscarContacto();
            break;
        case 3:
            ProcesoCrearContactos();
            break;
        case 4:
            BorrarContacto();
            break;
        case 5:
            AgendaContactos.GuardarContactos();
            break;
        case 6:
            fin = true;
            break;
    }
}

console.log("FIN DEL PROGRAMA");
