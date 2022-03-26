// blob() : Binary Long Object


const buttonImg = document.getElementById("button-img")
const buttonPDf = document.getElementById("button-pdf")

buttonImg.addEventListener("click", () => {
    fetch("Ajax/profile1.jpg")
        .then(res => res.blob)
        .then(img =>{
            document.getElementById("img").src = "Ajax/profile1.jpg"
        })
})