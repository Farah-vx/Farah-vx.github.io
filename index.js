let index = 0;
const track = document.getElementById('rotate-track');
const indicators = document.getElementById('rotate-indicators');
const totalSlides = track.children.length;

function updateIndicators() {
  indicators.innerHTML = '';
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.toggle('active', i === index);
    dot.onclick = () => {
      index = i;
      updaterotate();
    };
    indicators.appendChild(dot);
  }
}

function updaterotate() {
  track.style.transform = `translateX(-${index * 100}%)`;
  updateIndicators();
}

// Auto-scroll every 5 seconds
setInterval(() => {
  index = (index + 1) % totalSlides;
  updaterotate();
}, 5000);

updateIndicators();
updaterotate();

// Swipe support
let startX = 0;
let isDragging = false;

track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
}, { passive: true });

track.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const diffX = startX - currentX;

  if (Math.abs(diffX) > 50) {
    if (diffX > 0 && index < totalSlides - 1) {
      index++;
    } else if (diffX < 0 && index > 0) {
      index--;
    }
    updaterotate();
    isDragging = false;
  }
}, { passive: true });

track.addEventListener('touchend', () => {
  isDragging = false;
});




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
  
  