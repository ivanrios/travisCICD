'use strict';

var assert = require("chai").assert;
var calculadora = require('../js/calc.js')

describe("Pruebas de Calculadora ", function () {
    describe("Probando funcion suma: ", function () {
        it("Probando la suma ", function () {
            var resultado = calculadora.suma(1,3);
            assert.equal(4, resultado,  "suma incorrecta");
        });
        it("Probando el tipo de dato: ", function () {
            var resultado = calculadora.suma(1, 3);
            assert.typeOf(resultado, "number", "El tipo de dato no es correcto");
        });
    });




});