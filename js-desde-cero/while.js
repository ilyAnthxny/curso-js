// Se usan cuando queremos que un trozo de codigo se repita
// Los bucles determinados se usan especificamente cuando ponemos el numero de veces que se va a repetir
// Los indeterminados cuando no ponemos el numero de veces que se van a repetir


// Bucles indeterminados: While y do While
// While
 
let pass = "";

while(pass != "hola"){
    pass = prompt("Introduzca su contraseña");
}

console.log("fin del bucle");


// do While

let pass = "Hola";

do{
    pass = prompt("Introduzca su contraseña");
}while(pass != "Hola")

