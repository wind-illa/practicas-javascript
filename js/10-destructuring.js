//Destructuring
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

tecnologias.forEach(tecnologia => {
  console.log(tecnologia)
}) 

const sumar = () => {
  console.log(2 + 2)
}
sumar()

//-------------------------------------------------

const sumas = (a, b) => {
  console.log(a + b)
}
sumas(2, 2)

//-------------------------------------------------

const sumar2 = (numero = 0, numero2 = 0) => {
  [numero + numero2, "holis"]
}

const [resultado, holis] = sumar2(2, 2)
console.log(resultado)
console.log(holis)

//-------------------------------------------------

const sumar3 = (numero = 0, numero2 = 0) => {
  return{
    resultados: numero + numero2,
    mensaje: "holis"
  }
}

const {resultados, mensaje} = sumar3(3, 3)
console.log(resultados)
console.log(mensaje)

//-------------------------------------------------

const sumar5 = numeros => numeros + 20   // si solo tiene un parametro no necesita parentesis

//-------------------------------------------------

const sumar8 = (numero = 0, numero2 = 0) => numero + numero2 // si solo tiene una linea de codigo no necesita llaves

//-------------------------------------------------

const sumar10 = () => 2 + 20 // si no tiene parametros no necesita parentesis