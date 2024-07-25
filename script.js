const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const selectButtons = document.querySelectorAll(".select");
const uScore = document.querySelector("#userScore");
const pScore = document.querySelector("#pcScore");
const log = document.querySelector(".log");
const userLog = document.querySelector(".user");
const pcLog = document.querySelector(".pc");
const resetButton = document.querySelector(".reset");

resetButton.disabled = true;

let computerChoice="";
let humanChoice="";

/* PC CHOICE FUNCTION*/
function getComputerChoice() {
    const max = 3;
    var x = Math.floor(Math.random() * max);
    if (x === 0) {return "rock"}
    else if (x === 1) {return "paper"}
    else if (x === 2) {return "scissors"}
}

let choice = "";

userScore = 0;
pcScore = 0;

/* PLAYER CHOICE FUNCTION */
function getHumanChoice(button) {
    let choice = button.textContent;
    console.log(choice);
    return choice.toLowerCase();
}

    /* PLAY A ROUND */
    function playRound(button) {
         resetButton.disabled = false;
    if (userScore < 5 && pcScore < 5) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice(button);
        
        if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
                console.log(`You won! ${humanChoice} beats ${computerChoice}`);
                log.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
                userScore++;
                console.log(`User: ${userScore}; PC: ${pcScore}`);
                uScore.textContent = userScore;
        }
        else if ((computerChoice === "rock" && humanChoice === "scissors") ||
                 (computerChoice === "paper" && humanChoice === "rock") ||
                 (computerChoice === "scissors" && humanChoice === "paper")) {
                console.log(`You lost... ${humanChoice} loses against ${computerChoice}`);
                log.textContent = `You lost... ${humanChoice} loses against ${computerChoice}`;
                pcScore++;
                console.log(`User: ${userScore}; PC: ${pcScore}`);
                pScore.textContent = pcScore;
        }
        else {
                console.log("It's a tie!");
                console.log(`User: ${userScore}; PC: ${pcScore}`);
                log.textContent = "It's a tie!";
        }
    }
    if (userScore == 5) {
        userLog.style.color = "green";
        userLog.style.fontWeight = 600;
        log.style.fontWeight = 700;
        log.textContent = `Congrats! You won with a score of ${userScore} to ${pcScore}`;
        selectButtons.forEach(function(node) {node.disabled = true})
    
    }
    else if (pcScore == 5) {
        pcLog.style.color = "red"
        pcLog.style.fontWeight = 600;
        log.style.fontWeight = 700;
        log.textContent = `Oh no! You lost with a score of ${userScore} to ${pcScore}`;
        selectButtons.forEach(function(node) {node.disabled = true})
    }

        

    }

rockButton.addEventListener('click', () => playRound(rockButton));
paperButton.addEventListener('click', () => playRound(paperButton));
scissorsButton.addEventListener('click', () => playRound(scissorsButton));
resetButton.addEventListener('click', function() {
    userScore = 0; pcScore = 0
    pScore.textContent = pcScore;
    uScore.textContent = userScore;
    log.style.fontWeight = 400;
    userLog.style.fontWeight = 400;
    pcLog.style.fontWeight = 400;
    log.textContent = "You started a new game. Good luck!";
    pcLog.style.color = "";
    userLog.style.color = "";
    selectButtons.forEach(function(node) {node.disabled = false});
    resetButton.disabled = true;
})