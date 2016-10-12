var inherits = require('./Inheritance');
var Observer = require('./Observer');

function Validate() {

  inherits(new Observer(), this); // Hacemos a validate observer

  this.Update = function(id_form) {

    // console.log("estoy dentro de update");

    var ingresos_mensuales =
      document.getElementById('ingresos_mensuales').value;
    var capital = document.getElementById('capital').value;
    var interest_rate_type =
      document.getElementById('interest_rate_type').value;
    var euribor = parseFloat(document.getElementById('euribor').value);
    var euribor_type = document.getElementById('euribor');
    var differential =
      parseFloat(document.getElementById('differential').value);
    var differential_type = document.getElementById('differential');
    var fixed_interest =
      parseFloat(document.getElementById('fixed_interest').value);
    var fixed_interest_type = document.getElementById('fixed_interest');
    var terminiAnys = document.getElementById('period').value;

    var monthly_quote = document.getElementById('monthlyQuote');
    var interesAplicat = document.getElementById('interestApplied');

    // En esta condición decidimos que campos serán editables dependiendo del
    // tipo
    // elegido
    if (interest_rate_type === "variable") {
      // console.log("interes variable");
      fixed_interest_type.readOnly = true;
      euribor_type.readOnly = false;
      differential_type.readOnly = false;
      interesAplicat.value = (euribor) + (differential);
    } else {
      // console.log("interes no variable");
      euribor_type.readOnly = true;
      differential_type.readOnly = true;
      fixed_interest_type.readOnly = false;
      interesAplicat.value = (fixed_interest);
    }

    var result = true;
    if (result) {
      console.log("estoy dentro del if de imprimir");
      var total = parseFloat((capital * interesAplicat.value) / 12) /
        (100 * (1 -
          Math.pow(1 + ((interesAplicat.value / 12) / 100), (-1) *
            terminiAnys * 12)));

      monthly_quote.readOnly = false;
      monthly_quote.value = total;
    }
  }
}
module.exports = Validate;
