var nombre = prompt("Ingrese su nombre:");
console.log("Nombre del usuario:", nombre);

var edad = prompt("Ingrese su edad:");
console.log("Edad del usuario:", edad)

var fanDeportes = confirm("¿Te gustan los deportes?");
console.log("¿Le gustan los deportes?", fanDeportes);

alert("Muchas gracias " + nombre + " por responder nuestras preguntas.");


var usuario = {
    nombre: nombre,
    edad: edad,
    fanDeportes: fanDeportes,
    deportistaProfesional: function() {
        if (this.fanDeportes) {
            return "Si, soy fan de los deportes";
        } else {
            return "No soy tan fan aún de los deportes";
        }
    }
};

console.log(usuario.deportistaProfesional());