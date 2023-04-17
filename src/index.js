import './index.css';
import WOW from 'wow.js';

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
const wow = new WOW();
wow.init();