const video = document.getElementById("video")

addEventListener("visibilitychange", (e) =>{
    if(document.visibilityState === "visible"){
        console.log("play")
        video.play
    }else if(document.visibilityState === "hiden"){
        console.log("pause")
        video.pause
    }
})

addEventListener("visibilitychange", () =>{
    document.visibilityState === "visible" ? video.play() : video.pause()
})