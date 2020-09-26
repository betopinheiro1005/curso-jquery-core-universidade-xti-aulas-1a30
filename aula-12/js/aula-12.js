$(document).ready(function(){
    $("#bt-0").click(function(){
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    $("#bt-1").click(function(){
        $("#bt-1").attr("disabled", true);
        var img = $("<img>", {
            src: "img/ricardo.png",
            title: "Filha do papai",
            click:function(){
                alert("Amo minha princesa");
            }
        });
        $("#content").append(img);
    }).mouseover(info1).mouseleave(limpa_info);

    $("#bt-2").click(function(){
        $("#bt-2").attr("disabled", true);
        var ul = $("<ul />").append($("<li />").append("Programador de interface Web"));
        $("#content").append(ul);
    }).mouseover(info2).mouseleave(limpa_info);

    function limpa_info(){
        $("#info").html("");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

    function info1(){
        $("#info").html("Inserindo um elemento <span class='text-danger'>img</span> na árvore DOM");        
    }

    function info2(){
        $("#info").html("Inserindo um elemento <span class='text-danger'>ul li</span> na árvore DOM");        
    }

});

