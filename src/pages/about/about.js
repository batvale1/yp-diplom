import './about.css';
import Swiper, { Navigation, Pagination } from 'swiper';


Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper__container', {
  slidesPerView: 'auto',
  centeredSlides: true,
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
