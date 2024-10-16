const thumbnails = document.querySelectorAll('.thumbnail');
const largeImage = document.querySelector('.large-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        largeImage.src = thumbnail.src;
        largeImage.style.display = 'block';
    });
});

// Atualizar data e hora no rodapé
const dataHora = document.getElementById('data-hora');
dataHora.textContent = new Date().toLocaleString();