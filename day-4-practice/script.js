// const button = document.querySelectorAll('.button');
// const body = document.querySelector('body')

// button.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
//   })

// })


const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach((btn) => {
  btn.addEventListener('click', (key) => {
    if (key.target.id === 'grey') {
      body.style.background = key.target.id;
      body.style.color = '#fff';
    }
    if (key.target.id === 'white') {
      body.style.background = key.target.id;
      body.style.color = '#000';
    }
    if (key.target.id === 'blue') {
      body.style.background = key.target.id;
      body.style.color = '#fff';
    }
    if (key.target.id === 'yellow') {
      body.style.background = key.target.id;
      body.style.color = '#000';
    }
    if (key.target.id === 'azure') {
      body.style.background = key.target.id;
      body.style.color = '#000';
    }
    if (key.target.id === 'brown') {
      body.style.background = key.target.id;
      body.style.color = '#fff';
    }
    if (key.target.id === 'cyan') {
      body.style.background = key.target.id;
      body.style.color = '#000';
    }
    if (key.target.id === 'green') {
      body.style.background = key.target.id;
      body.style.color = '#000';
    }
    if (key.target.id === 'lime') {
      body.style.background = key.target.id;
      body.style.color = '#000';
    }
    if (key.target.id === 'orange') {
      body.style.background = key.target.id;
      body.style.color = '#000';
    }
    if (key.target.id === 'pink') {
      body.style.background = key.target.id;
      body.style.color = '#000';
    }
    if (key.target.id === 'purple') {
      body.style.background = key.target.id;
      body.style.color = '#000';
    }
    if (key.target.id === 'red') {
      body.style.background = key.target.id;
      body.style.color = '#fff';
    }
    if (key.target.id === 'teal') {
      body.style.background = key.target.id;
      body.style.color = '#fff';
    }
  })
})