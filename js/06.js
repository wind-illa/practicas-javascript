//Object - Desctructuring con 2 o mas objetos

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

const { nombre, precio, disponible } = producto
const { nombre: nombreCliente, apellido, saldo } = cliente

console.log(nombre)
console.log(nombreCliente)
