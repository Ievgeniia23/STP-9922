const burgerBtn = document.querySelector('[data-burger-btn]');
const closeBtn = document.querySelector('[data-close-btn]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const menuLinks = document.querySelectorAll('[data-menu-link]');

burgerBtn.addEventListener('click', () => {
  mobileMenu.setAttribute('data-menu-open', '');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.removeAttribute('data-menu-open');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.removeAttribute('data-menu-open');
  });
});
