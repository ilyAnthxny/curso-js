// Objeto a arrastrar: 
// dragstart : se ispara al comenzar a arrastrar
//  drag : se dispara mientras arrastramos
//  dragend : se dsipara al soltar el obejto

// Zona de destino
//  dragenter : se dispara cuando el objeto entra en la zona de destino
//  dragover : se dispara cuando el objeto se mueve sobre la zona de destino
//  drop : se dispara cuando soltamos el obeto en la zona de destino
//  dragleave : se dispara caundo el objeto sale de la zona de destino




// const fresa = document.getElementById("fresa")
// const dropZone = document.getElementById("dropZone")

// fresa.addEventListener("dragend", () =>{
//     console.log("Drag Start")
// })

// dropZone.addEventListener("dragover", (e) =>{
//     e.preventDefault()
//     console.log("Drag Enter")
// })


// dropZone.addEventListener("drop", (e) =>{
//     e.preventDefault()
//     console.log("Drop")
// })

// dropZone.addEventListener("dragleave", (e) =>{
//     e.preventDefault()
//     console.log("Drag Leave")
// })



/* DRAG & DROP II
*/

const pendingTasks = document.getElementById("pending-tasks")
const finishedTasks = document.getElementById("finished-tasks")

pendingTasks.addEventListener("dragstart", (e) =>{
    e.dataTransfer.setData("text/plain", e.target.id)
    // console.log(e.dataTransfer.getData("text"));
})

pendingTasks.addEventListener("drag", (e) =>{
    e.target.classList.add("active")
})

pendingTasks.addEventListener("dragend", (e) =>{
    e.target.classList.remove("active")
})

finishedTasks.addEventListener("dragover", (e) => {
    e.preventDefault()
})

finishedTasks.addEventListener("drop", (e) =>{
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData("text"))
    element.classList.remove("active")
    finishedTasks.appendChild(pendingTasks.removeChild(element))
})