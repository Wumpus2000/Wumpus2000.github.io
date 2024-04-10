// script.js

function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    
    for (let i = 10; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.animationDelay = `${Math.random() * 3}s`;
      
      // Randomly choose a shape
      const shapes = ['star', 'moon', 'triangle', 'circle', 'hexagon', 'darkblue-circle'];
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      confetti.classList.add(randomShape);
      
      confettiContainer.appendChild(confetti);
    }
  }
  
  // Trigger the confetti creation when the page loads
  window.addEventListener('load', createConfetti);
  