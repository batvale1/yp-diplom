export const NEWS_API_KEY = '64d81b8b3d604a2facb996fb4b8cebc6';
export const NEWS_API_URL = 'https://nomoreparties.co/news/v2/everything';
export const GITHUB_API_URL = 'https://api.github.com/repos';
export const GITHUB_API_COMMITS_PATH = 'commits';

export const CARDS_PER_TIME = 100;
export const CARDS_TO_RENDER_PER_TIME = 3;

export const NEWS_BY_DAYS_AGO = 7;

export const GITHUB_COMMMITS_PER_PAGE = 20;

//messages
export const NOTHING_FOUND_TITLE = 'Ничего не найдено';
export const NOTHING_FOUND_TEXT = 'К сожалению по вашему запросу ничего не найдено.';

export const ERROR_SEARCH_TITLE = 'Что-то пошло не так...';
export const ERROR_SEARCH_TEXT = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

export const LOADING_SEARCH_TEXT = 'Идет поиск новостей...';

export const DEFAULT_VALIDATION_FAIL_TEXTS = {
  valueMissing: 'Нужно ввести ключевое слово'
};

//github profile
export const GITHUB_USER_NAME = 'batvale1';
export const GITHUB_REPOSITORY_NAME= 'yp-diplom';
export const GITHUB_REPOSITORY_LINK = `https://github.com/${GITHUB_USER_NAME}/${GITHUB_REPOSITORY_NAME}/commits`;

//swiper config
export const SWIPER_CONFIG = {
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
}