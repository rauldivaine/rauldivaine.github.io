let codeDiv = document.getElementById("codeSolution");
let codeExe = document.getElementById("codeWorking");

let menuIcon = document.getElementById("menuIcon");
let menufullscreen = document.getElementById("fullscreenContainer");
menufullscreen.style.display = "none";

function showMenu() {
    if (menufullscreen.style.display === "none") {
        menufullscreen.style.display = "block";
    }
}

function closeMenu() {
    if (menufullscreen.style.display === "block") {
        menufullscreen.style.display = "none";
    }
}
