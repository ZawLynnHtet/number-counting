let count = 0;
let body = document.querySelector("body");
let mode = document.querySelector("#toggle-mode");
let wrap = document.querySelector(".wrapper");
let volume = document.querySelector("#toggle-volume");

var audio = new Audio("audio/bg-sound-player.mp3");

mode.addEventListener("click", function(){
    this.classList.toggle("bi-moon");
    if(this.classList.toggle("bi-brightness-high-fill")) {
        body.style.background = "#ccc"
        body.style.color = "#000"
        wrap.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 32px, rgba(0, 0, 0, 0.22) 0px 4px 12px";
    }
    else {
        body.style.background = "#191825";
        body.style.color = "white";
        wrap.style.boxShadow = "0px 3px 10px #fff";

    }
})

volume.addEventListener("click", function(){
    this.classList.toggle("bi-volume-up-fill");
    if(this.classList.toggle(!"bi-volume-mute-fill")) {
        audio.play();
    }

    else {
        audio.pause();
    }
})

document.getElementById("decrease-btn").onclick = function() {
    count -= 1;
    document.getElementById("counter-lable").innerHTML = count;
}

document.getElementById("reset-btn").onclick = function() {
    count = 0;
    document.getElementById("counter-lable").innerHTML = count;
}

document.getElementById("increase-btn").onclick = function() {
    count += 1;
    document.getElementById("counter-lable").innerHTML = count;
}

// document.querySelector(".mode-icon").onclick = function () {

//     document.querySelector("body").style.background = "#191825";
//     document.querySelector("body").style.color = "white";
//     document.querySelector(".wrapper").style.boxShadow = "0px 3px 10px #fff";
// }

