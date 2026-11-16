"use strict";

const clasificacion = [
    { nombre: "Linces", ganados: 3, empatados: 1, perdidos: 0, golesFavor: 9, golesContra: 3 },
    { nombre: "Águilas", ganados: 2, empatados: 1, perdidos: 1, golesFavor: 7, golesContra: 5 },
    { nombre: "Tigres", ganados: 1, empatados: 2, perdidos: 1, golesFavor: 5, golesContra: 6 },
    { nombre: "Lobos", ganados: 0, empatados: 1, perdidos: 3, golesFavor: 3, golesContra: 10 }
];


function puntos(equipo) {
    return equipo.ganados * 3 + equipo.empatados;
}

document.write("<p>a) Puntos de Linces: " + puntos(clasificacion[0]) + "</p>");


const textos = clasificacion.map(equipo => equipo.nombre + ": " + puntos(equipo) + " pts");

document.write("<p>b) Puntos por equipo: " + textos.join(", ") + "</p>");


const positivos = clasificacion
    .filter(equipo => equipo.golesFavor > equipo.golesContra)
    .map(equipo => equipo.nombre);

document.write("<p>c) Equipos con más goles a favor que en contra: " + positivos.join(", ") + "</p>");


const golesTotales = clasificacion.reduce((suma, equipo) => suma + equipo.golesFavor, 0);

document.write("<p>d) Goles totales: " + golesTotales + "</p>");


const puntosGanadores = clasificacion
    .filter(equipo => equipo.ganados >= 1)
    .map(equipo => puntos(equipo))
    .reduce((suma, puntosEquipo) => suma + puntosEquipo, 0);

document.write("<p>e) Puntos de los equipos que han ganado al menos un partido: " + puntosGanadores + "</p>");


const copia = [...clasificacion];
copia.sort((a, b) => puntos(b) - puntos(a));

const nombresOrdenados = copia.map(equipo => equipo.nombre);

document.write("<p>f) Equipos ordenados por puntos: " + nombresOrdenados.join(", ") + "</p>");

console.assert(
    JSON.stringify(textos) === JSON.stringify(["Linces: 10 pts", "Águilas: 7 pts", "Tigres: 5 pts", "Lobos: 1 pts"]),
    "Los textos de a) no coinciden"
);
console.assert(JSON.stringify(positivos) === '["Linces","Águilas"]', "b) debería dar Linces y Águilas");
console.assert(golesTotales === 24, "c) debería dar 24");
console.assert(puntosGanadores === 22, "d) debería dar 22");
console.assert(clasificacion[0].nombre === "Linces", "El array original no se puede modificar");
console.log("Pruebas terminadas");