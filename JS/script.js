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
});

/* Apparition au défilement */

const ratio = .3;

const options = {
   root: null,
   rootMargin: '0px',
   threshold: ratio
};

const handleIntersect = function (entries, observer) {
   entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
         entry.target.classList.add('reveal-visible');
         observer.unobserve(entry.target);
      }
   })
};

document.documentElement.classList.add('reveal-loaded');
window.addEventListener('DOMContentLoaded', function () {
   const observer = new IntersectionObserver(handleIntersect, options);
   document.querySelectorAll('[class*= "reveal-"]').forEach(function (r) {
      observer.observe(r);
   });
})

/* Fin apparition au défilement */