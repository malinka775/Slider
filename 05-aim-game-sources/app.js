"use sctrict";
const COLORS = ['#ffff8f', '#fb6435', '#ffa723', '#bde500', '#5ebc03', '#028265', '#ff8cd1', '#04ccfe', '#ffa439'];
const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeBtns = document.querySelector('.time-list');
const timer = document.querySelector('#time');
const board = document.querySelector('#board');
let score = 0;
const BOARD_WIDTH = 500;
const BOARD_HEIGHT = 500;
let gameDuration;
startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});
board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    getCircle();
  }
})

timeBtns.addEventListener('click', (event)=> {
  event.preventDefault();
  if (event.target.classList.contains('time-btn')) {
    gameDuration = event.target.dataset.time;
    screens[1].classList.add('up');
    startGame();
  }
});
function startGame() {
  setTime(gameDuration);
  setInterval(decreaseTime, 1000);
  getCircle();

  
}
function decreaseTime() {
  let current = --gameDuration;
  if (current === 0) {
    setTime(current);
    finishGame();
  } else {
    setTime(current);
  }

  
}
function setTime(value) {
  if (value >= 0) {
    if (value < 10) {
      timer.innerHTML = `00:0${value}`;
    } else {
      timer.innerHTML = `00:${value}`;
    }
  }
}
function getCircle() {
  const size = getRandomNumber(10, 50);
  const circle = document.createElement('div');
  const {width, height} = board.getBoundingClientRect();
  const x = getRandomNumber(0, (width-size));
  const y =  getRandomNumber(0, (height-size));
  const color = COLORS[getRandomNumber(0, COLORS.length-1)];
  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.backgroundColor = color;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  board.append(circle);
  

}

function getRandomNumber(min, max){
  return (Math.round(Math.random()*(max - min)+min));
}
function finishGame() {
  board.innerHTML = `<h1>Score: <span class='primary'>${score}</span></h1>`;
  timer.parentElement.classList.add('hide');
}
