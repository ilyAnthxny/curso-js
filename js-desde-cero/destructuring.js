// La destructuracion es una expresion de JS que hace posible la extracion de datos, de arreglos u objetos

const person ={
    name: "Marco",
    age: 20,
    email: "marco@gmail.com"
}

// Forma tradicional
// const name = person.name
// const age = person.age
// const email = person.email


// Destructuring
// const {name:nombre, age:edad, email} = person
// console.log(nombre, edad, email)


// const numbers = [1, 2, 3, 4, 5]
// const[primeraPosicion] = numbers
// console.log(primeraPosicion)

// const printPerson = ({name:nombre}) =>{
//     console.log(nombre)
// }

// const printPerson = ({name}) =>{
//     console.log(nombre)
// }

// printPerson(person)

const getUsers = async () =>{
    const {data:users} = await axios.get("https://jsonplaceholder.typicode.com/users")

    console.log(users)
}

getUsers()