var numero1 = prompt("Ingrese un número:");
var numero2 = prompt("Ingrese otro número:");

function multiplicar(num1, num2) {
    var resultado = num1 * num2;
    return "El resultado de multiplicar " + num1 + " y " + num2 + " es: " + resultado;
}

var resultadoMultiplicacion = multiplicar(numero1, numero2);
console.log(resultadoMultiplicacion);