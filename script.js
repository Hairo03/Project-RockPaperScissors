let winners = [];

const playerWinCounter = document.querySelector("#playerwins");
const computerWinCounter = document.querySelector("#computerwins");
const para = document.querySelector("#para");
const compChoice = document.querySelector("#compchoice")

let btns = document.querySelectorAll("button");

function startGame() {
    btns.forEach((btns) =>
        btns.addEventListener("click", () => {
            if (btns.id) {
                playRound(btns.id);
            }
        }))
}



function getComputerChoice() {
    let choiceArray = [
        "rock",
        "paper",
        "scissors"
    ]

    let randomChoice = Math.floor(Math.random() * choiceArray.length);

    return choiceArray[randomChoice];
}

computerChoice = "";


function capitalizeFirst(string) {
    string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return string
}

function calculateWinner(playerChoice, computerChoice) {

    compChoice.textContent = ("Computer chose: " + capitalizeFirst(computerChoice))

    // Game is tied
    if (computerChoice === playerChoice) {
        para.textContent = ("It's a tie! " + capitalizeFirst(computerChoice) + " and " + playerChoice + " is equal.")
        return "tie"
    }

    // Player wins
    else if (computerChoice == "rock" && playerChoice == "paper" ||
        computerChoice == "paper" && playerChoice == "scissors" ||
        computerChoice == "scissors" && playerChoice == "rock") {
        para.textContent = ("Player wins! " + capitalizeFirst(playerChoice) + " beats " + computerChoice + ".")
        return "player"
    }

    // Computer wins
    else {
        para.textContent = ("Computer wins! " + capitalizeFirst(computerChoice) + " beats " + playerChoice + ".")
        return "computer"
    }
}

function playRound(choice) {
    let wins = checkWins();
    if (wins >= 5) {
        return
    }

    const computerChoice = getComputerChoice();

    let winner = calculateWinner(choice, computerChoice);
    winners.push(winner);
    
    console.log(checkWins());
    
    tallyWins();

    wins = checkWins();

    if (wins == 5) {
        finalWinner();
    }

}

function checkWins() {
    totalWins = winners.length
    return totalWins;
}

function tallyWins() {
    const pWinCount = winners.filter((item) => item == "player").length;
    const cWinCount = winners.filter((item) => item == "computer").length;
    
    playerWinCounter.textContent = `Player: ${pWinCount}`;
    computerWinCounter.textContent = `Computer: ${cWinCount}`;
}

function finalWinner() {
    let playerWins = winners.filter((item) => item == "player").length;
    let computerWins = winners.filter((item) => item == "computer").length;

    if (playerWins > computerWins) {
        para.textContent = ("Player wins the game!")
    }
    else if (playerWins < computerWins) {
        para.textContent = ("Computer wins the game!")
    }
    else {
        para.textContent = ("The game is tied!")
    }
}

startGame();




