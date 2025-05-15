// JavaScript code for animating the image text
window.addEventListener('DOMContentLoaded', () => {
  const textElement = document.querySelector('.image-text');
  if (!textElement) return;

  const text = textElement.textContent;
  textElement.textContent = '';

  [...text].forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${index * 0.05}s`;
    textElement.appendChild(span);
  });
});