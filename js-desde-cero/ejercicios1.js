
// Ejercicio 1
/*    let nombre = prompt("Como te llamas?")
     let edad = prompt("Cual es tu edad?");

     console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendras ${++edad}`)
*/

// Ejercicio 2

/*
let b;
let h;
let r;
const pi = 3.1416;

let pregunta = prompt(`De que figura quieres calcular el area triangulo, rectangulo o circulo`);

if(pregunta.toLowerCase() == "triangulo"){
     let b = prompt(`Cual sera su base?`);
     let h = prompt(`Cual sera su altura?`);
     console.log(`El área es ${parseInt(b) * parseInt(h) / 2}`);

}else if(pregunta.toLowerCase() == "rectangulo"){

     let b = prompt(`Cual sera su base?`);
     let h = prompt(`Cual sera su altura?`);
     console.log(`El área del rectangulo es ${parseInt(b) * parseInt(h)}`)

}else if(pregunta.toLowerCase() == "circulo"){
     let r = prompt(`Cual sera su radio?`);
     console.log(`El área del circulo es ${pi * Math.pow((parseInt(r)), 2)}`);
     
}else{
     alert("recargue y vuelva a escojer una opcion"); 
}
*/


// Ejercicio 3

/*
let num = parseInt(prompt("introduce un numero"));

for(let i=1; i<num; i++){
     if(i%2==0){
          console.log(`${i} es par`);
     }else{
          console.log(`${i} es impar`)
     }
}

*/


// Ejercicio 4

/*
let num = parseInt(prompt("Introduce un numero mayor que 1"));
let divisor = 0;

if (num===1) console.log("El numero 1 no es valido");
else{
     for(let i=2; i<num; i++){
          if(num % i == 0){
               console.log(`${num} / ${i} = ${num/i} No es primo`);
               divisor++
               break
          }
     }
}

if(divisor==0) console.log(`${num} es primo`);
*/


// Ejercicio 5

/*
let num = parseInt(prompt("Introduce un numero"));
let result=1;

for(let i = num; i>0; i--){
     result *= i;
}

console.log(`El factorial de ${num} es ${result}`)
*/


// Ejercicio 6
/*
let suma = 0;
let cont = 0;

while(suma<50){
     suma += parseInt(prompt("Introduce un numero para añadir a la suma"))
     cont++
}

console.log(`La suma total es de ${suma}`);
console.log(`El total de numeros introducidos es ${cont}`)
*/


// Ejercicio 7
/*
const numbers= [3,43,21,20,56]
let pares= []
let impares = []

for(const number of numbers){
     let random = Math.round(Math.random() * 10 + 1) 
     const result = number * random;

     console.log(`${number} * ${random} = ${number * random}`);
     if(result % 2 == 0){
          pares.push(result);
     }else{
          impares.push(result);
     }
}

console.log(pares);
console.log(impares);
*/


// Ejercicio 8
/*
const letras = ["T", "R", "W","", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"]

const dni = prompt("Introduce tu dni");

if(dni.length==8 && parseInt(dni) > 0){
     console.log(`Tu dni completo es ${dni}${letras[dni%23]}`);
}
*/



// Ejercicio 9
/*
const palabra = prompt("introduce una palabra");

let consonantes = 0;
let vocales = 0;
for(const letra of palabra){
     if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || (letra == "u") 
     vocales++
     else consonantes++
}

console.log(`Tu palabra tiene ${vocales} vocales, ${consonantes} consonantes y tiene un total de ${palabra.length} letras.`)
*/



// Ejercicio 10

const colors = ["azul", "amarillo", "rojo", "verde", "rosa"]

const color = prompt("Introduce un color").toLocaleLowerCase()

if(colors.indexOf(color) !== -1){
     console.log(`Tu color se encuenra en el array`);
}else{
     console.log(`Tu color no esta definido`);
}






























