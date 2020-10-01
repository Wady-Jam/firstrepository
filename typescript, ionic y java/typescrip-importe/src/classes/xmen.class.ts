function inmprimirconsola (contructorClase: Function ) {
    
console.log(contructorClase);


}


@inmprimirconsola
export class xmen {

    constructor(

        public nombre : string,
        public clave : string

    ){}
    imprimir(){
        console.log(`${ this.nombre} - ${this.clave}`);
    }
}