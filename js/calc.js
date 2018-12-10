'use strict';
var calculadora = {
    suma: function (a, b) {
        return a + b;
    },
    resta: function (a, b) {
        return a - b;
    }
};

    (function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
            typeof define === 'function' && define.amd ? define(factory) :
                global.test = factory()
    }(this, (function () {

        return calculadora;

    })));

