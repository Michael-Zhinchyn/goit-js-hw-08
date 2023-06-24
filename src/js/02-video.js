// Імпортуємо Player з @vimeo/player, це модуль для роботи з Vimeo Player API
import Player from '@vimeo/player';

// Імпортуємо throttle з lodash, це функція, яка обмежує частоту виконання іншої функції
import throttle from 'lodash.throttle';

// Отримуємо елемент плеєра з DOM за його id
const video = document.getElementById('vimeo-player');
// Ініціалізуємо Vimeo Player з цим елементом
const player = new Player(video);

// Ініціалізуємо throttle function, яка зберігає час відтворення в локальне сховище кожну секунду
const throttledTimeUpdate = throttle(seconds => {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);

// Відстежуємо подію timeupdate в плеєрі і запускаємо throttledTimeUpdate з часом відтворення як аргумент
player.on('timeupdate', function (data) {
  throttledTimeUpdate(data.seconds);
});

// Якщо в локальному сховищі є збережений час відтворення, встановлюємо його в плеєр
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}

// Задаємо стилі і текст для посилання на наступне завдання
const pageLink = document.querySelector('a');
pageLink.style.fontWeight = '600';
pageLink.style.color = 'blue';
pageLink.style.textDecoration = 'none';
pageLink.style.paddingRight = '20px';
pageLink.textContent = 'Go To Next Task - Feedback';
pageLink.href = '03-feedback.html';

// Задаємо стилі для елемента відео
video.style.position = 'absolute';
video.style.top = '35%';
video.style.left = '50%';
video.style.transform = 'translate(-50%, -50%)';

// Створюємо новий елемент div та добавляємо йому HTML
const iconElement = document.createElement('div');
iconElement.innerHTML = `
<a href="01-gallery.html" style="text-decoration: none; color: inherit;">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" style="vertical-align: middle;">
        <polyline points="35,10 15,25 35,40" stroke="#000000" stroke-width="4"/>
    </svg>
    <span style="margin-left: 5px;">Back</span>
</a>`;

// Добавляємо створене посилання до нашого div елемента та вставляємо його в DOM
iconElement.appendChild(pageLink);
document.body.prepend(iconElement);

// Задаємо стилі для div елемента
iconElement.style.display = 'flex';
iconElement.style.justifyContent = 'space-between';
iconElement.style.alignItems = 'center';

// Задаємо стилі для svg іконки
const icon = document.querySelector('svg');
icon.style.fill = 'orange';

// Задаємо стилі для тексту
const span = document.querySelector('span');
span.style.color = 'orange';
span.style.fontSize = '18px';
span.style.fontWeight = '500';
