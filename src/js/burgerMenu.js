
const burgerBtn = document.querySelector('[data-burger-btn]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const menuLinks = document.querySelectorAll('[data-menu-link]');
const iconUse = document.getElementById('burger-icon-use');

let isOpen = false;

const toggleMenu = () => {
  isOpen = !isOpen;

  if (isOpen) {
    mobileMenu.setAttribute('data-menu-open', '');
    burgerBtn.classList.add('open');
    iconUse.setAttribute('href', '/img/icons/sprite.svg#icon-burger-cross');
  } else {
    mobileMenu.removeAttribute('data-menu-open');
    burgerBtn.classList.remove('open');
    iconUse.setAttribute('href', '/img/icons/sprite.svg#icon-burger-regular');
  }
};

burgerBtn.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    isOpen = false;
    mobileMenu.removeAttribute('data-menu-open');
    burgerBtn.classList.remove('open');
    iconUse.setAttribute('href', '/img/icons/sprite.svg#icon-burger-regular');
  });
});

