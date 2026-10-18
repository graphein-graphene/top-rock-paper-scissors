//0 = rock, 1 = paper, 2 = scissors
//1 beats 0, 2 beats 1, 0 beats 2.

// DOM constants
const playButton = document.querySelector(".play");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const buttonGroup = document.querySelector(".buttonGroup");
const resultDisplay = document.querySelector(".resultDisplay");
const choiceText = document.createElement("h3");
const resultText = document.createElement("h3");
const scoreText = document.createElement("h5");

resultDisplay.appendChild(choiceText);
resultDisplay.appendChild(resultText);

choiceText.classList.add("choiceText");
resultText.classList.add("resultText");

let scores = {
    humanScore: 0,
    computerScore: 0
};

const buildScoreText = () => {
    resultDisplay.appendChild(scoreText);
    scoreText.replaceChildren(
        `Human: ${scores.humanScore}`, 
        document.createElement("br"),
        `Computer: ${scores.computerScore}`
    );
};
const initGame = () => {
    buttonGroup.append(rockButton, paperButton, scissorsButton);
    scores.humanScore = 0;
    scores.computerScore = 0;
    choiceText.textContent = "Rock, paper, scissors - SHOOT!";
    resultText.textContent = "";
    playButton.textContent = "Restart";
    buildScoreText();
};


buildScoreText();


//v - Game logic - v
function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function getHumanChoice(choice) {
    switch(choice) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}



function playRound(btnClicked) {
    let compSelection = getComputerChoice();
    let humanSelection = getHumanChoice(btnClicked);
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
    choiceText.append(document.createElement("br"),`Computer picked ${compChoice.toUpperCase()}!`);
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
        resultText.textContent = "Wow, a tie. Again!";
    } else if (
        (compSelection === 0 && humanSelection === 1) || 
        (compSelection === 2 && humanSelection === 0) || 
        (compSelection === 1 && humanSelection === 2) 
    ) {
        resultText.textContent = "Human wins the round!";
        scores.humanScore++;
    } else if (
        (humanSelection === 0 && compSelection === 1) ||
        (humanSelection === 2 && compSelection === 0) || 
        (humanSelection === 1 && compSelection === 2 )
    ) {
        resultText.textContent = "Computer wins the round!";
        scores.computerScore++;
    }
    buildScoreText();
}


/* - - v DOM MANIPULATION v - - */
rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

playButton.addEventListener('click', () => {
    initGame();
});

buttonGroup.addEventListener('click', (e) => {
    const button = e.target.closest("button");
    // ignore misclicks landing outside the button
    if (!button) { return; }

    choiceText.textContent = `Human picked ${button.textContent.toUpperCase()}!`;
    playRound(button.textContent.toLowerCase());
    if (scores.humanScore == 5) {
        scoreText.remove();
        resultText.textContent = `Human wins the game! (${scores.humanScore}-${scores.computerScore})`;
        buttonGroup.replaceChildren();
    } else if (scores.computerScore == 5) {
        scoreText.remove();
        resultText.textContent = `Computer wins the game! (${scores.humanScore}-${scores.computerScore})`;
        buttonGroup.replaceChildren();
    }
});