// const fileInput = document.getElementById("file")
// const img = document.getElementById("img")
// const text = document.getElementById("text")

// Carga simple de imagen
// fileInput.addEventListener("change", (e) =>{
//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsDataURL(file)
//     fileReader.addEventListener("load", (e) =>{
//         img.setAttribute("src", e.target.result)
//     })
// })

// Carga multiple de imagenes
// fileInput.addEventListener("change", (e) =>{
//     const files = e.target.files
//     const fragment = document.createDocumentFragment()
//     for(const file of files ){
//         const fileReader = new FileReader()
//         const img = document.createElement("IMG")
//         fileReader.readAsDataURL(file)
//         fileReader.addEventListener("load", (e) =>{
//             img.setAttribute("src", e.target.result)
//     })
//     fragment.appendChild(img)
//   }
//   img.appendChild(fragment)
// })



// API file barra de progreso

const fileInput = document.getElementById("file")
const progress = document.getElementById("progress")

// fileInput.addEventListener("change", (e) =>{
//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsDataURL(file)

//     fileReader.addEventListener("progress", (e) =>{
//         progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + "%"
//         // console.log(e.loaded * 100 / e.total)
//     })

//     fileReader.addEventListener("loadend", () =>{
//         progress.style.width = "%"
//     })
// })

const root = document.documentElement

fileInput.addEventListener("change", (e) =>{
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener("progress", (e) =>{
        root.style.setProperty("--bar-width", Number.parseInt(e.loaded * 100 / e.total) + "%")
    })

    fileReader.addEventListener("loadend", () =>{
        root.style.setProperty("--bar-width", "100%")
    })
})