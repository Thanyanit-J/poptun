const img = document.getElementById("image");
let count = document.getElementById("score");
let score = 0;
const audio = new Audio('audio/pop.mp3');

// mouseclick event
img.addEventListener("mousedown", function(){
    increaseScore();
    img.src = 'img/tun2.png';
    audio.play();
});
    
img.addEventListener("mouseup", function(){
    img.src = 'img/tun1.png';
});

// touch event
img.addEventListener("touchstart", function(){
    increaseScore();
    img.src = 'popcat2.png';
    audio.play();
});

img.addEventListener("touchmove", function(){
    img.src = 'popcat1.png';
});

function increaseScore(){
    score++;
    count.innerHTML = score;
}
