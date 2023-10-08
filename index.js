// Solución para el problema del overflow en dispositivos móviles.
// Obtenemos la altura del visor y la multiplicamos por 1% para obtener un valor para la unidad vh
let vh = window.innerHeight * 0.01;
// Entonces aplicamos dicho valor en la propiedad personalizada --vh a la raíz del documento HTML
document.documentElement.style.setProperty("--vh", `${vh}px`);
