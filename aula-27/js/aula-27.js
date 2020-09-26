$(document).ready(function(){

    $("#bt-0").click(function(){
        $("tbody tr").removeClass("destaque");
        $(".tooltip").remove();
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    $(":input + span").css({
        border: "1px solid black",
        padding: "2px 4px",
        background: "#DDD",
        display: "none",
        marginLeft: "10px"
    });

    $(":input").focus(function(){
        $(this).next().fadeIn(1500);
    }).blur(function(){
        $(this).next().fadeOut(1500);
    });

    function limpa_info(){
        $("#info").html("");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

});