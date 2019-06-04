// Create the variables for letters guesses, letters left and number of wins
var lettersGuessed = [];
var guessesLeft = 10;
var wins = 0;

// Create a var for computer to generate a random letter

var computerGuess =
    String.fromCharCode(Math.random(Math.random() * 26));

// Log the computers guess
console.log(computerGuess);

// create function to capture the users input in lower case

document.onkeydown = function(event) {
    var keyPress =
        (String.fromCharCode(event.keyCode)).toLowerCase();

    // document.getElementById('guess').innerHTML = "keyPress";
    addLetter(keyPress);
}

// create a function to notify the user if the letter has already been used

function addLetter(userKeypress) {

    var usedGuess = lettersGuessed.some(function(item) {
        return item === userKeypress;
    })

    // alert user that the guess has been used

    if (usedGuess) {
        alert(userKeypress + "This letter has been already used, Please try again!");
    } else {
        lettersGuessed.push(userKeypress);
        console.log(lettersGuessed);

        // show the users input in the browser
        showLettersGuessed();
        // check if users guess matches the computers
        guessMatch(userKeypress);
    }
}

// create function to show the guessed letters

function showLettersGuessed() {
    var usedString = lettersGuessed.join(", ");
    document.getElementById("playerGuesses").innerHTML = usedString;
}


function guessMatch(character) {
    console.log(character);
    console.log(computerGuess);

    if (character === computerGuess) {
        alert("You Won!!");
        wins = wins + 1;
        showWins();
    } else if (guessesLeft === 0) {
        alert("Too Bad!!! Try again");
        resetVariables();
    } else {
        guessesLeft = guessesLeft - 1;
        showRemainingGuesses();
    }
}

// create a function to show the wins

function showWins() {
    document.getElementById("numWins").innerHTML = wins;
}

// create a funtion to show remaining guesses
function showRemainingGuesses() {
    document.getElementById("numGuesses").innerHTML = guessesLeft;
}

// reset variables

function resetVariables() {
    lettersGuessed = [];
    guessesLeft = 10;
}

function start() {
    showRemainingGuesses();
    showWins;
}

// startGame();











// create function to show guesses remaining