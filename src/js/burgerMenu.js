const burgerBtn = document.querySelector('[data-burger-btn]');
const closeBtn = document.querySelector('[data-close-btn]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const menuLinks = document.querySelectorAll('[data-menu-link]');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});

// Close with click at list
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});