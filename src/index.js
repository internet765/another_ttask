import 'glider-js/glider.min.css';
import 'animate.css';
import './index.css';
import { WOW } from 'wowjs';
import Glider from 'glider-js';

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
new WOW().init();

//glider init
new Glider(document.querySelector('.glider'), {
  slidesToShow: 'auto',
  slidesToScroll: 'auto',
  resizeLock: true,
  itemWidth: 362,
  draggable: true,
  scrollLock: true,
  dots: '',
  responsive: [
    {
      breakpoint: 540,
      settings: {
        dots: '.dots',
      },
    },
  ],
});
