var correct = 0;
var incorrect = 0;
var unanswered = 0;

var timeleft = 30;

function countdown(){
    noCanvas();
    var timer = select('#timerdiv');
    timer.html(timeleft);

    function timeIt(){
        timeleft--;
        timer.html(timeleft);
    }
setInterval(timeIt,1000);
}

    $("#questions").hide();
    $("#timerdiv").hide();

    var finishpage = function(){
    $("#triviadiv").html("<h2>" + "ALL DONE!!!" + "<h2>" + 
    "<h3>" + "Correct: " + correct + "</h3>" + 
    "<h3>" + "incorrect: " + incorrect + "</h3>" + 
    "<h3>" + "unanswered: " + unanswered + "</h3>");
    }

    $("#start").on("click", function(){

        setTimeout(finishpage, 30000);

        $("#timerdiv").show();  
        $("#buttondiv").hide();
        $("#questions").show();

        $("input").on("click", function(){
            $('#radio').attr("checked", "checked");
        });



    });

    $("#submit").on("click", function(){
        clearTimeout();
        $("#questions").hide();
        $("#triviadiv").html(finishpage);

    });
