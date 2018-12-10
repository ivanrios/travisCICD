'use strict';
var calculadora = {
    suma: function (a, b) {
        return a + b;
    },
    resta: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        if (b==0)
          return 0
        else
          return a / b;
    },
    multiplica: function (a, b) {
        return a * b;
    }
    
};

    (function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
            typeof define === 'function' && define.amd ? define(factory) :
                global.test = factory()
    }(this, (function () {

        return calculadora;

    })));

