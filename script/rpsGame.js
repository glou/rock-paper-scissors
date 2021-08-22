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

//This function prompts for user input its choice, returning it case-insesitive, so user can type any form
//and we can evaluate it without headaches.

function userPlay() {
    let userChoice = prompt('What\'s your big move between Rock, Paper, Scissors, Lizard and Spock?');
    return userChoice.toLowerCase();
}

/*This function will make a single round of the game. It takes computer and user's selections, evaluate according to the rules
  and return the updated scores.
  I could use 'switch' structure here aswell, but intentionally chose 'if' to practice nesting these, indenting, brackets etc.
*/

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            console.log('It\'s a tie! Rock leans on rock.');
        } else if (computerSelection === 'paper') {
            console.log('You lose! Paper covers rock.');            
            return 'computer';
        } else if (computerSelection === 'scissors') {
            console.log('You win! As it always has, rock crushes scissors.');
            return 'user';
        } else if (computerSelection === 'lizard') {
            console.log('You win! Rock crushes lizard.');
            return 'user';
        } else if (computerSelection === 'spock') {
            console.log('You lose! Spock vaporizes rock.');
            return 'computer';
        }        
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log('You win! Paper covers rock.');
            return 'user' 
        } else if (computerSelection === 'paper') {
            console.log('It\'s a tie! Paper lies on paper.'); 
        } else if (computerSelection === 'scissors') {
            console.log('You lose! Scissors cuts paper');
            return 'computer';
        } else if (computerSelection === 'lizard') {
            console.log('You lose! Lizard eats paper.');
            return 'computer';
        } else if (computerSelection === 'spock') {
            console.log('You win! Paper disproves Spock.');
            return 'user'
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            console.log('You lose! As it always has, rock crushes scissors.');
            return 'computer';
        } else if (computerSelection === 'paper') {
            console.log('You win! Scissors cuts paper.');
            return 'user'
        } else if (computerSelection === 'scissors') {
            console.log('It\'s a tie! Scissors on both hands.');
        } else if (computerSelection === 'lizard') {
            console.log('You win! Scissors decapitates Lizard.');
            return 'user'
        } else if (computerSelection === 'spock') {
            console.log('You lose! Spock smashes scissors.');
            return 'computer';
        }
    } else if (playerSelection === 'lizard') {
        if (computerSelection === 'rock') {
            console.log('You lose! Rock crushes lizard.');
            return 'computer';
        } else if (computerSelection === 'paper') {
            console.log('You win! Lizard eats paper.');
            return 'user'
        } else if (computerSelection === 'scissors') {
            console.log('You lose! Scissors decapitates Lizard.');
            return 'computer';
        } else if (computerSelection === 'lizard') {
            console.log('It\'s a tie! Lizard stares at lizard.');
        } else if (computerSelection === 'spock') {
            console.log('You win! Lizard poisons Spock.');
            return 'user'
        }
    } else if (playerSelection === 'spock') {
        if (computerSelection === 'rock') {
            console.log('You win! Spock vaporizes rock.');
            return 'user'
        } else if (computerSelection === 'paper') {
            console.log('You lose! Paper disproves Spock.');
            return 'computer';
        } else if (computerSelection === 'scissors') {
            console.log('You win! Spock smashes scissors.');
            return 'user'
        } else if (computerSelection === 'lizard') {
            console.log('You lose! Lizard poisons Spock.');
            return 'computer';
        } else if (computerSelection === 'spock') {
            console.log('It\'s a tie! Spock can\'t beat Spock.');
        }
    }
}

//This function is the main game, which is done through a best of 5 rounds.
//We loop the round function 5 times, printing the actual scores and declare the winner by the end.

function game() {
    let playerScore = 0, computerScore = 0;
    let roundResult = "";
    for (let i = 1; i <= 5; i++) {
        roundResult = playRound(userPlay(), computerPlay());
        if (roundResult === 'user') {
            playerScore += 1;
            if (playerScore === 3) {
                break;
            }
        } else if (roundResult === 'computer'){
            computerScore += 1;
            if (computerScore === 3){
                break;
            }
        } 
        console.log(`Your score is ${playerScore} and computer score is ${computerScore}`);
    }
    console.log(`Your final score is ${playerScore} and computer\'s final score is ${computerScore}`);
    if (playerScore > computerScore){
        console.log('Congratulations, the last slice of pizza is yours!');
    } else if (playerScore < computerScore) {
        console.log('Aww, the computer got the last slice of pizza and it can\'t even eat that...');
    } else {
        console.log('Cmon, play again, there\'s still one slice of pizza!')    
    }
}