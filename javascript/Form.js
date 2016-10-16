

var inherits = require('./Inheritance');
var Subject = require('./Subject');

var Form =
        function () {
            this.form = document.getElementById('formulario_products');
            this.month_ingress = document.getElementById('ingresos_mensuales');
            this.capital = document.getElementById('capital');
            this.interest_rate_type = document.getElementById('interest_rate_type');
            this.euribor = document.getElementById('euribor');
            this.differential = document.getElementById('differential');
            this.fixed_interest = document.getElementById('fixed_interest');
            this.period = document.getElementById('period');
            this.homeInsurance = document.getElementById('homeInsurance');
            this.paysheet = document.getElementById('paysheet');
            this.lifeInsurance = document.getElementById('lifeInsurance');
            this.interestApplied = document.getElementById('interestApplied');
            this.monthly_quote = document.getElementById('monthlyQuote');
            
            this.nif = document.getElementById('nif');
            this.nombre = document.getElementById('nombre');
            this.surname1 = document.getElementById('surname1');
            this.surname2 = document.getElementById('surname2');
            this.age = document.getElementById('age');
            this.mobile = document.getElementById('mobile');
            this.email = document.getElementById('email');
            
            this.Submit=document.getElementById("Submit");
            

            inherits(new Subject(), this); // Hacemos que formulari sea sujeto

        };
//la idea seria que este notificara els tipus de event
Form.prototype.notificar = function () {

    this.Notify(this);
};
Form.prototype.submit = function () {

    
};




module.exports = Form;
