const container6 = document.querySelector(".container6");
const fragment = document.createDocumentFragment();
const album = document.querySelector(".album");
for (let i = 1; i <= 15; i++) {
  const imgBox = document.createElement("div");
  imgBox.className = "album_img";
  const img = document.createElement("img");
  img.src = `../images/cat-${i}.jpg`;
  imgBox.appendChild(img);
  fragment.appendChild(imgBox);
}
album.appendChild(fragment);
const album2 = album.cloneNode(true);
album2.classList.add("album2");
container6.appendChild(album2);
