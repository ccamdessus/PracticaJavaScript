for (var i = 0; i < 5; i += 1) {
    console.log("Practicando con el bucle for");
}

for (var i = 0; i < 10; i += 1) {
    console.log("La variable i tiene el valor " + i);
}

for (var i = 2; i < 22; i += 2) {
    console.log("Multiplo de 2: " + i);
}

for (var i = 5; i < 550; i += 5) {
    console.log("Multiplo de 5: " + i);
}

for (var i = 100; i > -1; i -= 1) {
    console.log(i);
}

var base = 8; 
var resultados = [];

for (var i = 1; i <= 10; i++) {
    resultados.push(base * i);
}

console.log(resultados);

var ganancias = [2, 5, 7, 3, -5, 9, -1, 4, 2, 6]
var suma = 0;

for (var i = 0; i < ganancias.length; i += 1) {
    suma += ganancias[i];
}

console.log("La suma es: ", suma);

let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];

for (let i = 0; i < healingIsDifficult.length; i += 1) {
    console.log(healingIsDifficult[i]);
}

let healingIsDifficult2 = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];

console.log("Lista de temas:");

for (let i = 0; i < healingIsDifficult2.length; i += 1) {
    console.log((i + 1) + healingIsDifficult2[i]);
}