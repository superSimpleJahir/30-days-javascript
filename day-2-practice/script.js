const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  let px = this.dataset.sizing || '';
  console.log(this.name);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + px);
}

inputs.forEach((input) => {
  input.addEventListener('change', handleUpdate);
})
inputs.forEach((input) => {
  input.addEventListener('mousemove', handleUpdate);
})