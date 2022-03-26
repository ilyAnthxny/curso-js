// Expresiones Regulaes
// Son una secuencia de caracateres que forma un patron de busqueda, principalmente utilizada para la busqueda de patrones de cadenas de caracteres u operaciones de sustituciones

// Sintaxis       /patron/
// i: ignore case, no diferencia enre mayusculas y minusculas
// g: globalThis, busca de forma globalThis, es decodeURI, no se para despues de la primera coincidencia

const text = document.getElementById("text").textContent
const regEx = /lorem/gi
const regEx2 = new RegExp("lorem", "gi")
const regEx3 = new RegExp("/lorem", "gi")
// console.log(regEx.test(text))
// console.log(text.includes("lorem"))





// Exptresiones regulares II

// Comodines 
// Sustitucion : "." Define un comodin dentro del patron
// Corchetes [] : para definir las letras dentro de un patron
// Cadenas completas : () para definir palabras completas y no un termino por termino 

// Expresiones regulares II 

// ^ : Antes de este simbolo no puede haber nada
// $ : Despues de este simbolo no puede haber nada
// {n} Se tiene que repetir n veces
// {n,m} se tiene que repetir entre n y m veces, ambas incluidas
// {n,} se tiene que repetir n veces sin maximo

// Asterisco : lo que esta antes del asterisco puede estar, puede no estar y se puede repetir

// Interrogacion : lo que esta antes de la interrogacion puede no estar, pero si esta solo puede estar una vez

// operador + : lo que esta antes del + tiene que estar como minimo una vez

// Expresiones regulaes IV

// Caracteres especiales
//  /s : Coincide con un caracter, entre ellos incluidos espacio, tab, salto de linea y retorno de carro

//  S/ : en mayuscula es lo contrario, no lo admite, 

//  d/ : coincidde con un caracter de numero
//  D/: Coincide con un caracter de valor no numerico

//  w/ : Coincide con cualquier caracter valor alfanumerico, incluyendo el guion bajo
//  W/ : Coincide con todo menos menos caracteres de palabras 