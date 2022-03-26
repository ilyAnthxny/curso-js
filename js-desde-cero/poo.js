// Programacion Orientada a Objetos
// Es un paradigma de la programacion que actualiza la forma de programar anterior

// Conceptos: 

/*
Clase 
Herencia
Objeto
Metodo
Evento

const persona 

Clase:
Cuando creamos un objeto se e denomina instanciar
necesitamos una funcion constructora: Se tiene que llamar constructor cada vez que creemos un objeto

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apelido
        this.edad = edad
    }
}
this.datos `${nombre} ${apellido} ${edad}`


A las funciones de los objetos se les llama metodo 

saludar(){
    return `Hola me llamo ${this.nombre} y tengo ${this.edad} años `
}

para crear un objeto utilizando la clase o plantilla se hace con la palabra reservada new

const juan = new Persona ("Juan", "Garcia", 23
)
*/

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    }

    saludar(){
        return `Hola me llamo ${this.nombre} y tengo ${this.edad} años.`
    }
}

const juan = new Persona("Juan", "Garcia", 25);
const martha = new Persona("Martha", "Garcia", 27);

console.log(juan);
console.log(juan.saludar());
console.log(martha)

