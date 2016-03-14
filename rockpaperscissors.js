

// var getInput = function() {
//    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
//    var answer = prompt();
//    return answer;
// }

// var randomPlay = function() {
//     var randomNumber = Math.random();
//     if (randomNumber < 0.33) {
//         return 'rock';
//     } else if (randomNumber < 0.66) {
//         return 'paper';
//     } else {
//         return 'scissors';
//     }
// console.log("Computer: " + getComputerMove);
// }


var getPlayerMove = function(move) {
    var getPlayerMove = prompt ("Rock, Paper, or Scissors?");
    console.log(getPlayerMove);
    var answer = getInput();
    return answer;
}

var getComputerMove = function(move) {
    var getComputerMove = Math.random();
    console.log(getComputerMove);
    if(getComputerMove < .33){
      getComputerMove='rock';
    }else if (getComputerMove < .66){
      getComputerMove='paper';
    }else {
      getComputerMove='scissors';
    }
    return getComputerMove;
}
function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === 'rock' && computerMove === 'paper') {
        winner = 'player';
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'computer';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'computer';
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
        winner = 'player';
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        winner = 'computer';
    } else {
        winner = 'tie';
    }
    return winner;
}
var playToFive = function() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  while (playerWins < 5 && computerWins < 5) {
    playerMove = getPlayerMove();
    computerMove = getComputerMove();
    winner = getWinner(playerMove,computerMove);
    if (winner === 'player') {
      playerWins ++;
      console.log('Player chose ' + playerMove + 'while Computer chose' + computerMove);
      console.log('The current score is - ' + playerWins + 'Computer -' + computerWins);
    } else if (winner === 'computer') {
      computerWins ++;
      console.log('Player chose ' + playerMove + 'while Computer chose' + computerMove);
      console.log('The current score is - ' + playerWins + 'Computer -' + computerWins);
    } else {
      console.log('The score is the same');
    }
  return [playerWins, computerWins];
}


