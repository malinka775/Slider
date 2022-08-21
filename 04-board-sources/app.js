'use strict';
const board = document.getElementById('board');

const SQUARES_NUMBER =  1000;

const colors = ['#ffff8f', '#fb6435', '#ffa723', '#bde500', '#5ebc03', '#028265', '#ff8cd1', '#04ccfe', '#ffa439'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  board.append(square);
  square.addEventListener('mouseover', () => {
    changeColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });
}

function changeColor(element) {
  const color = getRandomColor(colors);
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function getRandomColor(colors) {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #1d1d1d';
}