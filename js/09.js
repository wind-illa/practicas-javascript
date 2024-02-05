// Manipulacion de arrays - arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// Añadir elementos en un arreglo - Recomendado en React
const tecnologias2 = ['Angular',...tecnologias, 'Estimulus'];

// eliminar elementos de un arreglo - Recomendado en React
const tecnologias2 = tecnologias.filter(tecnologia => tecnologia !== 'React'); //elimina el elemento React
const tecnologias3 = tecnologias.filter(tecnologia => tecnologia === 'React'); // elimina todos los elementos excepto React



//reemplazar un elemento de un arreglo
const tecnologiasReemplazo = tecnologias.map(tecnologia => tecnologia === 'React' ? 'React.js' : tecnologia);

console.log(tecnologiasReemplazo);
