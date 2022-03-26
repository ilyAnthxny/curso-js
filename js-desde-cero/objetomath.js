// OBJETO MATH
//Es un objeto que se utiliza para operaciones matematicas mas especificas

// Propiedades Math.E - Math.PI
console.log(Math.E);
console.log(Math.PI);
// METODOS
let num = 5;
let num2 = 6.3;
let num3 = 8.9;
let num4 = 9;

// Math.abs(x) : Devuelve el valor absoluto de x
console.log(Math.abs(num));

// Math.ceil(x) : Devuelve el entero mas pequeño mayor o igual que un numero
console.log(Math.ceil(num2));

// Math.floor(x) : Devuelve el entero mas grande menor o igual que un numero
console.log(Math.floor(num3));

// Math.pow(x, y) : Devuelve la potencia de x elevado a y
console.log(Math.pow(3,3));

// Math.random() : Genera un numero aleatorio entre el 0 y el 1
console.log(Math.random()+100);
// console.log(Math.random() + (max,min)+min); para generar un numero aleatorio
console.log(Math.round(Math.random()+100));

// Math.round(x) : Devuelve el valor de un numero redondeado al entero mas cercano
console.log(Math.round(Math.random()* (10 - 5)+5));

// Math.sign(x) : Devuelve el signo de la x,  que indica si x es positivo, negativo o cero 
console.log(Math.sign(0));

// Math.sqrt() : Devuelve la raiz cuadrada de x
console.log(Math.sqrt(25));

