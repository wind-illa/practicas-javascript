// Unir 2 objetos
const producto = {
    nombre: "Monitor de 24 pulgadas",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Juan",
    apellido: "De la torre",
    saldo: 500
}

//const nuevoObjeto = Object.assign(producto, cliente) // No es recomendable

//Spread Operator o Rest Operator
const nuevoObjeto2 = {
  producto: {...producto}, 
  cliente: {...cliente }
}

console.log(nuevoObjeto2)
// console.log(producto)
// console.log(cliente)