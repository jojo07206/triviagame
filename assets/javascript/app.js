var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timeleft = 30;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {

    timeleft--;

    $('#timerdiv').html(timeleft + " seconds left");

    if (timeleft === 0) {

      stop();
      $("#timerdiv").hide();
      $("#buttondiv").hide();    
      $("#questions").hide();
      $("#finishpage").show();
      $("#correct").html("Correct: " + correct);
      $("#incorrect").html("Incorrect: " + incorrect);
      $("#unanswered").html("Unaswered: " + unanswered);
    }
  }

function stop() {

    clearInterval(intervalId);
  };

    $("#questions").hide();
    $("#timerdiv").hide();
    $("#finishpage").hide();

    $("#start").on("click", function(){
        run();
        ($("#finishpage").show(), 30000);
        $("#timerdiv").show();
        $("#finishpage").hide();
        $("#buttondiv").hide();
        $("#questions").show();    

    });

    $("input").on("click", function(){        
    var answer1 = $("input[name=q1]:checked").val();
    console.log(answer1);
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
