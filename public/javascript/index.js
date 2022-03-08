// Display current date and time by moment js

var dateEl = document.querySelector('.date');
var timeEl = document.querySelector('.time');

dateEl.textContent = moment().format('ll');
timeEl.textContent = moment().format('LT');