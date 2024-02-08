//Scope

const precio = 300 // Scope global

const producto = () => {  
    const precio = 200  // Scope local
    console.log(precio) 
}

producto() 