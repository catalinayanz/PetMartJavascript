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
let productosEnCarrito = []

function agregarAlCarrito(productoId) {
  const productoSeleccionado = productos.find(producto => producto.id === productoId);

  if (productoSeleccionado) {
    productosEnCarrito.push(productoSeleccionado);

    mostrarCarrito();
  } else {
    alert("El producto seleccionado no existe.");
  }
}

function mostrarCarrito() {

  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  cartItemsElement.innerHTML = "";

  productosEnCarrito.forEach(producto => {
    const cartItemHTML = `<div>
      <span>${producto.nombreProducto}</span>
      <span>Precio: ${producto.precio}</span>
    </div>`;
    cartItemsElement.innerHTML += cartItemHTML;
  });

  const total = productosEnCarrito.reduce((acc, producto) => acc + producto.precio, 0);
  cartTotalElement.textContent = total;
}