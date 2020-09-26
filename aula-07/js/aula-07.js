$(document).ready(function(){

    $(document).ready(function(){
        $("#bt-0").click(function(){
            $("tr td").css("background-color", "white");
        }).mouseover(info0).mouseleave(limpa_info);
    
        $("#bt-1").click(function(){
            $("tr td").css("background-color", "white");
            $("td:contains(Comédia)").css("background-color", "#ccc");
        }).mouseover(info1).mouseleave(limpa_info);
    
        $("#bt-2").click(function(){
            $("tr td").css("background-color", "white");
            $("td:empty").css("background-color", "#ccc");
        }).mouseover(info2).mouseleave(limpa_info);
    
        $("#bt-3").click(function(){
            $("tr td").css("background-color", "white");
            $("td:not(td:empty)").css("background-color", "#ccc");
        }).mouseover(info3).mouseleave(limpa_info);
    
        $("#bt-4").click(function(){
            $("tr td").css("background-color", "white");
            $("td:has(strong)").css("background-color", "#ccc");
        }).mouseover(info4).mouseleave(limpa_info);
    
        function limpa_info(){
            $("#info").html("");
        }
    
        function info0(){
            $("#info").html("Recarrega a página");        
        }
    
        function info1(){
            $("#info").html("Seleciona células que contenham o texto <span class='text-danger'>Comédia</span>");        
        }
    
        function info2(){
            $("#info").html("Seleciona células vazias");
        }
    
        function info3(){
            $("#info").html("Seleciona células não vazias");
        }
    
        function info4(){
            $("#info").html("Seleciona células com texto em negrito");
        }
    
    });

});
