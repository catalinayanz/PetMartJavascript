//Hago las cards de productos
let productCards = document.getElementById("products-cards")
for (let i = 0; i < productos.length; i++) {
  let producto = productos[i]
  let cardHTML = `<div class="card" style="width: 18rem;">
  <img src="${producto.imagen}" class="card-img-top" alt="imagen del producto">
  <div class="card-body">
    <h5 class="card-title">${producto.nombreProducto}</h5>
    <p class="card-text">Precio: ${producto.precio}</p>
    <button data-producto-id="${producto.id}" class="btn btn-primary">Agregar</button>
  </div>
</div>`;
productCards.innerHTML += cardHTML
}
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let agregarButtons = document.getElementsByClassName("btn-primary");

for (let i = 0; i < agregarButtons.length; i++) {
    let button = agregarButtons[i]
    button.addEventListener("click", agregarAlCarrito);

}

function agregarAlCarrito(event) {
    let button = event.target;
    let productoId = button.getAttribute("data-producto-id")

    let producto = productos.find((producto) => producto.id == parseInt(productoId));

    let productoEnCarrito = carrito.find((item) => item.id == productoId);
    // operador ternario if
    productoEnCarrito ?  productoEnCarrito.cantidad += producto.cantidad : carrito.push({ ...producto });

    localStorage.setItem("carrito", JSON.stringify(carrito))
}
console.log(agregarAlCarrito)

const botonCarrito = document.getElementById("botonCarrito")
const modalBody = document.getElementById("modal-body")

function cargarProductosCarrito(array) {
    modalBody.innerHTML = ""


    array.forEach(productoCarrito => {
        modalBody.innerHTML += `<div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
      <img class="card-img-top" height="300px" src="../${productoCarrito.imagen}" alt="${productoCarrito.nombreProducto}">
      <div class="card-body">
              <h4 class="card-title">${productoCarrito.nombreProducto}</h4>
          
              <p class="card-text"> seleccionaste ${productoCarrito.cantidad} unidad/es a $${productoCarrito.precio} cada una </p> 
              <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
      </div>    
  </div>
`
    });

    array.forEach((productoCarrito, indice) => {
        document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", () => {
            let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
            cardProducto.remove()
            carrito.splice(indice, 1)
            localStorage.setItem("carrito", JSON.stringify(carrito))


        })

    });

}
/*botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(carrito)
})*/