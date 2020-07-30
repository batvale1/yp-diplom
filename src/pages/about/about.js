import 'swiper/swiper-bundle.css';
import './about.css';
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper__container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.swiper__pagination',
    clickable: true,
    bulletClass: 'swiper__bullet',
    bulletActiveClass: 'swiper__bullet_active'
  },
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
});
