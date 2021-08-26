const COM_CHOICES = ['rock', 'paper', 'scissors']
let count = 0


const SCORE_ELEM = document.getElementById('score')

function play() {
    let choiceNum = Math.floor(Math.random() * 3)
    addComIcon(choiceNum)
        // output what computer got
    console.log(COM_CHOICES[choiceNum])
    let playerChoice = parseInt(document.activeElement.id)

    const OUTCOME_ELEM = document.getElementById('outcome')

    if (playerChoice === choiceNum) {
        return OUTCOME_ELEM.innerHTML = `<h1>TIE</h1>`
    }
    if ((playerChoice + 1) === choiceNum) {
        console.log('lose ++')
        count--
        return OUTCOME_ELEM.innerHTML = `<h1>YOU LOSE</h1>`
    }
    if ((playerChoice - 1) === choiceNum) {
        console.log('win --')
        count++
        return OUTCOME_ELEM.innerHTML = `<h1>YOU WIN</h1>`
    }
    if (playerChoice > choiceNum) {
        console.log('win >')
        count--
        return OUTCOME_ELEM.innerHTML = `<h1>YOU LOSE</h1>`
    }
    if (playerChoice < choiceNum) {
        console.log('lose <')
        count++
        return OUTCOME_ELEM.innerHTML = `<h1>YOU WIN</h1>`
    }
    return console.log("I DON'T KNOW WHAT'S GOING ON!!")
}

function setPlayerChoice() {
    let playerChoice = document.activeElement.id

    console.log(playerChoice)

    addPlayerIcon(playerChoice);

    play()

    setScore()
}

function setScore() {
    SCORE_ELEM.innerText = `${ count }`
}

function addPlayerIcon(playerChoice) {
    const PLAYER_ICON_ELEM = document.getElementById('player-icon')

    if (playerChoice == 0) {
        return PLAYER_ICON_ELEM.innerHTML = `<i class="mdi mdi-diamond-stone large-icon"></i><h3>Player</h3>`
    }
    if (playerChoice == 1) {
        return PLAYER_ICON_ELEM.innerHTML = `<i class="mdi mdi-file-outline large-icon"></i><h3>Player</h3>`
    }
    if (playerChoice == 2) {
        return PLAYER_ICON_ELEM.innerHTML = `<i class="mdi mdi-content-cut large-icon"></i><h3>Player</h3>`
    }
    return "ERROR in Player ICON"
}

function addComIcon(choiceNum) {
    const COM_ICON_ELEM = document.getElementById('computer-icon')


    if (choiceNum == 0) {
        return COM_ICON_ELEM.innerHTML = `<i class="mdi mdi-diamond-stone large-icon"><h3>CPU</h3>`
    }
    if (choiceNum == 1) {
        return COM_ICON_ELEM.innerHTML = `<i class="mdi mdi-file-outline large-icon"><h3>CPU</h3>`
    }
    if (choiceNum == 2) {
        return COM_ICON_ELEM.innerHTML = `<i class="mdi mdi-content-cut large-icon"><h3>CPU</h3>`
    }
    return "ERROR in Computer ICON"
}