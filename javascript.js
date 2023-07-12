let winner, loser, tied;

function getComputerChoice(){
    const rndInt = Math.floor(Math.random() * 3) + 1
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
    console.log(computerChoice);
    return computerChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt("Choose rock, paper, or scissors");
    playerChoice = playerChoice.toLowerCase();
    for(playerChoice; ((playerChoice != "rock") && (playerChoice != "paper") && (playerChoice != "scissors"));){
        alert("Incorrect value, please try again");
        playerChoice = prompt("Choose rock, paper, or scissors");
    }
    console.log(playerChoice);
    return playerChoice;
}

function playRound(playerSelection, computerSelection){
    let playerCap = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    winner = "You win! " + playerCap + " beats " + computerSelection + "!";
    loser = "You lose! " + computerSelection + " beats " + playerCap + "!";
    tied = "It's a tie!";
    let result = playerSelection.toLowerCase() + ", " + computerSelection.toLowerCase();

    if(result == "rock, rock" || result == "scissors, scissors" || result == "paper, paper"){
        console.log(null);
        return null;        
    }else if(result =="rock, scissors" || result == "paper, rock" || result == "scissors, paper"){
        console.log(true);
        return true;       
    }else if(result == "rock, paper" || result == "paper, scissors" || result == "scissors, rock"){
        console.log(false);
        return false;
    }
}

function game(){
    let win = 0;
    let lose = 0;

    for(let x = 0; x < 5; x++){
        let result = playRound(getPlayerChoice(), getComputerChoice());
        switch(result){
            case true:
                win++;
                console.log(winner);
                alert(winner);
                break;
            case false:
                lose++;
                console.log(loser);
                alert(loser);
                break;
            default:
                console.log(tied);
                alert(tied);
                break;
        }
    }

    switch(win > lose){
        case true:
            console.log("You Won! " + win + " to " + lose + ".");
            return("You Won! " + win + " to " + lose + ".");
            break;
        case false:
            switch(win < lose){
                case true:
                    console.log("You Lost :( " + win + " to " + lose + ".");
                    return("You Lost :( " + win + " to " + lose + ".");
                    break;
                default:
                    console.log("It was a tie " + win + " to " + lose + ".");
                    return("It was a tie " + win + " to " + lose + ".");
                    break;
            }
            break;
    }
}

game();
