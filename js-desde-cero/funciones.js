// Funciones

// Estan diseñadas para realizar una sola tarea

// function nombreFuncion(){
//     condigo a ejecutar
// }

// function nombreFuncion() =>{
//     codigo a ejecutar
// }

// function saludar(){
//     console.log("Hi");
// }

// saludar()


/*
const saludar = () => console.log("Hi");
const saludarUsuario = (user) => console.log(`Hola ${user}`);

saludarUsuario("Pepe")
saludarUsuario("Martha")

const suma = (num1, num2) => {
    if(num1 == 2){
        return num1+num2
    }
    console.log("Esto no se va a ejecutar")
    return num1

}

console.log(suma(7,3))
*/

const suma = (num1, num2) => num1 + num2
let result = suma(3,6)

console.log(result);
