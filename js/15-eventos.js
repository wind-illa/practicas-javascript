//Eventos del dom

// const heading = document.querySelector('.heading'); //Selecciona el primer elemento y agregamos el evento

// heading.addEventListener("click", () => {
//     heading.textContent = "Nuevo Heading";
// });

// // --------------------------------------------------------------------------------------------

// const enlaces = document.querySelectorAll('.navegacion a'); //Selecciona todos los enlaces itera y agrega el evento

// enlaces.forEach(enlace => {
//   enlace.addEventListener("click", () => {
//     console.log("click en enlace");
//   })
// })

// --------------------------------------------------------------------------------------------

//Eventos del DOM - Inputs

const inputNombre = document.querySelector('.nombre')
inputNombre.addEventListener("input", () => {               //input, es cuando escribes
  console.log("Escribiendo...");
})

const inputNombres = document.querySelector('.nombre')
inputNombre.addEventListener("keydown", () => {                //keydown, es cuando presionas una tecla
  console.log("precionando...");
})

const inputNombres2 = document.querySelector('.nombre')
inputNombre.addEventListener("keyup", () => {                //keydown, es cuando levantas una tecla presionada
  console.log("Levantando...");
})

//captura total del input

const inputNombreCompleto = document.querySelector('.nombre')
inputNombreCompleto.addEventListener("input", (e) => {
  console.log(e.target.value);
})


const imputPassword = document.querySelector('.password')     
imputPassword.addEventListener("input", (e) => {
  imputPassword.type = "text";

  setTimeout(() => {                                        //Visualiar la contraseña por 1 segundo
    imputPassword.type = "password";
  }, 2000);
})