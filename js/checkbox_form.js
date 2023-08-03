//Le damos un poco de estilo al checkbox del form:
document.getElementById('check').addEventListener('change', function () {
    const checkbox = this;
  
    if (checkbox.checked) {
      checkboxStyle.style.backgroundColor = '#ff76c5';
    } else {
      checkboxStyle.style.backgroundColor = 'transparent';
    }
  });