$(document).ready(function(){
    $("#bt-0").click(function(){
        $("#info").html("");
        $("a").css("background-color", "white");
    }).mouseover(info0).mouseleave(limpa_info);

    $("#bt-1").click(function(){
        $("a").css("background-color", "white");
        $("a[name]").css("background-color", "#ccc");
    }).mouseover(info1).mouseleave(limpa_info);

    $("#bt-2").click(function(){
        $("a").css("background-color", "white");
        $("a[name=menu]").css("background-color", "#ccc");
    }).mouseover(info2).mouseleave(limpa_info);

    $("#bt-3").click(function(){
        $("a").css("background-color", "white");
        $("a[href*=min]").css("background-color", "#ccc");
    }).mouseover(info3).mouseleave(limpa_info);

    $("#bt-4").click(function(){
        $("a").css("background-color", "white");
        $("a[href$=br]").css("background-color", "#ccc");
    }).mouseover(info4).mouseleave(limpa_info);

    $("#bt-5").click(function(){
        $("a").css("background-color", "white");
        $("a[href^=https]").css("background-color", "#ccc");
    }).mouseover(info5).mouseleave(limpa_info);

    $("#bt-6").click(function(){
        $("a").css("background-color", "white");
        $("a[name!=menu]").css("background-color", "#ccc");
    }).mouseover(info6).mouseleave(limpa_info);

    function limpa_info(){
        $("#info").html("");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

    function info1(){
        $("#info").html("Seleciona links que contenham o atributo <span class='text-danger'>name</span>");        
    }

    function info2(){
        $("#info").html("Seleciona link com o atributo <span class='text-danger'>name=menu</span>");
    }

    function info3(){
        $("#info").html("Seleciona links com <span class='text-danger'>href</span> que contenham a string <span class='text-danger'>min</span>");
    }

    function info4(){
        $("#info").html("Seleciona links com atributos <span class='text-danger'>href</span> que terminam em <span class='text-danger'>br</span>");
    }

    function info5(){
        $("#info").html("Seleciona links com atributos <span class='text-danger'>href</span> que inciam em <span class='text-danger'>https</span>");
    }

    function info6(){
        $("#info").html("Seleciona links que não contenham o atributo <span class='text-danger'>name=menu</span>");
    }

});
