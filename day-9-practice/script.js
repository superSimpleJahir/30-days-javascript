const image = document.querySelector('#image');

image.addEventListener("click", (e) => {
  if (e.target.tagName === 'IMG') {
    let removeImage = e.target.parentNode;
    removeImage.remove();
  }
})