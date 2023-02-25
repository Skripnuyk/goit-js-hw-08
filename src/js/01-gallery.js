// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import '../../node_modules/simplelightbox/dist/simple-lightbox.css';

const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(element => {
    const galleryLink = document.createElement('a');
    galleryLink.classname = 'gallery__item';
    galleryLink.href = element.original;
    const galleryImage = document.createElement('img');
    galleryImage.className = 'gallery__image';
    galleryImage.src = element.preview;
    galleryImage.alt = element.description;
    galleryImage.setAttribute('title', element.description);

    galleryLink.append(galleryImage);
    items.push(galleryLink);
});

gallery.append(...items);

new SimpleLightbox('.gallery a', { captionDelay: 250 });