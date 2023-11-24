/*Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and 
computerSelection - and then return a string that declares the winner 
of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive 
(so users can input rock, ROCK, RocK or any other variation).
*/

const btnrock = document.querySelector(".rock");
const btnscissors = document.querySelector(".scissors");
const btnpaper = document.querySelector(".paper");
const playerActions = document.querySelector(".playerActions");

const playerScore = document.querySelector(".playerScore");
let playerScoreValue = 0;
playerScore.textContent = playerScoreValue;

btnrock.addEventListener('click', () => {
    playRound('rock');
});

btnscissors.addEventListener('click', () => {
    playRound('scissors');
});

btnpaper.addEventListener('click', () => {
    playRound('paper');
});

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

    if(playerSelection === computerSelection) {
        playerActions.textContent = 'Draw!';
        return 0;
    }
    if(playerSelection=="rock"){
        if(computerSelection=="scissors"){
            playerActions.textContent = 'Player Wins';
            updatePlayerScore();
            return 1;
        }
        else if(computerSelection=="paper"){
            playerActions.textContent = 'Player Loses';
            return 0;
        }
    }
    if(playerSelection=="scissors"){
        if(computerSelection=="paper"){
            playerActions.textContent = 'Player Wins';
            updatePlayerScore();
            return 1;
        }
        else if(computerSelection=="rock"){
            playerActions.textContent = 'Player Loses';
            return 0;
        }
    }
    if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            playerActions.textContent = 'Player Wins';
            updatePlayerScore();
            return 1;
        }
        else if(computerSelection=="scissors"){
            playerActions.textContent = 'Player Loses';
            return 0;
        }
    }
    playerActions.textContent = 'Invalid Input!';
    return 0;
}

function updatePlayerScore(){
    playerScoreValue += 1;
    playerScore.textContent = playerScoreValue;
    checkWinCondition();
}

function checkWinCondition(){
    if(playerScoreValue >= 5){
        playerActions.textContent = 'Player Has Won the game!';
    }
}