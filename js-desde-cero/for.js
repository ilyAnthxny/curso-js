// Bucle for
// Hay que iniciar una variable dentro del bucle
// Especificar el numero de vueltas 
// Incremento o decremento

// for(let i=0; i<=10; i++){Codigo a ejecutar}

// Durante su ejecucion la variabel i aumentara su valor en cada vuelta

// FOR CON IF
for(let i=0; i<=10; i++){
   if(i!=5){
    console.log(i);
   }
}


// FOR
let numbers = [1, 2, 3, 4, 5];

for(let i=0; i<=numbers.length; i++){
    console.log(`i vale ${i} y el valor de esa posicion en el array es ${numbers[i]}`);
}




// FOR OF Y FOR IN

/*
Break- Rompe el bucle
Continue- hace a funcion de i++ : se salta las posciones que le indiquemos y despues continua su ejecucion

*/

// For of

let names=["Paco", "Jose", "Paula", "María"];


for(let name of names){
    if(name==="Paula"){
        continue
    }
    console.log(name)
}

for(let index in names){
    if(names[index]==="Paula"){
        continue
    }
    console.log(index);
}


for(let i=0; i< names.length; i++){
    if(names[i]=== "Paula"){
        continue
    }
    console.log(names[i]);
}
