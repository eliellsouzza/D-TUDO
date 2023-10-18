//LOADER DA PAGINA
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

// api APPLE

function carregar() {
  fetch("dados.json")
    .then((response) => response.json())
    .then((dados) => {
      const container = document.querySelector("#produtos");

      dados.map((dados) => {
        const card = document.createElement("div");
        card.classList.add("card");


  //CRIA OS ELEMENTOS PARA AS INFORMAÇÕES APPLE
        const img = document.createElement("img");
        img.src = dados.image;
        img.alt = dados.name;


         

        const titulo = document.createElement("h1");
        titulo.textContent = dados.name;

        const description = document.createElement("h4");
        description.textContent = dados.price;

        const colors = document.createElement("h4");
        colors.textContent = dados.colors;

        const size = document.createElement("h4");
        size.textContent = dados.size;

        const memory = document.createElement("h4");
        memory.textContent = dados.memory;

        //JOGA NO CARD
        card.appendChild(titulo);
        card.appendChild(img);
        card.appendChild(description);
        card.appendChild(size);
        card.appendChild(memory);
        card.appendChild(colors);

        container.appendChild(card);

        console.log();
      });
    });
}
carregar();

  
// api xiaomi

function carregar1() {
  fetch("dadosXiaomi.json")
    .then((response) => response.json())
    .then((dados) => {
      const containerX = document.querySelector("#produtos-xiaomi");

      dados.map((dados) => {
        const cardX = document.createElement("div");
        cardX.classList.add("cardX");


  //CRIA OS ELEMENTOS PARA AS INFORMAÇÕES APPLE
        const img1 = document.createElement("img");
        img1.src = dados.image;
        img1.alt = dados.name;


         

        const titulo = document.createElement("h1");
        titulo.textContent = dados.name;

        const description = document.createElement("h4");
        description.textContent = dados.price;

        const colors = document.createElement("h4");
        colors.textContent = dados.colors;

        const size = document.createElement("h4");
        size.textContent = dados.size;

        const memory = document.createElement("h4");
        memory.textContent = dados.memory;

        //JOGA NO CARD
        cardX.appendChild(titulo);
        cardX.appendChild(img1);
        cardX.appendChild(description);
        cardX.appendChild(size);
        cardX.appendChild(memory);
        cardX.appendChild(colors);

        containerX.appendChild(cardX);

        console.log();
      });
    });
}
carregar1();

  