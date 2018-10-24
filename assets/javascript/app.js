var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timeleft = 3;

function countdown(){
    var timer = $('#timerdiv');
    timer.html(timeleft + " seconds left");

    function timeIt(){
        timeleft--;
        timer.html(timeleft + " seconds left");
    }
setInterval(timeIt,1000);
};

    $("#questions").hide();
    $("#timerdiv").hide();
    $("#finishpage").hide();

    $("#start").on("click", function(){
        countdown();

        if (timeleft == 0){
            time = true;
            clearInterval(timeIt);
            $("#finishpage").show();
        };

        ($("#finishpage").show(), 3000);
        $("#timerdiv").show();
        $("#finishpage").hide();
        $("#buttondiv").hide();
        $("#questions").show();        

        $("#input").on("click", function(){
            $("#radio").attr("checked", "checked");
        });

    });

    $("#submit").on("click", function(event){
        event.preventDefault();
        $("#finishpage").show();
        $("#questions").hide();
        $("#timerdiv").hide();
        $("#correct").html("Correct: " + correct);
        $("#incorrect").html("Incorrect: " + incorrect);
        $("#unanswered").html("Unaswered: " + unanswered);
    });
