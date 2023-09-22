let codeDiv = document.getElementById("codeSolution");
let codeExe = document.getElementById("codeWorking");
codeDiv.style.display = "none";
codeExe.style.display = "none";

(function () {
    // save the original console.log function
    var old_logger = console.log;

    // grab html element for adding console.log output
    var html_logger = document.getElementById("codeWorking");

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

function showSolution() {
    codeExe.style.display = "block";
    codeDiv.style.display = "none";
    codeExe.innerText = "";
    codeExe = document.getElementById("codeWorking");
    for (var i = 1; i <= 100; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }
}
function showCode() {
    codeDiv.style.display = "block";
    codeExe.style.display = "none";
}
