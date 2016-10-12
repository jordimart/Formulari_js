var inherits = require('./Inheritance');
var Subject = require('./Subject');

var Form =
  function(id_form, validate) {

    this.data = document.getElementById(
      id_form); // este atributo sera la referencia de donde coger datos
    inherits(new Subject(), this); // Hacemos que formulari sea sujeto
    this.AddObserver(validate); // Añadimos un observador a formulari
  }

Form.prototype.start = function() {
  // this.form.start();
  // console.log("hola");
  this.Notify(this.data); // notificara cada vez que se pulsa una tecla

};
module.exports = Form;
