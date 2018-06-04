// Variables
var wordOptions = ["russian"];

var wordChoice = wordOptions[Math.floor(Math.random() * wordOptions.length)];
var wins = 0;
var guessesLeft = 12;
var guesses = [];

// Functions
function resetGuesses() {
    guessesLeft = 12;
    guesses = [];
};

// Main Program
document.onkeyup = function(event) {

    var letter = event.key.toLowerCase();
    


    var placeholder = [];
    for (var i = 0; i < wordChoice.length; i++) {
     placeholder[i] = "_";
    };
    var remainingLetters = wordChoice.length;

    console.log(guesses.push(letter));
    console.log(guessesLeft --);

    // if (remainingLetters === 0) {
    //     wins ++;
    //     resetGuesses();
    //     alert("You Win!");
    // }

    // if (guessesLeft === 0) {
    //     resetGuesses();
    //     alert("Better luck next time.");
    // }

    var html =
        "<p>Wins: " + wins + "</p>" +
        "<h3>Current Word: " + placeholder + "</h3>"
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Guesses so far: " + guesses + "</p>";

    document.querySelector("#game").innerHTML = html;
};