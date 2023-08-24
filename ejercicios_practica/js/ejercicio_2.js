"use strict";

/* Inove Coding School
 * Ejercicios de funciones
 */

// Ejercicios con funciones

function promedio(numero1, numero2) {
    console.log("Funcion promedio")
    // En esta función debe determinar el promedio
    // de los dos números ingresados por parámetro 
    // Deberá calcular el promedio
    // y luego imprimir dicho valor en consola
    let promedio = (numero1 + numero2) / 2

    console.log(`El promedio entre ${numero1} y ${numero2} es ${promedio}`)
}

promedio(10, 5);