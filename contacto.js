const Telefono = require('./telefono.js');
const Persona = require('./persona.js');
const Direccion = require('./direccion.js');

class Contacto {
    constructor() {
        this._Persona = new Persona();
        this._Telefono = new Telefono();
        this._Direccion = new Direccion();
        this._Email = "";
    }

    set Email(email) { this._Email = email; }
    get Email() { return this._Email; }

    set Nombre(nombre) { this._Persona.Nombre = nombre; }
    set Apellidos(apellidos) {this._Persona.Apellidos = apellidos; }
    set FechaNacimiento(fechaNacimiento) {this._Persona.FechaNacimiento = fechaNacimiento; }
    get Nombre() { return this._Persona.Nombre; }
    get Apellidos() { return this._Persona.Apellidos; }
    get FechaNacimiento() { return this._Persona.FechaNacimiento; }

    set TelefonoMovil(movil) {this._Telefono.TelefonoMovil = movil;}
    set TelefonoFijo(fijo) {this._Telefono.TelefonoFijo = fijo;}
    set TelefonoTrabajo(trabajo) {this._Telefono.TelefonoTrabajo = trabajo;}
    get TelefonoMovil() {return this._Telefono.TelefonoMovil;}
    get TelefonoFijo() {return this._Telefono.TelefonoFijo;}
    get TelefonoTrabajo() {return this._Telefono.TelefonoTrabajo;}

    set Calle(calle) { this._Direccion.Calle = calle;}
    set Piso(piso) { this._Direccion.Piso = piso;}
    set Ciudad(ciudad) { this._Direccion.Ciudad = ciudad;}
    set CodigoPostal(codigopostal) { this._Direccion.CodigoPostal = codigopostal;}
}