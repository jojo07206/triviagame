var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timeleft = 30;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    correct = 0;
    incorrect = 0;
    unanswered = 0;
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
    var answer2 = $("input[name=q2]:checked").val();
    var answer3 = $("input[name=q3]:checked").val();

    if (answer1 == 2){
      correct++;
    } else if (answer1 == 1) {
      incorrect++;
    } else if (answer1 == 3) {
      incorrect++;
    } else if (answer1 == null) {
      unanswered++;
    };

    if (answer2 == 4){
      correct++;
    } else if (answer2 == 5) {
      incorrect++;
    } else if (answer2 == 6) {
      incorrect++;
    } else if (answer2 == null) {
      unanswered++;
    };

    if (answer3 == 6){
      correct++;
    } else if (answer3 == 7) {
      incorrect++;
    } else if (answer3 == 8) {
      incorrect++;
    } else if (answer3 == null) {
      unanswered++;
    };

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
