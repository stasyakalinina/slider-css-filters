const grayscale = document.querySelector('#grayscale');
const contrast = document.querySelector('#contrast');
const brightness = document.querySelector('#brightness');
const sepia = document.querySelector('#sepia');
const saturate = document.querySelector('#saturate');
const img = document.querySelector('#image');

grayscale.addEventListener('input', updateFilterValue);
contrast.addEventListener('input', updateFilterValue);
brightness.addEventListener('input', updateFilterValue);
sepia.addEventListener('input', updateFilterValue);
saturate.addEventListener('input', updateFilterValue);

function updateFilterValue() {
	img.style.filter = `
		grayscale(${grayscale.value}%)
		contrast(${contrast.value}%)
		brightness(${brightness.value}%)
		sepia(${sepia.value}%)
		saturate(${saturate.value}%)
	`;
}