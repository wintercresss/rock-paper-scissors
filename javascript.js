function getComputerChoice() { // will randomly generate either rock, paper, or scissors
    var random = Math.floor(Math.random() * 3) // generate random number between 0 and 2
    if (random == 0) {
        return "rock"
    }
    if (random == 1) {
        return "paper"
    }
    if (random == 2) {
        return "scissors"
    }
}

function playRound(playerSelection) { // just brute force check every combination, since not that many for rock paper scissors
    var computerchoice = getComputerChoice();
    var playerchoice = playerSelection.toLowerCase() // make player choice all lowercase so that the player can input any capitalization they want
    var winstring = "You win! You chose " + playerchoice + " while the enemy chose " + computerchoice + "!"
    var losestring = "You lose! You chose " + playerchoice + " while the enemy chose " + computerchoice + "!"
    
    if (computerchoice == playerchoice) {
        return "Draw! Both of you chose " + playerchoice
    }

    if (playerchoice == "rock" && computerchoice == "scissors") {
        return winstring
    }

    if (playerchoice == "rock" && computerchoice == "paper") {
        return losestring
    }

    if (playerchoice == "paper" && computerchoice == "rock") {
        return winstring
    }

    if (playerchoice == "paper" && computerchoice == "scissors") {
        return losestring
    }

    if (playerchoice == "scissors" && computerchoice == "paper") {
        return winstring
    }

    if (playerchoice == "scissors" && computerchoice == "rock") {
        return losestring
    }

    return "invalid input! please enter rock, paper, or scissors"
}

function game() {
    var losscount = 0
    var wincount = 0
    var drawcount = 0
    for (let i = 0; i < 5; i++) { // play 5 games
        let choice = prompt("Make a choice!")
        let roundresult = playRound(choice)
        console.log(roundresult)
        if (roundresult.includes("Draw!")) {
            drawcount += 1
        } else if (roundresult.includes("You win!")) {
            wincount += 1
        } else {
            losscount += 1
        }
    }

    return "You won " + wincount + ", lost " + losscount + ", and drew " + drawcount + " games!"
}

console.log(game())