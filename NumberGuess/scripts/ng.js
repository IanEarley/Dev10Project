let num, input, max
function generateNumber () {
    let valid_input = false;

        while(!valid_input) {
            max = Math.round(window.prompt("The number will be between one and...?"));

            if (!isNaN(max)) {
                valid_input = true;
            }
        }
    document.getElementById("range").innerHTML = `I'm thinking of a number between 1 and ${max}...`
    return num = Math.floor(Math.random()*max) + 1;
}

function guessingRound(){
    let guessed = false;
    while (guessed == false) {
        input = Math.floor(Number(document.getElementById("uGuess").value));  
        guessed = true;
        if (isNaN(input)) {
                document.getElementById("guess").innerHTML = "Please enter a valid response!";
                break;
        } else if (input > max || input <= 0) {
            document.getElementById("guess").innerHTML = "That number is outside of the range!";  
            break;
        } else if (input == num) {
                document.getElementById("guess").innerHTML = "You got it!";
                guessed = true;
        } else if (input < num) {
                document.getElementById("guess").innerHTML = "Higher...";
                break;
        } else if (input > num) {
                document.getElementById("guess").innerHTML = "Lower...";
                break;
        }
    }
}

document.onload = generateNumber();