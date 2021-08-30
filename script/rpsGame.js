/* Simple implementation of rock-paper-scissors game with JavaScript.
   At first, the game will be played through browser's console, with GUI implementation in future.
   Computer's choice is made randomly. User's choice is get from prompt() function.
   A complete game is a Bo5.
   Ok, I just had an idea. I'm going to implement The Big Bang Theory's version:
   Rock Paper Scissors Lizard Spock :D
   The additional rules are: Rock crushes Lizard, but is vaporized by Spock; Paper disproves Spock, but is eaten by Lizard;
   Scissors decapite Lizard, but are smashed by Spock;
*/

//This function will make the computer's choice using Math.random() and return it.
//Each 2 integer results correspond to 1 of the 5 possible choices.

function computerPlay() {
    let numChoice = Math.floor(Math.random() * 10);
    let computerChoice = '';
    switch (numChoice) {
        case 0:
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
        case 3:
            computerChoice = 'paper';
            break;
        case 4:
        case 5:
            computerChoice = 'scissors';
            break;
        case 6:
        case 7:
            computerChoice = 'lizard';
            break;
        case 8:
        case 9:
            computerChoice = 'spock';
            break;
        default:
            console.log('Something gone wrong with computer\'s choice. numChoice here is: ' + numChoice);

    }
    return computerChoice;
}

/*This function will make a single round of the game. It takes computer and user's selections, evaluate according to the rules
  and return the round winner.
  The only case we don't return any value is the tie case, because scores won't change.
  I could use 'switch' structure here aswell, but intentionally chose 'if' to practice nesting these, indenting, brackets etc.
*/


const roundPhrase = document.getElementById('roundPhrase');
const scores = document.getElementById('scores');
const finalMsg = document.getElementById('finalMsg');    
let playerScore = 0, computerScore = 0;

function updInfo() {
    if (playerScore === 5 || computerScore === 5){
        playerScore = 0;
        computerScore = 0;
        scores.textContent = `You: ${playerScore} X Machine: ${computerScore}`;
        roundPhrase.textContent = '';
        finalMsg.textContent = '';
    }
}

function playRound() {
    updInfo();
    let computerSelection = computerPlay();
    let playerSelection = '';
    switch (this.getAttribute('id')) {
	case 'btnRock':
		playerSelection = 'rock';
		break;
	case 'btnPaper':
		playerSelection = 'paper';
		break;
	case 'btnScissors':
		playerSelection = 'scissors';
		break;
	case 'btnLizard':
		playerSelection = 'lizard';
		break;
	case 'btnSpock':
		playerSelection = 'spock';
		break;
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            roundPhrase.textContent = 'It\'s a tie! Rock leans on rock.';
        } else if (computerSelection === 'paper') {
            roundPhrase.textContent = 'You lose! Paper covers rock.';
	        computerScore += 1;	
        } else if (computerSelection === 'scissors') {
            roundPhrase.textContent = 'You win! As it always has, rock crushes scissors.';
            playerScore += 1;
        } else if (computerSelection === 'lizard') {
            roundPhrase.textContent = 'You win! Rock crushes lizard.';
            playerScore += 1;
        } else if (computerSelection === 'spock') {
            roundPhrase.textContent = 'You lose! Spock vaporizes rock.';
	        computerScore += 1;
        }        
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            roundPhrase.textContent = 'You win! Paper covers rock.';
            playerScore += 1;
        } else if (computerSelection === 'paper') {
            roundPhrase.textContent = 'It\'s a tie! Paper lies on paper.';
        } else if (computerSelection === 'scissors') {
            roundPhrase.textContent = 'You lose! Scissors cuts paper';
	        computerScore += 1;
        } else if (computerSelection === 'lizard') {
            roundPhrase.textContent = 'You lose! Lizard eats paper.';
	        computerScore += 1;
        } else if (computerSelection === 'spock') {
            roundPhrase.textContent = 'You win! Paper disproves Spock.';
            playerScore += 1;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            roundPhrase.textContent = 'You lose! As it always has, rock crushes scissors.';
	        computerScore += 1;
        } else if (computerSelection === 'paper') {
            roundPhrase.textContent = 'You win! Scissors cuts paper.';
            playerScore += 1;
        } else if (computerSelection === 'scissors') {
            roundPhrase.textContent = 'It\'s a tie! Scissors on both hands.';
        } else if (computerSelection === 'lizard') {
            roundPhrase.textContent = 'You win! Scissors decapitates Lizard.';
            playerScore += 1;
        } else if (computerSelection === 'spock') {
            roundPhrase.textContent = 'You lose! Spock smashes scissors.';
	        computerScore += 1;
        }
    } else if (playerSelection === 'lizard') {
        if (computerSelection === 'rock') {
            roundPhrase.textContent = 'You lose! Rock crushes lizard.';
	        computerScore += 1;
        } else if (computerSelection === 'paper') {
            roundPhrase.textContent = 'You win! Lizard eats paper.';
            playerScore += 1;
        } else if (computerSelection === 'scissors') {
            roundPhrase.textContent = 'You lose! Scissors decapitates Lizard.';
	        computerScore += 1;
        } else if (computerSelection === 'lizard') {
            roundPhrase.textContent = 'It\'s a tie! Lizard stares at lizard.';
        } else if (computerSelection === 'spock') {
            roundPhrase.textContent = 'You win! Lizard poisons Spock.';
            playerScore += 1;
        }
    } else if (playerSelection === 'spock') {
        if (computerSelection === 'rock') {
            roundPhrase.textContent = 'You win! Spock vaporizes rock.';
            playerScore += 1;
        } else if (computerSelection === 'paper') {
            roundPhrase.textContent = 'You lose! Paper disproves Spock.';
	        computerScore += 1;
        } else if (computerSelection === 'scissors') {
            roundPhrase.textContent = 'You win! Spock smashes scissors.';
            playerScore += 1;
        } else if (computerSelection === 'lizard') {
            roundPhrase.textContent = 'You lose! Lizard poisons Spock.';
	        computerScore += 1;
        } else if (computerSelection === 'spock') {
            roundPhrase.textContent = 'It\'s a tie! Spock can\'t beat Spock.';
        }
    }
    scores.textContent = `You: ${playerScore} X Machine: ${computerScore}`;
    if (playerScore === 5) finalMsg.textContent = 'Congratulations, the last slice of pizza is yours!';
    if (computerScore === 5) finalMsg.textContent = 'Aww, the computer got the last slice of pizza and it can\'t even eat that...';    
}

const userMoves = document.querySelectorAll('.btnChoices');
userMoves.forEach(button => button.addEventListener('click', playRound));


/*This function is the main game, which is done through a best of 5 rounds.
  We loop the round function 5 times, printing the actual scores and declare the winner by the end.
  The scores are updated according to roundResult variable ('computer' or 'user' wins the round, 'exitGame' we break out of the loop,
  i.e., we finish the game).
  Each time a score is updated, we test if it's equal to 3, so we can finish the game before completing
  all 5 rounds.
*/
