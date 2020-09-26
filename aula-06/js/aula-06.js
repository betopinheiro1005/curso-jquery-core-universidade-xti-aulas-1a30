$(document).ready(function(){

    $(document).ready(function(){
        $("#bt-0").click(function(){
            $("tbody tr").css("background-color", "white");
        }).mouseover(info0).mouseleave(limpa_info);
    
        $("#bt-1").click(function(){
            $("tbody tr").css("background-color", "white");
            $("tbody tr:first").css("background-color", "#ccc");
        }).mouseover(info1).mouseleave(limpa_info);

        $("#bt-2").click(function(){
            $("tbody tr").css("background-color", "white");
            $("tbody tr:last").css("background-color", "#ccc");
        }).mouseover(info2).mouseleave(limpa_info);
    
        $("#bt-3").click(function(){
            $("tbody tr").css("background-color", "white");
            $("tbody tr:not(tr:first)").css("background-color", "#ccc");
        }).mouseover(info3).mouseleave(limpa_info);
    
        $("#bt-4").click(function(){
            $("tbody tr").css("background-color", "white");
            $("tbody tr:even").css("background-color", "#ccc");
        }).mouseover(info4).mouseleave(limpa_info);

        $("#bt-5").click(function(){
            $("tbody tr").css("background-color", "white");
            $("tbody tr:odd").css("background-color", "#ccc");
        }).mouseover(info5).mouseleave(limpa_info);

        $("#bt-6").click(function(){
            $("tbody tr").css("background-color", "white");
            $("tbody tr:eq(3)").css("background-color", "#ccc");
        }).mouseover(info6).mouseleave(limpa_info);

        $("#bt-7").click(function(){
            $("tbody tr").css("background-color", "white");
            $("tbody tr:gt(3)").css("background-color", "#ccc");
        }).mouseover(info7).mouseleave(limpa_info);

        $("#bt-8").click(function(){
            $("tbody tr").css("background-color", "white");
            $("tbody tr:lt(3)").css("background-color", "#ccc");
        }).mouseover(info8).mouseleave(limpa_info);
        
        function limpa_info(){
            $("#info").html("");
        }
    
        function info0(){
            $("#info").html("Recarrega a página");        
        }
    
        function info1(){
            $("#info").html("Seleciona a primeira linha");        
        }
    
        function info2(){
            $("#info").html("Seleciona a última linha");
        }
    
        function info3(){
            $("#info").html("Seleciona todas as linhas com excessão da primeira");
        }
    
        function info4(){
            $("#info").html("Seleciona todas as linhas de índice par");
        }

        function info5(){
            $("#info").html("Seleciona todas as linhas de índice ímpar");
        }

        function info6(){
            $("#info").html("Seleciona a linha de índice 3");
        }

        function info7(){
            $("#info").html("Seleciona todas as linhas com índice maior do que 3");
        }

        function info8(){
            $("#info").html("Seleciona todas as linhas com índice menor do que 3");
        }
        
    });
    
});
