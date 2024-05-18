/* let texto1 = "Texto 1";
let texto2 = "Texto 2";
console.log(texto1, texto2);
 */



/* let texto = "36";
console.log("Mi edad es %s años y vivo en %s", texto, "Madrid") */



/* const prompt = require('prompt-sync')();

let informacionLeida = prompt('Escribe algo: ');
console.log("Has escrito:", informacionLeida); */



/* const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt("Introduce primer numero: "));
let numero2 = parseInt(prompt("Introduce segundo numero: "));
let resultadoSuma = numero1 + numero2;
let resultadoResta = numero1 - numero2;
let resultadoMultiplicacion = numero1 * numero2;
let resultadoDivision = numero1 / numero2;
let resultadoModulo = numero1 % numero2;
let resultadoExponenete  = numero1 ** numero2;
console.log("Numero 1:", numero1);
console.log("Numero 2:", numero2);
console.log("Resultado suma:", resultadoSuma);
console.log("Resultado resta:", resultadoResta);
console.log("Resultado multiplicación:", resultadoMultiplicacion);
console.log("Resultado división:", resultadoDivision);
console.log("Resultado modulo:", resultadoModulo);
console.log("Resultado exponente:", resultadoExponenete); */




/* let variable = 7;
console.log("Valor:", variable);
variable++;
console.log("Valor después del incremento:", variable);
variable--;
console.log("Valor después del decremento:", variable); */





/* const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt('Escribe el primer número: '));
let numero2 = parseInt(prompt('Escribe el segundo número: '));
let numero3 = parseInt(prompt('Escribe el tercer número: '));
let numero4 = parseInt(prompt('Escribe el cuarto número: '));

let resultado1 = (numero1 * numero2) + numero3 / numero4;
let resultado2 = numero1 * (numero2 + numero3 / numero4);
let resultado3 = numero1 * (numero2 + numero3) / numero4;

console.log("Operacion: (%s * %s) + %s / %s = %s", numero1, numero2, numero3, numero4, resultado1);
console.log("Operacion: %s * (%s + %s / %s) = %s", numero1, numero2, numero3, numero4, resultado2);
console.log("Operacion: %s * (%s + %s) / %s = %s", numero1, numero2, numero3, numero4, resultado3); */






/* let numero1 = 8;
let numero2 = 3;
numero1 += numero2;
console.log("numero1 += numero2:",numero1);
numero1 = 8;

numero1 -= numero2;
console.log("numero1 -= numero2:",numero1);
numero1 = 8;

numero1 *= numero2;
console.log("numero1 *= numero2:",numero1);
numero1 = 8;

numero1 /= numero2;
console.log("numero1 /= numero2:",numero1);
numero1 = 8;

numero1 **= numero2;
console.log("numero1 **= numero2:",numero1);
numero1 = 8;
 */




/* const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt('Escribe el primer numero con decimales: '));
let numero2 = parseFloat(prompt('Escribe el segundo numero con decimales: '));;

let resultadoSuma = numero1 + numero2;
let resultadoResta = numero1 - numero2;
let resultadoMultiplicacion = numero1 * numero2;
let resultadoDivision = numero1 / numero2;
let resultadoModulo = numero1 % numero2;
let resultadoExponente = numero1 ** numero2;

console.log("Numero 1:", numero1);
console.log("Numero 2:", numero2);
console.log("Resultado suma:", resultadoSuma);
console.log("Resultado resta:", resultadoResta);
console.log("Resultado multiplicación:", resultadoMultiplicacion);
console.log("Resultado división:", resultadoDivision);
console.log("Resultado modulo:", resultadoModulo);
console.log("Resultado exponente:", resultadoExponente); */



/* console.log("Mensaje con comillas dobles");
console.log('Mensaje con comillas simples');
console.log("Mensaje con comillas dobles conteniendo 'comillas simples'");
console.log('Mensaje con comillas simples conteniendo "comillas dobles"'); */

/* console.log("Mensaje con \"comillas dobles\"");
console.log('Mensaje con \'comillas simples\'') */

/* console.log("Esta es una cadena compuesta\npor dos líneas y que incluye \\");
console.log("");
console.log("Cadena con dos líneas \n\ty la segunda tabulada");
console.log("");
console.log("Cadena con dos líneas\n\vy la segunda tabulada verticalmente"); */


/* let cadena1 = "Cadena 1" + " Cadena 2";
console.log(cadena1);

let cadena2 = cadena1 + " Cadena 3";
console.log(cadena2);

let cadena3 = cadena1 + " " + cadena2;
console.log(cadena3); */



/* let cadena = "Esta es una cadena que la hemos \
divido en varias líneas porque \
si no lo hiciéramos el código no \
se podría leer fácilmente";
console.log(cadena); */


// let cadena = "En un lugar de la mancha";

/* console.log("Número de carácteres:",cadena.length);
console.log("Carácteres en la posición 4:",cadena.charAt(4));
console.log("Carácteres en la posición 8:",cadena.charCodeAt(8));
console.log("Carácteres en la posición 19:",cadena[19]); */

/* console.log("Cadena:",cadena);
console.log("Posición de la cadena 'lugar' (indexOf):", cadena.indexOf("lugar"));
console.log("Posición de la cadena 'lugar' (search):", cadena.search("lugar"));
cadena = "¿En qué lugar aprece la palabra 'lugar'?";
console.log("Cadena:", cadena);
console.log("indexOf 'lugar' sin segundo parámetro:", cadena.indexOf("lugar"));
console.log("indexOf 'lugar' con segundo parámetro 20:", cadena.indexOf("lugar",20));
console.log("lastndexOf 'lugar' sin segundo parámetro:", cadena.lastIndexOf("lugar"));
console.log("lastndexOf 'lugar' sin segundo parámetro 20:", cadena.lastIndexOf("lugar",20));
 */


/* let cadena = "Coche, Moto, Avión, Helicóptero";
console.log("Cadena:",cadena);
console.log("slice 7-11:",cadena.slice(7,11));
console.log("slice 13-final:",cadena.slice(13));
console.log("slice (-18)-(-13):",cadena.slice(-18,-13));
console.log("substring 7-11:", cadena.substring(7,11));
console.log("substring 13-final:", cadena.substring(13));
console.log("subtr 7-4:", cadena.substr(7,4));
console.log("subtr 13-final:", cadena.substr(13)); */



/* console.log("Cadena:", cadena);
console.log("Cadena mayúsculas:", cadena.toUpperCase());
cadena = "EN UN LUGAR DE LA MANCHA";
console.log("Cadena:", cadena);
console.log("Cadena minúsculas:", cadena.toLocaleLowerCase()); */



// let cadena = "   uno, dos tres   ";

/* console.log("Cadena:", cadena);
cadena = cadena.concat(", cuatro, cinco");
console.log("Cadena:", cadena);
let cadena2 = " seis, siete";
cadena = cadena.concat(",",cadena2);
console.log("Cadena:", cadena);

cadena = cadena.replace("dos", "two");
console.log("Cadena reemplazada:", cadena);
cadena = cadena.replace("Uno", "one");
console.log("Cadena que no reemplaza Uno:", cadena); */

/* console.log("Cadena:", cadena,".");
cadena = cadena.trim();
console.log("Cadena:", cadena,".");

console.log("¿Empiza por uno?:", cadena.startsWith("uno"));
console.log("¿Empiza por dos?:", cadena.startsWith("dos"));
console.log("¿Termina por tres?:", cadena.endsWith("tres"));
console.log("¿Termina por dos?:", cadena.endsWith("dos"));
 */



/* let numero1 = 79;
let numero2 = 4.56;

console.log("Entero convertido a string:", numero1.toString());
console.log("Real convertido a string:", numero2.toString()); */



/* let fechaActual = new Date();
let fechaPasada = new Date(2024,5,0,5,51,0,0);
console.log("Fecha actual:", fechaActual.toDateString());
console.log("Fecha actual:", fechaPasada.toDateString());
console.log("Fecha UTC:", fechaActual.toUTCString()); */

// let fecha = new Date();
/* console.log("Fecha:", fecha);
console.log("Fecha a cadena:",fecha.toString());
console.log("Año:",fecha.getFullYear());
console.log("Mes:",fecha.getMonth());
console.log("Día:",fecha.getDate());
console.log("Hora:",fecha.getHours());
console.log("Minutos:",fecha.getMinutes());
console.log("Segundos:",fecha.getSeconds());
console.log("Milisegundos:",fecha.getMilliseconds());
console.log("Día de la semana:",fecha.getDay()); */

/* console.log("Fecha:", fecha.toString());
fecha.setFullYear(2000);
console.log("Fecha(Año):", fecha.toString());

fecha.setMonth(0);
console.log("Fecha(Mes):", fecha.toString());

fecha.setDate(1);
console.log("Fecha(Día):", fecha.toString());

fecha.setHours(8);
console.log("Fecha(Hora):", fecha.toString());

fecha.setMinutes(30);
console.log("Fecha(Minutos):", fecha.toString());

fecha.setSeconds(54);
console.log("Fecha(Segundos):", fecha.toString());

fecha.setMilliseconds(333);
console.log("Fecha(Milisegundos):", fecha.toString());

console.log(fecha); */



let valorTrue = true;
let valorFalse = false;

/* console.log("Valor true:", valorTrue);
console.log("Valor false:", valorFalse);

console.log("Valor true a string:", valorTrue.toString());
console.log("Valor false a string:", valorFalse.toString());

valorTrue = new Boolean(true);
valorFalse = new Boolean(false);

console.log("Tipo dato boolean con valor true:", valorTrue)
console.log("Tipo dato boolean con valor false:", valorFalse);

console.log("Tipo dato boolean con valor true a string:", valorTrue.toString());
console.log("Tipo dato boolean con valor false a string:", valorFalse.toString()); */

/* onsole.log("Valor TRU AND TRUE:", (valorTrue && valorTrue).toString());
console.log("Valor TRU AND FALSE:", (valorTrue && valorFalse).toString());
console.log("Valor FALSE AND FALSE:", (valorFalse && valorFalse).toString()); */


/* console.log("Valor TRUE OR TRUE:",(valorTrue || valorTrue).toString());
console.log("Valor TRUE OR FALSE:",(valorTrue || valorFalse).toString());
console.log("Valor FALSE OR FALSE:",(valorFalse || valorFalse).toString()); */


/* console.log("NOT TRUE:", (!valorTrue).toString());
console.log("NOT FALSE:", (!valorFalse).toString()); */



/* let numero1 = parseInt(prompt('Escribe el primer numero: '));
let numero2 = parseInt(prompt('Escribe el segundo numero: '));

console.log("Resultado (",numero1, ">",numero2, "):", (numero1 > numero2));
console.log("Resultado (",numero1, ">=",numero2, "):", (numero1 >= numero2));
console.log("Resultado (",numero1, "<",numero2, "):", (numero1 < numero2));
console.log("Resultado (",numero1, "<=",numero2, "):", (numero1 <= numero2));
console.log("Resultado (",numero1, "==",numero2, "):", (numero1 == numero2));
console.log("Resultado (",numero1, "!=",numero2, "):", (numero1 != numero2)); */



/* let numero1 = parseInt(prompt("Escribe un numero: "));
let numero2 = parseInt(prompt("Escribe un numero: "));

if (numero1 > numero2) {
    console.log("Resultado de la comparación: el primero numero es mayor que el segundo");
}
else {
    if (numero2 > numero1) {
        console.log("Resultado de la comparación: el segundo numero es mayor que el primero");
    }
    else {
        console.log("Resultado de la comparación: ambos numeros son iguales");
    }
} */


/* switch (codigo) {
    case "ORO":
        console.log("El descuento aplicado es del 25%");
        break;
        case "PLATA":
            console.log("El descuento aplicado es del 15%");
            break;
        case "BRONCE":
                console.log("El descuento aplicado es del 5%");
                break;
                case "PLATINO":
                    console.log("El descuento aplicado es del 40%");
                    break;
                    
        default:
            console.log("Codigo promocional no valido")
            break;
            }
*/


/* const prompt = require('prompt-sync')();

console.log("Códigos promocionales: ORO, PLATA BRONCE O PLATINO")
let codigo = prompt("Intruzca su codigo promocional para saber su descuento: ");

if (codigo == "ORO") {
    console.log("El descuento aplicado es del 25%");
}
else if (codigo == "PLATA") {
    console.log("El descuento aplicado es del 15%");
}
else if (codigo == "BRONCE") {
    console.log("El descuento aplicado es del 15%");
}
else if (codigo == "PLATINO") {
    console.log("El descuento aplicado es del 40%");
}
else {
    console.log("Codigo promocional no valido")
}
 */


/* let i = 1;

while (i < 10) {
    console.log(i);
    i++;
} */



/* let valor = 0;
let fin = false;
while (!fin) {
    valor = parseInt(prompt("Introduzca un numero meyor que 100: "));
    if (valor > 100) {
        fin = true;
    }
    else {
        console.log("El valor introducido no es mayor que 100")
    }
}
console.log("Fin del programa") */


/* for (let i=0; i < 10; i++){
    console.log(i);
}
 */


/* let valor  = 0;
do {
    valor = parseInt(prompt("Introduzca un numero mayor que 100:"));
    if(valor <= 100) {
        console.log("El valor introducido no es mayor que 100")
    }
} while (valor <= 100)
console.log("Fin del programa"); */


/* for (let i=0; i < 3; i++){
    for (let j=0; j < 5; j++){
        console.log("item1 = %s, item2 = %s", i, j);
    }
}
 */



/* while (i < 3) {
    for (let j=0; j < 5; j++){
        console.log("item 1 = %s, item 2 = %s", i, j);
    }
    i++;
} */


/* let i = 0;
let j = 0;
while (i < 3) {
    while (j < 5) {
        console.log("item 1 = %s, item 2 = %s", i, j);
    }
    i++;
} */



/* function Saludar() {
    console.log("¡Hola Time of Software!");
}
Saludar(); */

// const prompt = require('prompt-sync')();

/* function EsMayorQueCero(valor) {
    if (valor > 0) {
        console.log("El valor introducido es mayor que cero");
    }
    else {
        console.log("El valor introducido es menor que cero");
    }
}
let valorLeido = parseInt(prompt("Introduce un numero: "));
EsMayorQueCero(valorLeido); */

/* function Sumar(sumando1, sumando2) {
    return sumando1 + sumando2;
}

let sum1 = parseInt(prompt("Introduzca el primer sumando: "));
let sum2 = parseInt(prompt("Introduzca el segundo sumando: "));

console.log("Resultado: %s", Sumar(sum1, sum2)); */


/* function SolicitarNumero() {
    let valor = parseInt(prompt("Introduzca un número: "));
    return valor;
}

function Sumar() {
    let valor1 = SolicitarNumero();
    let valor2 = SolicitarNumero();
    console.log("Resultado suma: %s", (valor1 + valor2));
}

Sumar(); */



let equipos = new Array("FCBarcelona", "Atletico de Madrid", "Real Madrid");

// console.log("Numero de elementos: ", animales.length);

/* animales = animales.sort();
console.log(animales);
*/

/* animales.push("Caballo");
console.log("Numero de elementos: ", animales.length);

let eliminado  = animales.pop();
console.log("Elemento eliminado: ", eliminado);

console.log("Numero de elementos: ", animales.length);
console.log(animales); */




/* console.log(animales.toString());
console.log(animales.join("|")); */

/* let eliminado = animales.shift();
console.log("Elemento eliminado: ", eliminado);
console.log(animales);

animales.unshift("Caballo");
console.log(animales); */

/* animales.splice(1,0,"Caballo", "Pez");
console.log(animales);

animales.splice(2, 1, "Rana", "Tiburón");
console.log(animales);

animales.splice(1, 3);
console.log(animales); */

/* let animales = ["Perro", "Gato", "Periquito", "Conejo"];
console.log(animales); */

/* console.log(animales1);
console.log(animales2);
console.log(animales3);

let animalesUnion = animales1.concat(animales2);
console.log(animalesUnion);

let animalesUnion2 = animales1.concat(animales2, animales3);
console.log(animalesUnion2);

let animalesUnion3 = animales2.concat("Ballena");
console.log(animalesUnion3); */

/* console.log(animales.reverse());

let subAnimales = animales.slice(2, 5);
console.log(subAnimales);

let subAnimales2 = animales.slice(4);
console.log(subAnimales2); */


/* for (let i=0; i < animales.length; i++){
    console.log(animales[i]);
}
 */

/* for (i in animales) {
    console.log(i, ":", animales[i]);
}

for (animal of animales) {
    console.log(animal);
} */


/* class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    mostrarPunto() {
        console.log("El punto es (%s, %s)", this.x, this.y);
    }
}

let punto = new Punto(3, 3);
punto.mostrarPunto();

let punto2 = new Punto(8, 7);
punto2.mostrarPunto();
 */
/* 
class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }

    mostrarPunto() {
        console.log("(%s, %s)", this.x, this.y);
    }

    get x() {
        return this._x;
    }
    set x(nuevaX) {
        this._x = nuevaX;
    }

    get y() {
        return this._y;
    }
    set y(nuevaY) {
        this._y = nuevaY;
    }
}
 */
/* let punto = new Punto(3, 3);
punto.mostrarPunto();
console.log("Coordenada X: %s", punto.x);
console.log("Coordenada Y: %s", punto.y);
console.log("--- Punto modificado ---");
punto.x = 7;
punto.y = 7;
punto.mostrarPunto();
console.log("Coordenada X: %s", punto.x);
console.log("Coordenada Y: %s", punto.y); */


/* class Triangulo {
    constructor(punto1, punto2, punto3) {
        this._punto1 = punto1;
        this._punto2 = punto2;
        this._punto3 = punto3;
    }

    get Punto1() {
        return this._punto1;
    }
    set Punto1(punto1) {
        this._punto1 = punto1;
    }

    get Punto2() {
        return this._punto2;
    }
    set Punto2(punto2) {
        this._punto2 = punto2;
    }

    get Punto3() {
        return this._punto3;
    }
    set Punto3(punto3) {
        this._punto3 = punto3;
    }

    MostrarTriangulo() {
        console.log("--- Triángulo ---");
        this._punto1.mostrarPunto();
        this._punto2.mostrarPunto();
        this._punto3.mostrarPunto();
        console.log("--------------");
    }
}

let p1 = new Punto(3, 4);
let p2 = new Punto(6, 8);
let p3 = new Punto(9, 2);

let triangulo = new Triangulo(p1, p2, p3);
triangulo.MostrarTriangulo();

p1.x = 4;
p2.y = 1;
p3.x = 5;
p3.y = 5;

triangulo.Punto1 = p1;
triangulo.Punto2 = p2;
triangulo.Punto3 = p3;

triangulo.MostrarTriangulo(); */

/* 
class Electrodomestico {
    constructor(encendido, tension) {
        this._Encendido = encendido;
        this._Tension = tension;
    }

    Encender() {
        this._Encendido = true;
    }
    Apagar() {
        this._Encendido = false;
    }

    EstaEncendido() {
        return this._Encendido;
    }

    get Tension() {
        return this._Tension;
    }
    set Tension(tension) {
        this._Tension = tension;
    }
} */


/* class Lavadora extends Electrodomestico {
    constructor(rpm, kilos, encendido, tension) {
        super(encendido, tension);
        this._RPM = rpm;
        this._Kilos = kilos;
    }

    get RPM() {
        return this._RPM;
    }
    set RMP(rpm) {
        this._RPM = rpm;
    }

    get Kilos() {
        return this._Kilos;
    }
    set Kilos(kilos) {
        this._Kilos = kilos;
    }
    Mostrar() {
        console.log("--- Lavadora ---");
        console.log("RPM: ", this._RPM);
        console.log("Kilos: ", this._Kilos);
        console.log("Tensión: ", this.Tension);

        if (this.EstaEncendido()) {
            console.log("¡La lavadora está encendida!")
        } else {
            console.log("¡La lavadora está apagada!")
        }
        console.log("--------------------")
    }
} */

/* let l = new Lavadora(1200, 7, false, 125);
l.Mostrar();
l.Encender();
l.Kilos = 8;
l.RMP = 1500;
l.Tension = 220;
l.Mostrar(); */


/* 
class Microondas extends Electrodomestico {
    constructor(potenciamaxima, grill, encendido, tension) {
        super(encendido, tension);
        this._PotenciaMaxima = potenciamaxima;
        this._Grill = grill;
    }

    get PotenciaMaxima() {
        return this._PotenciaMaxima;
    }
    set PotenciaMaxima(potenciamaxima) {
        this._PotenciaMaxima = potenciamaxima;
    }

    get Grill() {
        return this._Grill;
    }
    set Grill(grill) {
        this._Grill = grill;
    }

    Mostrar() {
        console.log("--- Microondas ---");
        console.log("Potencia máxima: ", this._PotenciaMaxima);
        console.log("Tiene grill: ", this._Grill);
        console.log("Tensión: ", this.Tension);
        if (this.EstaEncendido()) {
            console.log("¡El microondas está encendido!");
        } else {
            console.log("¡El microondas está apagado!");
        }
        console.log("-------------------")
    }
}

let l = new Lavadora(1200, 7, false, 125);
l.Mostrar();

let m = new Microondas(800, true, false, 220);
m.Mostrar(); */


const prompt = require('prompt-sync')();

/* function Sumar() {
    let sumando1 = parseInt(prompt("Introduce el primer sumando: "));
    let sumando2 = parseInt(prompt("Introduce el segundo sumando: "));
    console.log("Resultado de a suma: "(sumando1 + sumando2));
}
try {
    Smar();
} catch(e) {
    console.log("ERROR: %s", e.message);
}
finally {
    console.log("Fin del programa");
}
 */

/* function SolicitarNumero() {
    let numero = parseInt(prompt("Introduce un número entre 0 y 10: "));
    if (isNaN(numero)) throw "El valor introducido no es un número";
    if (numero > 10) throw "Número muy grande";
    if (numero < 0) throw "Número muy pequeño";
    return numero;	
}

try {
    console.log("Numero introducido: %s", SolicitarNumero());
}
catch (e) {
    console.log("ERROR: %s", e);
}
finally {
    console.log("Fin del programa");
}
 */


/* const fs = require("fs");

try {
    fs.statSync('prueba.txt');
    console.log("El fichero existe");
    const datos = fs.readFileSync('prueba.txt', 'utf8');
    console.log(datos);
}
catch (e) {
    console.log("ERROR: %s", e.message);
} */

var fs = require("fs");

/* let cadena = "En un lugar de la mancha\nde cuyo nombre no quiero acordarme";

fs.writeFileSync('nuevo.txt', cadena);
console.log("El archivo fue creado exsitosamente");

const datos = fs.readFileSync('nuevo.txt', 'utf8');
console.log("Fichero leido");
console.log(datos); */

/* fs.writeFileSync('nuevolinea.txt', "En un lugar de la mancha,\n", {flag: "a+"});
fs.writeFileSync('nuevolinea.txt', "de cuyo nombre no quiero acordarme,\n", {flag: "a+"});
fs.writeFileSync('nuevolinea.txt', "no ha mucho tiempo que vivia un hidalgo de los de lanza astillero\n", {flag: "a+"});
fs.writeFileSync('nuevolinea.txt', "adarga antiguea, rocin flaco y galgo corredor...,\n", {flag: "a+"});

console.log("El archivo fue creado correctamente");

const datos = fs.readFileSync('nuevolinea.txt', 'utf8');
console.log("Fichero leido");
console.log(datos);
*/


