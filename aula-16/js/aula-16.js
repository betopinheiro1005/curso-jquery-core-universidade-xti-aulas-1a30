$(document).ready(function(){
    $("#bt-0").click(function(){
        location.reload();
    }).mouseover(info0).mouseleave(limpa_info);

    $("#event1").click(mouse_click).dblclick(mouse_dblclick).mouseover(mouse_over).mouseout(mouse_out);
    $("#event2").mouseup(mouse_up).mousedown(mouse_down).mousemove(mouse_move);

    function limpa_info(){
        $("#info").html("");
    }

    function info0(){
        $("#info").html("Recarrega a página");        
    }

    function mouse_click(){
        $("#message1").html("Click").css("color", "blue");
    }

    function mouse_dblclick(){
        $("#message1").html("Duplo Click").css("color", "brown");
    }

    function mouse_over(){
        $("#event1").css("cursor", "pointer");
        $("#message1").html("Mouse sobre o elemento").css("color", "green");
    }

    function mouse_out(){
        $("#message1").html("Mouse fora do elemento").css("color", "red");
    }

    function mouse_up(){
        $("#message2").html("Botão do mouse foi solto").css("color", "green");
    }

    function mouse_down(){
        $("#message2").html("Botão do mouse sendo pressionado").css("color", "red");
    }

    function mouse_move(p){
        $("#event2").css("cursor", "pointer");
        $("#message2").html("X = " + p.clientX + "  |  Y = " + p.clientY).css("color", "black");
    }


});



