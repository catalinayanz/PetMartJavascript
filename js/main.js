//Establezco un array de objetos
let productos = [
    {
        id: 1,
        nombreProducto: "Kong",
        tipoProducto: "juguete",
        precio: 15000,
    },
    {
        id: 2,
        nombreProducto: "Sogas",
        tipoProducto: "juguete",
        precio: 2000,
    },
    {
        id: 3,
        nombreProducto: "Huesos",
        tipoProducto: "juguete",
        precio: 7000,
    },
    {
        id: 4,
        nombreProducto: "Frisbee",
        tipoProducto: "juguete",
        precio: 3000,
    },
    {
        id: 5,
        nombreProducto: "Pelotas",
        tipoProducto: "juguete",
        precio: 3000,
    },
    {
        id: 6,
        nombreProducto: "Impermeables",
        tipoProducto: "abrigos",
        precio: 6000,
    },
    {
        id: 7,
        nombreProducto: "Mantitas",
        tipoProducto: "abrigos",
        precio: 4000,
    },
    {
        id: 8,
        nombreProducto: "Buzos",
        tipoProducto: "abrigos",
        precio: 3000,
    },
    {
        id: 9,
        nombreProducto: "Manta tubo",
        tipoProducto: "abrigos",
        precio: 10000,
    },
    {
        id: 10,
        nombreProducto: "Frontline",
        tipoProducto: "medicamentos",
        precio: 4000,
    },
    {
        id: 11,
        nombreProducto: "Otidermico",
        tipoProducto: "medicamentos",
        precio: 1000,
    },
    {
        id: 12,
        nombreProducto: "Nexgard",
        tipoProducto: "medicamentos",
        precio: 3000,
    },
    {
        id: 13,
        nombreProducto: "Tachitos",
        tipoProducto: "otros",
        precio: 1000,
    },
    {
        id: 14,
        nombreProducto: "Cuchas",
        tipoProducto: "otros",
        precio: 6000,
    },
];
//Establezco variables globales
let carrito = [];
let descuentoKeyword = "Patitas";
let producto;
//Implemento funciones de orden superior y métodos de búsqueda y transformación
function descuentoPatitas(subtotal, keyword) {
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

