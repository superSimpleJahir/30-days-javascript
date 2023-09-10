const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const ruseltPrint = document.querySelector('#ruseltPrint');


// const sayHello = function () {
//   console.log('I love Bangladesh.', Date.now());
// }

// start.addEventListener('click', () => {
//   const intervalId = setInterval(sayHello, 1000);
//   return clearIn = intervalId;
// })

// let clearIn = '';

// stop.addEventListener('click', () => {
//   clearInterval(clearIn);
// })



// const sayHello = () => {
//   console.log(`I love My country  ${Date.now()}`);
// }

// start.addEventListener('click', () => {
//   const startInter = setInterval(sayHello, 1000);
//   return stopInter = startInter;
// })
// let stopInter = '';

// stop.addEventListener('click', () => {
//   clearInterval(stopInter);
// })


/*// genetate a random color
const randomColor1 = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(randomColor1());


// Random Color changer 
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
const color = function () {
  let bodyColor = document.body.style.background = randomColor();
  return bodyColor;
}


start.addEventListener('click', () => {
  const setColor = setInterval(color, 1000);
  return stopColor = setColor;
})

let stopColor = ''
stop.addEventListener('click', () => {
  clearInterval(stopColor);
})*/

// randomColore generator 

function tryRandomcolor() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
let intervaleId;
const startChangingColor = function () {
  if (!intervaleId) {
    intervaleId = setInterval(colorChanger, 1000);
  }

  function colorChanger() {
    document.body.style.background = tryRandomcolor();
    ruseltPrint.innerHTML = tryRandomcolor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervaleId);
  intervaleId = null;
};

start.addEventListener('click', startChangingColor);

stop.addEventListener('click', stopChangingColor);