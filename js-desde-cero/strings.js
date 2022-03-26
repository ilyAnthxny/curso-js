// METODOS Y PROPIEDADES DE LOS STRINGS
// Metodo: es todo aqullo que la cadena puede hacer: Eje: puede convertirse en mayusculas
// Propiedad: Son las caracteristicas que la cadena tiene por ser una cadena: eje: longitud:

// Propiedades
// length = devuelve la longitud de la cadena

let cadena = "Hola Mundo";
console.log(cadena.length)

// toUpperCase() : Devuelve la cadena en Mayusculas
console.log(cadena.toUpperCase());

// toLowerCase() : Devuelve la cadena en Minisculas
console.log(cadena.toLowerCase());

// indexOf(string) : Devuelbve la posicion en la que se encunetra el string, sino lo encuentra devuelve -1
console.log(cadena.indexOf("Hola"));

// replace(valor buscar, valor nuevo) : remplaza el fragmento de la cadena que le digamos y le pone el valor nuevo
console.log(cadena.replace("Mundo", "Youtube"));

// substring(inicio [,fin]) : extrae los caracteres desde inicio hasta el fin
console.log(cadena.substring(3, 7));

// slice(inicio [,fin]) : igual que substring pero admite valores negativos
console.log(cadena.slice(3, -6));

// trim() : Elimina los espacios al inicio y al final de una cadena

let cadenaDos = "   Hola youtube estamos trabajando con cadenas    ";

console.log(cadenaDos.trim());


// ES6

// startsWith(valor [,fina]) : sirve para saber si la cadena empíeza con ese valor. Devuelve true or false
console.log(cadena.startsWith("H"));

// endsWidh (valor [,fin]) : Sirve para saber si la cadena termina con ese valor
console.log(cadena.endsWith("o"));

// includes(valor [,inicio]) : igual que indexOf, pero devuelve true o false
console.log(cadena.includes("n"));

// repeta() : repite el strings el numero de veces que le indiquemos

let cadenaTres = "Buenas";

console.log(cadenaTres.repeat(4));

// Template strings
let nombre = "Marco";
let apellido = "Gmñ";
let edad = 19;

console.log("Hola " + nombre + " " + apellido + " tienes " + edad + " años")

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`)

