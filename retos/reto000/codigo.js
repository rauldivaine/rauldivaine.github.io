// Guardamos en variables los elementos donde se mostrará la solución y la salida de la consola
let codeDiv = document.getElementById("codeSolution");
let codeExe = document.getElementById("codeWorking");

// Ocultamos por defecto todo el contenido
codeDiv.style.display = "none";
codeExe.style.display = "none";

// Función que es el código del reto ejecutándose en tiempo real y mostrando el resultado en el div "codeWorking".
function exeCode() {
    // Ocultamos el div que corresponde a "showCode()" y mostramos el de exeCode()
    codeExe.style.display = "block";
    codeDiv.style.display = "none";

    // Y ejecutamos el código
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }
}

// Función sencilla para mostrar la solución del código del reto
function showCode() {
    codeDiv.style.display = "block";
    codeExe.style.display = "none";
}

// Esta parte del código sutituye la salida de la consola al ejecutar el código, en este caso el div con la ID "codeWorking"

(function () {
    // save the original console.log function
    let old_logger = console.log;

    // grab html element for adding console.log output
    let html_logger = document.getElementById("codeWorking");

    // replace console.log function with our own function
    console.log = function (msg) {
        // first call old logger for console output
        old_logger.call(this, arguments);

        // check what we need to output (object or text) and add it to the html element.
        if (typeof msg == "object") {
            html_logger.innerHTML +=
                (JSON && JSON.stringify ? JSON.stringify(msg) : msg) + "<br>";
        } else {
            html_logger.innerHTML += msg + "<br>";
        }
    };
})();
