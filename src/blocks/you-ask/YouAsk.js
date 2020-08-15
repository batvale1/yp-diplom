import BaseComponent from "../../js/components/BaseComponent";

export default class YouAsk extends BaseComponent{

  //markup
  #title;
  #mentionsInText;
  #mentionsInTitle;

  //callbacks
  #getData;

  constructor(...args) {
    super(...args);

    //markup
    this._invisibleClass = 'you-ask_hidden';
    this.#title = this._element.querySelector('.you-ask__search-value');
    this.#mentionsInText = this._element.querySelector('.you-ask__value_in-text');
    this.#mentionsInTitle = this._element.querySelector('.you-ask__value_in-title');

    //callbacks
    this.#getData = this._callbacks.getData;

  }

  create = () => {

    const {searchValue, articles} = this.#getData();
    if (searchValue) {
      this.#setTitle(searchValue);
    }

    if (searchValue && articles) {
      this.#setMentionsInTitle(searchValue, articles);
      this.#setMentionsInText(articles);
    }

  };

  #setTitle = (text) => {
    this.#title.textContent = text[0].toUpperCase() + text.slice(1);
  };

  #setMentionsInText = (articles) => {
    this.#mentionsInText.textContent = articles.length;
  };

  #setMentionsInTitle = (searchValue, articles) => {

    this.#mentionsInTitle.textContent = articles.reduce((prev, {title}) => {
      return prev += (title.toLowerCase().includes(searchValue.trim().toLowerCase()) ? 1 : 0);
    }, 0);

  }

}