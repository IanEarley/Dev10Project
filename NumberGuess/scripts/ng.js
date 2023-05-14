let num, input, max;
let guesses = [];

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

function trackGuesses(guess) {
    return guesses.push(guess)
}

function guessingRound() {
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
        } else if (guesses.includes(input)) {
            document.getElementById("guess").innerHTML = "You've already guessed that number!";  
            break;
        } else if (input == num) {
            trackGuesses(input);
            document.getElementById("guess").innerHTML = `You got it! Looks like it took you <b>${guesses.length}</b> guesses. (${guesses.join(", ")})`;
            guessed = true;
        } else if (input < num) {
            document.getElementById("guess").innerHTML = "Higher...";
            trackGuesses(input);
            break;
        } else if (input > num) {
            document.getElementById("guess").innerHTML = "Lower...";
            trackGuesses(input);
            break;
        }
    }
}

document.onload = generateNumber();