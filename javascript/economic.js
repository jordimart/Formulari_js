

var inherits = require('./Inheritance');
var Observer = require('./Observer');

var economic = function (formulari) {

    inherits(new Observer(), this); // Hacemos a validate observer
    formulari.AddObserver(this); // Añadimos un observador a formulari

    this.Update = function (formulari) {

        formulari.month_ingress.addEventListener('keyup', this.month_validate, false);
        formulari.capital.addEventListener('keyup', this.capital_validate, false);
        formulari.interest_rate_type.addEventListener('click', this.interest_rate_type_validate, false);
        formulari.euribor.addEventListener('keyup', this.euribor_validate, false);
        formulari.differential.addEventListener('keyup', this.differential_validate, false);
        formulari.fixed_interest.addEventListener('keyup', this.fixed_interest_validate, false);
        formulari.period.addEventListener('keyup', this.period_validate, false);
        formulari.homeInsurance.addEventListener('click', this.homeInsurance_validate, false);
        formulari.paysheet.addEventListener('click', this.paysheet_validate, false);
        formulari.lifeInsurance.addEventListener('click', this.lifeInsurance_validate, false);

    };

    this.month_validate = function () {

        economic.prototype.validate(formulari.month_ingress.getAttribute("data"), formulari.month_ingress.value, formulari.month_ingress);
        economic.prototype.interes(formulari.euribor, formulari.differential, formulari.fixed_interest, formulari.interestApplied);
        economic.prototype.operation(formulari.capital, formulari.interestApplied, formulari.period, formulari.monthly_quote);
    };
    this.capital_validate = function () {

        economic.prototype.validate(formulari.capital.getAttribute("data"), formulari.capital.value, formulari.capital);
        economic.prototype.interes(formulari.euribor, formulari.differential, formulari.fixed_interest, formulari.interestApplied);
        economic.prototype.operation(formulari.capital, formulari.interestApplied, formulari.period, formulari.monthly_quote);
    };

    this.interest_rate_type_validate = function () {

        economic.prototype.select(formulari.interest_rate_type, formulari.fixed_interest, formulari.euribor, formulari.differential, formulari.interestApplied);
    };
    this.euribor_validate = function () {
        economic.prototype.validate(formulari.euribor.getAttribute("data"), formulari.euribor.value, formulari.euribor);
        economic.prototype.interes(formulari.euribor, formulari.differential, formulari.fixed_interest, formulari.interestApplied);
        economic.prototype.operation(formulari.capital, formulari.interestApplied, formulari.period, formulari.monthly_quote);
    };
    this.differential_validate = function () {
        economic.prototype.validate(formulari.differential.getAttribute("data"), formulari.differential.value, formulari.differential);
        economic.prototype.interes(formulari.euribor, formulari.differential, formulari.fixed_interest, formulari.interestApplied);
        economic.prototype.operation(formulari.capital, formulari.interestApplied, formulari.period, formulari.monthly_quote);
    };
    this.fixed_interest_validate = function () {
        economic.prototype.validate(formulari.fixed_interest.getAttribute("data"), formulari.fixed_interest.value, formulari.fixed_interest);
        economic.prototype.interes(formulari.euribor, formulari.differential, formulari.fixed_interest, formulari.interestApplied);
        economic.prototype.operation(formulari.capital, formulari.interestApplied, formulari.period, formulari.monthly_quote);
    };
    this.period_validate = function () {
        economic.prototype.validate(formulari.period.getAttribute("data"), formulari.period.value, formulari.period);
        economic.prototype.interes(formulari.euribor, formulari.differential, formulari.fixed_interest, formulari.interestApplied);
        economic.prototype.operation(formulari.capital, formulari.interestApplied, formulari.period, formulari.monthly_quote);
    };
    this.homeInsurance_validate = function () {

        economic.prototype.interes(formulari.euribor, formulari.differential, formulari.fixed_interest, formulari.interestApplied);
        economic.prototype.operation(formulari.capital, formulari.interestApplied, formulari.period, formulari.monthly_quote);
    };
    this.paysheet_validate = function () {

        economic.prototype.interes(formulari.euribor, formulari.differential, formulari.fixed_interest, formulari.interestApplied);
        economic.prototype.operation(formulari.capital, formulari.interestApplied, formulari.period, formulari.monthly_quote);
    };
    this.lifeInsurance_validate = function () {

        economic.prototype.interes(formulari.euribor, formulari.differential, formulari.fixed_interest, formulari.interestApplied);
        economic.prototype.operation(formulari.capital, formulari.interestApplied, formulari.period, formulari.monthly_quote);
    };

};


economic.prototype.validate = function (attribute, value, input) {

    if (value === "") {
        input.style = 'border:2px solid red;';
    } else {
        if (attribute === "money") {
            var money = /^\-?[0-9]*\.?[0-9]+$/;
            var result;
            if (!money.test(value)) {
                result = false;
                input.style = 'border:2px solid red;';
            } else {
                result = true;
                input.style = 'border:2px solid green;';
            }

        }

        if (attribute === "porcentage") {
            var money = /^\-?[0-9]{0,1}\.?[0-9]{0,2}$/;
            var result;
            if (!money.test(value)) {
                result = false;
                input.style = 'border:2px solid red;';
            } else {
                result = true;
                input.style = 'border:2px solid green;';
            }

        }

        if (attribute === "number") {
            var money = /^\-?[0-9]{0,2}$/;
            var result;
            if (!money.test(value)) {
                result = false;
                input.style = 'border:2px solid red;';
            } else {
                result = true;
                input.style = 'border:2px solid green;';
            }

        }
    }
};

economic.prototype.select = function (interest_rate_type, fixed_interest, euribor, differential, interestApplied) {

    if (interest_rate_type.value === "variable") {

        fixed_interest.readOnly = true;
        euribor.readOnly = false;
        differential.readOnly = false;
        fixed_interest.value = 0;

    } else if (interest_rate_type.value === "fixed") {

        euribor.readOnly = true;
        differential.readOnly = true;
        fixed_interest.readOnly = false;
        euribor.value = 0;
        differential.value = 0;

    }

};

economic.prototype.operation = function (capital, interestApplied, period, monthly_quote) {

    var total = parseFloat((capital.value * interestApplied.value) / 12) /
            (100 * (1 -
                    Math.pow(1 + ((interestApplied.value / 12) / 100), (-1) *
                            period.value * 12)));
    var exp = /^\-?[0-9]*\.?[0-9]+$/;
    if (exp.test(total)) {

        monthly_quote.readOnly = false;
        monthly_quote.value = total;
    }
};

economic.prototype.interes = function (euribor, differential, fixed_interest, interestApplied) {

    var checkboxes = document.getElementById("formulario_products").checkbox;
    var cont = 0;
    var suma = 0;
    for (var x = 0; x < checkboxes.length; x++) {
        if (checkboxes[x].checked) {
            cont = cont + 1;
        }
    }
    if (cont === 1) {
        suma = 0.5;
    } else if (cont === 2) {
        suma = 1;
    } else if (cont === 3) {
        suma = 1.5;
    } else {
        suma = 0;
    }

    if ((fixed_interest.value === "") || (fixed_interest.value === 0)) {
        interestApplied.value = parseFloat(euribor.value) + parseFloat(differential.value) - suma;
    } else {
        interestApplied.value = parseFloat(fixed_interest.value) - suma;
    }


};


module.exports = economic;
