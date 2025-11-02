'use strict';
// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelectorAll('p'));
// // console.log(document.querySelectorAll('p'));

// document.querySelector('.message').textContent = 'Correct number! ';
// const content = document.querySelector('.message').textContent;
// console.log(content);

// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 13;

// console.log( document.querySelector('.guess').value)
// document.querySelector('.guess').value = 50;

//eventhandler function - a helper function (javascript engine will execute this
//function once the click event happens
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   // document.querySelector('.message').textContent = 'Correct number!';

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!';
//   }
// });
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // document.querySelector('.message').textContent = 'Correct number!';

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    //player wins
  } else if (guess === secretNumber) {
    
    document.querySelector('.message').textContent = 'Correct number! ';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.')
    document.querySelector('body').style.backgroundColor = '#603347';
    document.querySelector('.number').style.width = '30rem'

    if(score>highScore){
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
    }
    //gussed too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is too high! ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
    //gussed too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is too low! ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }
});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score') = score;
    document.querySelector('.guess').value = "";
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})
