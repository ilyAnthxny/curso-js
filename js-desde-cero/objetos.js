// OBJETOS
// Un objeto es una estructura de datos que representa propiedades, valores y acciones que puede realizar el objeto
// Tienen propiedades y atributos y comportamiento o acciones representados por pares de clave  (key) : valor (value)


const person = {
    name : "Juan",
    age : 19,
    sons : ["Laura", "Diego"]
}

// Para obtener el valor
console.log(person.name);
console.log(person["name"]);

// Para obtener los valores del objeto con un ciclo for
for(const key in person){
    console.log(key);
}

// Obtener los valores junto con los el indice del array
for(const key in person){
    console.log(person[key]);
}

// Obtiene el valor del objeto
for(const son of person.sons){
    console.log(son);
}

// Obtener el objeto en una sola frase
console.log(`Hola ${person.name}, tienes ${person.age} años, y tus hijos se llaman ${person.sons.join(", ")}`)
