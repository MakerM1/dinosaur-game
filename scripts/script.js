const character = document.querySelector('.character')
const block = document.getElementById('block')
const block2 = document.getElementById('block2')
const block3 = document.getElementById('block3')
const block4 = document.getElementById('block4')
const score = document.querySelector('.score')
let jumpSound = new Audio('../audio/jump.mp3')
let point = new Audio('../audio/point.mp3')
let death = new Audio('../audio/die.mp3')
let intervalID;
const characterSprite = document.getElementById('alive')
const characterDead = document.getElementById('dead')

function jump() {
    if (character.classList != 'animate') {
        character.classList.add('animate')
        jumpSound.play()
    }
    setTimeout(function() {
        character.classList.remove('animate')
    }, 500)
}

function jumpButton() {
    if (character.classList != 'animate' && event.key === " ") {
        character.classList.add('animate')
        jumpSound.play()
    }
    setTimeout(function() {
        character.classList.remove('animate')
    }, 500)
}

var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    var blockLeft2 = parseInt(window.getComputedStyle(block2).getPropertyValue('left'))
    var blockLeft3 = parseInt(window.getComputedStyle(block3).getPropertyValue('left'))
    var blockLeft4 = parseInt(window.getComputedStyle(block4).getPropertyValue('left'))

    if(blockLeft < 60 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = 'none'
        block.style.display = 'none'
        characterSprite.classList.remove('alive')
        character.classList.add('alive-visible')
        characterDead.classList.remove('visible')
        characterDead.classList.add("dead-sprite")
        setTimeout(function() {
            alert('you lose')
            location.reload()
        }, 20)
        death.play()

        console.log('block1')

    } else if (blockLeft2 < 60 && blockLeft2 > 0 && characterTop >= 130) {
        block.style.animation = 'none'
        block.style.display = 'none'
        characterSprite.classList.remove('alive')
        character.classList.add('alive-visible')
        characterDead.classList.remove('visible')
        characterDead.classList.add("dead-sprite")
        death.play()
        setTimeout(function() {
            alert('you lose')
        }, 20)
        console.log('block2')
        location.reload()
    } else if (blockLeft3 < 60 && blockLeft3 > 0 && characterTop >= 130) {
        block.style.animation = 'none'
        block.style.display = 'none'
        characterSprite.classList.remove('alive')
        character.classList.add('alive-visible')
        characterDead.classList.remove('visible')
        characterDead.classList.add("dead-sprite")
        death.play()
        setTimeout(function() {
            alert('you lose')
        }, 20)
        console.log('block3')
        location.reload()
    } else if (blockLeft4 < 60 && blockLeft4 > 0 && characterTop >= 130) {
        block.style.animation = 'none'
        block.style.display = 'none'
        characterSprite.classList.remove('alive')
        character.classList.add('alive-visible')
        characterDead.classList.remove('visible')
        characterDead.classList.add("dead-sprite")
        death.play()
        setTimeout(function() {
            alert('you lose')
        }, 20)
        console.log('block4')
        location.reload()
    }
}, 10)

function updateScore() {
    let number = 0
    intervalID === setInterval(function() {
        number++
        score.innerHTML = number
        if (number === 100 || number === 200 || number === 300 || number === 400 || number === 500 || number === 600 || number === 700 || number === 800 || number === 900 || number === 1000) {
            clearInterval()
            point.play()
        }
    }, 70)
}

updateScore()


