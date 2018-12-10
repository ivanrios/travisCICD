$(document).ready(

    $("#sumar").click(function(){
        var a =  parseInt($("#a").val());
        var b = parseInt($("#b").val());

        var resultado = calculadora.suma(a,b);
        $("#resultado").html(resultado)
    })

);