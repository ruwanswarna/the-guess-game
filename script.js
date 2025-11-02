'use strict';
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);
console.log(document.querySelectorAll('p'));
// console.log(document.querySelectorAll('p'));

document.querySelector('.message').textContent = 'Correct number! ';
const content = document.querySelector('.message').textContent;
console.log(content);

document.querySelector('.score').textContent = 10;
document.querySelector('.number').textContent = 13;

console.log( document.querySelector('.guess').value) 
document.querySelector('.guess').value = 50;
