import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerPhotos_2 = document.querySelector(".gallery");

const addPhotos_2 = galleryItems
  .map(
    (photo) =>
      `<li class ="gallery__item">
    <a class ="gallery__link" href ="${photo.original}">
    <img class ="gallery__image"
    src ="${photo.preview}" alt ="${photo.description}"/>
    </a>
  </li>`
  )
  .join("");

containerPhotos_2.insertAdjacentHTML("beforeend", addPhotos_2);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
