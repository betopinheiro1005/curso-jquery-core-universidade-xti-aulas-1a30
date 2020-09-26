$(document).ready(function(){
    
    $("ul").wrap("<p></p>");

    $("#bt-0").click(function(){
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);


    $("#bt-1").click(function(){
        $("#bt-1").attr("disabled", true);
        $("ul").unwrap();
    }).mouseover(info1).mouseleave(limpa_info);

    $("#bt-2").click(function(){
        $("#bt-2").attr("disabled", true);
        $("li").remove("#item-43");
    }).mouseover(info2).mouseleave(limpa_info);

    $("#bt-3").click(function(){
        $("#bt-3").attr("disabled", true);
        $("h4").remove();
    }).mouseover(info3).mouseleave(limpa_info);

    $("#bt-4").click(function(){
        $("#bt-4").attr("disabled", true);
        $("ul").empty();
    }).mouseover(info4).mouseleave(limpa_info);

    function limpa_info(){
        $("#info").html("");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

    function info1(){
        $("#info").html("Remove o parágrafo que envolve as listas");        
    }

    function info2(){
        $("#info").html("Remove o item 4 da lista 3");        
    }

    function info3(){
        $("#info").html("Remove os títulos");        
    }

    function info4(){
        $("#info").html("Limpa os itens das listas");        
    }

});

