import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryBoxRef = document.querySelector('.gallery');
const createGallery = createCardsImg(galleryItems);
galleryBoxRef.insertAdjacentHTML('afterbegin', createGallery);

const ligthBox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
  close: false,
});

function createCardsImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"></a>`;
    })
    .join('');
}
