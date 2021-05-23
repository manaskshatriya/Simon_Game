var buttonColor = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSeq();
      started = true;
    }
});

$(".btn").click(function() {
    var userChooseColor = $(this).attr("id");
    userClickedPattern.push(userChooseColor);
    playSound(userChooseColor);
    animatePress(userChooseColor);
    check(userClickedPattern.length-1)
});
 
function check(currentLevel){
    
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel])
    {
       if(userClickedPattern.length === gamePattern.length)
        {
            setTimeout(function () 
            {
                nextSeq();
             }, 1000);
        }
    }
    else
    {
        playSound("wrong");

        $("body").addClass("game-over")
        $("h1").text("Game Over, Press Any Key to Restart");
        
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}


 function nextSeq()
{
    userClickedPattern = [];
    level++;
    $("h1").text("LEVEL" + level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomColorChosen = buttonColor[randomNumber];
    gamePattern.push(randomColorChosen);

    $("#"+ randomColorChosen).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColorChosen);
}

function playSound(name)
{
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor)
{
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}

function startOver()
{
    var gamePattern = [];
    var started = false;    
    var level = 0;
}


