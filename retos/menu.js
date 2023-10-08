//Incluímos en variables el icono de llamada al menú y el container de pantalla completa:
let menuIcon = document.getElementById("menuIcon");
let menufullscreen = document.getElementById("fullscreenContainer");

// Ocultamos por defecto el menú
menufullscreen.style.display = "none";

// Función para crear un delay al cerrar el menú a pantalla completa y mostar el FadeOut
function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// Función para llamar al menú a pantalla completa
async function showMenu() {
    if (menufullscreen.style.display === "none") {
        document.documentElement.classList.add("stop-scrolling");
        menufullscreen.classList.remove("fade-out");
        menufullscreen.classList.add("fade-in");
        menufullscreen.style.display = "block";
    }
}

// Función para salir del menú a pantalla completa
async function closeMenu() {
    if (menufullscreen.style.display === "block") {
        menufullscreen.classList.remove("fade-in");
        menufullscreen.classList.add("fade-out");
        document.documentElement.classList.remove("stop-scrolling");
        await delay(200);
        menufullscreen.style.display = "none";
    }
}

// Función para crear elementos del menú
function generarMenu() {
    const listaElementos = [
        { href: "../", texto: "Volver a retos" },
        { href: "../../", texto: "Ir a Inicio" },
    ];

    const listaHTML = document.getElementById("fullscreenMenu");

    listaElementos.forEach((elemento) => {
        const enlaceHTML = `<a href="${elemento.href}">${elemento.texto}</a><br>`;
        listaHTML.innerHTML += enlaceHTML;
    });
}

// Solución para el problema del overflow en dispositivos móviles.
// Obtenemos la altura del visor y la multiplicamos por 1% para obtener un valor para la unidad vh
let vh = window.innerHeight * 0.01;
// Entonces aplicamos dicho valor en la propiedad personalizada --vh a la raíz del documento HTML
document.documentElement.style.setProperty("--vh", `${vh}px`);
