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
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // document.querySelector('.message').textContent = 'Correct number!';

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
});
