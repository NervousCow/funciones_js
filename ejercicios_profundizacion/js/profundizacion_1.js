/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 1. En la función promedio():
 *    Debe recibir 5 números como argumento y calcular el promedio.  Debe reportar por
 *    medio de alert(); y console.log(); el detalle de los datos recibidos.
*/



/**
 * Calcula promedio entre 5 valores
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 * @param {number} num5     
 */
function promedio (num1, num2, num3, num4, num5) {
  console.log("Funcion promedio")
  alert(`Los numeros a promediar son: ${num1}, ${num2}, ${num3}, ${num4} y ${num5}`)

  let promedio = (num1 + num2 + num3 + num4 + num5) / 5

  console.log(`El promedio es ${promedio}`)
}

alert(`A continuación se le solicitaran 5 valores numéricos para calcular el promedio de los valores.`)

const num1 = parseFloat(prompt("Ingrese el número 1/5:"))
const num2 = parseFloat(prompt("Ingrese el número 2/5:"))
const num3 = parseFloat(prompt("Ingrese el número 3/5:"))
const num4 = parseFloat(prompt("Ingrese el número 4/5:"))
const num5 = parseFloat(prompt("Ingrese el número 5/5:"))

promedio(num1, num2, num3, num4, num5)