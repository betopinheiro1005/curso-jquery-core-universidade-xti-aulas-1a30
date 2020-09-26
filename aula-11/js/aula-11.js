$(document).ready(function(){
    $("#bt-0").click(function(){
        limpa_textarea();
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    $("#bt-1").click(function(){
        limpa_textarea();
        alert($("#p1").html());
    }).mouseover(info1).mouseleave(limpa_info);

    $("#bt-2").click(function(){
        limpa_textarea();
        $("#p1").html("<h3 class='text-center text-primary'>Conheça o Brasil!</h3>");
    }).mouseover(info2).mouseleave(limpa_info);

    $("#bt-3").click(function(){
        limpa_textarea();
        alert($("#p2").html());
    }).mouseover(info3).mouseleave(limpa_info);

    $("#bt-4").click(function(){
        limpa_textarea();
        $("#p2").text($("#p1").html());
    }).mouseover(info4).mouseleave(limpa_info);

    $("#bt-5").click(function(){
        limpa_textarea();
        $("textarea").val($("#p1").text());
    }).mouseover(info5).mouseleave(limpa_info);

    $("#bt-6").click(function(){
        
        $("#p2").text($("textarea").val());
    }).mouseover(info6).mouseleave(limpa_info);

    $("#bt-7").click(function(){
        limpa_textarea();
        $("#p2").replaceWith("<h4 id='p2'>Usando replaceWith</h4>");
    }).mouseover(info7).mouseleave(limpa_info);

    function limpa_info(){
        $("#info").html("");
    }

    function limpa_textarea(){
        $("textarea").val("");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

    function info1(){
        $("#info").html("Exibe o conteúdo do parágrafo 1 em um <span class='text-danger'>alert</span>");        
    }

    function info2(){
        $("#info").html("Altera o conteúdo do parágrafo 1 com a mensagem 'Conheça o Brasil!' ");                
    }

    function info3(){
        $("#info").html("Exibe o conteúdo do parágrafo 2 em um <span class='text-danger'>alert</span>");        
    }

    function info4(){
        $("#info").html("Altera o conteúdo do parágrafo 2 com o conteúdo do parágrafo 1 (em text)");        
    }

    function info5(){
        $("#info").html("Exibe o conteúdo do <span class='text-danger'>parágrafo 1</span> no <span class='text-danger'>textarea</span>");        
    }

    function info6(){
        $("#info").html("Exibe o conteúdo do <span class='text-danger'>textarea</span> no <span class='text-danger'>parágrafo 2</span>");        
    }

    function info7(){
        $("#info").html("Repõe o parágrafo 2 com uma nova estrutura <span class='text-danger'>html</span>");        
    }

});

