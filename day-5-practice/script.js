// function getValue() {
//   let txt = document.getElementById('text');
//   let txtValue = txt.value;

//   let pass = document.getElementById('password');
//   let passValue = password.value;

//   let result = document.getElementById('h1')
//   result.innerText = `Name is ${txtValue} and password is ${passValue}`;
// }

let btn = document.getElementById('btn')
btn.addEventListener('click', () => {
  let txt = document.getElementById('text');
  let txtValue = txt.value;

  let pass = document.getElementById('password');
  let passValue = password.value;

  let result = document.getElementById('h1')
  result.innerHTML = `Name is <span>${txtValue}</span> and password is <span>${passValue}</span>`;
})