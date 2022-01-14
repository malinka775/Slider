const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    removeActiveFromAll();
    slide.classList.add('active');
  });
});


function removeActiveFromAll() {
  slides.forEach(slide => slide.classList.remove('active'));
}