let randomNumber = parseInt(Math.random() * 100 + 1);

const submite = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOrhi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submite.addEventListener('click', (e) => {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    validateGuess(guess);
  })
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valide number`);
  } else if (guess < 1) {
    alert(`Please enter a number more then 1`);
  } else if (guess > 1000) {
    alert(`Please enter a number less then 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 5) {
      displayGuess(guess);
      displayMessage(`<span>Game Over.</span> Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your number is too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Your number is too High.`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${5 - numGuess}`
}

function displayMessage(message) {
  lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<button id= "newGame">Start new game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${5 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    lowOrhi.innerHTML = '';

    playGame = true;
  })
}