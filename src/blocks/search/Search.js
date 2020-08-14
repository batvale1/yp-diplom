import BaseComponent from "../../js/components/BaseComponent";

export default class Search extends BaseComponent{

  //markup
  #inputElem;
  #submitBtn;

  //callbacks
  #searchHandler;

  constructor(...args) {
    super(...args);

    //markup
    this.#inputElem = this._element.querySelector('.search__input');
    this.#submitBtn = this._element.querySelector('.search__btn');

    //callbacks
    this.#searchHandler = this._callbacks.showCards;

    //dependencies
    const { FormValidator } = this._dependencies;

    if ( FormValidator ) {
      const editingCardFormValidation = new FormValidator(this._element, this.#submitBtn);
      editingCardFormValidation.setFormValidationListeners();
    }

  };

  addEventListeners = () => {

    this.addEventListener('submit', (e) => {
      e.preventDefault();
      if (typeof this.#searchHandler === 'function') {
        this.#searchHandler();
      }
    });

  };

  getSearchValue = () => {
    return this.#inputElem.value;
  };

  setInitialValue = (value) => {
    if (value) {
      this.#inputElem.setAttribute('value', value);
    }
  };

  disableForm = () => {
    this._element.style.pointerEvents = 'none';
  };

  enableForm = () => {
    this._element.style.pointerEvents = 'initial';
  };
}