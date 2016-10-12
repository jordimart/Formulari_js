var Formulari = require('./Form');
var Validate = require('./validate');

window.onload = function() {

  var validate = new Validate(); // creamos un validate
  var formulari = new Formulari(validate); // creamos un formulario cogiendo la
  // referencia del DOM y le inyectamos
  // validate

  var startForm = function(event) {

    formulari.start();

  };
  // cada vez que pulsemos una letra activara la funcion StartForm de formulari
  window.addEventListener("keyup", startForm, false);
  document.addEventListener("click", startForm, false);

};
