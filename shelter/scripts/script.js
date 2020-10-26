// Burger Menu
const hamburgerMenuBtn = document.querySelector('#hamburger-menu-link');
const hamburgerNav = document.querySelector('#nav-hamburger');
const mainLogo = document.querySelector('#main-logo');
const overlay = document.querySelector('#overlay');
const activeMenuElement = hamburgerNav.querySelector('.nav__item--active');

hamburgerMenuBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (hamburgerNav.classList.contains('nav--hamburger-visible')) {
    hamburgerNav.classList.remove('nav--hamburger-visible');
    hamburgerMenuBtn.classList.remove('hamburger-menu-link--hamburger');
    mainLogo.style.visibility = 'visible';
    document.body.style.overflow = 'visible';
    overlay.style.display = 'none';
  } else {
    hamburgerNav.classList.add('nav--hamburger-visible');
    hamburgerMenuBtn.classList.add('hamburger-menu-link--hamburger');
    mainLogo.style.visibility = 'hidden';
    document.body.style.overflow = 'hidden';
    overlay.style.display = 'block';
  }
})

overlay.addEventListener('click', () => {
  hamburgerNav.classList.remove('nav--hamburger-visible');
  hamburgerMenuBtn.classList.remove('hamburger-menu-link--hamburger');
  mainLogo.style.visibility = 'visible';
  document.body.style.overflow = 'visible';
  overlay.style.display = 'none';
})
console.log(activeMenuElement);

activeMenuElement.addEventListener('click', () => {
  if (hamburgerNav.classList.contains('nav--hamburger-visible')) {
    hamburgerNav.classList.remove('nav--hamburger-visible');
    hamburgerMenuBtn.classList.remove('hamburger-menu-link--hamburger');
    mainLogo.style.visibility = 'visible';
    document.body.style.overflow = 'visible';
    overlay.style.display = 'none';
  }
})