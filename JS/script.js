const btnToggler = document.querySelector('.navbar-toggler-icon');
const main = document.querySelector('.main-class');
const footer = document.querySelector('.footer-class');

let nombreDeClics = 0;
btnToggler.addEventListener('click', function() {
   nombreDeClics++
   main.style.opacity = '0.3';
   footer.style.opacity = '0.3';

   if (nombreDeClics === 2) {
    main.style.opacity = '1';
    footer.style.opacity = '1';
    nombreDeClics = 0;
   }
})
