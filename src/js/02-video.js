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


const pageLink = document.querySelector('a')
pageLink.style.fontWeight = '600'
pageLink.style.color = 'blue'
pageLink.style.position = 'absolute'
pageLink.style.top = '19px'
pageLink.style.right = '10%'
pageLink.style.textDecoration = 'none'
pageLink.textContent = 'Go To Next Task - Feedback'
pageLink.href = '03-feedback.html';
video.style.position = 'absolute';
video.style.top = '50%';
video.style.left = '50%';
video.style.transform = 'translate(-50%, -50%)';

const iconElement = document.createElement('div');
iconElement.innerHTML = `
<a href="01-gallery.html" style="text-decoration: none; color: inherit;">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" style="vertical-align: middle;">
        <polyline points="35,10 15,25 35,40" stroke="#000000" stroke-width="4" fill="none" />
    </svg>
    <span style="margin-left: 5px;">Назад</span>
</a>`;
document.body.appendChild(iconElement);










