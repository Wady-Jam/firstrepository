"use strict";
(() => {
    class Avengers {
        constructor(nombre, equipo, peleasGanadas) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avengers("Scott", "CaptianAmerica", 5);
    console.log(antman);
})();
