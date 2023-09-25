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
    // Para este ejercicio vamos usar dos inputs de texto, cargamos sus valores en variables
    word1 = document.getElementById("word1").value;
    word2 = document.getElementById("word2").value;
    // Como el usuario podrá ejecutarlo más de una vez creamos una función para limpiar la consola
    function cleanConsole() {
        document.getElementById("codeWorking").innerHTML = "";
    }

    // Primero comprobamos que haya insertado dos palabras
    if (word1 == null || word1 == "" || word2 == null || word2 == "") {
        cleanConsole();
        console.log("¡Debes introducir dos palabras!");

        // También comprobamos si ambas palabras son la misma
    } else if (word1 === word2) {
        cleanConsole();
        console.log(
            "Si ambas palabras son la misma no puedo comprobar si es un anagrama :("
        );

        // Si ambos casos son negativos entonces dividimos las palabras en carácteres individuales en arrays usando split y lo mostramos en consola
    } else if (word1 !== word2) {
        cleanConsole();
        word1 = word1.toUpperCase();
        word1Split = word1.split("");
        word2 = word2.toUpperCase();
        word2Split = word2.split("");

        console.log("La primera palabra es " + word1Split.join(" ") + ".");
        console.log("La segunda palabra es " + word2Split.join(" ") + ". \n");
        // Utilizando el método sort junto con join unimos ambas arrays en dos strings para poder compararlas
        word1 = word1Split.sort().join("");
        word2 = word2Split.sort().join("");
        // Si son iguales mostramos el mensaje positivo en consola
        if (word1 === word2) {
            console.log(
                "¡Son anagramas! Están formadas por las mismas letras en distinto orden."
            );
            // En caso contrario le indicamos al usuario que no es un anagrama
        } else {
            console.log(
                "Están compuestas por letras diferentes, así que no son anagramas..."
            );
        }
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

function alphaOnly(event) {
    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/[a-zA-Z]/i);
    return pattern.test(value);
}

$(".inputText").bind("keypress", alphaOnly);
