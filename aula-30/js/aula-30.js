$(document).ready(function(){

    $("#bt-0").click(function(){
        $(".numeros").val("");
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    // Somente numeros (usando expressão regular)
    $(".numeros").keyup(function() {
        var valor = $(this).val().replace(/[^0-9]+/g,'');
        $(this).val(valor);
    });

    function limpa_info(){
        $("#info").html("");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

});