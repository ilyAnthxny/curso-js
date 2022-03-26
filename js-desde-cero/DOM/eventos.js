// Eventos
// Un evento es cualquier cosa que suceda en el documento
// Element.addEventListener("event", callback)

// const button = document.getElementById("button");
// const box = document.getElementById("box");
// const input = document.getElementById("input")

// CLICK
// button.addEventListener("click", () =>{
//     console.log("click");
// } )


// dblCLick
// button.addEventListener("dblclick", () =>{
//     console.log("DoubleClick")
// })


// mouseenter y mouseleave
// box.addEventListener("mouseenter", () =>{
//     box.style.background="green";
// })
// box.addEventListener("mouseleave", () =>{
//     box.style.background="blue";
// })


// mousedown y mouseup
// box.addEventListener("mousedown", ()=>{
//     console.log("Has pulsado la caja")
// })
// box.addEventListener("mouseup", ()=>{
//     console.log("Has soltado la caja")
// })


// mousemove
// box.addEventListener("mousemove", ()=>{
//     console.log("estas moviendo el raton en la caja");
// })


// keydown, keyup y keypress
// input.addEventListener("keydown", () =>{
//     console.log("Has pulsado una tecla")
// });
// input.addEventListener("keyup", () =>{
//     console.log("Has soltado una tecla")
// });
// input.addEventListener("keypress", () =>{
//     console.log("Estas pulsando una tecla")
// })



// Objeto evento
// const form = document.getElementById("form")
// const input = document.getElementById("input")
// const button = document.getElementById("button")
// input.addEventListener("keyup", (e) => {
//     console.log(e);
// })

// button.addEventListener("click", (e) => {
//     console.log(e.target)
// })


// const gallery = document.getElementById("gallery")
// gallery.addEventListener("click", (e) =>{
//     console.log(e.target.classList.add("purple"))
// })

const link = document.getElementById("link")
link.addEventListener("click", (e) =>{
    e.preventDefault()
    button.click()
})


const form = document.getElementById("form")
form.addEventListener("submit", (e) =>{
    e.preventDefault(e)
    console.log("El elemento se ha enviado")
})

const button = document.getElementById("button")
button.addEventListener("click", () =>{
    input.value = "Has hecho click"
})