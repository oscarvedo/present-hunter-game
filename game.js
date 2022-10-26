const canvas = document.querySelector('#game-container__canvas');
const gameContext = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame() {
  let canvasSize;

  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);

  let elementsSize = canvasSize / 10;

  console.log({ canvasSize, elementsSize });

  gameContext.font = elementsSize + 'px Verdana';
  gameContext.textAlign = 'end';

  gameContext.fillText(emojis['X'], elementsSize, elementsSize);
}
