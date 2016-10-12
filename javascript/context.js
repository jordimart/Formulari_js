var formulari = require('./Form');
var validate = require('./validate');

function Context() {

  // this.form = new formulari("formulario_data", this);
  // this.val = new validate();

  Context.prototype.start = function() {
    // this.form.start();
    console.log("hola");
  };
}
module.exports = Context;
