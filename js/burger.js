const burger=document.querySelector('.navbar__burger');
const burgerMenu=document.querySelector('.navbar__burger-menu');
const body=document.querySelector('body');
burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    body.classList.toggle('lock');
})