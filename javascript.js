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