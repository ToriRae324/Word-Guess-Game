// Variables
var wordOptions = ["russian" , "farsi" , "swedish" , "german" , "italian" , "greek" , "chinese" , "japanese"];
var currentWordIndex;
var currentWord = [];

var wins = 0;
var guessesLeft = 12;
var guesses = [];

var gameOver = false;

// Functions
function newGame() {
    currentWordIndex = Math.floor(Math.random() * wordOptions.length);
    currentWord = [];

    guessesLeft = 12;
    guesses = [];
    
    for (var i = 0; i < wordOptions[currentWordIndex].length; i++) {
     currentWord.push("_");
    }

    updateDisplay();
};

function updateDisplay() {
    document.getElementById("wins").innerText = wins;

    var guessingWordText = "";
    for (var i = 0; i < currentWord.length; i++) {
        guessingWordText += currentWord[i];
    }

    document.getElementById("currentWord").innerText = guessingWordText;
    document.getElementById("guessesLeft").innerText = guessesLeft;
    document.getElementById("guesses").innerText = guesses;
};


function checkGuess(letter) {
    var positions = [];

    for (i = 0; i < wordOptions[currentWordIndex].length; i++) {
        if (wordOptions[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }

    if (positions.length <= 0) {
        guessesLeft --;
    } else {
        for (var i = 0; i < positions.length; i++) {
            currentWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if (currentWord.indexOf("_") === -1) {
        wins++;
        gameOver = true;
    }
};

function checkLoss() {
    if (guessesLeft <= 0) {
        gameOver = true;
    }
};

function makeGuess(letter) {
    if (guessesLeft > 0) {
        if (guesses.indexOf(letter) === -1) {
            guesses.push(letter);
            checkGuess(letter);
        }
    }
};

// Main Program
document.onkeydown = function(event) {

    if(gameOver) {
        newGame();
        gameOver = false;
    } else {
        makeGuess(event.key.toLowerCase());
        updateDisplay();
        checkWin();
        checkLoss();
    }
     
};