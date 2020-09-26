$(document).ready(function(){

    $("#bt-0").click(function(){
        $("tbody tr").removeClass("destaque");
        $(".tooltip").remove();
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    $("tbody tr:not(.sub)").hide();
    $(".sub th").prepend("<img src='img/mais.png' class='maismenos' />");
    
    $("img").click(function(){
        if($(this).attr("src") == "img/menos.png"){
            $(this).attr("src", "img/mais.png").parents().siblings("tr").hide();
        } else {
            $(this).attr("src", "img/menos.png").parents().siblings("tr").show();
        }
    });

    function limpa_info(){
        $("#info").html("");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

});