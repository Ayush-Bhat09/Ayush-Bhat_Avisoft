const slideData = [
    { "title": "Slide 1", "content": "This is the first slide" },
    { "title": "Slide 2", "content": "This is the second slide" },
    { "title": "Slide 3", "content": "This is the third slide" }
  ];

  // Select the main slider element
  const slider = document.getElementById('slider');
  const slidesContainer = document.getElementById('slides');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function adder() {
    slideData.forEach((slide, index) => {
      
      const slideElement = document.createElement('div');
      slideElement.classList.add('slide');
      slideElement.innerHTML = `<h2>${slide.title}</h2><p>${slide.content}</p>`;
      
      if (index === 0) {
        slideElement.classList.add('active');
      }

      slidesContainer.appendChild(slideElement);
    });
  }

  function mover(direction) {
    const activeSlide = document.querySelector('.slide.active');
    let newActiveSlide;

    if (direction === 'next') {
      newActiveSlide = activeSlide.nextElementSibling || slidesContainer.firstElementChild;
    } else if (direction === 'prev') {
      newActiveSlide = activeSlide.previousElementSibling || slidesContainer.lastElementChild;
    }

    activeSlide.classList.remove('active');
    newActiveSlide.classList.add('active');

    const index = Array.from(slidesContainer.children).indexOf(newActiveSlide);
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => mover('next'));
  prevBtn.addEventListener('click', () => mover('prev'));

  document.addEventListener('DOMContentLoaded', adder);