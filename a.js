// Responsive navbar toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// Typing effect for multiple text
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Backend Developer', 'Freelancer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
