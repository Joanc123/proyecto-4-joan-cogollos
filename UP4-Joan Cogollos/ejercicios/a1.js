"use strict"
function puntosPartido(golesPropios,golesRivales,puntosPorVictoria = 3){
if(golesPropios === golesRivales){
    return puntosPorVictoria = 1;
}if(golesPropios > golesRivales){
   return puntosPorVictoria ;
}else {
    return puntosPorVictoria = 0;
}
}
function textoResultado(local, visitante, golesLocal, golesVisitante){
return console.log(local + " " + golesLocal + " - " golesVisitante + " " + visitante);

}
function mediaGoles(...goles) {
    let suma = 0;
    if (goles.length === 0) {
        return 0;
    }
    for (let i = 0; i < goles.length; i++) {
        suma = suma + goles[i];
    }
    let media = suma / goles.length;
    return media;
}
const esGoleada = (golesLocal, golesVisitante) => 
  Math.abs(golesLocal - golesVisitante) >= 4;


console.assert(puntosPartido(3, 1) === 3, "puntosPartido(3, 1) debería dar 3");
console.assert(puntosPartido(1, 1) === 1, "puntosPartido(1, 1) debería dar 1");
console.assert(puntosPartido(0, 2) === 0, "puntosPartido(0, 2) debería dar 0");
console.assert(puntosPartido(3, 1, 2) === 2, "puntosPartido(3, 1, 2) debería dar 2");
console.assert(textoResultado("Linces", "Águilas", 3, 1) === "Linces 3 - 1 Águilas",
"textoResultado mal montado");
console.assert(mediaGoles(2, 4) === 3, "mediaGoles(2, 4) debería dar 3");
console.assert(mediaGoles(1, 2, 3, 4) === 2.5, "mediaGoles(1, 2, 3, 4) debería dar2.5");
console.assert(mediaGoles() === 0, "mediaGoles() debería dar 0");
console.assert(esGoleada(5, 1) === true, "esGoleada(5, 1) debería dar true");
console.assert(esGoleada(2, 1) === false, "esGoleada(2, 1) debería dar false");
console.assert(esGoleada(1, 5) === true, "esGoleada(1, 5) debería dar true");
console.log("Pruebas terminadas");