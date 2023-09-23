let menuIcon = document.getElementById("menuIcon");
let menufullscreen = document.getElementById("fullscreenContainer");

menufullscreen.style.display = "none";

function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function showMenu() {
    if (menufullscreen.style.display === "none") {
        document.body.classList.add("stop-scrolling");
        menufullscreen.classList.remove("fade-out");
        menufullscreen.classList.add("fade-in");
        menufullscreen.style.display = "block";
    }
}

async function closeMenu() {
    if (menufullscreen.style.display === "block") {
        menufullscreen.classList.remove("fade-in");
        menufullscreen.classList.add("fade-out");
        document.body.classList.remove("stop-scrolling");
        await delay(200);
        menufullscreen.style.display = "none";
        document.documentElement.style.overflow = "visible";
    }
}
