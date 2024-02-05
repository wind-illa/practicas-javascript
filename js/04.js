//Object
const producto = {
  nombre: "Monitor de 24 pulgadas",
  precio: 300,
  disponible: true
}
// console.log(typeof producto)
// console.log(producto)
// console.table(producto)
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

//Destructring
const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

//Object Literal Enhacement
const llave = true
const usuario = "Juan"

const cajaFuerte = {
  llave: llave,
  usuario: usuario
}
console.table(cajaFuerte)