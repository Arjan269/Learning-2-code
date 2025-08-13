console.log(`Jarvis Initiate Connection`);

// ==== Hero Section ==== //
const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['video/luffy-vs-kaido.mp4'];

let index = 0;
nextButton.addEventListener('click', function(){

    index += 1
    video.src = movieList[index];

    if (index === 1){
        index = -1;
    }
});




// ==== Info Section ==== //
  const radios = document.querySelectorAll('input[name="position"]');
  const slides = document.getElementById('slides');
  const totalSlides = radios.length;
  let currentIndex = 0;

  function updateCarousel(position) {
    slides.style.setProperty('--position', position);
  }

  // Set initial position
  updateCarousel(1);

  // Auto cycle function
  function cycleSlides() {
    currentIndex = (currentIndex + 1) % totalSlides;
    radios[currentIndex].checked = true;
    updateCarousel(currentIndex + 1);
  }

  // Set interval to cycle every 3 seconds
  let interval = setInterval(cycleSlides, 3000);

  // Listen for user manual click on radios
  radios.forEach((radio, index) => {
    radio.addEventListener('click', () => {
      clearInterval(interval); // Stop auto cycling temporarily
      currentIndex = index;
      updateCarousel(index + 1);
      // Restart auto cycling after user interaction
      interval = setInterval(cycleSlides, 3000);
    });
  });






  //  ==== About Section ==== //

document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".autoTakeFull");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        image.classList.add("active");
        image.parentElement.classList.add("active");  // <-- add here
      } else {
        image.classList.remove("active");
        image.parentElement.classList.remove("active");  // <-- and here
      }
    },
    {
      threshold: 0.7,
    }
  );

  observer.observe(image);
});

