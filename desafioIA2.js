const imagens = document.querySelectorAll('.galeria img');
let contador = 0;

function trocarImagem() {
  contador++;
  if (contador >= imagens.length) {
    contador = 0;
  }

  imagens.forEach((imagem, index) => {
    imagem.style.transform = `translateX(${100 * (index - contador)}%)`;
  });
}

// Trocar a imagem automaticamente a cada 3 segundos (ajuste o tempo conforme necessário)
setInterval(trocarImagem, 3000);