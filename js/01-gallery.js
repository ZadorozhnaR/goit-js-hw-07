import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const containerPhotos = document.querySelector(".gallery");

containerPhotos.addEventListener("click", handleClick);

const addPhotos = galleryItems
  .map(
    (photo) =>
      `<li class ="gallery__item">
    <a class ="gallery__link" href ="${photo.original}">
    <img class ="gallery__image"
    src ="${photo.preview}" data-source = "${photo.original}" alt ="${photo.description}" loading ="lazy" />
    </a>
  </li>`
  )
  .join("");

containerPhotos.insertAdjacentHTML("beforeend", addPhotos);

function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  } else {
    const currentUrl = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${currentUrl}" width="800" height="600">
`);

    instance.show();
  }
}
