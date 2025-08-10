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