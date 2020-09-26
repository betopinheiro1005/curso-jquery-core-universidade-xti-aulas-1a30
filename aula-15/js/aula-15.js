$(document).ready(function(){
    
    $("ul").wrap("<p></p>");

    $("#bt-0").click(function(){
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    $("#bt-1").click(function(){
        var codigo = "Largura da imagem + padding + bordas: " + $('img').css("width");
        $("#message").html(codigo);
    }).mouseover(info1).mouseleave(limpa_info);

    $("#bt-2").click(function(){
        var codigo = "Altura da imagem + padding + bordas: " + $("img").css("height");
        $("#message").html(codigo);
    }).mouseover(info2).mouseleave(limpa_info);

    $("#bt-3").click(function(){
        var codigo = "Classe imagem: " + $("img").hasClass("imagem") + "<br />Classe destaque: " + $("img").hasClass("destaque");
        $("#message").html(codigo);
    }).mouseover(info3).mouseleave(limpa_info);

    $("#bt-4").click(function(){
        $("img").addClass("destaque");
        $("#message").html("Adicionada a classe destaque");
    }).mouseover(info4).mouseleave(limpa_info);

    $("#bt-5").click(function(){
        $("img").removeClass("destaque");
        $("#message").html("Removida a classe destaque");
    }).mouseover(info5).mouseleave(limpa_info);

    $("#bt-6").click(function(){
        var codigo = "Largura da imagem: " + $("img").width() + "px";
        $("#message").html(codigo);
    }).mouseover(info6).mouseleave(limpa_info);

    $("#bt-7").click(function(){
        var codigo = "Altura da imagem: " + $("img").height() + "px";
        $("#message").html(codigo);
    }).mouseover(info7).mouseleave(limpa_info);

    $("#bt-8").click(function(){
        var codigo = "Largura da imagem + padding: " + $("img").innerWidth() + "px";
        $("#message").html(codigo);
    }).mouseover(info8).mouseleave(limpa_info);

    $("#bt-9").click(function(){
        var codigo = "Largura da imagem + padding + bordas: " + $("img").outerWidth() + "px";
        $("#message").html(codigo);
    }).mouseover(info9).mouseleave(limpa_info);

    $("#bt-10").click(function(){
        var codigo = "Largura da imagem + padding + bordas + margem após as bordas:  " + $("img").outerWidth(true) + "px";
        $("#message").html(codigo);
    }).mouseover(info10).mouseleave(limpa_info);

    $("#bt-11").click(function(){
        var codigo = "Posição da imagem em relação ao topo da janela: " + $("img").position().top + "px";
        $("#message").html(codigo);
    }).mouseover(info11).mouseleave(limpa_info);

    $("#bt-12").click(function(){
        var codigo = "Posição da imagem em relação à esquerda da janela: " + $("img").position().left + "px";
        $("#message").html(codigo);
    }).mouseover(info12).mouseleave(limpa_info);

    $("#bt-13").click(function(){
        var codigo = "Altura da margem de impressão da imagem: " + $("img").offset().top + "px";
        $("#message").html(codigo);
    }).mouseover(info13).mouseleave(limpa_info);

    $("#bt-14").click(function(){
        var codigo = "Largura da margem de impressão da imagem: " + $("img").offset().left + "px";
        $("#message").html(codigo);
    }).mouseover(info14).mouseleave(limpa_info);

    function limpa_info(){
        $("#info").html("");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

    function info1(){
        $("#info").html("Exibe a dimensão da largura da imagem + padding + bordas");        
    }

    function info2(){
        $("#info").html("Exibe a dimensão da altura da imagem + padding + bordas"); 
    }

    function info3(){
        $("#info").html("Exibe se a imagem tem associada a classe <span class='text-danger'>imagem</span> e a classe <span class='text-danger'>destaque</span>");        
    }

    function info4(){
        $("#info").html("Adiciona à imagem a classe <span class='text-danger'>destaque</span>");        
    }

    function info5(){
        $("#info").html("Remove da imagem a classe <span class='text-danger'>destaque</span>");        
    }

    function info6(){
        $("#info").html("Exibe a dimensão da largura da imagem");        
    }

    function info7(){
        $("#info").html("Exibe a dimensão da altura da imagem");        
    }

    function info8(){
        $("#info").html("Exibe a dimensão da largura da imagem + padding");        
    }

    function info9(){
        $("#info").html("Exibe a dimensão da largura da imagem + padding + bordas");        
    }

    function info10(){
        $("#info").html("Exibe a dimensão da largura da imagen + padding + bordas + margem após as bordas");        
    }

    function info11(){
        $("#info").html("Exibe a posição do elemento em relação ao topo da janela");        
    }

    function info12(){
        $("#info").html("Exibe a posição do elemento em relação à esquerda da janela");        
    }

    function info13(){
        $("#info").html("Exibe a altura da margem de impressão do elemento");        
    }

    function info14(){
        $("#info").html("Exibe a largura da margem de impressão do elemento");        
    }

});

