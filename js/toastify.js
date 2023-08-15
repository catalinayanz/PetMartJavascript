let button = document.querySelectorAll(".btn-primary");

button.forEach( btn => {
    btn.addEventListener("click", agregarToastify);
});

function agregarToastify () {
    Toastify({
        text: "This is a toast",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
};