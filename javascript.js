console.log("Rock paper scissors");

// Create a variable named humanScore to keep track of the humans score which will have a initial value of 0.
let humanScore = 0; 

// Create a variable named computerScore to keep track of the computers score which will have a initial value of 0.
let computerScore = 0;


// write a function with the name getComputerChoice. 
function getComputerChoice() {

    // Crate a variable called result of the type string with the value "". 
    let result = "";

    // create a variable called random of the type real with the staring value 0. 
    let random = 0;

    // Generate a random number between 0 and 1 and store it in random variable. 
    random = Math.random();
    // console.log(random);

    // Check is the variable is between 0 and 1/3 
    //      ->  if that is true update the value of result to "rock" 
    if (random < 1/3) {
        result = "rock";
    }
    // check if the variable is between 1/3 and 2/3
    //      -> if that is true update the value of result to "paper"
    else if (random < 2/3) {
        result = "paper";
    }
    // else 
    //      -> update the value of result to "scissors"
    else {
        result = "scissors";
    }

    // return the value. 
    return result;
}


// NOT IN USE. 
// Write a function named getHumanChoice that will asked for input rock paper or scissors. 
// function getHumanChoice() {

//     // Create a variable named humanChoice that will store the humans input.
//     let humanChoice = "";

//     // Asked the human for input, and store it in the variable created. 
//     humanChoice = prompt("Rock, paper or scissors, choose wisely. ");

//     // return the variable. 
//     return humanChoice;

// }


// Write a function named playRound that will take two parameters (humanSelection and computerSelection)
function playRound(humanSelection, computerSelection) {

    // Make sure that both the humanSelection and computerSelection has only lower case letters. 
    humanSelection = humanSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // print human and computer selection for debugging
    // console.log(humanSelection);
    // console.log(computerSelection);

    // display the player choice on the page
    let playerDiv = document.querySelector("#player");
    playerDiv.textContent = "Player: " + humanSelection;

    // Display the computer choice on the page
    let computerDiv = document.querySelector("#computer");
    computerDiv.textContent = "Computer: " + computerSelection;

    // create parameter to be able to update the result on the page.
    let resultDiv = document.querySelector("#result");

    // Compare the human selection to computer selection. 

    // when we have the same it will be a draw
    if (humanSelection === computerSelection) {
        // no points to anyone, print to the console that it is a draw. 
        // console.log("It is a draw!");

        // display the result to the page
        resultDiv.textContent = "Result: It is a draw!";

    // if human has rock and computer have scissors 
    } else if (humanSelection === "rock") {
        if (computerSelection === "scissors") {
            // human vins and gets one point
            humanScore += 1;

            // write to the console that the human won this round. 
            // console.log("You won! Rock beats scissors.");

            // Display the result on the page
            resultDiv.textContent = "Result: You won! " + humanSelection + " beats " + computerSelection + ".";

        
        // computer wins and gets a point. 
        } else {
            // give the computer a point. 
            computerScore += 1;

            // print to the console that the human lost. 
            // console.log("You lose! " + computerSelection + " beats " + humanSelection);

            // Display the result on the page
            resultDiv.textContent = "Result: You lose! " + computerSelection + " beats " + humanSelection + ".";
 
        }

    // else if human has paper and computer has rock
    } else if (humanSelection === "paper") {
        if (computerSelection === "rock") {
            // human wins and gets one point. 
            humanScore += 1;

            // write to the console that the human won this round. 
            // console.log("You won! Paper beats rock.");

            // display the result on the page
            resultDiv.textContent = "Result: You won! " + humanSelection + " beats " + computerSelection + ".";

        } else {
            // give the computer a point
            computerScore += 1;

            // print to the console that the human lost. 
            // console.log("You lose! " + computerSelection + " beats " + humanSelection);

            // Display the result to the page
            resultDiv.textContent = "Result: You lose! " + computerSelection + " beats " + humanSelection + ".";
        }
    
    // if human has scissors and computer has paper 
    } else if (humanSelection === "scissors") {
        if (computerSelection === "paper") {
            // human wins and gets one point. 
            humanScore += 1;

            // write to the console that the human won this round. 
            // console.log("You won! Scissors beats paper.");

            // display the result to the page
            resultDiv.textContent = "Result: You won! " + humanSelection + " beats " + computerSelection + ".";

        } else {
            // give the computer a point
            computerScore += 1;

            // print to the console that the human lost. 
            // console.log("You lose! " + computerSelection + " beats " + humanSelection);

            //display the result to the page
            resultDiv.textContent = "Result: You lose! " + computerSelection + " beats " + humanSelection + ".";
        }

    // Will cache invalid choices.  
    } else {
        console.log("Not valid");
    }
}


function resetScore() {
    humanScore = 0;
    computerScore = 0;
}


// Make this into a function. 
function checkScore() {

    // select the element to be updated when we have a winner. 
    let winner = document.querySelector("#winner");

    // Check the score and declare a winner. 
    // check if the human and the computer have the same score
    if (humanScore === computerScore) {
        // it is a draw
        console.log("It is a draw, maybe a new round?");

    // check if human score if larger then computer
    } else if (humanScore > computerScore) {
        // update the page with the winner. 
        winner.textContent = "Winner: The player is the winner, congratulations";

    // check if the computer score if bigger then the human. 
    } else if (computerScore > humanScore) {
        // update the page with the winner
        winner.textContent = "Winner: The computer is the winner, better luck next time.";

    // else write to console that we have an error.
    } else {
        winner.textContent = "Something is wrong...";

    } 
}


// select the button with the id playerSelection
let playerSelection = document.querySelector('#playerSelection');

// listen for the event, when a button is clicked. 
playerSelection.addEventListener('click', (event) => {
    
    let target = event.target;

    // get the computer choice.
    let computerChoice = getComputerChoice();

    // play one round
    playRound(target.id, computerChoice);

    // update the score section with the current score. 

    // select the element for updating the players score
    let scorePlayer = document.querySelector("#scorePlayer");

    // update the players score. 
    scorePlayer.textContent = "Player: " + humanScore;

    // select the element for updating the computers score. 
    let scoreComputer = document.querySelector("#scoreComputer");

    // update the computers score. 
    scoreComputer.textContent = "Computer: " + computerScore;

    if (humanScore == 5 || computerScore == 5) {
        checkScore();
    }
}); 

// select the element for resetting the game 
let resetGame = document.querySelector("#reset");

resetGame.addEventListener('click', (event) => {
    // reset the score. 
    resetScore();

    // update the score on the page
    scorePlayer.textContent = "Player: " + humanScore;
    scoreComputer.textContent = "Computer: " + computerScore;

    // reset the player and computer choice on the page
    let playerDiv = document.querySelector("#player");
    playerDiv.textContent = "Player: ";
    let computerDiv = document.querySelector("#computer");
    computerDiv.textContent = "Computer: ";

    // reset the result on the page
    let resultDiv = document.querySelector("#result");
    resultDiv.textContent = "Result: ";

    // reset the winner on the page
    let winner = document.querySelector("#winner");
    winner.textContent = "Winner: ";


})