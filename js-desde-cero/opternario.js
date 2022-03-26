// Operador ternario

// Para saber si un numero es par o impar
let num = 2;

(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);

// Para escribir varias sentencias
(num % 2 == 0) ? (
    console.log(`${num} es par`),
    console.log(`${num} puede dividirse entre 2`)
    )
  : 
    (
        console.log(`${num} es impar`),
        console.log(`${num} no se puede dividir entre 2`)
    );

// Con if

if(num % 2 == 0) console.log(`${num} es par`);
else console.log(`${num} es impar`)

