$(document).ready(function(){
    $("#bt-0").click(function(){
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    $("#bt-1").click(function(){
        limpaBorda();
        $(":input").css("border", "1px solid red");
    }).mouseover(info1).mouseleave(limpa_info);

    $("#bt-2").click(function(){
        limpaBorda();
        $(":button").css("border", "1px solid red");
    }).mouseover(info2).mouseleave(limpa_info);

    $("#bt-3").click(function(){
        limpaBorda();
        $(":text").css("border", "1px solid red");
    }).mouseover(info3).mouseleave(limpa_info);

    $("#bt-4").click(function(){
        limpaBorda();
        $(":password").css("border", "1px solid red");
    }).mouseover(info4).mouseleave(limpa_info);

    $("#bt-5").click(function(){
        $(":input").css("border", "1px solid #ccc");
        $(":checkbox").parent().css("border", "none");
        $(":radio").parent().css("border", "1px solid red");
    }).mouseover(info5).mouseleave(limpa_info);

    $("#bt-6").click(function(){
        $(":input").css("border", "1px solid #ccc");
        $(":radio").parent().css("border", "none");
        $(":checkbox").parent().css("border", "1px solid red");
    }).mouseover(info6).mouseleave(limpa_info);

    $("#bt-7").click(function(){
        limpaBorda();
        $("select").css("border", "1px solid red");
    }).mouseover(info7).mouseleave(limpa_info);

    $("#bt-8").click(function(){
        limpaBorda();
        $("textarea").css("border", "1px solid red");
    }).mouseover(info8).mouseleave(limpa_info);

    $("#bt-9").click(function(){
        limpaBorda();
        $(":submit").css("border", "1px solid red");
    }).mouseover(info9).mouseleave(limpa_info);

    $("#bt-10").click(function(){
        limpaBorda();
        $(":reset").css("border", "1px solid red");
    }).mouseover(info10).mouseleave(limpa_info);

    $("#bt-11").click(function(){
        limpaBorda();
        $(":file").css("border", "1px solid red");
    }).mouseover(info11).mouseleave(limpa_info);

    $("#bt-12").click(function(){
        limpaBorda();
        $(":enabled").css("border", "1px solid red");
    }).mouseover(info12).mouseleave(limpa_info);

    $("#bt-13").click(function(){
        limpaBorda();
        $(":disabled").css("border", "1px solid red");
    }).mouseover(info13).mouseleave(limpa_info);

    $("#bt-14").click(function(){
        limpaBorda();
        $(":checked").parent().css("border", "1px solid red");
    }).mouseover(info14).mouseleave(limpa_info);

    $("#bt-15").click(function(){
        limpaBorda();
        $(":selected").parent().css("border", "1px solid red");
    }).mouseover(info15).mouseleave(limpa_info);

    function limpa_info(){
        $("#info").html("");
    }

    function limpaBorda(){
        $(":input").css("border", "1px solid #ccc");
        $(":checkbox").parent().css("border", "none");
        $(":radio").parent().css("border", "none");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

    function info1(){
        $("#info").html("Seleciona elementos do tipo <span class='text-danger'>input</span>");        
    }

    function info2(){
        $("#info").html("Seleciona elementos do tipo <span class='text-danger'>button</span>");
    }

    function info3(){
        $("#info").html("Seleciona elementos do tipo <span class='text-danger'>input text</span>");
    }

    function info4(){
        $("#info").html("Seleciona elementos do tipo <span class='text-danger'>input password</span>");
    }

    function info5(){
        $("#info").html("Seleciona elementos do tipo <span class='text-danger'>radio</span>");
    }

    function info6(){
        $("#info").html("Seleciona elementos do tipo <span class='text-danger'>checkbox</span>");
    }

    function info7(){
        $("#info").html("Seleciona elementos do tipo <span class='text-danger'>select</span>");
    }

    function info8(){
        $("#info").html("Seleciona elementos do tipo <span class='text-danger'>textarea</span>");
    }

    function info9(){
        $("#info").html("Seleciona elementos do tipo <span class='text-danger'>submit</span>");
    }

    function info10(){
        $("#info").html("Seleciona elementos do tipo <span class='text-danger'>reset</span>");
    }

    function info11(){
        $("#info").html("Seleciona elementos do tipo <span class='text-danger'>file</span>");
    }

    function info12(){
        $("#info").html("Seleciona elementos que estão habilitados <span class='text-danger'>enabled</span>");
    }

    function info13(){
        $("#info").html("Seleciona elementos que estão desabilitados <span class='text-danger'>disabled</span>");
    }

    function info14(){
        $("#info").html("Seleciona elementos que estão checados <span class='text-danger'>checked</span>");
    }

    function info15(){
        $("#info").html("Seleciona elementos que estão selecionados <span class='text-danger'>selected</span>");
    }

});

