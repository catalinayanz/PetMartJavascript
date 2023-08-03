//Hago las cards de productos
let productCards = document.getElementById("products-cards")
for (let i = 0; i < productos.length; i++) {
  let producto = productos[i]
  let cardHTML = `<div class="card" style="width: 18rem;">
  <img src="${producto.imagen}" class="card-img-top" alt="imagen del producto">
  <div class="card-body">
    <h5 class="card-title">${producto.nombreProducto}</h5>
    <p class="card-text">Precio: ${producto.precio}</p>
    <a href="#" class="btn btn-primary">Agregar</a>
  </div>
</div>`;
productCards.innerHTML += cardHTML
}
//Establezco variables globales
let carrito = [];
let descuentoKeyword = "Patitas";
let producto;
// Agregar evento click a los botones "Agregar al carrito"
let agregarButtons = document.getElementsByClassName("btn btn-primary");

for (let i = 0; i < agregarButtons.length; i++) {
  let button = agregarButtons[i];
  button.addEventListener("click", agregarAlCarrito);
}

// Función para actualizar la cantidad del producto en el objeto productos
/*function actualizarCantidad(event) {
  let input = event.target;
  let productoId = input.getAttribute("data-producto-id");
  let cantidad = parseInt(input.value);

  // Buscar el producto por su ID en el array de productos
  let producto = productos.find((producto) => producto.id === parseInt(productoId));

  // Actualizar la cantidad del producto en el objeto productos
  producto.cantidad = cantidad;
}
*/
// Función para agregar productos al carrito
function agregarAlCarrito(event) {
  let button = event.target;
  let productoId = button.getAttribute("data-producto-id");

  // Buscar el producto por su ID en el array de productos
  let producto = productos.find((producto) => producto.id === parseInt(productoId));

  // Verificar si el producto ya está en el carrito
  let productoEnCarrito = carrito.find((item) => item.id === producto.id);

  if (productoEnCarrito) {
    // Si el producto ya está en el carrito, incrementar la cantidad
    productoEnCarrito.cantidad += producto.cantidad;
  } else {
    // Si el producto no está en el carrito, agregarlo con la cantidad actual
    carrito.push({ ...producto });
  }

  console.log("Producto agregado al carrito. ID: " + productoId);
  console.log("Carrito:", carrito);
}


//Implemento funciones de orden superior y métodos de búsqueda y transformación
/*function descuentoPatitas(subtotal, keyword) {
  if (keyword.toLowerCase() === descuentoKeyword.toLowerCase()) {
    return subtotal * 0.9;
  }
  return subtotal;
}

function encontrarProducto() {
  let seleccion = prompt("Ingresa el nombre del producto que deseas comprar:");  
  producto = productos.find((p) => p.nombreProducto.toLowerCase() == seleccion.toLowerCase());
}

function agregarCarrito() {
  if (producto) {
    let cantidad = parseInt(prompt("Ingresa la cantidad que deseas comprar:"));
    let keyword = prompt("Si tienes un descuento, por favor, ingrésalo:");

    carrito.push({
      producto: producto.nombreProducto,
      cantidad: cantidad,
      subtotal: producto.precio * cantidad
    });
  
    carrito.map(item => {
      item.subtotal = descuentoPatitas(item.subtotal, keyword);
      return item;
    });
  } else {
    document.write("Ups! Parece que este producto no existe o no contamos con él. Por favor, vuelve a intentarlo");
  }
}

function confirmarCarrito() {
  while (true) {
    encontrarProducto();
    agregarCarrito();

    if (!confirm("¿Deseas agregar otro producto al carrito?")) {
      break;
    }
  }
}
function calcularTotal() {
  console.log("Carrito de compras:");
  carrito.forEach((item) => {
    document.write(`- ${item.cantidad}  ${item.producto}:  ${item.subtotal} <br>`);
  });

  let total = carrito.reduce((sum, item) => sum + item.subtotal, 0);
  document.write(`Total a pagar: ${total}`);
}

function vaciarCarrito() {
  carrito = [];
  document.write(`El carrito ha sido vaciado.`);
}

confirmarCarrito();

if (carrito.length > 0) {
  if (confirm("¿Desea vaciar el carrito?")) {
    vaciarCarrito();
  }
}

calcularTotal();

*/
