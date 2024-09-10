$("document").ready(function(){

    function func1() {
        $("#img1").fadeToggle(2000);
    }

    function func2() {
        $("div").css("background-color","red");
        $("#id").css("font-style","italic");
        $(".class").css("font-size","20px");
        $("#div1, #div2").css("background-color","green");
        $("#div1, li").css("background-color","green");
        $("div > p").fadeToggle();
        $("p:first").fadeToggle();
        $("li:odd").fadeToggle();
    }

    $("button").click(func3);
    function func3() {
        $("#img1").css("width","500px");
    }
    $("button").click(function(){
        $("#img1").css("width","500px");
    });
    $("button").dblclick(function(){
        $("#img1").css("width","500px");
    });

    $("#img1").mouseenter(function(){
        $("#img1").css("width","500px");
    });
    $("#img1").mouseleave(function(){
        $("#img1").css("width","250px");
    });
    $("#img1").hover(function(){
        $("#img1").css("width","500px");
    });

    $("#btn1").click(function() {
        $("#img1").hide(2000);
    })
    $("#btn2").click(function() {
        $("#img1").show(2000);
    })
    $("#btn3").click(function() {
        $("#img1").toggle(3000);
    })
    $("#btn4").click(function() {
        $("#img1").fadeIn(2000);
    })
    $("#btn5").click(function() {
        $("#img1").fadeOut(2000);
    })
    $("#btn6").click(function() {
        $("#img1").fadeToggle(3000);
    })
    $("#btn7").click(function() {
        $("#img1").slideUp(2000);
    })
    $("#btn8").click(function() {
        $("#img1").slideDown(2000);
    })
    $("#btn9").click(function() {
        $("#img1").slideToggle(3000);
    })
    $("#btn10").click(function() {
        $("#img1").stop();
    })
    $("#btn11").click(function() {
        $("#img1").animate({
            left: '150px'
        },2000);
    })
    

    $("#btn12").click(function() {
            $("#img1").animate({
                left: '150px',
                height: '100px'
            },2000, function(){
                alert("animated");
            });
        })

    $("#btm12").click(function(){
        $("#img1").slideUp(2000,function(){
            $("#img1").slideDown();
        })
    })

    $(".div").click(function(){
        var x = $(".p").html();
        $("#span").text(x);
    })

    $("#btn").click(function(){
        alert("hello");
        $(".div").append("abc");
        $(".div").prepend("abc");
        $(".div").before("abc");
        $(".div").after("abc");
        $(".div").remove();
        $(".div").empty();
    })

    $("#date").datepicker({
        showOtherMonths: true
    });
    $("#date").tooltip();
    $("#date").accordion();
    $("#date").dialog();
    $("#date").autocomplete();

    $("#date").draggable();
    $("#date").sortable();
    $("#date").resizeable();
});