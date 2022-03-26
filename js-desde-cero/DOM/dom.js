// DOM (Document Object Model)
// Es toda la estructura html del documento 
// Es una API (Aplication Programing Interface)

// Element node -1, Text node -3, Comment node -8


// document.getElementById("") = acceder a un elemento a traves de su Id
const title = document.getElementById("title");
// console.log(title);
title.textContent = "DOM - Accediendo a Nodos"

// document.quearySelector("selectorCSS") = Accede a un elemento que coincida con el selector CSS
const paragraph = document.querySelector(".paragraph");
const span = paragraph.querySelector("span");
// console.log(span.textContent);


// document.quearySelectorAll("selectorCSS") = Accede a todos los elementos que coinciden con el selector css, devuelve un nodeList
const paragraphs = document.querySelectorAll(".paragraph");
paragraphs[0].style.color = "purple"

const paragraphsSpread = [...document.querySelectorAll(".paragraph")]
const paragraphsArrray = document.querySelectorAll(".paragraph")
paragraphsSpread.map(p => p.style.background="green")
// paragraphs.map(p=>p.style.color="green")
console.log(paragraphs);





