const mobileToggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('nav');
mobileToggle.addEventListener('click', () => { 
  mobileMenu.classList.toggle('open');
});
