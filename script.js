let color = ''

const gridGenerator = gridSize => {
  const container = document.querySelector(".grid-container");
  let gridItem = container.querySelectorAll('div')
  gridItem.forEach(div => {
    div.remove()
  })
  container.style.gridTemplateRows =  `repeat(${gridSize}, 1fr)`
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  let size = gridSize* gridSize

  for (i = 0; i < size; i++) {
    let newSquare = document.createElement("div");
    newSquare.addEventListener('mouseover', squareColor)
    newSquare.style.border = '1px solid black'
    newSquare.classList.add("grid-item");
    container.insertAdjacentElement('beforeend', newSquare);
  }
};

const changeSize = input => {
    if(input >= 2 && input <= 100){
    gridGenerator(input)
    }
    else{
        console.log("number but be between 2-100")
    }
};

function squareColor (){
    if (color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` 
    }else{
    this.style.backgroundColor = color
    }
}

const changeColor = (colorChoice) => {
    color = colorChoice
}