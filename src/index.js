import 'animate.css';
import '@glidejs/glide/dist/css/glide.core.min.css';
import './index.css';
import { WOW } from 'wowjs';
import Glide from '@glidejs/glide';

// бургер меню
const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    menu.classList.remove('active');
    burger.classList.remove('active');
  }
});

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
});

//wow init
new WOW().init({offset: 100,});

//glide init
new Glide('.glide', {
  type: 'carousel',
  perView: 5,
  gap: 30,
  perTouch: 3,
  breakpoints: {
    1900: {
      perView: 4,
    },
    1510: {
      perView: 3,
    },
    1170: {
      perView: 2,
    },
    710: {
      perView: 1,
    },
  },
}).mount();
