// Fetch API
// Para hacer peticiones post, fetch admite un segundo parametro
// Las peticiones Post sirven para enviar datos y hacer inserciones en una api o base de datos
// Headers: son cabeceras de informacion sobre lo que estamos enviando

const button = document.getElementById("button");

button.addEventListener("click", () =>{
    const newPost = {
        titulo: "A new post",
        body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint repudiandae inventore",
        userId: 1
    }
    // console.log(newPost)
    // console.log(JSON.stringify(newPost))

    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body: JSON.stringify(newPost),
        headers:{
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))

})