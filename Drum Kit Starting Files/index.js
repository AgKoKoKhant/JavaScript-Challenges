
//Decting Button press

var numberofDrumButtons = document.querySelectorAll(".drum").length;
for (var i= 0 ; i < numberofDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonInnerHtml = this.innerHTML; 
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
        
    });
}
// detecting keyboard press
document.addEventListener("keydown", function(event) { 

    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key)
{
    switch (key) {
        case "w":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;

        case "a":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;

        case "d":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
            
        case "j":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break; 

        case "k":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break; 

        case "l":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;  

        default: console.log(key); 
    }
}


    // function Audio(fileLocation)
    // {
    //     this.fileLocation = fileLocation;
    //     this.play = function(){
    //         //tap into audio hardware
    //         //check the file at fileLocation exists
    //         //check the file at fileLocation is a sound file
    //         //Play the file at fileLocation
    //     }
    // } 

    
    //    // Create a new Audio object
    //    var sound = new Audio('./sounds/crash.mp3');
    //    // Play the sound
    //    sound.play();

    
function buttonAnimation(currentKey){

    var  activebutton = document.querySelector("."+currentKey);
    activebutton.classList.add("pressed");

    setTimeout(() => {
        activebutton.classList.remove("pressed");
    }, 100);

}






