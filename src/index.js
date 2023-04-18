import 'swiper/swiper-bundle.min.css';

import './index.css';
import WOW from 'wow.js';
import Swiper, { Pagination } from 'swiper';

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
    speed: 400,
    spaceBetween: 30,
    loop: true,
});