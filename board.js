let isPlayer1 = true;
const buttons = document.querySelectorAll('.but');

const gameClick = e => {
  const button = e.target;
  console.log(button);
  
  if (button.value !== "true") {
    button.textContent = isPlayer1 ? 'X' : 'O';    
    button.value = "true";
    isPlayer1 = !isPlayer1;
  }
}

buttons.forEach(btn => {
  btn.addEventListener('click', gameClick);
});

function reset(){
    location.reload();
}