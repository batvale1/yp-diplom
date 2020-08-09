import BaseComponent from "../../js/components/BaseComponent";
import {CARDS_TO_RENDER_PER_TIME} from "../../js/constants/constants";

export default class Results extends BaseComponent{

  constructor(...args) {
    super(...args);
    this.hidingClass = 'results_hidden';
    this.page = 0;
    this.resultsList = this.element.querySelector('.results__cards');
    this.resultsMoreBtn = this.element.querySelector('.results__more-btn');
    this._renderItem = this.callbacks.renderCard;

    const { Button } = this.dependencies;

    if ( Button ) {
      this.moreBtn = new Button(this.resultsMoreBtn);
      this.moreBtn.element.addEventListener('click', () => {
        this._showMore();
      })
    }

  }

  _showMore = () => {
    this.page++;
    this._renderCurrentPage();
  };

  renderList = (list) => {
    this.list = list;
    if (Array.isArray(list) && list.length) {
      this.show();
      this._renderCurrentPage();
    } else {
      this.hide();
    }
  };

  _renderCurrentPage = () => {
    const dataToRender = this.list.slice(this.page * CARDS_TO_RENDER_PER_TIME, (this.page + 1) * CARDS_TO_RENDER_PER_TIME);
    dataToRender.forEach(item => {
      if (typeof this._renderItem === 'function') {
        this.resultsList.appendChild(this._renderItem(item));
      }
    });
    if (dataToRender.length < CARDS_TO_RENDER_PER_TIME) {
      this.moreBtn.hide();
    } else {
      this.moreBtn.show();
    }
  };

  clear = () => {
    this.page = 0;
    this.resultsList.textContent = '';
  };
}