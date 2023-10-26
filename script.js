function getComputerChoice (){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function Round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const choices = ['rock', 'paper', 'scissors'];
    if (!choices.includes(playerSelection)) {
      return 'Invalid input. Please choose Rock, Paper, or Scissors.';
    }
    if (playerSelection === computerSelection) {
      return 'It\'s a tie!';
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let round = 1; round <= 5; round++) {
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();
    const roundResult = Round(playerSelection, computerSelection);
    console.log(`Round ${round}: ${roundResult}`);
    if (roundResult.includes('Win')) {
      playerScore++;
    } else if (roundResult.includes('Lose')) {
      computerScore++;
    }
  }
  console.log('Game Over');
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log('You win the game!');
  } else if (playerScore < computerScore) {
    console.log('Computer wins the game.');
  } else {
    console.log('It\'s a tie game.');
  }
}
function getPlayerSelection() {
  let input;
  do {
    input = prompt('Enter your choice: Rock, Paper, or Scissors').toLowerCase();
  } while (input !== 'rock' && input !== 'paper' && input !== 'scissors');
  return input;
}

// Start the game
game();