console.log(`Jarvis Initiate Connection`);

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

// initializeSlider();

// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervalId = null;

// function initializeSlider(){
//     slides[slideIndex].classList.add("displaySlide");
//     intervalId = setInterval(nxtSlide, 5000);
    
// }
// function showSlide(index){

//     if(index >= slides.length){
//         slideIndex = 0;
//     }
//     else if(index < 0){
//         slideIndex = slides.length - 1;
//     }

//     slides.forEach(slide => {
//         slide.classList.remove("displaySlide");
//     });
//     slides[slideIndex].classList.add("displaySlide");
// }
// function prevSlide(){
//     clearInterval(intervalId);
//     slideIndex--;
//     showSlide(slideIndex);
// }
// function nxtSlide(){
//     slideIndex++;
//     showSlide(slideIndex);
// }