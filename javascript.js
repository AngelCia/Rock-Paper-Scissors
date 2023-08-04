let winner, loser, tied;
let win = 0;
let lose = 0;

const btns = document.querySelectorAll('button');

for(const btn of btns){
    btn.addEventListener('click', () =>{
        let playerSelection = btn.className;
        let result = playRound(playerSelection, getComputerChoice());
        tallyScore(result);
        let won = checkIfWinner(win, lose);
        if(won){
            win = 0;
            lose = 0;
        }
    })
}

function checkIfWinner(win, lose){
    if((win == 5) || (lose == 5)){
        if(win > lose){
            let finalWin = "You Won! " + win + " to " + lose + ".";
            printToDiv(finalWin);
            return true;
        }else{
            let finalLoss = "You Lost :( " + win + " to " + lose + ".";
            printToDiv(finalLoss);
            return true;
        }
    } else {
        return false
    }
}

function getComputerChoice(){
    const rndInt = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    switch (rndInt){
    case 1:
        computerChoice = "Rock";
        break;
    case 2:
        computerChoice = "Paper";
        break;
    case 3:
        computerChoice = "Scissors";
        break;
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    let playerCap = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    winner = "You win! " + playerCap + " beats " + computerSelection + "!";
    loser = "You lose! " + computerSelection + " beats " + playerCap + "!";
    tied = "It's a tie!";
    let result = playerSelection.concat(", ", computerSelection.toLowerCase());

    if(result == "rock, rock" || result == "scissors, scissors" || result == "paper, paper"){
        printToDiv(tied);
        return null;
    }else if(result == "rock, scissors" || result == "paper, rock" || result == "scissors, paper"){
        printToDiv(winner);  
        return true;
    }else if(result == "rock, paper" || result == "paper, scissors" || result == "scissors, rock"){
        printToDiv(loser);
        return false;
    }
}

function printToDiv(result){
    let resultsElement = document.getElementById('results');
    resultsElement.textContent = result;
}

function printScore(win, lose){
    let scoreElement = document.getElementById('score');
    let score = "Won: " + win + " Lost: " + lose;
    scoreElement.textContent = score;
}

function tallyScore(result){
    switch(result){
        case true:
            win++;
            printScore(win, lose);
            break;
        case false:
            lose++;
            printScore(win, lose);
            break;
        default:
            printScore(win, lose);
            break;
    }     
}