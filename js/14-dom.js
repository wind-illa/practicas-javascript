// Selectores del dom

const heading = document.querySelector('.heading'); // Selecciona el primer elemento que coincida con el selector

console.log(heading.textContent);
console.log(heading.innerHTML);
console.log(heading.outerHTML);
console.log(heading.id);

//--------------------------------------------

const enlaces = document.querySelectorAll('.navegacion a'); // Selecciona todos los elementos que coincidan con el selector y itera sobre ellos

console.log(enlaces.forEach(enlace => console.log(enlace.textContent)));

//--------------------------------------------

const heading2 = document.querySelector('.heading');
heading2.textContent = 'Nuevo Heading'; // Modifica el contenido del elemento

console.log(heading2);

//--------------------------------------------

