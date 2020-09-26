$(document).ready(function(){
    $("#bt-0").click(function(){
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    $("#bt-1").click(function(){
        $("#bt-1").attr("disabled", true);
        $("ul").append("<li>Dentro e na última posição</li>");
    }).mouseover(info1).mouseleave(limpa_info);

    $("#bt-2").click(function(){
        $("#bt-2").attr("disabled", true);
        $("ul").prepend("<li>Dentro e na primeira posição</li>");
    }).mouseover(info2).mouseleave(limpa_info);

    $("#bt-3").click(function(){
        $("#bt-3").attr("disabled", true);
        $("ul").before("<h4>Fora e antes do elemento</h4>");
    }).mouseover(info3).mouseleave(limpa_info);

    $("#bt-4").click(function(){
        $("#bt-4").attr("disabled", true);
        $("ul").after("<h4>Fora e depois do elemento</h4>");
    }).mouseover(info4).mouseleave(limpa_info);

    $("#bt-5").click(function(){
        $("#bt-5").attr("disabled", true);
        $("ul").wrap("<p></p>");
    }).mouseover(info5).mouseleave(limpa_info);

    $("#bt-6").click(function(){
        $("#bt-6").attr("disabled", true);
        $("ul").append($("li").clone());
    }).mouseover(info6).mouseleave(limpa_info);

    function limpa_info(){
        $("#info").html("");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

    function info1(){
        $("#info").html("Insere um item de lista dentro e na última posição do elemento alvo");        
    }

    function info2(){
        $("#info").html("Insere um item de lista dentro e na primeira posição do elemento alvo");        
    }

    function info3(){
        $("#info").html("Insere um elemento fora e antes do elemento alvo");        
    }

    function info4(){
        $("#info").html("Insere um elemento fora e depois do elemento alvo");        
    }

    function info5(){
        $("#info").html("Envolve o elemento alvo com um parágrafo");        
    }

    function info6(){
        $("#info").html("Clona todas as tags <span class='text-danger'>li</span> e coloca dentro de <span class='text-danger'>ul</span> na última posição");        
    }

});

