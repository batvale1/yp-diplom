import BaseComponent from "../../js/components/BaseComponent";
import {CARDS_TO_RENDER_PER_TIME} from "../../js/constants/constants";

export default class Results extends BaseComponent{

  //markup
  #resultsList;
  #resultsMoreBtn;
  #moreBtn;

  //callbacks
  #renderCard;

  //logic
  #page;
  #list;

  constructor(...args) {
    super(...args);

    //markup
    this._invisibleClass = 'results_hidden';
    this.#resultsList = this._element.querySelector('.results__cards');
    this.#resultsMoreBtn = this._element.querySelector('.results__more-btn');

    //callbacks
    this.#renderCard = this._callbacks.renderCard;

    //dependencies
    const { Button } = this._dependencies;

    if ( Button ) {
      this.#moreBtn = new Button(this.#resultsMoreBtn);
      this.#moreBtn.addEventListener('click', () => {
        this.#showMore();
      })
    }

    //logic
    this.#page = 0;

  }

  #showMore = () => {
    this.#page++;
    this.#renderCurrentPage();
  };

  renderList = (list) => {
    this.#list = list;
    if (Array.isArray(list) && list.length) {
      this.show();
      this.#renderCurrentPage();
    } else {
      this.hide();
    }
  };

  #renderCurrentPage = () => {

    const dataToRender = this.#list.slice(this.#page * CARDS_TO_RENDER_PER_TIME, (this.#page + 1) * CARDS_TO_RENDER_PER_TIME);

    if (dataToRender.length) {

      const fragment = document.createDocumentFragment();

      dataToRender.forEach(item => {
        if (typeof this.#renderCard === 'function') {
          fragment.appendChild(this.#renderCard(item));
        }
      });

      this.#resultsList.appendChild(fragment);

    }

    if (dataToRender.length < CARDS_TO_RENDER_PER_TIME) {
      this.#moreBtn.hide();
    } else {
      this.#moreBtn.show();
    }

  };

  clear = () => {

    this.#page = 0;
    this.#resultsList.textContent = '';

  };
}