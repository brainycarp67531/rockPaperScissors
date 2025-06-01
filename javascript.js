console.log("Page loaded!");

// write a function with the name getComputerChoice. 
function getComputerChoice() {

    // Crate a variable called result of the type string with the value "". 
    let result = "";

    // create a variable called random of the type real with the staring value 0. 
    let random = 0;

    // Generate a random number between 0 and 1 and store it in random variable. 
    random = Math.random();
    console.log(random);

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