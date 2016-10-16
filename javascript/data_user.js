var inherits = require('./Inheritance');
var Observer = require('./Observer');

var data_user = function (formulari) {

    inherits(new Observer(), this); // Hacemos a validate observer
    formulari.AddObserver(this); // Añadimos un observador a formulari

    this.Update = function (formulari) {
        
        formulari.nif.addEventListener('keyup', this.nif_validate, false);
        formulari.nombre.addEventListener('keyup', this.nombre_validate, false);
        formulari.surname1.addEventListener('keyup', this.surname1_rate_type_validate, false);
        formulari.surname2.addEventListener('keyup', this.surname2_validate, false);
        formulari.age.addEventListener('keyup', this.age_validate, false);
        formulari.mobile.addEventListener('keyup', this.mobile_validate, false);
        formulari.email.addEventListener('keyup', this.email_validate, false);
        

    };
    
    this.nif_validate = function () {

        data_user.prototype.validate(formulari.nif.getAttribute("data"), formulari.nif.value, formulari.nif);
        
    };
    this.nombre_validate = function () {

        data_user.prototype.validate(formulari.nombre.getAttribute("data"), formulari.nombre.value, formulari.nombre);
       
    };

    this.surname1_rate_type_validate = function () {

        data_user.prototype.validate(formulari.surname1.getAttribute("data"), formulari.surname1.value, formulari.surname1);
    };
    this.surname2_validate = function () {
        
        data_user.prototype.validate(formulari.surname2.getAttribute("data"), formulari.surname2.value, formulari.surname2);
        
    };
    this.age_validate = function () {
        
        data_user.prototype.validate(formulari.age.getAttribute("data"), formulari.age.value, formulari.age);
       
    };
    this.mobile_validate = function () {
       
        data_user.prototype.validate(formulari.mobile.getAttribute("data"), formulari.mobile.value, formulari.mobile);
       
    };
    this.email_validate = function () {
        console.log("estoy en mobile 2");
        data_user.prototype.validate(formulari.email.getAttribute("data"), formulari.email.value, formulari.email);
       
    };

};

data_user.prototype.validate = function (attribute, value, input) {

    if (value === "") {
        input.style = 'border:2px solid red;';
    } else {
        if (attribute === "nif") {
            var money = /(^([0-9]{8,8}[A-Z])|^)$/;
            var result;
            if (!money.test(value)) {
                result = false;
                input.style = 'border:2px solid red;';
            } else {
                result = true;
                input.style = 'border:2px solid green;';
            }

        }


    if (value === "") {
        input.style = 'border:2px solid red;';
    } else {
        if (attribute === "text") {
            var money = /^[a-zA-Z ]{2,30}$/;
            var result;
            if (!money.test(value)) {
                result = false;
                input.style = 'border:2px solid red;';
            } else {
                result = true;
                input.style = 'border:2px solid green;';
            }

        }

        if (attribute === "phone") {
           
            var money = /^[9|6|7][0-9]{8}$/;
            var result;
            if (!money.test(value)) {
                result = false;
                input.style = 'border:2px solid red;';
            } else {
                result = true;
                input.style = 'border:2px solid green;';
            }

        }
        
        if (attribute === "email") {
            console.log("estoy en mail");
            var money = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var result;
            if (!money.test(value)) {
                result = false;
                input.style = 'border:2px solid red;';
            } else {
                result = true;
                input.style = 'border:2px solid green;';
            }

        }

        if (attribute === "age") {
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
    }
    
};

module.exports = data_user;