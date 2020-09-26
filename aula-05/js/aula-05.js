$(document).ready(function(){
    // Descendente (span é descendente indireto de div)
    $("div span").css("background-color", "yellow")

    // Filhos do elemento (buscando ul filha de li)
    $("li > ul").css("color", "red")

    // Irmão do elemento (do lado)
     $("#item1_1 + li").css("color", "blue")

    // Irmãos do elemento (todos)
    $("#item2_1 ~ li").css("color", "green")
});
