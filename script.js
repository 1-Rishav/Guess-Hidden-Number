'use strict';
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
  const displayMessage=(Message)=>{
    document.querySelector('.message').textContent=Message;
  }
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    /* document.querySelector('.message').textContent = 'No Number'; */
    displayMessage('No Number');
  } else if (guess === secretNumber) {
    /* document.querySelector('.message').textContent = 'Correct Number'; */
    displayMessage('Correct Number')
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      /* document.querySelector('.message').textContent = */ displayMessage(guess>secretNumber?'Too High': 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      /* document.querySelector('.message').textContent = 'You Lost the Game'; */
      displayMessage('You Lost The Game')
      document.querySelector('.score').textContent = 0;
    }
  } /* else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High';
    score--;
    document.querySelector('.score').textContent = score;
  } */
});
 
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  /* document.querySelector('.message').textContent = 'Start guessing...'; */
  displayMessage('Start guessing...')
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
});
