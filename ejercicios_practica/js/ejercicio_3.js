"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/

function generarInvitados() {
  const invitado1 = String(prompt("Ingrese el nombre del primer invitado:"))
  const invitado2 = String(prompt("Ingrese el nombre del segundo invitado:"))
  const invitado3 = String(prompt("Ingrese el nombre del tercer invitado:"))

  console.log(`Los invitados son: ${invitado1}, ${invitado2} y ${invitado3}`)
}

// Definir y crear la función antes de esta llamada
generarInvitados();