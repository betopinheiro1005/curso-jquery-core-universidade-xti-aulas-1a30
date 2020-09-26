$(document).ready(function(){

    $("#filmes thead tr th").not("th:first-child").prepend("<span> + </span>").css("cursor", "pointer");

    $("#filmes thead tr th").each(function(i){
        var n = i - 1;
        
        $(this).click(function(){
            $("td").removeClass("destaque");
            $(this).parents("thead").siblings("tbody").children("tr").each(function(){
                $(this).children("td:eq("+n+")").addClass('destaque');
            });
        });
    });

});