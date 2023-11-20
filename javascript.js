function getComputerChoice() { // will randomly generate either rock, paper, or scissors
    var random = Math.floor(Math.random() * 3) // generate random number between 0 and 2
    console.log(random)
    if (random == 0) {
        return "Rock"
    }
    if (random == 1) {
        return "Paper"
    }
    if (random == 2) {
        return "Scissors"
    }
}

