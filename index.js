function getComputerChoice(){
    const num = Math.random()*3;
    if (num<1) {
     cpuDiv.textContent = "The CPU picked Paper";
        return ("Paper");
    }
    else if (num<2) {
     cpuDiv.textContent = "The CPU picked Rock";
        return ("Rock")
    }
    else {
     cpuDiv.textContent = "The CPU picked Scissors";
        return("Scissors")
    }
};

function playRound(playerSelection, computerSelection) {
    let plSU = playerSelection.toUpperCase();
    let cmpSU = computerSelection.toUpperCase();
    if (plSU == cmpSU) {
        return (0)
    }
    else if (plSU == "PAPER" && cmpSU == "ROCK") return(1)
    else if (plSU == "PAPER" && cmpSU == "SCISSORS") return (-1)
    else if (plSU == "ROCK" && cmpSU == "SCISSORS") return (1)
    else if (plSU == "ROCK" && cmpSU == "PAPER") return (-1)
    else if (plSU == "SCISSORS" && cmpSU == "ROCK") return (-1)
    else if (plSU == "SCISSORS" && cmpSU == "PAPER") return (1)
}

function game(e) {
    let playerChoice = e.target.textContent;
    const result = playRound(playerChoice, getComputerChoice()); //win = 1, tie = 0, lose = -1;
    if (result == 1) {
        return "WIN";
    }
    else if (result == 0) {
        return "TIE";
    }
    else return "LOSE";
}

function gameStop() {
    gameOverDiv.textContent = "Game is over you " + (playerScore > botScore ? 'win!' : 'lose. Better luck next time...');
    document.body.appendChild(playAgainButton);
}

// UI for choosing weapon
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    
    button.addEventListener('click', function (e) {
        result = game(e);
        if (result == 'WIN') playerScore++;
        else if (result == 'LOSE') botScore++;
        scoreDiv.textContent = 'The Score is: ' + playerScore + ':' + botScore;        
        resultDiv.textContent = result;
        if (playerScore == 5 || botScore == 5) {
            gameStop();
        }
    })   
});

// result div
const resultDiv = document.createElement('div');
resultDiv.className = 'resultDiv';
document.body.appendChild(resultDiv);

// cpu Choice div
const cpuDiv = document.createElement('div');
cpuDiv.className = 'scoreDiv';
document.body.appendChild(cpuDiv);

// score div
var playerScore = 0;
var botScore = 0;
const scoreDiv = document.createElement('div');
scoreDiv.className = 'scoreDiv';
document.body.appendChild(scoreDiv);
scoreDiv.textContent = 'The Score is: ' + playerScore + ':' + botScore;

// game-over div
const gameOverDiv = document.createElement('div');
gameOverDiv.className = 'resultDiv';
document.body.appendChild(gameOverDiv);

//play-again button
const playAgainButton = document.createElement('button');
playAgainButton.className = 'playAgainButton';
playAgainButton.textContent = 'Play Again?';
playAgainButton.addEventListener('click', () => {
    window.location.reload();
});
