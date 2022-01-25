const mobileMenu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelectorAll('.nav-mobile');
const btn = document.querySelector('.header__menu-btn');

btn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  btn.classList.toggle('active');
});

menuLinks.forEach((link) => link.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  btn.classList.remove('active');
}));