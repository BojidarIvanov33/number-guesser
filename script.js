'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'You win !!!';

// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 100;
// document.querySelector('.guess').value = 99;
// console.log(document.querySelector('.guess').value);
let sectetNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = sectetNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let score = Number(document.querySelector('.score').textContent);
  let highscore = Number(document.querySelector('.highscore').textContent);

  if (!guess) {
    document.querySelector('.message').textContent = 'No NuMbEr';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess === sectetNumber) {
    document.querySelector('.message').textContent = '!YoU WiN!';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('body').style.backgroundColor = '#ff000d';
    document.querySelector('.number').textContent = sectetNumber;
    document.querySelector('.number').style.fontSize = '150px';
    document.querySelector('.number').style.width = '400px';
    document.querySelector('.message').style.fontSize = '5rem';
  } else if (guess > sectetNumber) {
    document.querySelector('.message').textContent = '!ToO HiGh!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < sectetNumber) {
    document.querySelector('.message').textContent = '!ToO LoW!';
    score--;
    document.querySelector('.score').textContent = score;
  }
  if (score <= 0) {
    document.querySelector('.message').textContent = 'LoOsEr';
    document.querySelector('.score').textContent = '0';
    document.querySelector('.gameOver').style.visibility = 'visible';
    document.querySelector('body').style.backgroundColor = 'rgb(225, 255, 0)';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '10';
  sectetNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.fontSize = '6rem';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').style.fontSize = '3rem';
  document.querySelector('.gameOver').style.visibility = 'hidden';
});
