const mql = matchMedia("(min-width:400px) and (orientation:landscape)")

const applyMatchMedia = mql =>{
    mql.matches ? 
        document.body.style.background = "red"
        :
        document.body.style.background = "royalblue"
}

addEventListener("resize",  () =>applyMatchMedia(mql))
addEventListener("DOMContentLoaded",  () =>applyMatchMedia(mql))

