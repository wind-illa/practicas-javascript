// Object - Manipulacion

const producto = {
    nombre: "Monitor de 24 pulgadas",
    precio: 300,
    disponible: true
}

// Resignar valores
producto.disponible = false

// Agregar nuevas propiedades
producto.imagen = "imagen.jpg"

// Eliminar propiedades
delete producto.disponible

// Si eliminas propiedades que no existen JavaScript no arroja error
delete producto.carro

console.log(producto)