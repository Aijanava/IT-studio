let burger = document.querySelector('.burger__menu');
let nav = document.querySelector('.nav');

burger.addEventListener('click', function(){
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
})