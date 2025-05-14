window.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.image-text');
    if (!textElement) return;
  
    const text = textElement.textContent.trim();
    textElement.textContent = '';
  
    let index = 0;
  
    const typeLetter = () => {
      if (index < text.length) {
        const span = document.createElement('span');
        span.textContent = text[index];
        textElement.appendChild(span);
        index++;
        setTimeout(typeLetter, 350); // adjust delay between letters here (300ms)
      }
    };
  
    typeLetter(); // start animation

    // ---- Slide-in animation for .detail-box elements ----
  const detailBoxes = document.querySelectorAll('.detail-box') ;
  detailBoxes.forEach((box, i) => {
    setTimeout(() => {
      box.classList.add('show');
    }, i * 600); // delay each box by 600ms
  });
  });


  

