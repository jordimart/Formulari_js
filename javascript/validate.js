var inherits = require('./Inheritance');
var Observer = require('./Observer');

function Validate() {

  inherits(new Observer(), this); // Hacemos a validate observer

  this.Update = function(id_form) {

    // console.log("estoy dentro de update");

    // variables de tipo para cambiar su estado
    var differential_type = document.getElementById('differential');
    var euribor_type = document.getElementById('euribor');
    var fixed_interest_type = document.getElementById('fixed_interest');
    // variables de valor
    var ingresos_mensuales =
      document.getElementById('ingresos_mensuales').value;
    var capital = document.getElementById('capital').value;
    var interest_rate_type =
      document.getElementById('interest_rate_type').value;
    var euribor = parseFloat(document.getElementById('euribor').value);
    var differential =
      parseFloat(document.getElementById('differential').value);
    var fixed_interest =
      parseFloat(document.getElementById('fixed_interest').value);
    var terminiAnys = document.getElementById('period').value;

    var monthly_quote = document.getElementById('monthlyQuote');
    var interesAplicat = document.getElementById('interestApplied');

    function pass(terminiAnys, capital, ingresos_mensuales, euribor,
      differential, fixed_interest) {
      var result = true;

      // var num = /^[0-9]+([.][0-9]+)?$/;
      // var porcentage = /^[0-9]\d{1,2}(\.\d{1,2})?$/;
      // var money = /^[1-9]\d{1,7}(?:\.\d{1,4})?$/;
      var porcentage = /[0-9]/;
      var money = /[0-9]/;

      if (ingresos_mensuales === "") {
        result = false;
      } else if (!money.test(ingresos_mensuales)) {
        result = false;
      }

      if (capital === "") {
        result = false;
      } else if (!money.test(capital)) {
        result = false;
      }

      // validaciones campos de porcentajes
      if (!euribor_type.readOnly) {
        if (!porcentage.test(euribor)) {
          result = false;
        }
      }
      if (!differential_type.readOnly) {
        if (!porcentage.test(differential)) {
          result = false;
        }
      }
      if (!fixed_interest_type.readOnly) {
        if (!porcentage.test(fixed_interest)) {
          result = false;
        }
      }

      if (terminiAnys === "") {
        result = false;
      } else if ((terminiAnys < 5) || (terminiAnys > 50)) {
        result = false;
      }

      console.log(result);
      return result;
    }

    // función para sumar las rebajas por productos escogidos
    function check_box() {
      var checkboxes = document.getElementById("formulario_products").checkbox;
      var cont = 0;
      var suma = 0;
      for (var x = 0; x < checkboxes.length; x++) {
        if (checkboxes[x].checked) {
          cont = cont + 1;
        }
      }
      if (cont === 1) {
        suma = 0.25;
      } else if (cont === 2) {
        suma = 0.50;
      } else if (cont === 3) {
        suma = 0.75;
      } else {
        suma = 0;
      }

      return suma;
    }

    // aplicamos la funcion para que nos diga la rebaja
    var int = check_box();

    // En esta condición decidimos que campos serán editables dependiendo del
    // tipo
    // elegido
    if (interest_rate_type === "variable") {
      // console.log("interes variable");
      fixed_interest_type.readOnly = true;
      euribor_type.readOnly = false;
      differential_type.readOnly = false;
      interesAplicat.value = euribor + differential - int;
    } else {
      // console.log("interes no variable");
      euribor_type.readOnly = true;
      differential_type.readOnly = true;
      fixed_interest_type.readOnly = false;
      interesAplicat.value = fixed_interest - int;
    }

    var result = pass(terminiAnys, capital, ingresos_mensuales, euribor,
      differential, fixed_interest);
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
