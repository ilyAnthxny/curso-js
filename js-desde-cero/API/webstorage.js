const form = document.getElementById("form")
const keys = document.getElementById("keys")

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    // const person = {
    //     name: "Marco",
    //     email: "marco@gmail.com"
    // }

    // sessionStorage.setItem("name", JSON.stringify("Marco"))

    sessionStorage.setItem(form.key.value, form.value.value)

    keys.innerHTML +=`<option>${ form.key.value }</option>`

    form.reset()
})

keys.addEventListener("change", () =>{
    // sessionStorage.getItem(keys[keys.selectedIndex].textContent)

    document.getElementById("infoValue").textContent = sessionStorage.getItem(keys[keys.selectedIndex].textContent)
})

sessionStorage.clear()
sessionStorage.removeItem("name")