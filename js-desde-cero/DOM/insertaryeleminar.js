// Insertar, Eliminar y CLonar elementos



const list = document.getElementById("list");
const newElement = document.createElement("li");
newElement.textContent = "I am a new Element"

// list.insertBefore(newElement, list.children[0])
// list.children[0].insertAdjacentElement("beforebegin", newElement)


// list.insertAdjacentElement("afterbegin", newElement)
// list.insertAdjacentElement("beforeend", newElement)
// list.children[1].insertAdjacentElement("afterend", newElement)


// list.children[1].insertAdjacentHTML("afterend", "<li>Elemento con HTML</li>")
// list.children[1].insertAdjacentText("afterend", "Elemento con HTML")

// Remplazar un elemento
// list.replaceChild(newElement, list.children[1])


// list.children[0].before(newElement)
// list.prepend(newElement)
// list.append(newElement)
// list.after(newElement)
// list.children[0].after(newElement)


// list.children[0].replaceWith(newElement)
// document.getElementById("childToReplace").replaceWith(newElement)



// Clonar y eleminar elementos
// list.after(list.cloneNode(true))

// list.remove()
// list.removeChild(list.children[0])

