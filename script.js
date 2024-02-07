let computerScore = 0 ;
let playerScore = 0;

const btn = document.querySelector('#buttons');
let results = document.querySelector('#results');

btn.addEventListener('click', (event) => {

	let choice = event.target;

	switch(choice.id) {
		case 'rock':
			event = 'rock';
			break;
		case 'paper':
			event = 'paper';
			break;
		case 'scissors':
			event = 'scissors';
			break;
	}

	playRound(event, getComputerChoice());
});

function getComputerChoice() {
	const choice = ["Rock", "Paper", "Scissors"];

	return choice[(Math.floor(Math.random() * choice.length))];
}

function playRound(playerSelection, computerSelection) {

	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

	// If get a draw
	if (playerSelection === computerSelection) {
		results.textContent = "Draw!";
	}
	// If player selected Rock
	else if (playerSelection === "rock") {
		
		if (computerSelection === "paper") {
			results.textContent = "You Lose! Paper beats Rock";
			computerScore += 1;
		}
		else if (computerSelection === "scissors") {
			results.textContent = "You Win! Rock beats Scissors";
			playerScore += 1;
		}

	}
	// If player selected Paper
	else if (playerSelection === "paper") {
		
		if (computerSelection === "scissors") {
			results.textContent = "You Lose! Scissors beats Paper";
			computerScore += 1;
		}
		else if (computerSelection === "rock") {
			results.textContent = "You Win! Paper beats Rock";
			playerScore += 1;
		}
	}
	// If player selected Scissors
	else if (playerSelection === "scissors") {

		if (computerSelection === "rock") {
			results.textContent = "You Lose! Rock beats Scissors";
			computerScore += 1;
		}
		else if (computerSelection === "paper") {
			results.textContent = "You Win! Scissors beats Paper";
			playerScore += 1;
		}
	}
}
