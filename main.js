let currentSlide = 0;
const slides = document.querySelectorAll('.slider-box img');
const totalSlides = slides.length;
console.log(totalSlides);
const backBtn = document.querySelector('.back-btn');
const nextBtn = document.querySelector('.next-btn');
const indicators = document.querySelectorAll('.slider-indicator');
console.log(indicators.length);


nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        const translateValue = -currentSlide * 105;
        slides.forEach((slide) => {
            slide.style.transform = `translateX(${translateValue}%)`;
        });
    }
  })

backBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        const translateValue = -currentSlide * 105;
        slides.forEach((slide) => {
            slide.style.transform = `translateX(${translateValue}%)`;
        });
    }
})