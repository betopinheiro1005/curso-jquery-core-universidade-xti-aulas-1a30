$(document).ready(function(){

    $("#bt-0").click(function(){
        limpa_campos();
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    $("#bt-1").click(function(){
        $(".box").css("background-color", "#ccc");
        $(this).css("background-color", "yellow");
        $("#message").hide(1000); // parâmetros: normal, fast, slow, milissegundos
    }).mouseover(info1).mouseleave(limpa_info);

    $("#bt-2").click(function(){
        $(".box").css("background-color", "#ccc");
        $(this).css("background-color", "yellow");

        $("#message").show(1000); // parâmetros: normal, fast, slow, milissegundos
    }).mouseover(info2).mouseleave(limpa_info);

    $("#bt-3").click(function(){
        $(".box").css("background-color", "#ccc");
        $(this).css("background-color", "yellow");

        $("#message").toggle(1000); // parâmetros: normal, fast, slow, milissegundos
    }).mouseover(info3).mouseleave(limpa_info);

    function limpa_campos(){
        $(":text").val("");
        $("textarea").val("");
        $("#message").text("");
    }

    function limpa_info(){
        $("#info").html("");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

    function info1(){
        $("#info").html("Esconde, depois de 1 segundo, o box de mensagem");        
    }

    function info2(){
        $("#info").html("Exibe, depois de 1 segundo, o box de mensagem");        
    }

    function info3(){
        $("#info").html("Alterna a cada clique, depois de 1 segundo, entre esconder e exibir o box de mensagem");        
    }

});




