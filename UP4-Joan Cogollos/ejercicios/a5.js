"use strict";

const torneo = {
    nombre: "Liga del instituto",
    pista: "Pista 2",
    equipos: [],

    
    inscribir(nombre) {
        for (const equipo of this.equipos) {
            if (equipo.nombre === nombre) {
                return false;
            }
        }

        this.equipos.push({
            nombre: nombre,
            puntos: 0,
            golesFavor: 0,
            golesContra: 0
        });

        return true;
    },

    
    registrarPartido(local, visitante, golesLocal, golesVisitante) {
        let equipoLocal = null;
        let equipoVisitante = null;

        for (const equipo of this.equipos) {
            if (equipo.nombre === local) {
                equipoLocal = equipo;
            }

            if (equipo.nombre === visitante) {
                equipoVisitante = equipo;
            }
        }

        if (equipoLocal === null || equipoVisitante === null) {
            return false;
        }

        equipoLocal.golesFavor += golesLocal;
        equipoLocal.golesContra += golesVisitante;
        equipoVisitante.golesFavor += golesVisitante;
        equipoVisitante.golesContra += golesLocal;

        if (golesLocal > golesVisitante) {
            equipoLocal.puntos += 3;
        } else if (golesVisitante > golesLocal) {
            equipoVisitante.puntos += 3;
        } else {
            equipoLocal.puntos += 1;
            equipoVisitante.puntos += 1;
        }

        return true;
    },

    
    clasificacion() {
        const copia = [...this.equipos];

        copia.sort((a, b) => {
            if (a.puntos !== b.puntos) {
                return b.puntos - a.puntos;
            }

            const diferenciaA = a.golesFavor - a.golesContra;
            const diferenciaB = b.golesFavor - b.golesContra;

            return diferenciaB - diferenciaA;
        });

        return copia;
    },

    
    lider() {
        if (this.equipos.length === 0) {
            return "Nadie todavía";
        }

        return this.clasificacion()[0].nombre;
    }
};

document.write("<p>Líder antes de inscribir equipos: " + torneo.lider() + "</p>");

torneo.inscribir("Linces");
torneo.inscribir("Águilas");
torneo.inscribir("Tigres");
torneo.inscribir("Lobos");

document.write("<p>Inscribir otra vez a Lobos: " + torneo.inscribir("Lobos") + "</p>");

torneo.registrarPartido("Linces", "Águilas", 3, 1);
torneo.registrarPartido("Tigres", "Lobos", 0, 0);
torneo.registrarPartido("Linces", "Tigres", 2, 2);
torneo.registrarPartido("Águilas", "Lobos", 4, 0);

const partidoInvalido = torneo.registrarPartido("Linces", "Zorros", 1, 0);
document.write("<p>Registrar Linces contra Zorros: " + partidoInvalido + "</p>");

const clasificacion = torneo.clasificacion();

document.write("<h2>Clasificación</h2>");

for (let i = 0; i < clasificacion.length; i++) {
    const equipo = clasificacion[i];
    document.write("<p>" + (i + 1) + ". " + equipo.nombre + " · " + equipo.puntos + " pts</p>");
}

document.write("<p>Líder: " + torneo.lider() + "</p>");

console.assert(torneo.equipos.length === 4, "debería haber 4 equipos");
console.assert(torneo.inscribir("Lobos") === false, "no se puede inscribir dos veces el mismo equipo");
console.assert(torneo.registrarPartido("Linces", "Zorros", 1, 0) === false, "Zorros no existe");
console.assert(torneo.lider() === "Linces", "el líder debería ser Linces");
console.assert(
    JSON.stringify(torneo.clasificacion().map(e => e.nombre)) === '["Linces","Águilas","Tigres","Lobos"]',
    "el orden debería ser Linces, Águilas, Tigres, Lobos"
);
console.assert(torneo.equipos[0].nombre === "Linces", "clasificacion() no puede modificar torneo.equipos");
console.log("Pruebas terminadas");