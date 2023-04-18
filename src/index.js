import 'swiper/swiper-bundle.min.css';

import './index.css';
import WOW from 'wow.js';
import Swiper, {
  Pagination
} from 'swiper';

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

//swiper init
const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  spaceBetween: 30,
  // slidesPerView: 5,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },
  // breakpoints: {
  //   540: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },
  //   780: {
  //     slidesPerView: 3,
  //     spaceBetween: 25
  //   },
  //   1024: {
  //     slidesPerView: 4,
  //     spaceBetween: 30
  //   }
  // }
});
