let form = document.querySelector('form');

let submitButton = form.querySelector('button[type="submit"]');

form.addEventListener("submit", function (e) {
    e.preventDefault()
 //con .value capturo los datos que ingresa el usuario
  let nombre = form.querySelector('#nombre').value;
  let apellido = form.querySelector('#apellido').value;
  let email = form.querySelector('#email').value;
  let contraseña = form.querySelector('#contraseña').value;

  //Creo un objeto con los datos del usuario
  let datosUsuario = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    contraseña: contraseña,
  };

  //Los almaceno en un array
  let registros = [];
  registros.push(datosUsuario);

  //Envio los datos al servidor
  Swal.fire({
    title: 'Perfecto! Ya estás registrado',
    confirmButtonColor: "#ff99d4",
  });
  
  //Restablecer el formulario
  form.reset();
});
