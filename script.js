const container = document.querySelector(".grid-container");

const gridGenerator = (num) => {
  for (i = 0; i < num; i++) {
    const newSquare = document.createElement("div");
    newSquare.className = "grid-item";
    container.appendChild(newSquare);
  }
};

gridGenerator(256);
