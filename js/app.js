const mobileToggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('nav');
mobileToggle.addEventListener('click', () => { 
  mobileMenu.classList.toggle('open');
});

const featureMobileToggle = document.querySelector('.feature-mobile-toggle');
const featureMobile = document.querySelector('footer .feature');
featureMobileToggle.addEventListener('click', () => { 
  featureMobile.classList.toggle('open');
});
