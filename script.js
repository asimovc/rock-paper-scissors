function getComputerChoice() {
	const choice = ["Rock", "Paper", "Scissors"];

	return choice[(Math.floor(Math.random() * choice.length))];
}

function playRound(playerSelection, computerSelection) {

	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

	// If get a draw
	if (playerSelection === computerSelection) {
		console.log("Draw!");
	}
	// If player selected Rock
	else if (playerSelection === "rock") {
		
		if (computerSelection === "paper") {
			console.log("You Lose! Paper beats Rock");
			computerScore += 1;
		}
		else if (computerSelection === "scissors") {
			console.log("You Win! Rock beats Scissors");
			playerScore += 1;
		}

	}
	// If player selected Paper
	else if (playerSelection === "paper") {
		
		if (computerSelection === "scissors") {
			console.log("You Lose! Scissors beats Paper");
			computerScore += 1;
		}
		else if (computerSelection === "rock") {
			console.log("You Win! Paper beats Rock");
			playerScore += 1;
		}
	}
	// If player selected Scissors
	else if (playerSelection === "scissors") {

		if (computerSelection === "rock") {
			console.log("You Lose! Rock beats Scissors");
			computerScore += 1;
		}
		else if (computerSelection === "paper") {
			console.log("You Win! Scissors beats Paper");
			playerScore += 1;
		}
	}
}

function game() {
	
	while (count < 5) {

		playerSelection = prompt("Put your choice");
		computerSelection = getComputerChoice();

		if (playerSelection.localeCompare(computerSelection, undefined, { sensitivity: 'accent' }) === 0) {
			count = count;
		} else {
			count += 1;
		}

		playRound(playerSelection, computerSelection);
	}

	if (playerScore > computerScore) {
		console.log("You Beat The Computer!");
	} else {
		console.log("You Get Beated By The Computer");
	}
}

let computerScore = 0 ;
let playerScore = 0;
let count = 0;
let playerSelection = null;
let computerSelection = null;
console.log(game());
