//Esto fue solo por jugar con el codigo un rato
const imagen = document.getElementById('img_perrito_sorpresa');

imagen.addEventListener("click", perritoAmenaza);

function perritoAmenaza() {
  Swal.fire({
    title: 'Comprame un juguete',
    imageUrl: '../asset/imagenes/perritoAmenazante.jpg',
    imageWidth: 280,
    imageHeight: 200,
    imageAlt: 'Perrito amenazante',
    timer: 2000,
    showConfirmButton: false,
  });
};