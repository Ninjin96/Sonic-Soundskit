// CLICKING SOUNDS
var buttonArray = document.getElementsByClassName("sound");
var arraySize = buttonArray.length;

for (let i = 0; i < arraySize; i++) {
    buttonArray[i].addEventListener("click", function() {
            makeSound(this.innerHTML);
            buttonAnimation(this.innerHTML);
        }
    );
}

// KEYPRESS SOUNDS
document.addEventListener("keydown", function(event) {
        makeSound(event.key.toLowerCase());
        buttonAnimation(event.key.toLowerCase());
    }
);

// FUNCTIONS

function makeSound(letter) {
    switch(letter) {
        case "w":
            var jumpSound = new Audio("sounds/Jump.mp3");
            jumpSound.play();
            break;
        case "a":
            var bumperSound = new Audio("sounds/Bumper.mp3");
            bumperSound.play();
            break;
        case "s":
            var spindashSound = new Audio("sounds/Spindash.mp3");
            spindashSound.play();
            break;
        case "d":
            var ringSound = new Audio("sounds/Ring.mp3");
            ringSound.play();
            break;
        case "j":
            var springSound = new Audio("sounds/Spring.mp3");
            springSound.play();
            break;
        case "k":
            var checkpointSound = new Audio("sounds/Checkpoint.mp3");
            checkpointSound.play();
            break;
        case "l":
            var chaosEmeraldSound = new Audio("sounds/ChaosEmerald.mp3");
            chaosEmeraldSound.play();
            break;
        default:
            console.log(letter);
    }
}

function buttonAnimation(letter) {
    if (letter == "w" || letter == "a" || letter == "s" || letter == "d" || letter == "j" || letter == "k" || letter == "l") { // if statement for cleaner console
        var pressedLetter = document.getElementsByClassName(letter)[0];
        pressedLetter.classList.toggle("pressed");
        
        setTimeout(function() {
            pressedLetter.classList.toggle("pressed");
            },
            100
        );
    }
}