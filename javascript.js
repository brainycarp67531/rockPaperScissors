console.log("Rock paper scissors");


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

// test the function getComputerChoice. 
// let test = getComputerChoice();
// console.log(test);


// Write a function named getHumanChoice that will asked for input rock paper or scissors. 
function getHumanChoice() {

    // Create a variable named humanChoice that will store the humans input.
    let humanChoice = "";

    // Asked the human for input, and store it in the variable created. 
    humanChoice = prompt("Rock, paper or scissors, choose wisely. ");

    // return the variable. 
    return humanChoice;

}

// test the function getHumanChoice
// let humanTest = getHumanChoice();
// console.log(humanTest);


// test the score variables.
// console.log(humanScore);
// console.log(computerScore);


// Create a new function called playGame, that will simulate 5 games. 
function playGame() {

    // Move the score variable here. 
    // Create a variable named humanScore to keep track of the humans score which will have a initial value of 0.
    let humanScore = 0; 

    // Create a variable named computerScore to keep track of the computers score which will have a initial value of 0.
    let computerScore = 0;

    // Move the playRound function here 
    // Write a function named playRound that will take two parameters (humanSelection and computerSelection)
    function playRound(humanSelection, computerSelection) {

        // Make sure that both the humanSelection and computerSelection has only lower case letters. 
        humanSelection = humanSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();

        // print human and computer selection for debugging
        console.log(humanSelection);
        console.log(computerSelection);

        // Compare the human selection to computer selection. 

        // when we have the same it will be a draw
        if (humanSelection === computerSelection) {
            // no points to anyone, print to the console that it is a draw. 
            console.log("It is a draw!");

        // if human has rock and computer have scissors 
        } else if (humanSelection === "rock") {
            if (computerSelection === "scissors") {
                // human vins and gets one point
                humanScore += 1;

                // write to the console that the human won this round. 
                console.log("You won! Rock beats scissors.");
            
            // computer wins and gets a point. 
            } else {
                // give the computer a point. 
                computerScore += 1;

                // print to the console that the human lost. 
                console.log("You lose! " + computerSelection + " beats " + humanSelection);

            }

        // else if human has paper and computer has rock
        } else if (humanSelection === "paper") {
            if (computerSelection === "rock") {
                // human wins and gets one point. 
                humanScore += 1;

                // write to the console that the human won this round. 
                console.log("You won! Paper beats rock.");
            } else {
                // give the computer a point
                computerScore += 1;

                // print to the console that the human lost. 
                console.log("You lose! " + computerSelection + " beats " + humanSelection);
            }
        
        // if human has scissors and computer has paper 
        } else if (humanSelection === "scissors") {
            if (computerSelection === "paper") {
                // human wins and gets one point. 
                humanScore += 1;

                // write to the console that the human won this round. 
                console.log("You won! Scissors beats paper.");
            } else {
                // give the computer a point
                computerScore += 1;

                // print to the console that the human lost. 
                console.log("You lose! " + computerSelection + " beats " + humanSelection);
            }

        // Will cache invalid choices.  
        } else {
            console.log("Not valid");
        }
    }

    // create a loop that will play the game five rounds and keep track of the score. 
    for (let i = 0; i < 3; i++) {

        // get the human selection.
        const humanSelection = getHumanChoice();

        // get the computer selection.
        const computerSelection = getComputerChoice();

        // play a round and give a point to the winner. 
        playRound(humanSelection, computerSelection);

        // print the current score to the console. 
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);

    }

    // Check the score and declare a winner. 
    // check if the human and the computer have the same score
    if (humanScore === computerScore) {
        // it is a draw
        console.log("It is a draw, maybe a new round?");

    // check if human score if larger then computer
    } else if (humanScore > computerScore) {
        // write to the console that the human is the winner
        console.log("The human is the winner, congratulations!!!");

    // check if the computer score if bigger then the human. 
    } else if (computerScore > humanScore) {
        // write to console that the computer is the winner. 
        console.log("The computer is the winner.");

    // else write to console that we have an error.
    } else {
        console.log("Something is wrong...");
    } 
}


playGame();