let currentSlide = 0;
const slides = document.querySelectorAll(".slider-box img");
const totalSlides = slides.length;
const backBtn = document.querySelector(".back-btn");
const nextBtn = document.querySelector(".next-btn");
const indicators = document.querySelectorAll(".slider-indicator");

document.addEventListener("DOMContentLoaded", function () {
  indicators[0].classList.add("active");

  nextBtn.addEventListener("click", () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      const translateValue = -currentSlide * 105;
      slides.forEach((slide) => {
        slide.style.transform = `translateX(${translateValue}%)`;
      });
    }

    indicators.forEach((indicator, i) => {
      if (i === currentSlide) {
        indicator.classList.add("active");
        indicators[0].classList.remove("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  });

  backBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      const translateValue = -currentSlide * 105;
      slides.forEach((slide) => {
        slide.style.transform = `translateX(${translateValue}%)`;
      });
    }

    indicators.forEach((indicator, i) => {
      if (i === currentSlide) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  });

  indicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
      console.log(`${i} is clicked!`); //For debugging use only
      if (currentSlide < slides.length) {
        const translateValue = -i * 105;
        slides.forEach((slide) => {
          slide.style.transform = `translateX(${translateValue}%)`;
        });
      }

      indicators.forEach((otherIndicator) => {
        if (otherIndicator !== indicator) {
          otherIndicator.classList.remove("active");
        }
      });

      indicator.classList.add("active");
    });
  });
});
