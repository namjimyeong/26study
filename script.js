
const music = document.querySelector("#main-audio"); 
const earth = document.querySelector(".earth");
const profile = document.querySelector(".profile");

const planet1 = document.querySelector(".planet1");
const planet2 = document.querySelector(".planet2");
const planet3 = document.querySelector(".planet3");
const planet4 = document.querySelector(".planet4");


const musicList = [
    "./mp3/downtown.mp3", 
    "./mp3/malibu.mp3", 
    "./mp3/jennie.mp3", 
    "./mp3/woodz.mp3"
];


let isLoop = false;


earth.addEventListener("click", function() {
    if (music.paused == true) {
        music.play();
        
        earth.style.animationPlayState = "running";
        console.log("지구: 다시 돌기 시작");
    } else {
        music.pause();
        
        earth.style.animationPlayState = "paused";
        console.log("지구: 그 자리에 멈춤");
    }
});


profile.addEventListener("click", function() {
    if (isLoop == false) {
        isLoop = true;
        music.loop = true; 
        profile.style.transform = "scale(1.05)"; 
        console.log("한 곡 반복 ON");
    } else {
        isLoop = false;
        music.loop = false;
        profile.style.transform = "scale(1)"; 
        console.log("한 곡 반복 OFF");
    }
});


planet1.addEventListener("click", function() {
    music.src = musicList[0];
    music.play();
    earth.style.animationPlayState = "running"; 
    console.log("1번 곡 재생");
});

planet2.addEventListener("click", function() {
    music.src = musicList[1];
    music.play();
    earth.style.animationPlayState = "running";
    console.log("2번 곡 재생");
});

planet3.addEventListener("click", function() {
    music.src = musicList[2];
    music.play();
    earth.style.animationPlayState = "running";
    console.log("3번 곡 재생");
});

planet4.addEventListener("click", function() {
    music.src = musicList[3];
    music.play();
    earth.style.animationPlayState = "running";
    console.log("4번 곡 재생");
});