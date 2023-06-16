// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const list = document.querySelector('.gallery');

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

list.insertAdjacentHTML('beforeend', markup(galleryItems));

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});

list.style.listStyle = 'none';

const pageLink = document.querySelector('a');
pageLink.style.fontWeight = '600';
pageLink.style.color = 'blue';
pageLink.style.textDecoration = 'none';
pageLink.style.display = 'flex';
pageLink.style.justifyContent = 'end';
pageLink.style.paddingRight = '20px';
pageLink.href = '02-video.html';
pageLink.textContent = 'Go To The Next Task - VIDEO';
