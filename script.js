//0 = rock, 1 = paper, 2 = scissors
//1 beats 0, 2 beats 1, 0 beats 2.
function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function getHumanChoice() {
    let choice = prompt("rock, paper, scissors, SHOOT! (enter 'rock,' 'paper,' or 'scissors')").toLowerCase();
    
    
    switch(choice) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let compSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        let compChoice;
        let humanChoice;
        
        switch(compSelection) {
        case 0:
            compChoice = "rock";
            break;
        case 1:
            compChoice = "paper";
            break;
        case 2:
            compChoice = "scissors";
            break;
    }
        switch(humanSelection) {
        case 0:
            humanChoice = "rock";
            break;
        case 1:
            humanChoice = "paper";
            break;
        case 2:
            humanChoice = "scissors";
            break;
    }
        
        //console.log(`${humanSelection} (${humanChoice}), ${compSelection} (${compChoice})`);
        if (compSelection === humanSelection) {
            console.log("Wow, a tie. Again!");
        } else if (
            (compSelection === 0 && humanSelection === 1) || 
            (compSelection === 2 && humanSelection === 0) || 
            (compSelection === 1 && humanSelection === 2) 
        ) {
            console.log("Human wins the round!");
            humanScore++;
        } else if (
            (humanSelection === 0 && compSelection === 1) ||
            (humanSelection === 2 && compSelection === 0) || 
            (humanSelection === 1 && compSelection === 2 )
        ) {
            console.log("Computer wins the round!");
            computerScore++;
        }
    }
    
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (humanScore > computerScore) {
        console.log(`Human wins the game! (${humanScore}-${computerScore})`);
    } else {
        console.log(`Computer wins the game! (${humanScore}-${computerScore})`);
    }
}

playGame();