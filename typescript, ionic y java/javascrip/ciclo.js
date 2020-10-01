//ciclos

// for( i = 30; i <=100; i = i + 5 ){
//     document.write(i + "<br>");

// }


// for( e = 50; e >=5; e = e - 3){
//     document.write(e + "<br>");

// }


// var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado" , "domingo"];
// for( i = 0; i <= dias.length - 1; i = i + 1 ) {
//     document.write( dias[i] + "<br>");
// }

// var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado" , "domingo"];
// for( i = 0; i <= dias.length - 1; i = i + 1 ) {
//     document.write( dias[i] + "<br>");
// }

var nombre = prompt("inserte su nombre");

function saludo (){
    document.write(`buenos dias! como estas? ${nombre}`);
}
saludo();