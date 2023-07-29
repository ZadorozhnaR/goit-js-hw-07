import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const containerPhotos = document.querySelector(".gallery");

const addPhotos = galleryItems
  .map(
    (photo) =>
      `<li class ="gallery__item">
    <a class ="gallery__link" href ="${photo.original}">
    <img class ="gallery__image"
    src ="${photo.preview}" alt ="${photo.description}" loading ="lazy" />
    </a>
  </li>`
  )
  .join("");

containerPhotos.insertAdjacentHTML("beforeend", addPhotos);
