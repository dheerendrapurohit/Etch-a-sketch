const container = document.getElementById('container');
const gridSizeBtn = document.getElementById('btn');


function createGrid(size) {
  container.innerHTML = ''; 
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const totalDivs = size * size;
  
  
  for (let i = 0; i < totalDivs; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.width = `${960 / size}px`;
    div.style.height = `${960 / size}px`;
    container.appendChild(div);

    
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'green';
    });
  }
}


createGrid(16);


gridSizeBtn.addEventListener('click', () => {
  let newSize = parseInt(prompt('Enter the number of squares per side'));
  if (newSize && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});
