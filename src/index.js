import './index.css';

// бургер меню

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    document.querySelector('.header__menu').classList.remove('active');
    document.querySelector('.burger').classList.remove('active');
  }
});

document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.header__menu').classList.toggle('active');
  document.querySelector('.burger').classList.toggle('active');
});