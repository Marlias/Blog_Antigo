window.addEventListener("DOMContentLoaded", () => {
  const birds = [
    {
      nome: "Sabiá",
      imagem: "assets/birds/sabia.png",
      som: "assets/birds/sabia.mp3",
    },
    {
      nome: "Canário",
      imagem: "assets/birds/canario.png",
      som: "assets/birds/canario.mp3",
    },
    {
      nome: "Bem-te-vi",
      imagem: "assets/birds/bem-te-vi.png",
      som: "assets/birds/bem-te-vi.mp3",
    },
  ];

  const birdsList = document.getElementById("birdsList");

  // Se isso aqui der null, é porque o id não existe no HTML
  if (!birdsList) {
    alert('Não achei o elemento com id="birdsList" no HTML.');
    return;
  }

  const birdAudio = new Audio();

  birds.forEach((bird) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "bird-btn";

    const img = document.createElement("img");
    img.src = bird.imagem;
    img.alt = bird.nome;
    img.className = "bird-img";

    const name = document.createElement("div");
    name.textContent = bird.nome;
    name.className = "bird-name";

    button.appendChild(img);
    button.appendChild(name);

    button.addEventListener("mouseenter", () => {
      birdAudio.pause();
      birdAudio.currentTime = 0;
      birdAudio.src = bird.som;
      birdAudio.play();
    });

    button.addEventListener("mouseleave", () => {
      birdAudio.pause();
      birdAudio.currentTime = 0;
      birdAudio.src = null;
    });

    birdsList.appendChild(button);
  });
  const imagem = document.getElementById("imgAnuncio");

  const imagens = [
    "Anuncio/Fosforo.jpg",
    "Anuncio/Saul.jpg"
  ];

  let indiceAtual = 0;

  function trocarImagem(){
    indiceAtual = indiceAtual === 0 ? 1 : 0;

    imagem.src = imagens[indiceAtual];
  }

  setInterval(trocarImagem, 3000);
});
