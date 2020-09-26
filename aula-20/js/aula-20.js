$(document).ready(function(){

    $("#bt-0").click(function(){
        limpa_campos();
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    $("#bt-1").click(function(){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");
        $("#message").fadeOut(1000);
    }).mouseover(info1).mouseleave(limpa_info);

    $("#bt-2").click(function(){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");
        $("#message").fadeIn(1000);
    }).mouseover(info2).mouseleave(limpa_info);

    $("#bt-3").click(function(){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");
        $("#message").fadeTo(1000, 0.4);
    }).mouseover(info3).mouseleave(limpa_info);

    $("#bt-4").click(function(){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");
        $("#message").fadeTo(1000, 1);
    }).mouseover(info4).mouseleave(limpa_info);

    $("#bt-5").click(function(){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");
        $("#message").fadeToggle(1000);
    }).mouseover(info5).mouseleave(limpa_info);
    
    $("#bt-6").click(function(){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");
        $("#message").slideUp(1000);
    }).mouseover(info6).mouseleave(limpa_info);

    $("#bt-7").click(function(){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");
        $("#message").slideDown(1000);
    }).mouseover(info7).mouseleave(limpa_info);

    $("#bt-8").click(function(){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");
        $("#message").slideToggle(1000);
    }).mouseover(info8).mouseleave(limpa_info);

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
        $("#info").html("A mensagem, depois de 1 segundo, fica transparente (0% de opacidade)");        
    }

    function info2(){
        $("#info").html("A mensagem, depois de 1 segundo, fica opaca (100% de opacidade)");        
    }

    function info3(){
        $("#info").html("A mensagem, depois de 1 segundo, fica com 40% de opacidade");        
    }

    function info4(){
        $("#info").html("A mensagem, depois de 1 segundo, fica opaca (100% de opacidade)");        
    }

    function info5(){
        $("#info").html("A mensagem, depois de 1 segundo, alterna entre opaca e transparente");        
    }

    function info6(){
        $("#info").html("A mensagem fecha, de baixo para cima, depois de 1 segundo");        
    }

    function info7(){
        $("#info").html("A mensagem abre, de cima para baixo, depois de 1 segundo");        
    }

    function info8(){
        $("#info").html("A mensagem alterna, entre fechar e abrir, depois de 1 segundo");        
    }

});




