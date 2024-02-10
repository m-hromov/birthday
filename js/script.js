const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    window.location.replace(window.location + "/mob.html");
}


document.querySelector("#v").onclick = function () {

    document.querySelector("#v").hidden = true
    document.querySelector("#text1").hidden = false
    document.querySelector("#vid").play()
}
