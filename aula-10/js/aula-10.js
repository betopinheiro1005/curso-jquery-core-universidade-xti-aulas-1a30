$(document).ready(function(){
    $("#bt-0").click(function(){
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    $("#bt-1").click(function(){
        alert($("img").attr("title"));
    }).mouseover(info1).mouseleave(limpa_info);

    $("#bt-2").click(function(){
        $("img").attr({
            src: "img/lujan.png",
            alt: "Alimentando leão",
            title: "Alimentando leão"
        })
    }).mouseover(info2).mouseleave(limpa_info);

    $("#bt-3").click(function(){
        $("img").removeAttr("src").removeAttr("alt").removeAttr("title");
    }).mouseover(info3).mouseleave(limpa_info);

    $("#bt-4").click(function(){
        $("img").addClass("destaque");
    }).mouseover(info4).mouseleave(limpa_info);

    $("#bt-5").click(function(){
        $("img").removeClass("destaque");
    }).mouseover(info5).mouseleave(limpa_info);

    $("#bt-6").click(function(){
        alert($("img").hasClass("destaque"));
    }).mouseover(info6).mouseleave(limpa_info);

    $("#bt-7").click(function(){
        $("img").toggleClass("destaque");
    }).mouseover(info7).mouseleave(limpa_info);

    function limpa_info(){
        $("#info").html("");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

    function info1(){
        $("#info").html("Exibe o atributo <span class='text-danger'>title</span> em um <span class='text-danger'>alert</span>");        
    }

    function info2(){
        $("#info").html("Altera os atributos <span class='text-danger'>src</span>, <span class='text-danger'>alt</span> e <span class='text-danger'>title</span>");
    }

    function info3(){
        $("#info").html("Remove os atributos <span class='text-danger'>src</span>, <span class='text-danger'>alt</span> e <span class='text-danger'>title</span>");
    }

    function info4(){
        $("#info").html("Adiciona a classe <span class='text-danger'>destaque</span></span>");
    }

    function info5(){
        $("#info").html("Renove a classe <span class='text-danger'>destaque</span></span>");
    }

    function info6(){
        $("#info").html("Informa se existe ou não a classe <span class='text-danger'>destaque</span></span>");
    }

    function info7(){
        $("#info").html("Adiciona ou remove a classe <span class='text-danger'>destaque</span></span> a cada clique");
    }

});

