// Arrays

// Son estructuras que nos permiten almacenar varios datos y agruparlos
// Se pueden llenar con caulquier tipo de dato valido en js y deben ir separados por comas
// Se declaran con llaves cuadradas o corchetes

// Cada elemente del array puede ser identificado por su indice osea su posicion, el primer elemento siempre se empieza contar desde el cero

// let array = [1(0), 2(1), 3(2), 4(3)];
//  let array = []; array vacio


// Arrays with numbers
let num= [1, 2, 3, 4, 5];
console.log(num[0]);
console.log(num);
console.log(num[1] + num[4]);

// Arrays with strings
let word = ["hi", "this", "is", "an", "array"];
console.log(word[3] + word[1]);
console.log(`The word ${word[4]}, has ${word[4].length} letters`)

// Arrays with booleans
let booleans = [true, true, false];
console.log(`${booleans[2]} is false`)


// Arrays ||
let number = [1, 2, 3, 4, 5, 6, 7, 8,];

// Propiedad
// Devuelve el numero de pocisiones que contiene el arrays
console.log(number.length);

// Metodos
// array.isArray(variable a evaluar) Devuelve true si la variable es un array
let numero= 5;
console.log(Array.isArray(numero));

// Para eliminar elementos de un array
// shift eimina el primer elemento
console.log(num);
num.shift();
console.log(num);

// pop elemina el ultimo elemento
console.log(num);
num.pop();
console.log(num);

// Añadir elementos a un array

// push añade uno o mas elementos al final del array y devuleve la nueva longitud
num.push(7);
console.log(num);

// unshift añade uno o mas elementos al comienzo de un array
num.unshift(4, 5);
console.log(num);

// indexOf devuelve el primer indice del elemento que coicida con el valor especificado, o -1 si no encunetra ninguno 
console.log(num.indexOf(3));

// lastIndexOf es lo mismo pero empieza a contar desde atras
console.log(num.lastIndexOf(3));

// Reverse le da la vuelta al array
console.log(num);
num.reverse();
console.log(num);

// join("string") Devuelve un string con el separador que indiquemos
// let arrayString = numbers.join(" / ");
console.log(num.join(" / "));

// splice(a,b,items) cambia el contenido de un array eliminando elementos existentes y/o agregar nuevos elementos
num.splice(1, 3, 15);
console.log(num);

// slie(a,b) Extrae los elementos de un array desde el indice a hasta el indice b. si no existe b desde a hasta el final, sino existe ni a ni b hace una copia del original

let newNumbers = num.slice();
console.log(num);
console.log(newNumbers);

let newNumbers1 = num.slice(1);
console.log(num);
console.log(newNumbers);

let newNumbers2 = num.slice(2,3);
console.log(num);
console.log(newNumbers);
