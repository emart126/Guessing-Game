/*
   This program uses the API
   that starts at line 17
*/

//guessing game program
console.log ("I'm thinking of a number, 1-10...");
var computerNumber = random1To10 ();
console.log ("Ok, I chose one!  Let's play!")
var humanNumber = getGuess ();
var sentence = "Your guess was " + feedback (humanNumber, computerNumber);
console.log (sentence);
declareWinner (humanNumber, computerNumber);
//end of program

//start of API

function random1To10 ()
{
  var n = Math.floor (Math.random () * 10) + 1;
  return n;
}

function getGuess ()
{
   var n = prompt ("What is your guess? ");
   return n;
}

//paste your function feedback here
function feedback (h, c)
{
  if (h==c)
    return "correct";
  else if (h<c)
    return "too low...";
  else   
    return "too high...";
}

//paste your function  declareWinner here
function declareWinner (h, c)
{
  if (h==c)
    console.log("My number was: " + c + " You won the game!");
  else   
    console.log("My number was: " + c + " I won the game!");
}

//end of API