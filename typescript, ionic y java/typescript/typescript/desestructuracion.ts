
(() =>{
const avenger = { 
    nombre:"steve",
    clave:  "capitan america",
    poder:  "super droga"
}

const extrae = ({nombre, poder}: any) => {
// const {nombre, clave, } = avenger;
console.log(nombre);
console.log(poder);
}

// extrae(avenger); 

const avengers: string[] = ["Thor", "Ironman","Spiderman"];
//const [Trueno, Hombre, Arana]= avengers;

const [, , Arana]= avengers;
// console.log(Trueno );
// console.log(Hombre );
//console.log(Arana);

// const extraeArr = (avengers: string[] ) => {
 // console.log( avengers[0] );
 // console.log(avengers[1] );
 // console.log(avengers[2]);
// }


const extraeArr = ([Thor, Iroman, Spiderman]: string[] ) => {
console.log( Thor );
console.log(Iroman );
console.log(Spiderman);
  }
extraeArr (avengers);
})();
  