$(document).ready(function(){

    $("#bt-0").click(function(){
        $("tbody tr").removeClass("destaque");
        $(".tooltip").remove();
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    $(".toggle").change(function(){
        if(this.checked){
            $(":checkbox[name=tecnologia]").attr("checked", "checked");
        } else {
            $(":checkbox[name=tecnologia]").removeAttr("checked");
        }
    });

    $(".tudo").click(function(){
        $(":checkbox[name=tecnologia]").attr("checked", "checked");
        return false;
    });

    $(".nada").click(function(){
        $(":checkbox[name=tecnologia]").removeAttr("checked");
        return false;
    });

    function limpa_info(){
        $("#info").html("");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

});