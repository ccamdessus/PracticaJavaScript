var nacionalidad = prompt("Ingrese su nacionalidad:");
var profesion = prompt("Ingrese su profesión:");
var kmsRecorridos = prompt("Ingrese cuántos kilómetros camina por día:");

function filosofoHipster(nacionalidad, profesion, kmsRecorridos) {
    if (nacionalidad.toLowerCase() === "hipster" && profesion.toLowerCase() === "filósofo" && parseInt(kmsRecorridos) > 5) {
        return "Soy un filósofo hipster";
    } else {
        return "Aún no soy filósofo hipster";
    }
}

var resultadoFilosofoHipster = filosofoHipster(nacionalidad, profesion, kmsRecorridos);
console.log(resultadoFilosofoHipster);