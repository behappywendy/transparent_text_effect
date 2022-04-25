const fragment = document.createDocumentFragment();
const album = document.querySelector(".album");
for (let i = 1; i <= 16; i++) {
  const imgBox = document.createElement("div");
  imgBox.className = "album_img";
  const img = document.createElement("img");
  img.src = `../images/cat-${i}.jpg`;
  imgBox.appendChild(img);
  fragment.appendChild(imgBox);
}
album.appendChild(fragment);
