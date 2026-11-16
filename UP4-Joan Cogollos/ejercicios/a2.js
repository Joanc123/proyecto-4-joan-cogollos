"use strict";

const goles = [2, 0, 3, 1, 4, 0, 2];


let total = 0;
let mejorJornada = 1;
let maximoGoles = goles[0];
let jornadasSinMarcar = 0;

for (let i = 0; i < goles.length; i++) {
    total = total + goles[i];

    if (goles[i] > maximoGoles) {
        maximoGoles = goles[i];
        mejorJornada = i + 1;
    }

    if (goles[i] === 0) {
        jornadasSinMarcar = jornadasSinMarcar + 1;
    }
}

const media = total / goles.length;

document.write("<p>Goles en total: " + total + "</p>");
document.write("<p>Media por jornada: " + media.toFixed(2) + "</p>");
document.write("<p>Mejor jornada: la jornada " + mejorJornada + " con " + maximoGoles + " goles</p>");
document.write("<p>Jornadas sin marcar: " + jornadasSinMarcar + "</p>");


const copia = [...goles];
copia.sort((a, b) => b - a);

document.write("<p>Array original: [" + goles.join(", ") + "]</p>");
document.write("<p>Copia ordenada: [" + copia.join(", ") + "]</p>");


goles.push(1);
goles.splice(5, 1);

document.write("<p>Array final: [" + goles.join(", ") + "]</p>");


function hayRacha(lista) {
    for (let i = 0; i < lista.length - 1; i++) {
        if (lista[i] === 0 && lista[i + 1] === 0) {
            return true;
        }
    }

    return false;
}

document.write("<p>¿Hay dos jornadas seguidas sin marcar? " + hayRacha(goles) + "</p>");

console.assert(hayRacha([2, 0, 0, 3]) === true, "hayRacha([2, 0, 0, 3]) debería dar true");
console.assert(hayRacha([0, 1, 0]) === false, "hayRacha([0, 1, 0]) debería dar false");
console.assert(hayRacha([]) === false, "hayRacha([]) debería dar false");
console.assert(JSON.stringify(goles) === "[2,0,3,1,4,2,1]", "el array final debería ser [2,0,3,1,4,2,1]");
console.log("Pruebas terminadas");