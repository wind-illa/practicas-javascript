//Condicionales
let disponible = 200
let retirar = 2000

if (disponible >= retirar) {
    disponible -= retirar
    console.log('Retirar efectivo')
} else {
    console.log('fondos insuficientes')
}
console.log(disponible)

//----------------------------------------------

const puntaje = 1000
const puntaje2 = "1000"

//Comparacion y operador no estricto 
if (puntaje == puntaje2) {       //Comparacion no estrica (solo compara el valor)
    console.log('Si son iguales')
} else {
    console.log('No son iguales')
}

//Comparacion y operador estricto
if (puntaje === puntaje2) {      //Comparacion estrica (compara el valor y el tipo de dato)
    console.log('Si son iguales')//En este caso no son iguales ya que uno es un numero y el otro es un string
} else {
    console.log('No son iguales')
}                                

//----------------------------------------------

const efectivo = 500
const pagar = 300
const tarjeta = true

//Operador OR (||) si una de las dos condiciones se cumple
if (efectivo >= pagar || tarjeta) {
} else {
    console.log('Fondos insuficientes')
}

//Operador AND (&&) si ambas condiciones se cumplen
if (efectivo >= pagar && tarjeta) {
    console.log('Pago con tarjeta')
} else {
    console.log('Fondos insuficientes')
}

//Ternarios----------------------------------------------
efectivo ? console.log("si hay efectivo") : console.log("no hay efectivo") //Ternario (if-else en una sola linea)
efectivo ? console.log("puedes pagar") : tarjeta? console.log("puedes pagar con tarjeta") :console.log("no puedes pagar") //Ternario anidado o doble ternario

