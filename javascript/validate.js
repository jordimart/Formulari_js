var inherits = require('./Inheritance');
var Observer = require('./Observer');

function Validate() {

  inherits(new Observer(), this); // Hacemos a validate observer

  this.Update = function(id_form) {

    console.log("estoy dentro de update");

  }
}

module.exports = Validate;
