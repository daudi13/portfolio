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

const userEmail = document.getElementById('email');
const dialog = document.querySelector('.callAction');
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) => {
	const emailInput = userEmail.value;

	if (/[A-Z]/.test(emailInput)) {
		dialog.innerHTML = `*Please ensure your email address is in lowercase letters`;
		e.preventDefault();
	}
});