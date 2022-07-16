
var fotos=[
    {codigo:"codi1",
    imagen:"imagenes/notebook2.jpg",
    nombre:"notebook 1",
    precio: "$1000",
    },
    {
    codigo:"codi2",
    imagen:"imagenes/notebook3.jpg",
    nombre:"notebook 2",
    precio: "$1000",
    },
    {
    codigo:"codi3",
    imagen:"imagenes/notebook5.jpg",
    nombre:"notebook 3",
    precio: "$1000",
    },
    {
        codigo:"codi3",
        imagen:"imagenes/notebook7.jpg",
        nombre:"notebook 4",
        precio: "$1000",
    },
    {
        codigo:"codi3",
        imagen:"imagenes/notebook6.jpg",
        nombre:"notebook 5",
        precio: "$1000",
    },
    {
    codigo:"codi3",
    imagen:"imagenes/celular2.jpg",
    nombre:"Phone 1",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    precio: "$1000",
    },
    {
    codigo:"codi3",
    imagen:"imagenes/celular3.jpg",
    nombre:"Phone 2",
    precio: "$1000",
    },
    {
    codigo:"codi3",
    imagen:"imagenes/celular4.jpg",
    nombre:"Phone 3",
    precio: "$1000",
    },
    {
    codigo:"codi3",
    imagen:"imagenes/celular5.jpg",
    nombre:"Phone 4",
    precio: "$1000",
    },
    {
    codigo:"codi3",
    imagen:"imagenes/celular6.jpg",
    nombre:"Phone 5",
    precio: "$1000",
    },
    {
    codigo:"codi3",
    imagen:"imagenes/auris.jpg",
    nombre:"Auriculares",
    precio: "$1000",
    },
    {
    codigo:"codi3",
    imagen:"imagenes/pendrive.jpg",
    nombre:"Pendrive",
    precio: "$1000",
    },
    {
    codigo:"codi3",
    imagen:"imagenes/teclado.jpg",
    nombre:"Teclado",
    precio: "$1000",
    },
    {
    codigo:"codi3",
    imagen:"imagenes/parlante2.jpg",
    nombre:"Parlante",
    precio: "$1000",
    },
    {
    codigo:"codi3",
    imagen:"imagenes/JBL.jpg",
    nombre:"Parlante JBL",
       precio: "$1000",
    },
    

    

]


let cad=""
for(objeto of fotos){
    cad+=`
    <div class="tarjeta">
        <img src="${objeto.imagen}" alt="${objeto.nombre}">
        <h2>${objeto.nombre}</h2>
        
        <p class="precio">${objeto.precio}</p>
        <button class="boton">Comprar</button>
        
    </div>
    `
}
console.log(cad)
document.getElementById("contenedor").innerHTML=cad