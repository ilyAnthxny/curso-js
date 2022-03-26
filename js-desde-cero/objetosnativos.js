// Objetos Nativos

// Objeto window - es el objeto global de el descienden todos los objetos
// alert()
// prompt()
// confirm()

// alert("alerta")
// prompt("inserta tu edad")
// addEventListener("click", (e) =>{
//     console.log(e)
// })
// let name = prompt("Introduce tu nombre")
// console.log(name)
// if(confirm("Asepta?")){
//     console.log("El usuario acepto")
// }else{
//     console.log("EL usuario no acepto")
// }




// objeto console - Es el objeto que contiene la consola del navegador 
// console.log()
// console.dir()
// console.error()
// console.table()

// console.dir()
// console.error("error")
// console.table(person)

// const button = document.getElementById("button")

// const person = {
//     name =  "Dorian",
//     age = 20,
//     email = "dorian@gmail.com"
// }


// console.log(location.href)
// console.log(location.protocol)
// console.log(location.host)
// console.log(location.pathname)
// console.log(location.hash)
// location.reload()
// location.href = "https//google.com"


// const date = new Date()
// console.log(date.getDate());


// button.addEventListener("click", () =>{
//     const timeOut = setTimeout(() => {
//         console.log("Adios");
//     },3000)
//     clearTimeout(timeOut)
// })

// const timeOut = setTimeout(() => {
//     console.log("Adios");
// },3000),


// const button = document.getElementById("button")


const saludar = () =>{
    console.log("Hola");
}

let cont = 0;

// const interval = setInterval(saludar, 3000);

const interval = setInterval(() => {
    console.log(cont)
    cont++
},3000)

button.addEventListener("click", () =>{
    clearInterval(interval)
})

