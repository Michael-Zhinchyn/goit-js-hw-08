// Додаємо необхідні імпорти
import { galleryItems } from './gallery-items'; // Імпортуємо об'єкт galleryItems з файлу gallery-items
import SimpleLightbox from 'simplelightbox'; // Імпортуємо модуль SimpleLightbox
import 'simplelightbox/dist/simple-lightbox.min.css'; // Імпортуємо стилі для SimpleLightbox

// Ініціалізуємо змінну list, що посилається на елемент з класом 'gallery'
const list = document.querySelector('.gallery');

// Функція markup приймає список елементів і повертає HTML-розмітку для кожного елементу
function markup(items) {
  return items
    .map(
      item => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`
    )
    .join('');
}

// Додаємо розмітку до нашого списку
list.insertAdjacentHTML('beforeend', markup(galleryItems));

// Ініціалізуємо новий екземпляр SimpleLightbox з відповідними налаштуваннями
new SimpleLightbox('.gallery a', {
  captionDelay: 250, // Задержка перед відображенням підпису
  captionsData: 'alt', // Дані для підпису беруться з атрибута 'alt'
  captionPosition: 'bottom', // Позиція підпису - знизу
});

// Змінюємо стиль списку
list.style.listStyle = 'none';

// Ініціалізуємо змінну pageLink, що посилається на перший елемент 'a' на сторінці
const pageLink = document.querySelector('a');
// Змінюємо стилі для посилання
pageLink.style.fontWeight = '600';
pageLink.style.color = 'blue';
pageLink.style.textDecoration = 'none';
pageLink.style.display = 'flex';
pageLink.style.justifyContent = 'end';
pageLink.style.paddingRight = '20px';
// Задаємо атрибут href для посилання
pageLink.href = '02-video.html';
// Задаємо текст для посилання
pageLink.textContent = 'Go To The Next Task - VIDEO';
