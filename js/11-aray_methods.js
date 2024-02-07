// Array Methods
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Filter
const nuevoArray = tecnologias.filter(tecnologia => tecnologia !== 'React'); //elimina el elemento React y crea un nuevo array
const nuevoArray2 = tecnologias.filter(tecnologia => tecnologia === 'React'); // elimina todos los elementos excepto React y crea un nuevo array
const nuevoArray3 = numeros.filter(numero => numero > 3); // filtra los elementos mayores a 3 y crea un nuevo array

//includes
const resultado = tecnologias.includes(graphql); // devuelve true o false si el elemento existe en el array

//some
const resultados = numeros.some(numero => numero > 5); // devuelve true o false si algun elemento cumple con la condicion)

//find
const resultados2 = numeros.find(numero => numero > 5); // devuelve el primer elemento que cumple con la condicion)

//every
const resultados3 = numeros.every(numero => numero > 5); // devuelve true o false si todos los elementos cumplen con la condicion)

//reduce
const resultados4 = numeros.reduce((total, numero) => numero + total, 0); // devuelve un solo valor Ideal para sumar los elementos de un carrito de compras

//forEach
const resultados5 = numeros.forEach(numero => console.log(numero)); // no devuelve nada, solo itera el array
const resultados6 = tecnologias.forEach( (tecnologia, index) => console.log(tecnologia)); // no devuelve nada, solo itera el array y el index

//map
const resultados7 = numeros.map(numero => numero * 2); // devuelve un nuevo array con los elementos multiplicados por 2