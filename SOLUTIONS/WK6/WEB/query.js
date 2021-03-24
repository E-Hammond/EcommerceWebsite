

$(document).ready(function () {
    $(".sizes #2T").click(function(){
        $("#select-size").text("2T");
        $("#product-img").css({"width":"300px","height":"300px"})
    });
    $(".sizes #3T").click(function(){
        $("#select-size").text("3T");
        $("#product-img").css({"width":"350px","height":"350px"})
    }); 
    $(".sizes #4T").click(function(){
        $("#select-size").text("4T");
        $("#product-img").css({"width":"400px","height":"400px"})
    });  
    $(".sizes #5").click(function(){
        $("#select-size").text("5");
        $("#product-img").css({"width":"450px","height":"450px"})
    });
    $(".sizes #6").click(function(){
        $("#select-size").text("6");
        $("#product-img").css({"width":"500px","height":"500px"})
    });
    $(".sizes #7").click(function(){
        $("#select-size").text("7");
        $("#product-img").css({"width":"550px","height":"550px"})
    });
    $(".sizes #S").click(function(){
        $("#select-size").text("S");
        $("#product-img").css({"width":"600px","height":"600px"})
    });
    $(".sizes #M").click(function(){
        $("#select-size").text("M");
        $("#product-img").css({"width":"650px","height":"650px"})
    });
    $(".sizes #L").click(function(){
        $("#select-size").text("L");
        $("#product-img").css({"width":"700px","height":"700px"})
    });       
    $(".sizes #XL").click(function(){
        $("#select-size").text("XL");
        $("#product-img").css({"width":"750px","height":"750px"})
    });
    $("#firstbutton").click(function(){
        $("#img").attr("src","images/jacket.jpg")
        $("#p1").text("Boys' Stillwater Sherpa 1/4-Zip")
        $("#p2").text("Style: 3K001154 | Color: Camel | Size: Medium")
    });
});




$(document).ready(function(){
    $("#firstbutton").click(function(){
        $(this).attr("href","http://127.0.0.1:5500/SOLUTIONS/WK6/WEB/index1.html")
        $("#img").attr("src","images/boyJacket.jpg")
        $("#p1").text("Boys' Stillwater Sherpa 1/4-Zip")
        $("#p2").text("Style: 3K001154 | Color: Camel | Size: Medium")
    });
});