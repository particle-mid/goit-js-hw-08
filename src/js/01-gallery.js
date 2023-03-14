// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const markupImages = crateImageCardsMarkup(galleryItems);



function crateImageCardsMarkup(items) {
    return items
      .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
      })
      .join('');
  };
  galleryContainer.insertAdjacentHTML('beforeend', markupImages);

  const lightbox = new SimpleLightbox('.gallery a', { 
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    animationSpeed: 100,
   });