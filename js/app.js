$(document).ready(

    $("#sumar").click(function(){
        var a =  parseInt($("#a").val());
        var b = parseInt($("#b").val());

        var resultado = calculadora.multiplica(a,b);
        $("#resultado").html(resultado)
    })

);