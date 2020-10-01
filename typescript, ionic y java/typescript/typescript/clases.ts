(() =>{
class Avengers {
    // nombre:         string;
    // equipo:         string;
    // nombreReal:     string;

    // puedePelear:    boolean;
    // peleasGanadas : number ;

    // constructor (nombre: string, equipo : string , peleasGanadas: number){
    //     this.nombre = nombre;
    //     this.equipo = equipo;
    //     this.peleasGanadas = peleasGanadas
    constructor(        public nombre: string,
                        public equipo : string, 
                        public nombreReal : string ,
                        public puedePelear : boolean = true, 
                        public peleasGanadas: number = 5){}

}    

const antman = new Avengers ("Antman","CaptianAmerica", "Scott"); 

console.log(antman);

})();
  