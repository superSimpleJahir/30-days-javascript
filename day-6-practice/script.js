const form = document.querySelector('#bmiForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Pleace give a valid height.`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Pleace give a valid weight.`;
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = `Under Weight BMI <span>${bmi}</span>`;
    }
    else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `Normal Range BMI <span>${bmi}</span>`;
    }
    else if (bmi > 24.9) {
      result.innerHTML = `Overweight <span>${bmi}</span>`;
    }
  }

})


// Fahrenheit to Celsius
const FtoCForm = document.querySelector('#FtoCForm');

FtoCForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fahrenheit = parseInt(document.querySelector('#fahrenheit').value);
  const celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2);
  const cresult = document.querySelector('#fcresult');
  cresult.innerHTML = `<span>${celsius}</span> °C`
})

// Celsius to Fahrenheit
const CtoFForm = document.querySelector('#CtoFForm');

CtoFForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const celsius = parseInt(document.querySelector('#celsius').value);
  const cfresult = document.querySelector('#cfresult');
  const fahrenheit = ((celsius * 9 / 5) + 32).toFixed(2);
  cfresult.innerHTML = `<span>${fahrenheit}</span> °F`
})