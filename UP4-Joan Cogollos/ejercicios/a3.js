"use strict";

const equipos = ["Linces", "Águilas", "Tigres", "Lobos"];

const golesMatriz = [
    [2, 0, 3, 1],
    [1, 1, 0, 2],
    [0, 3, 1, 1],
    [2, 2, 2, 1]
];


function totalEquipo(m, f) {
    let suma = 0;

    for (let c = 0; c < m[f].length; c++) {
        suma = suma + m[f][c];
    }

    return suma;
}

function totalJornada(m, c) {
    let suma = 0;

    for (let f = 0; f < m.length; f++) {
        suma = suma + m[f][c];
    }

    return suma;
}


document.write("<table border='1'>");
document.write("<tr><th>Equipo</th><th>J1</th><th>J2</th><th>J3</th><th>J4</th><th>Total</th></tr>");

for (let f = 0; f < golesMatriz.length; f++) {
    document.write("<tr><th>" + equipos[f] + "</th>");

    for (let c = 0; c < golesMatriz[f].length; c++) {
        const goles = golesMatriz[f][c];

        if (goles === 0) {
            document.write("<td style='background:salmon'>0</td>");
        } else {
            document.write("<td>" + goles + "</td>");
        }
    }

    document.write("<td>" + totalEquipo(golesMatriz, f) + "</td></tr>");
}

document.write("</table>");


for (let c = 0; c < golesMatriz[0].length; c++) {
    document.write("<p>Jornada " + (c + 1) + ": " + totalJornada(golesMatriz, c) + " goles</p>");
}

let posicionMayor = 0;
let totalMayor = totalEquipo(golesMatriz, 0);

for (let f = 1; f < golesMatriz.length; f++) {
    const total = totalEquipo(golesMatriz, f);

    if (total > totalMayor) {
        totalMayor = total;
        posicionMayor = f;
    }
}

document.write("<p>Equipo más goleador: " + equipos[posicionMayor] + " con " + totalMayor + " goles</p>");


function contarCeros(m) {
    let ceros = 0;

    for (let f = 0; f < m.length; f++) {
        for (let c = 0; c < m[f].length; c++) {
            if (m[f][c] === 0) {
                ceros = ceros + 1;
            }
        }
    }

    return ceros;
}

document.write("<p>Partidos sin marcar: " + contarCeros(golesMatriz) + "</p>");

console.assert(totalEquipo(golesMatriz, 0) === 6, "totalEquipo(golesMatriz, 0) debería dar 6");
console.assert(totalEquipo(golesMatriz, 3) === 7, "totalEquipo(golesMatriz, 3) debería dar 7");
console.assert(totalJornada(golesMatriz, 1) === 6, "totalJornada(golesMatriz, 1) debería dar 6");
console.assert(totalJornada(golesMatriz, 3) === 5, "totalJornada(golesMatriz, 3) debería dar 5");
console.assert(contarCeros(golesMatriz) === 3, "contarCeros(golesMatriz) debería dar 3");
console.log("Pruebas terminadas");