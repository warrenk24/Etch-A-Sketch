const gridGenerator = (num) => {
  const container = document.querySelector(".grid-container");
  container.style.gridTemplateRows = 'repeat(16, 1fr)'
  container.style.gridTemplateColumns = 'repeat(16, 1fr)'

  for (i = 0; i < num; i++) {
    let newSquare = document.createElement("div");
    newSquare.style.border = '1px solid red'
    newSquare.classList.add("grid-item");
    container.insertAdjacentElement('beforeend', newSquare);
  }
};

gridGenerator(256);

