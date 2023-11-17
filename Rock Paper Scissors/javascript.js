/*Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and 
computerSelection - and then return a string that declares the winner 
of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive 
(so users can input rock, ROCK, RocK or any other variation).
*/

function getComputerChoice(){
    let compChoice;
    let randNum = Math.floor(Math.random() * 3);
    console.log("Random number is: " + randNum);
    if(randNum == 0){
        compChoice = "rock";
    }
    else if(randNum == 1){
        compChoice = "scissors";
    }
    else if(randNum == 2){
        compChoice = "paper";
    }
    return compChoice;
}
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if(parseInt(playerSelection)){
        console.log("Player has entered a number, please enter a string.")
        return "error";
    }
    else{
        playerSelection = playerSelection.toLowerCase();
    }

    if(playerSelection === computerSelection) {
        console.log("Draw!");
        return 0;
    }
    else if(playerSelection=="rock"){
        if(computerSelection=="scissors"){
            console.log("Player Wins");
            return 1;
        }
        else if(computerSelection=="paper"){
            console.log("Player Loses");
            return 0;
        }
    }
    else if(playerSelection=="scissors"){
        if(computerSelection=="paper"){
            console.log("Player Wins");
            return 1;
        }
        else if(computerSelection=="rock"){
            console.log("Player Loses");
            return 0;
        }
    }
    else if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            console.log("Player Wins");
            return 1;
        }
        else if(computerSelection=="scissors"){
            console.log("Player Loses");
            return 0;
        }
    }
    else {
        console.log("Player Has Entered an invalid input");
    return 0;
}
}

function playFiveRounds(){
    let roundswon = 0;
    for(let i = 0;i < 5;i++){
    roundswon = roundswon + playRound(prompt("Enter Rock Paper Scissors Choice"));
    console.log("Player has won " + roundswon + " rounds");
    }
    return roundswon;
}

function playRockPaperScissors(){
    let rounds = playFiveRounds();
    if(rounds >= 3) {
        return "Player wins the round of 5";
    }
    else {
        return "Player Has Lost the round of 5";
    }
}

playRockPaperScissors();