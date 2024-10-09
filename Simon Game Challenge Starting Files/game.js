let buttonColours  = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("level "+level);
        nextSequence();
        started = true;
    }
});

$(".btn").on("click",function(){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    console.log("User Clicked: "+ userChosenColor);

    playSound(userChosenColor); 
    animatePress(userChosenColor);
 
    checkAnswer(userClickedPattern.length -1) ;
    //console.log(userClickedPattern.length -1);
});


function checkAnswer(currentLevel){
    console.log("Game Pattern:", gamePattern)
    console.log("User Clicked Pattern: ", userClickedPattern);
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("Success");

        if(userClickedPattern.length === gamePattern.length){
            console.log("User Completed the sequence");

            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }
    else{
        console.log("Wrong"); 
        var audio = new Audio("sounds/wrong.mp3");
        audio.play(); 
        $("#level-title").text("Game Over, Press Any Key to Restart");

        $("body").addClass("game-over");  // Add the class

        setTimeout(function() {
        $("body").removeClass("game-over");  // Remove the class after 200ms
        }, 200);
        
        startover();
    }
}


function nextSequence(){
    userClickedPattern = []; 
    level++;
    $("#level-title").text("Level  "+ level);

    let randomChosenColour = buttonColours[getRandomNumber()];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour); 
}

function getRandomNumber() {
    return Math.floor(Math.random() * 4);
}

// Function to play sound
function playSound(color){
    var audio = new Audio("sounds/" + color +".mp3" );
    audio.play();
}


// Function to animate the button press
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");  // Add the pressed class

    // Remove the pressed class after 100 milliseconds
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function startover() {
    level = 0;
    gamePattern = [];
    started = false;
}


