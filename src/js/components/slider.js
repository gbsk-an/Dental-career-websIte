import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const slider = document.querySelector('.hiw__content');
const slider2 = document.querySelector('.feedback__content');

let swiper = new Swiper(slider, {
  slidesPerView: 2,
  loop: true,
  speed: 600,
  navigation: {
    nextEl: '.hiw__slider-btn--next',
    prevEl: '.hiw__slider-btn--prev',
  },
});

let swiper2 = new Swiper(slider2, {
  slidesPerView: 1,
  loop: false,
  speed: 600,
  navigation: {
    nextEl: '.feedback__slider-bt--next',
    prevEl: '.feedback__slider-bt--prev',
  },
});
