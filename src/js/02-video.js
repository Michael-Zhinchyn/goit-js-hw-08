import Player  from "@vimeo/player"
import throttle from "lodash.throttle"


// отримую попередньо встановлений елемент плеєра за його id
const video = document.getElementById("vimeo-player")
// ініціалізую Vimeo Player з цим елементом
const player = new Player(video)


// ініціалізую throttle function
const throttledTimeUpdate = throttle(seconds => {
    // Зберігаю час в локальне сховище.
    localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);  // Throttle 1 раз в секунду

// за допомогою методу on() відстежую подію timeupdate
player.on('timeupdate', function (data) {
    throttledTimeUpdate(data.seconds);
});

// якщо час відтворення збережено в локальне сховище, встановлюю час з сховища 
const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
    player.setCurrentTime(savedTime);
}


const pageLinkSec = document.querySelector('a')
pageLinkSec.style.fontWeight = '600'
pageLinkSec.style.color = 'blue'
pageLinkSec.style.textDecoration = 'none'

console.log(pageLinkSec);

