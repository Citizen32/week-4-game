
$(document).ready(function(){

// VARIABLES
//------------------------------------------------------------
//Variables for each image that will generate a random number from 1 to 12
var blueCrystal = Math.floor((Math.random() * 12) + 1);
var purpleCrystal = Math.floor((Math.random() * 12) + 1);
var redCrystal = Math.floor((Math.random() * 12) + 1);
var yellowCrystal = Math.floor((Math.random() * 12) + 1);

// A variable that will generate a random number from 19 to 120
var random = Math.floor(Math.random() * 120 + 19);

// Variables that will keep track of the score
var wins = 0;
var losses = 0;
var userTotal = 0;

// RESET FUNCTION
//-------------------------------------------------------------
// If user wins or looses, call the "reset" function.


//TOTAL WINS AND LOSSES FUNCTIONS
//-------------------------------------------------------------
// If user WINS, call the "winner" function.
// If user LOSSES, call the "loser" function.
// Display an alert the user "LOST".
// Increase the score of losses by one.
// Reset the game.


// ON CLICK EVENTS FOR CRYSTALS
//-------------------------------------------------------------
// "on click" event for the BLUE crystal call a function
// If total number matches scoreToMatch run "winner" function.
// If the number acumulated is greater than scoreToMatch, run "loser" function.


// "on click" event for the PURPLE crystal.


//"on click" event  for the RED crystal.


//"on click" event for the YELLOW crystal.
