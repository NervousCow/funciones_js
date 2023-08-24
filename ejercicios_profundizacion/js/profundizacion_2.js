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
 * 2. En la función generarInvitados():
 *    Crear una variable global que indique si se debe solicitar 1, 2 o 3 nombres de invitados.
 *    Según la cantidad especificada utilice condicionales para solicitar la cantidad de nombres
 *    correctos.
*/


function generarInvitados() {
  if(cantInvitados === 1) {
    const invitado1 = String(prompt("Ingrese el nombre del invitado:"))
    console.log(`El/la invitado/a es: ${invitado1}`)
  } else if(cantInvitados === 2) {
    const invitado1 = String(prompt("Ingrese el nombre del primer invitado:"))
    const invitado2 = String(prompt("Ingrese el nombre del segundo invitado:"))
    console.log(`Los invitados son: ${invitado1} y ${invitado2}`)
  }else {
    const invitado1 = String(prompt("Ingrese el nombre del primer invitado:"))
    const invitado2 = String(prompt("Ingrese el nombre del segundo invitado:"))
    const invitado3 = String(prompt("Ingrese el nombre del tercer invitado:"))
    console.log(`Los invitados son: ${invitado1}, ${invitado2} y ${invitado3}`)
  }
  
}

let cantInvitados = parseInt(prompt("Cuántos invitados agregar? 1, 2 o 3"))

if(cantInvitados != 1 && cantInvitados != 2 && cantInvitados != 3) {
  alert(`Usted ingreso ${cantInvitados} y ese valor no esta permitido. Por defecto se agregaran 3 invitados.`)
}

generarInvitados()

