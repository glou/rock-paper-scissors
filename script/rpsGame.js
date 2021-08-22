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
  and declares the winner.
  I could use 'switch' structure here aswell, but intentionally chose 'if' to practice nesting these, indenting, brackets etc.
*/

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return 'It\'s a tie! Rock leans on rock.';    
        } else if (computerSelection === 'paper') {
            return 'You lose! Paper covers rock.';            
        } else if (computerSelection === 'scissors') {
            return 'You win! As it always has, rock crushes scissors.';
        } else if (computerSelection === 'lizard') {
            return 'You win! Rock crushes lizard.';            
        } else if (computerSelection === 'spock') {
            return 'You lose! Spock vaporizes rock.';
        }        
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win! Paper covers rock.';    
        } else if (computerSelection === 'paper') {
            return 'It\'s a tie! Paper lies on paper.';                    
        } else if (computerSelection === 'scissors') {
            return 'You lose! Scissors cuts paper';
        } else if (computerSelection === 'lizard') {
            return 'You lose! Lizard eats paper.';            
        } else if (computerSelection === 'spock') {
            return 'You win! Paper disproves Spock.';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose! As it always has, rock crushes scissors.';    
        } else if (computerSelection === 'paper') {
            return 'You win! Scissors cuts paper.';                    
        } else if (computerSelection === 'scissors') {
            return 'It\'s a tie! Scissors on both hands.';
        } else if (computerSelection === 'lizard') {
            return 'You win! Scissors decapitates Lizard.';            
        } else if (computerSelection === 'spock') {
            return 'You lose! Spock smashes scissors.';
        }
    } else if (playerSelection === 'lizard') {
        if (computerSelection === 'rock') {
            return 'You lose! Rock crushes lizard.';    
        } else if (computerSelection === 'paper') {
            return 'You win! Lizard eats paper.';                    
        } else if (computerSelection === 'scissors') {
            return 'You lose! Scissors decapitates Lizard.';
        } else if (computerSelection === 'lizard') {
            return 'It\'s a tie! Lizard stares at lizard.';
        } else if (computerSelection === 'spock') {
            return 'You win! Lizard poisons Spock.';
        }
    } else if (playerSelection === 'spock') {
        if (computerSelection === 'rock') {
            return 'You win! Spock vaporizes rock.';    
        } else if (computerSelection === 'paper') {
            return 'You lose! Paper disproves Spock.';                    
        } else if (computerSelection === 'scissors') {
            return 'You win! Spock smashes scissors.';
        } else if (computerSelection === 'lizard') {
            return 'You lose! Lizard poisons Spock.';
        } else if (computerSelection === 'spock') {
            return 'It\'s a tie! Spock can\'t beat Spock.';
        }
    }
}