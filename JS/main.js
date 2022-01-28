// slider menu

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

// email validation

const userEmail = document.getElementById('userEmail');
const dialog = document.querySelector('.callAction');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  const emailInput = userEmail.value;

  if (/[A-Z]/.test(emailInput)) {
    dialog.innerHTML = '*Please ensure your email address is in lowercase';
    e.preventDefault();
  }
});

// local storage

const clientName = document.getElementById('userName');
const clientEmail = document.getElementById('userEmail');
const clientMessage = document.getElementById('message');
const formKey = 'form';

window.onload = () => {
  const formData = localStorage.getItem(formKey);

  if (formData) {
    const form = JSON.parse(formData);
    clientName.value = form.clientName;
    clientEmail.value = form.clientEmail;
    clientMessage.value = form.clientMessage;
  }
};

form.addEventListener('input', () => {
  const formObj = {
    clientName: clientName.value,
    clientEmail: clientEmail.value,
    clientMessage: clientMessage.value,
  };

  localStorage.setItem(formKey, JSON.stringify(formObj));
});