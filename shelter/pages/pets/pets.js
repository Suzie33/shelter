// Burger Menu
const hamburgerMenuBtn = document.querySelector('#hamburger-menu-link');
const hamburgerNav = document.querySelector('#nav-hamburger');
const mainLogo = document.querySelector('#main-logo');
const overlay = document.querySelector('#overlay');
const activeMenuElement = hamburgerNav.querySelector('.nav__item--active');
const headerFixed = document.querySelector('.header--fixed');
const main = document.querySelector('#main');

hamburgerMenuBtn.addEventListener('click', () => {

  if (hamburgerNav.classList.contains('nav--hamburger-visible')) {
    hamburgerNav.classList.remove('nav--hamburger-visible');
    hamburgerMenuBtn.classList.remove('hamburger-menu-link--hamburger');
    mainLogo.style.display = 'block';
    document.body.style.overflow = 'visible';
    overlay.style.display = 'none';
    headerFixed.classList.remove('header--fixed--static');
    main.classList.add('main--padding--top');

  } else {
    hamburgerNav.classList.add('nav--hamburger-visible');
    hamburgerMenuBtn.classList.add('hamburger-menu-link--hamburger');
    mainLogo.style.display = 'none';
    document.body.style.overflow = 'hidden';
    overlay.style.display = 'block';
    headerFixed.classList.add('header--fixed--static');
    main.classList.remove('main--padding--top');
  }
})

overlay.addEventListener('click', () => {
  hamburgerMenuBtn.click();
})

activeMenuElement.addEventListener('click', () => {
  hamburgerMenuBtn.click();
})