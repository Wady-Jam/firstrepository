"use strict";
(function () {
    var miFuncion = function (a) {
        return a.toUpperCase();
    };
    var miFuncionF = function (a) { return a.toUpperCase(); };
    console.log(miFuncion("normal"));
    console.log(miFuncionF("flecha"));
    
    var sumaN = function (a, b) {
        return a + b;
    };
    var sumaF = function (a, b) { return a + b; };
    console.log(sumaN(22, 23));
    console.log(sumaF(26, 25));
})();
