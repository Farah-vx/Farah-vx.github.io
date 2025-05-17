window.addEventListener('DOMContentLoaded', () => {
    // select the text element
    const textElement = document.querySelector('.image-text');
    if (!textElement) return;// exit if the element is not found
  
    // get the text content and trim it
    const text = textElement.textContent.trim();
    textElement.textContent = '';// clear the text content
  
    // initialize index for typing animation
    let index = 0;
  
    // function to type each letter
    const typeLetter = () => {
       // check if there are more letters to type
      if (index < text.length) {
        const span = document.createElement('span'); // create a span element for each letter
        span.textContent = text[index];
        textElement.appendChild(span); // append the span to the text element
        index++;
        setTimeout(typeLetter, 350);   // call the function again after a delay
      }
    };
  
    typeLetter(); // start animation

    // Slide-in animation for(.detail-box ) elements
  const detailBoxes = document.querySelectorAll('.detail-box') ;
  // animate each detail box with a delay
  detailBoxes.forEach((box, i) => {
    setTimeout(() => {
      // add the show class to trigger the animation
      box.classList.add('show');
    }, i * 600); // delay each box by 600ms
  });
  });


  

