// Arrays Metodos

// Un elemento iterable es cualquier elemento que se pueda recorrer

// Para iterar un array
// let word = "hello world"
// console.log(Array.from(word));
// console.log(word.split(" "))


// Para ordenar de menor a mayor y por alfabeto
// const letters = ["z", "j", "n", "x"];
// const numbers = [1, 90, 8, 4, 3];
// console.log(letters.sort());
// console.log(numbers.sort((a, b) => a-b));
// console.log(numbers.sort((a, b) => b-a));



// const numbers = [12, 25, 28, 79];
// numbers.forEach((number) => console.log(number))
// numbers.forEach((number, index) => console.log(`${number} esta en la posicion ${index}`))



// const words = ["html", "css", "js", "react"];
// console.log(words.some(word => word.length>10));
// console.log(words.every(word => word.length>3));


// const numbers = [12, 25, 28, 79];
// const numbers2 = numbers.map(number => (number*2));
// console.log(numbers2);


// const numbers = [12, 25, 28, 79];
// const numbers2 = numbers.filter(number => number < 40);
// console.log(numbers2);

const numbers = [12, 25, 28, 79];
console.log(numbers.reduce((a, b) => a + b));

const users = [
    {
        name: "user 1",
        online: true
    },
    {
        name: "user 2",
        online: true
    },
    {
        name: "user 3",
        online: true
    },
    {
        name: "user 4",
        online: true
    },
    {
        name: "user 5",
        online: false
    }
];

const usersOnLine = users.reduce((cont, user) => {
    if(user.online) cont++
    return cont
},0)

console.log(`Hay ${usersOnLine} usuarios conectados`);



