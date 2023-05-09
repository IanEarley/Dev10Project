console.log("Hello, world!");

function countLetters (str, letter) {
    let lettersFound = 0;
    let placeHolder = -1;
    for (n = 0; n < str.length; n++) {
        if (str.indexOf(letter, placeHolder + 1) != -1) {
            placeHolder = str.indexOf(letter, placeHolder + 1);
            lettersFound++;
        } else {
            break
        }
    }
    console.log ("There are " + lettersFound + " \'" + letter + "\'s in your sentence.")
    return lettersFound;
}