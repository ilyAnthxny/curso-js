// DOM Crear e Insertar ELementos
// document.createElement(element)
// parent.appentChild(element)

const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo", "Valor extra"]

const title = document.getElementById("title");
const daysList = document.getElementById("daysList");
const selectDays = document.getElementById("daysSelect");

// const itemList = document.createElement("LI");
// itemList.textContent = "Lunes"

// daysList.appendChild(itemList);

title.textContent = "DOM - Crear e Insertar Elemntos"
title.innerHTML = "DOM - <span>Crear e Insertar Elemntos</span>"

const fragment = document.createDocumentFragment()

// for(const day of days){
//     const itemList = document.createElement("LI");
//     itemList.textContent = day
//     fragment.appendChild(itemList)
// }
// daysList.appendChild(fragment)

for(const day of days){
    const selectItem = document.createElement("Option")
    selectItem.setAttribute("value", day.toLowerCase)
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}

selectDays.appendChild(fragment)