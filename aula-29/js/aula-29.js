$(document).ready(function(){

    $("#bt-0").click(function(){
        $("textarea").val("");
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    $("textarea").bind("keyup paste", function(){
        var contagem = $(this).val().length;
        var maximo = 100;
        var disponivel = maximo - contagem;
        if(disponivel < 0){
            var texto = $(this).val().substr(0,maximo);
            $(this).val(texto);
            disponivel = 0;
        }
        
        $(".contagem").text(disponivel);

    });

    function limpa_info(){
        $("#info").html("");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

});