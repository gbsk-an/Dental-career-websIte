import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.hiw__content', {
  slidesPerView: 2,
  loop: true,
  speed: 600,
  navigation: {
    nextEl: '.hiw__slider-btn--next',
    prevEl: '.hiw__slider-btn--prev',
  },
});
