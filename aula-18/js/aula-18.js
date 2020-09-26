$(document).ready(function(){

    $("#bt-0").click(function(){
        limpa_campos();
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    $("#bt-1").click(function(){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");
        $(":text").bind("keyup", event_keyup);
    }).mouseover(info1).mouseleave(limpa_info);

    $("#bt-2").click(function(){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");
        $(":text").unbind("keyup", event_keyup);
    }).mouseover(info2).mouseleave(limpa_info);

    $("#bt-3").click(function(){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");

        $(":text").val("Texto incluído via jQuery");
        $(":text").trigger("focus");
        $(":text").bind("keyup", event_keyup);
        $(":text").trigger("keyup").unbind("keyup", event_keyup);
    }).mouseover(info3).mouseleave(limpa_info);

    $("#bt-4").click(function(){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");

        $("form").delegate(":text", "keyup", event_keyup);
        $("form").prepend("Text2:<input id='text2' type='text' size='42' class='form-control mb-2 mt-2' />");
    }).mouseover(info4).mouseleave(limpa_info);

    $("#bt-5").click(function(){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");

        $("form").undelegate(":text", "keyup", event_keyup);
    }).mouseover(info5).mouseleave(limpa_info);

    $("#bt-6").click(function(e, src="img/ricardo.png", width="120px"){
        $("button").attr('class', "btn btn-primary btn-sm");
        $(this).attr('class', "btn btn-success btn-sm");

        $(":text").val("");
        $("#message").text("").append($("<img />").attr("src", src).css({
            "width": width,
            "display": "block",
            "margin": "0 auto"
        }));
    }).mouseleave(limpa_info);

    function limpa_campos(){
        $(":text").val("");
        $("textarea").val("");
        $("#message").text("");
    }

    function msg(e){
        $("#message").text($(this).val());
    }

    function event_keyup(){
        $("#message").text($(this).val());
    }

    function event_focus(){
        $(this).css("background-color", "yellow");
    }

    function event_blur(){
        $(this).css("background-color", "white");
    }

    function event_submit(){
        if( ($(":text").val() != "") && ($("textarea").val() != "") ){
            alert("Formulário submetido!");
        } else {
            return false;
        }
    }

    function event_change(){
        var escolha = $("option:selected").text();
        $("#message").text("Escolhido: " + escolha);
    }

    function event_select(){
        $("#message").text("Selecionado texto no campo Comentário!");
    }

    function limpa_info(){
        $("#info").html("");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

    function info1(){
        $("#info").html("Ativa a função <span class='text-danger'>keyup()</span> no campo do tipo <span class='text-danger'>input text</span>");        
    }

    function info2(){
        $("#info").html("Desativa a função <span class='text-danger'>keyup()</span> no campo do tipo <span class='text-danger'>input text</span>");        
    }

    function info3(){
        $("#info").html("Insere uma mensagem nos campos do tipo <span class='text-danger'>input text</span> e <span class='text-danger'>textarea</span> usando a função <span class='text-danger'>trigger()</span>");        
    }

    function info4(){
        $("#info").html("Cria um novo campo de texto e vincula a função <span class='text-danger'>keyup</span> aos campos do tipo <span class='text-danger'>input text</span>, usando a função <span class='text-danger'>delegate()</span>");        
    }

    function info5(){
        $("#info").html("Desvincula a função <span class='text-danger'>keyup</span> nos campos <span class='text-danger'>input text</span>, usando a função <span class='text-danger'>undelegate()</span>");        
    }

});




