// Condicional simple
let num = 5;
if(num>0){
console.log(`${num} es mayor que 0`);
}

// Condicional Compuesto
let num2 = -6;
if(num2>0){
    console.log(`${num2} es mayor que 0`); 
}else{
    console.log(`${num2} es menor que 0`);
}

// Condicional Multiple
let num3 = 0;
if(num3>0){
    console.log(`${num3} es mayor que 0`); 
}else if(num3<0){
    console.log(`${num3} es menor que 0`);
}else{
    console.log(`${num3} es igual a 0`);
}



// Operadores logicos

// && and
// || o

let num4 =0;
let num6 =0;
// if(num4> 0 || num6> 0)
if(num4>0){
    if(num4>0){
            console.log(`${num4} y ${num6} son mayores que 0`);
        }else if(num4<0){
            console.log(`${num4} es mayor que 0 y ${num6} es menor que 0`);
        }else{
            console.log(`${num4} es mayor que 0 y ${num6} es igual a 0`);
        }
}else if(num4<0){
    if(num4>0){
        console.log(`${num4} y ${num6} son mayores que 0`);
    }else if(num4<0){
        console.log(`${num4} y ${num6} son menores que 0`);
    }else{
        console.log(`${num4} es menor que 0 y ${num6} es igual a 0`);
    }
}else{
    if(num4>0){
        console.log(`${num4} es igual que 0 y ${num6} es mayor que 0`);
    }else if(num4<0){
        console.log(`${num4} es igual que 0 y ${num6} es menor que 0`);
    }else{
        console.log(`${num4} y ${num6} son iguales a 0`);
    }
}



let word = "Hola";

if(word.length>4){
    console.log(`${word} tiene mas de 4 letras`);
}else if(word.length<4){
    console.log(`${word} tiene menos de 4 letras`);
}else{
    console.log(`${word} tiene 4 letras`);
}



let respuesta = true;

if(respuesta==true){
    console.log(`${respuesta} es verdadera`);
}



// Ejercicio

const numbers = document.getElementById("numbers");
const result = document.getElementById("result");

let a=prompt("Introduzca el primer número");
let b=prompt("Introduzca el segundo número");
let c=prompt("Introduzca el tercer número");

numbers.textContent = `Los numeros introducidos son ${a}, ${b}, ${c}`


// Se ordenen de mayor a menor

if(a>=b && a>=c){
    if(b>c){
        result.textContent = `El orden es: ${a}, ${b}, ${c}`
    }else{
        result.textContent = `EL orden es: ${a}, ${c}, ${b}`
    }
}else if(b>=a && b>=c){
    if(a>c){
        result.textContent = `El orden es: ${b}, ${a}, ${c}`
    }else{
        result.textContent = `El orden es: ${b}, ${c}, ${a}`
    }
}else if(c>=a && c>=b){
    if(a>b){
        result.textContent = `El orden es: ${c}, ${a}, ${b}`
    }else{
        result.textContent = `El orden es: ${c}, ${b}, ${a}`
    }
}



