 const carousel = document.getElementById('carousel');
  const totalSlides = 5;
  let angle = 0;
  let autoplayStarted = false;
  let autoplayInterval;

  function rotateCarousel() {
    angle -= 360 / totalSlides;
    carousel.style.transform = `rotateY(${angle}deg)`;
  }

  document.getElementById('next').addEventListener('click', () => {
    rotateCarousel();

    // Start autoplay only on first click
    if (!autoplayStarted) {
      autoplayInterval = setInterval(rotateCarousel, 3000); // Rotate every 3 seconds
      autoplayStarted = true;
    }
  });

  document.getElementById('prev').addEventListener('click', () => {
    angle += 360 / totalSlides;
    carousel.style.transform = `rotateY(${angle}deg)`;
  });