$(document).ready(function(){

    $("#filmes tbody tr").mouseover(function(){
        $(this).addClass("destaque");
    });

    $("#filmes tbody tr").mouseout(function()
        {$(this).removeClass("destaque");
    });

});