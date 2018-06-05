// //Define Variables and the corrrelating DOM Elements
// var wins = document.getElementById("wins");
// var losses = document.getElementById("losses");
// var guessesLeft = document.getElementById("guessesLeft");
// var lettersGuessed = document.getElementById("lettersGuessed");

//Define Game Variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var guessesSoFar = 0;
var i = 0;

//Set up an Array of Letters
var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var pickedLetter = letterBank[Math.floor(Math.random() * letterBank.length)];

//Function to generate a random computer guess

function randomGuess() {
    
}

// Reset Game Variables
function varReset() {
    var i = 0;
    guessesLeft = 9;
    guessesSoFar = 0;
    lettersGuessed = [];
    pickedLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
}

//This Function runs whenever the user pushes a key
document.onkeyup = function (event) {
    //assign the key input to userguess variable
    var userguess = event.key;
    //update the guessesSoFar array
    lettersGuessed.push(userguess);

    //evaluate the user's guess
    if (userguess === pickedLetter) {
        wins++;
        varReset();
    }

    else {
        guessesLeft--;
    }

    i++;

    if (guessesLeft === 0) {
        losses++;
        varReset();
        
    }

var html =
    "<p>You chose: " + userguess + "</p>" +
    "<p>The Computer Chooses: " + pickedLetter + "</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +  
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your Guesses so Far: " + lettersGuessed + "</p>";

    document.querySelector("#game").innerHTML = html;

}