
alert("Bienvenidos a mi sitio.");
var nombreUsuario = prompt("Por favor, ingrese su nombre:");
var confirmacion = confirm("¿Estas seguro que quieres avanzar?");
if (confirmacion) {
    document.querySelector('h2.saludo').textContent = "Que alegría que quieras continuar tu visita";
} else 
    document.querySelector('h2.saludo').textContent = "Lamentamos que no quieras continuar tu visita";
    document.querySelector('h1').textContent = "Bienvenido " + nombreUsuario;

    var edad = prompt("Cuantos años tenes?");

edad = Int(edad);

if (edad > 17) {

    alert("Puedes continuar.");
} else {

    document.querySelector('.container-general').style.display = "none";
    document.getElementById('accesoDenegado').style.display = "block";
}

