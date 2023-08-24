const carousel = document.getElementById("imageCarousel");
const images = carousel.getElementsByTagName("img");
let currentIndex = 0;

function showImage(index) {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[index].style.display = "block";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

setInterval(nextImage, 3000); // Muda a imagem a cada 3 segundos (3000ms)