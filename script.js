let playerScore = 0;
let computerScore = 0;
const resultDiv = document.getElementById("result");

// Add event listeners to buttons
const buttons = document.querySelectorAll(".selection");
buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        playRound(event.target.id); // Get the ID of the clicked button as playerSelection
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    
    // Display player and computer selections
    resultDiv.innerHTML = `Player selected: ${playerSelection}. Computer selected: ${computerSelection}.<br>`;
    
    if (playerSelection === computerSelection) {
        resultDiv.innerHTML += 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        resultDiv.innerHTML += `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else {
        resultDiv.innerHTML += `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }

    // Update scores and check for winner
    updateScores();
}

function updateScores() {
    resultDiv.innerHTML += `<br>Player Score: ${playerScore} Computer Score: ${computerScore}<br>`;
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            resultDiv.innerHTML += 'You win the game!';
        } else if (playerScore < computerScore) {
            resultDiv.innerHTML += 'Computer wins the game.';
        } else {
            resultDiv.innerHTML += 'It\'s a tie game.';
        }
        // Disable buttons after game over
        buttons.forEach(button => {
            button.disabled = true;
        });
    }
}