const swiper1 = document.querySelector('.swiper-container'),
      burger = document.querySelector('.burger'),
      menuClose = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu');

const swiper = new Swiper(swiper1, {
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  // speed: 400,
  spaceBetween: 105,
});

burger.addEventListener('click', () => {
  menu.classList.add('menu--visible');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('menu--visible');
});