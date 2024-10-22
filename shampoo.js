const images = document.querySelectorAll('.image');
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        image.classList.remove('active');
        if (i === index) {
            image.classList.add('active');
        }
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 3000); // Muda a imagem a cada 3 segundos