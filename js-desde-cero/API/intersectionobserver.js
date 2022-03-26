// const boxes = document.querySelectorAll(".box")

// const callback = (entries) =>{
//     entries.forEach(entry=>{
//         if(entry.isIntersecting){
//             console.log(entry.target.id, "Is intersecting")
//         }
//     })
// }

// const options = {
//     root:
//     rootMargin: "200px"
//     threshold: 0.25
// }

// const observer = new IntersectionObserver(callback, options)
// boxes.forEach(element=>observer.observe(element))


// Lazy Load

const images = document.getElementById("images")
const getImages = () =>{
    axios("https://picsum.photos/v2/list?page=3&limit=5")
        .then(res =>{
            const fragment = document.createDocumentFragment()
            res.data.forEach(element =>{
                const newImage = document.createElement("img")
                newImage.src = element.download_url
                fragment.appendChild(newImage)
            })
            images.appendChild(fragment)
            setObserver()
        })
}

const callback = (entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            getImages()
        }else{
            // quitar animacion
        }
    })
}

const setObserver = () =>{
    const options = {
        threshold: 0.5
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(images.lastElementChild)
}

getImages()

