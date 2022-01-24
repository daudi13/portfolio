const btn = document.querySelector('.header__menu-btn')
const mobileMenu = document.querySelector('.mobile-menu')
btn.addEventListener('click', function(){
     mobileMenu.classList.toggle('active')
     btn.classList.toggle('active')
})