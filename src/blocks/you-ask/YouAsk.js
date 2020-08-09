import BaseComponent from "../../js/components/BaseComponent";

export default class YouAsk extends BaseComponent{

  constructor(...args) {
    super(...args);
    this.getData = this.callbacks.getData;
    this.title = this.element.querySelector('.you-ask__search-value');
    this.mentionsInText = this.element.querySelector('.you-ask__value_in-text');
    this.mentionsInTitle = this.element.querySelector('.you-ask__value_in-title');
  }

  showData = () => {
    const {searchValue, totalResults, articles} = this.getData();
    if (searchValue) {
      this._setTitle(searchValue);
    }

    if (searchValue && articles) {
      this._setMentionsInTitle(searchValue, articles);
      this._setMentionsInText(articles);
    }
  };

  _setTitle = (text) => {
    this.title.textContent = text[0].toUpperCase() + text.slice(1);
  };

  _setMentionsInText = (articles) => {
    this.mentionsInText.textContent = articles.length;
  };

  _setMentionsInTitle = (searchValue, articles) => {
    this.mentionsInTitle.textContent = articles.reduce((prev, {title}) => {
      return prev += (title.toLowerCase().includes(searchValue.trim().toLowerCase()) ? 1 : 0);
    }, 0);
  }

}