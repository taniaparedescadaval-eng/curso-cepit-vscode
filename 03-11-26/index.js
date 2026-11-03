
/*
crear un programa que solicite al usuario dos valores numericos. El programa debe validar cual es el mayor
de ambos y mostrarle al usuario. Ese mayor multiplicarlo por su cuadrado al menos diez veces.
Luego mostrar el resultado final.
*/


let numeroUno = parseInt(prompt("Ingresa el primer valor numerico"))
let numeroDos = parseInt(prompt("Ingresa el segundo valor numerico"))

let numeroMayor = 0
let resultado = 0

if(numeroUno > numeroDos) {
    alert("El numero " + numeroUno + " es mayor")
    numeroMayor = numeroUno
} else if(numeroDos > numeroUno) {
    alert("El numero " + numeroDos + " es mayor")
    numeroMayor = numeroDos
} else {
    alert("Los numeros son iguales")
}

for (let i = 0; i < 10; i++) {
    resultado += Math.pow(numeroMayor, 2)
}

alert("El resultado final es: " + resultado)


