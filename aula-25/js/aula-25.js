$(document).ready(function(){

    $("#bt-0").click(function(){
        $("tbody tr").removeClass("destaque");
        $(".tooltip").remove();
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);


    $("#filmes thead tr th").each(function(i){
        var n = i + 1;
        var nomeColuna = $(this).text();

        $("tr td:nth-child("+ n +")").hover(function(){
            var nomeCelula = $(this).text();
            $(this).addClass("destaque").prepend("<div class='exibir_tooltip'>Coluna: " + nomeColuna + "<br />Célula: " + nomeCelula + "</div>");
            $(this).click(function(){
                $("tbody tr").removeClass("destaque");
                $(".tooltip").remove();
                $("tbody tr:contains("+ nomeCelula +")").addClass("destaque");
            });
        }, function(){
            $(this).removeClass("destaque");
            $(".exibir_tooltip").remove();
        });
    
    });

    function limpa_info(){
        $("#info").html("");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

});