"use strict";

/* Inove Coding School
 * Ejercicios de funciones
 */

// Ejercicios con funciones


/**
 * 
 * @param {number} numero1 
 * @param {number} numero2 
 */
function imprimirMayor(numero1, numero2) {
    console.log("Funcion imprimir mayor")
    // En esta función debe determinar cual de los dos
    // números ingresados por parámetro es mayor
    // y luego imprimir dicho valor en consola
    let maxNumero
    if (numero1 > numero2) {
        maxNumero = numero1;
        console.log(`El número mayor es: ${maxNumero}`);
    } else if (numero2 > numero1) {
        maxNumero = numero2;
        console.log(`El número mayor es: ${maxNumero}`);
    } else {
        maxNumero = numero1;
        console.log("Los números son iguales.");
    }

}

imprimirMayor(2, 10);