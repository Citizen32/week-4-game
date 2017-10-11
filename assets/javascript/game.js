
/*Create a variable of random math for each jem

Each crystal should have a random hidden value between 1 - 12.

Create a variable of random math for the number to match.
Make the number small 19 to 120.

variable of wins, losses, and total guessed.

On click add value to the total score.

Show current total each time we click on jem.

If - Else. Evaluate if the score is under or above the score to match. <?>

If the game ends update wins or losses.

reset values on jem, but not on score.*/


var redJem = Math.floor((Math.random() * 12) + 1);
var yellowJem = Math.floor((Math.random() * 12) + 1);
var blueJem = Math.floor((Math.random() * 12) + 1);
var greenJem = Math.floor((Math.random() * 12) + 1);

var scoreToMatch = Math.floor(Math.random() * (120 - 19 + 1)) + 19;


var wins = 0;
var losses = 0;
var total = 0;

