(() =>{
 
                                //\\ 1ra forma es asi //\\
        interface avengers{
            nombre: string
            edad :  number
        }
    
    const enviarMision = (avengers : avengers) => {
        console.log(`enviar a ${avengers.nombre} a la mision`);
    }

    const regresarAlCuartel = (avengers:avengers ) => {
        console.log(`regresar ${avengers.nombre} al cuartel`);
    }

    // const wolverine={ 
    //     nombre: "Logan",
    //     edad: 60
    // }
    // enviarMision (wolverine);


                    //\\ 2da formaa\\//


//     const enviarMision = (avengers:{nombre: string} ) => {
//         console.log(`enviar a ${avengers.nombre} a la mision`);
//     }

//     const regresarAlCuartel =  (avengers:{nombre:string}) => {
//     console.log(`regresar a ${avengers.nombre} al cuartel`);
// }


    const captianAmerica={ 
        nombre: "Steve Rogers",
        edad: 60
    }

    const Hulk={ 
        nombre: "Bruce Vanel",
        edad: 33
    }

    const Ironman={ 
        nombre: "Tony Stark",
        edad: 35
    }

    const diosDelTrueno={ 
        nombre: "Thor",
        edad: 1500
    }


    enviarMision (diosDelTrueno);
    regresarAlCuartel (captianAmerica);

})();
  