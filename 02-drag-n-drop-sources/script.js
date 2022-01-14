'use strict';
const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);
console.log(item);
placeholders.forEach((placeholder, key) => {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
});

function dragstart(event) {
  event.target.classList.add('hold');
  setTimeout(()=>event.target.classList.add('hide'), 0);
}

function dragend(event) {
  event.target.classList.remove('hold', 'hide');
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add('hovered');
  event.target.closest('.row').classList.add('active');
}

function dragleave (event) {
  console.log('dragleave');
  event.target.classList.remove('hovered');
}

function dragdrop(event) {
  event.target.append(item);
  event.target.classList.remove('hovered');
}

