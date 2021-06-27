'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

function deductScore() {
  score--;
  document.querySelector('.score').textContent = score;
}
function increaseScore() {
  score++;
  document.querySelector('.score').textContent = score;
}
function looseScore() {
  document.querySelector('.score').textContent = 0;
}
function queryPanelText(className, message) {
  document.querySelector(className).textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  //when player make no guess
  if (!guess) {
    document.querySelector('.message').textContent = '👿 no number';
  }
  //when makes player make the right the guess
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = "It's the correct guess";
    increaseScore();
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when the guess made by the player is wrong
  else if (guess > secretNumber) {
    if (score > 1) {
      //when the guessed no. is a bit high by 1
      if (guess - secretNumber === 1) {
        document.querySelector('.message').textContent = 'Just a bit high';
      } else {
        //when the guessed no. is higher by 2 or more
        document.querySelector('.message').textContent = 'Too high';
      }
      deductScore();
    } else {
      document.querySelector('.message').textContent = 'You Loose';
      looseScore();
    }
  }
  //when the guessed no. is wrong
  else if (guess < secretNumber) {
    if (score > 1) {
      //when its just less by 1
      if (secretNumber - guess === 1) {
        document.querySelector('.message').textContent = 'Just a bit low';
      } else {
        //when its lesseer than 2 or more
        document.querySelector('.message').textContent = 'Too Low';
      }
      deductScore();
    } else {
      document.querySelector('.message').textContent = 'You Loose';
      looseScore();
    }
  }
});

//programming the AGAIN button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start Guessing....';
  document.querySelector('.number').textContent = '?';
});
