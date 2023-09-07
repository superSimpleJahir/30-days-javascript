// JavaScript for switch clock format 
const formatSwitchBtn = document.querySelector('.format-switch-btn');

formatSwitchBtn.addEventListener('click', () => {
  formatSwitchBtn.classList.toggle('active');

  var formateValue = formatSwitchBtn.getAttribute('data-format');

  if (formateValue === '12') {
    formatSwitchBtn.setAttribute('data-format', '24');
  }
  else {
    formatSwitchBtn.setAttribute('data-format', '12');
  }
});



// Get current time in JavaScript

function clock() {
  let toDay = new Date();

  let hours = toDay.getHours();
  let minutes = toDay.getMinutes();
  let seconds = toDay.getSeconds();
  let period = 'AM';

  // set the time period(AM/Pm)
  if (hours >= 12) {
    period = 'PM'
  }

  // Set the 12-hour clock formet
  var formateValue = formatSwitchBtn.getAttribute('data-format');
  if (formateValue === '12') {
    hours = hours > 12 ? hours % 12 : hours;
  }

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  document.querySelector('.hours').innerHTML = hours;
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;
  document.querySelector('.period').innerHTML = period;
}

let updateClock = setInterval(clock, 1000);

// Get the date in javaScript

let nowDay = new Date();
let dayNumber = nowDay.getDate();
const year = nowDay.getFullYear();
const dayName = nowDay.toLocaleString("default", { weekday: "long" });
const monthName = nowDay.toLocaleString("default", { month: "short" });


if (dayNumber < 10) {
  dayNumber = `0${dayNumber}`;
}

document.querySelector('.month-name').innerHTML = monthName;
document.querySelector('.day-name').innerHTML = dayName;
document.querySelector('.day-number').innerHTML = dayNumber;
document.querySelector('.year').innerHTML = year;


// JavaScript for dot menu toggle 
const dotMenuBtn = document.querySelector('.dot-menu-btn');
const dotMenu = document.querySelector('.dot-menu');

dotMenuBtn.addEventListener('click', () => {
  dotMenu.classList.toggle('active');
})


document.addEventListener('click', (e) => {
  if (e.target.id !== 'active_menu') {
    dotMenu.classList.remove('active');
  }
})