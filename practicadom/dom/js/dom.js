
alert("Bienvenidos a mi sitio.");
var nombreUsuario = prompt("Por favor, ingrese su nombre:");
var confirmacion = confirm("¿Está seguro de querer avanzar?");
if (confirmacion) {
    document.querySelector('h2.saludo').textContent = "Qué alegría que quieras continuar tu visita";
} else 
    document.querySelector('h2.saludo').textContent = "Lamentamos que no quieras continuar tu visita";
    document.querySelector('h1').textContent = "Bienvenido " + nombreUsuario;
