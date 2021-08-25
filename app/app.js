const COM_CHOICES = ['rock', 'paper', 'scissors']

function play(playerChoice) {
    let choiceNum = Math.floor(Math.random() * 3)

    addComIcon(choiceNum);
    // output what computer got
    console.log(COM_CHOICES[choiceNum]);

    if (playerChoice == choiceNum) {
        return console.log('tie')
    }
    if (++playerChoice == choiceNum) {
        return console.log('i lost')
    }
    if (--playerChoice == choiceNum) {
        return console.log('i win')
    }
    if (playerChoice > choiceNum) {
        return console.log('i lost')
    }
    if (playerChoice < choiceNum) {
        return console.log('i win')
    }
    return "I DON'T KNOW WHAT'S GOING ON!!"
}

function setPlayerChoice() {
    let playerChoice = document.activeElement.id

    console.log(playerChoice)

    addPlayerIcon(playerChoice);

    play()
}

function addPlayerIcon(playerChoice) {
    const PLAYER_ICON_ELEM = document.getElementById('player-icon')
    if (playerChoice == 0) {
        return PLAYER_ICON_ELEM.innerHTML = `<i class="mdi mdi-diamond-stone large-icon">`
    }
    if (playerChoice == 1) {
        return PLAYER_ICON_ELEM.innerHTML = `<i class="mdi mdi-file-outline large-icon">`
    }
    if (playerChoice == 2) {
        return PLAYER_ICON_ELEM.innerHTML = `<i class="mdi mdi-content-cut large-icon">`
    }
    return "ERROR in Player ICON"
}

function addComIcon(choiceNum) {
    const COM_ICON_ELEM = document.getElementById('computer-icon')
    if (choiceNum == 0) {
        return COM_ICON_ELEM.innerHTML = `<i class="mdi mdi-diamond-stone large-icon">`
    }
    if (choiceNum == 1) {
        return COM_ICON_ELEM.innerHTML = `<i class="mdi mdi-file-outline large-icon">`
    }
    if (choiceNum == 2) {
        return COM_ICON_ELEM.innerHTML = `<i class="mdi mdi-content-cut large-icon">`
    }
    return "ERROR in Computer ICON"
}