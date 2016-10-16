/* global month_ingress */

var Formulari = require('./Form');
var Economic = require('./economic');
var Data_user = require('./data_user');

window.onload = function () {

    var formulari = new Formulari(); // creamos un formulario cogiendo la
    var economic = new Economic(formulari); 
    var data_user = new Data_user(formulari); 
    // referencia del DOM y le inyectamos
    // validate

    var start = function () {

        formulari.notificar();
        formulari.submit();

    };

    //document.addEventListener('keyup',start,false);
    document.addEventListener('click', start, false);

};
