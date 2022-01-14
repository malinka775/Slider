'use strict';
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slideCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');

let activeSlideIndex = 0;

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {       
  changeSlide('up');
  console.log(activeSlideIndex);
});
downBtn.addEventListener('click', () => {       
  changeSlide('down');
  console.log(activeSlideIndex);
});

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === slideCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideCount - 1;
    }
  }
  mainSlide.style.transform = `translateY(-${(activeSlideIndex)*100}vh)`;
  sidebar.style.transform = `translateY(${(activeSlideIndex)*100}vh)`;
}

