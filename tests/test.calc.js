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
        it("Probando la multiplicación ", function () {
            var resultado = calculadora.multiplica(5, 3);
            assert.equal(15, resultado, "multiplicación incorrecta");
        });
        it("Probando la división ", function () {
            var resultado = calculadora.divide(15, 3);
            assert.equal(5, resultado, "divide incorrecta");
        });
        it("Probando la división entre cero ", function () {
            var resultado = calculadora.divide(15, 0);
            assert.equal(0, resultado, "divide incorrecta");
        });
    });




});