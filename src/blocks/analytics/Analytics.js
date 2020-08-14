import BaseComponent from "../../js/components/BaseComponent";
import {
  getMonth,
  MONTHS_FORMAT_DEFAULT
} from "../../js/utils/date-formatter";

export default class Analytics extends BaseComponent{

  //markup
  #title;
  #resultsList;

  //callbacks
  #getData;
  #renderCard;
  
  constructor(...args) {

    super(...args);

    //markup
    this._invisibleClass = 'analytics_hidden';
    this.#title = this._element.querySelector('.analytics__title_month');
    this.#resultsList = this._element.querySelector('.analytics__table-content');

    //callbacks
    this.#getData = this._callbacks.getData;
    this.#renderCard = this._callbacks.renderCard;

  }

  create() {

    if (typeof this.#getData === 'function') {
      //получение исходных данных
      const articles = this.#getData();

      if (Array.isArray(articles) && articles.length) {

        //подсчет количества записей
        const results = this.#groupDataByDay(articles);

        //получение ключей (т.е. дат)
        const groupedData = Object.keys(results);

        //сортировка, чтобы получить данные в порядке возрастания
        groupedData.sort((a, b) => {
          return new Date(a) - new Date(b);
        });

        //получение списка отредеренных данных по дням
        const dataForRender = groupedData.map(key => {
          if (typeof this.#renderCard === 'function') {
            return this.#renderCard({date: key, count: results[key], total: articles.length});
          } else {
            return [];
          }
        });

        //установка заголовка аналитики
        this.#setTitle(new Date(groupedData[0]), new Date(groupedData[groupedData.length - 1]));

        //рендер списка
        this.#render(dataForRender);

      } else {
        this.hide();
      }
    } else {
      this.hide();
    }

  }

  #groupDataByDay = (articles) => {

    return articles.reduce((prev, {publishedAt}) => {
      !prev[publishedAt.split('T')[0]] ? prev[publishedAt.split('T')[0]] = 1 : prev[publishedAt.split('T')[0]]++;
      return prev;
    }, {});

  };

  #render = (items) => {

    const fragment = document.createDocumentFragment();
    items.forEach(item => fragment.appendChild(item));
    this.#resultsList.appendChild(fragment);

  };

  #setTitle = (minDate, maxDate) => {

    if (minDate && maxDate) {

      if (minDate.getMonth() !== maxDate.getMonth()) {
        this.#title.textContent = `(${getMonth(minDate, MONTHS_FORMAT_DEFAULT)}'|'${getMonth(maxDate, MONTHS_FORMAT_DEFAULT)})`;
      } else {
        this.#title.textContent = `(${getMonth(minDate, MONTHS_FORMAT_DEFAULT)})`;
      }

    }

  }

}