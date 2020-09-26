$(document).ready(function(){
    $("#link1").click(function(){
        $("*").css("color", "blue");
    });

    $("#link2").click(function(){
        $("#titulo1").css("color", "red");
    });

    $("#link3").click(function(){
        $(".titulo2").css("color", "green");
    });

    $("#link4").click(function(){
        $("h3").css("color", "brown");
    });

    $("#link5").click(function(){
        $("h1, h3").css("background-color", "yellow");
    });
    
});
