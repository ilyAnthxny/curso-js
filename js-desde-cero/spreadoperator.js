// Spread operator
// Expande el contenido de un array

const numbers = [-12, 2, 3, 23, 43, 2, 3];
// console.log(...numbers);

// Enviar elementos en un array a una funcion
const addNumbers = (a, b, c) => {
    // console.log(a+b+c);
}
let numbersToAdd=[1, 2, 3]
addNumbers(...numbersToAdd);


// Añadir un array a un array
let users = ["javier", "david", "rosa", "juan", "mecedes"]
let newUsers = ["martha", "jaime", "laura"];
// users.push(newUsers[0], newUsers[1], newUsers[2]);
users.push(...newUsers);
// console.log(users);


// Copiar arrays
let arr1 = [1,2,3,4];
let arr2 = [...arr1];
// console.log(arr2);


// Concatenar arrays
let arr3 = [1, 2, 3, 4, 5]
let arr4 = [6, 7, 8]
// let arrConcat = arr3.concat(arr4);
let arrConcat = [...arr3, ...arr4]
// console.log(arrConcat)


// Enviar un numero indefinido de argumentos a una funcion

const restParms = (...numbers) => {
    // console.log(numbers);
}
restParms(1)


// Libreria math
const numbers1 = [1, 3, 7, 8, 10, 11]
// console.log(Math.max(...numbers1));
// console.log(Math.min(...numbers1));


// Eliminar elementos duplicados de un array
const numbers2 = [2 , 4, 5, 8, 10, 11, 2, 4, 8]
console.log([...new Set(numbers2)]);