const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const gameBoard = document.querySelector('#board')
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
  }
})

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    randomTarget()
  }
})


function startGame() {
  setInterval(timeCounter, 1000)
  randomTarget()
  setTimer(time)
}

function timeCounter() {
  if (time === 0) {
    endGame()
  } else {
    let current = --time
    if (current < 10) {
      current = `0${current}`
    }
    setTimer(current)
  }
}

function setTimer(value) {
  timeEl.innerHTML = `00:${value}`
}

function endGame() {
  board.innerHTML = `<h1>SCORE: <span class="primary">${score}</span></h1>`
  timeEl.parentNode.classList.add('hide')

}

function randomTarget() {

  const pointingTarget = document.createElement('div')
  const size = randomSize(10, 60)
  const {
    width,
    height
  } = board.getBoundingClientRect()

  const positionX = randomSize(0, width - size)
  const positionY = randomSize(0, height - size)


  pointingTarget.classList.add('circle')
  pointingTarget.style.width = `${size}px`
  pointingTarget.style.height = `${size}px`
  pointingTarget.style.top = `${positionY}px`
  pointingTarget.style.left = `${positionX}px`

  board.append(pointingTarget)


}

function randomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}