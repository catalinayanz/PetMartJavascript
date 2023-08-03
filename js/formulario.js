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

  //Mostrar los datos registrados en la consola (solo para verificar)
  console.log(registros);

  //Enviar los datos al servidor
  Swal.fire(
    'Perfecto! Ya estás registrado!',
  )
  //Restablecer el formulario
  form.reset();
});
