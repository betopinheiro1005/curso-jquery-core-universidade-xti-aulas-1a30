$(document).ready(function(){
    
    $(":text").keyup(teclado_keyup).focus(event_focus).blur(event_blur);
    $("form").submit(event_submit);
    $("select").change(event_change);
    $("textarea").select(event_select);

    $("#bt-0").click(function(){
        $(":text").val("");
        $("textarea").val("");
        $("#message").text("");
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    $(":text").keyup(teclado_keyup);

    $("#bt-1").click(function(){
    }).mouseover(info1).mouseleave(limpa_info);

    $("#bt-2").click(function(){
    }).mouseover(info2).mouseleave(limpa_info);

    $("#bt-3").click(function(){
    }).mouseover(info3).mouseleave(limpa_info);

    $("#bt-4").click(function(){
    }).mouseover(info4).mouseleave(limpa_info);

    function teclado_keyup(){
        $("#message").text($(this).val());
    }

    function event_focus(){
        $(this).css("background-color", "yellow");
    }

    function event_blur(){
        $(this).css("background-color", "white");
    }

    function event_submit(){
        if( ($(":text").val() != "") && ($("textarea").val() != "") ){
            alert("Formulário submetido!");
        } else {
            return false;
        }
    }

    function event_change(){
        var escolha = $("option:selected").text();
        $("#message").text("Escolhido: " + escolha);
    }

    function event_select(){
        $("#message").text("Selecionado texto no campo Comentário!");
    }

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




