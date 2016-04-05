////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    //console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var getPlayerMove = function(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    /*Your expression*/ 
    if (move == true) {
        return move;
    } else { 
        return getInput();
    }
}
var getComputerMove = function(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move == true) {
        return move;
    } else {
        return randomPlay();
    }
}
 var getWinner = function(playerMove, computerMove) {
    // This function should either give us back 'player', 'computer', or 'tie'.
    // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
    // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.
    if (playerMove == 'rock' && computerMove == 'rock') {
        return 'tie';
    } else if (playerMove == 'rock' && computerMove == 'paper') {
        return 'computer';
    } else if (playerMove == 'rock' && computerMove == 'scissors') {
        return 'player';
    } else if (playerMove == 'paper' && computerMove == 'rock') {
        return 'player';
    } else if (playerMove == 'paper' && computerMove == 'paper') {
        return 'tie';
    } else if (playerMove == 'paper' && computerMove == 'scissors') {
        return 'computer';
    } else if (playerMove == 'scissors' && computerMove == 'rock') {
        return 'computer';
    } else if (playerMove == 'scissors' && computerMove == 'paper') {
        return 'player' ;
    } else if (playerMove == 'scissors' && computerMove == 'scissors') {
        return 'tie' ;                            
    } else {
        return 'input error';
    }
}    
  var winner;
var playToFive = function() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
 while (playerWins < 5 && computerWins < 5) {
  var playerMove=getPlayerMove();
  var computerMove=getComputerMove();
  winner = getWinner(playerMove,computerMove)
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    if (winner == 'tie') {
      console.log('round is a tie');
    } else if (winner == 'computer') {
        computerWins++;
        console.log('computer Wins round');
    } else if (winner == 'player') {
        playerWins++;       
        console.log('player Wins round');
    } else {
        console.log('input error');
    }  
    console.log('The score is currently: player: ' + playerWins + ' to computer: ' + computerWins + '\n');
  }
  if (playerWins>computerWins) {
    console.log('final winner = player')
  } else {
    console.log('final winner = computer') 
  }
  return [playerWins, computerWins];
}
  playToFive();