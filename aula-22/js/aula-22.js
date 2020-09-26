$(document).ready(function(){

    $("#bt-0").click(function(){
        limpa_campos();
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    $("#bt-1").click(function(){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");
        remove_zebras();
        $("#filmes tbody tr:odd").addClass("impar");
    }).mouseover(info1).mouseleave(limpa_info);

    $("#bt-2").click(function(){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");
        remove_zebras();
        $("#filmes tbody tr:even").addClass("par");
    }).mouseover(info2).mouseleave(limpa_info);

    $("#bt-3").click(function(){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");
        remove_zebras();
        $("#filmes tbody tr:nth-child(4n-1)").addClass("impar");
        $("#filmes tbody tr:nth-child(4n)").addClass("impar");
    }).mouseover(info3).mouseleave(limpa_info);

    function limpa_campos(){
        $(":text").val("");
        $("textarea").val("");
        $("#message").text("");
    }

    function limpa_info(){
        $("#info").html("");
    }

    function remove_zebras(){
        $("#filmes tbody tr:even").removeClass("par");
        $("#filmes tbody tr:odd").removeClass("impar");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

    function info1(){
        $("#info").html("Zebrar a tabela com linhas de indice ímpar");        
    }

    function info2(){
        $("#info").html("Zebrar a tabela com linhas de índice par");        
    }

    function info3(){
        $("#info").html("Zebrar a tabela de duas em duas linhas");        
    }

});




