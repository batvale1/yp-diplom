import BaseComponent from "../../js/components/BaseComponent";

export default class Search extends BaseComponent{

  constructor(...args) {
    super(...args);
    this.inputElem = this.element.querySelector('.search__input');
    this.searchHandler = this.callbacks.showCards;

    this.element.addEventListener('submit', (e) => {
      e.preventDefault();
      this.submitHandler();
    });

    this.inputElem.addEventListener('input', () => {
      this.checkValidity();
    });

    this.checkValidity();
  };

  getSearchValue = () => {
    return this.inputElem.value;
  };

  submitHandler = () => {
    if (typeof this.searchHandler === 'function') {
      this.searchHandler();
    }
  };

  checkValidity = () => {
    if (!this.element.checkValidity() && this.inputElem.validity.valueMissing) {
      this.inputElem.setCustomValidity('Нужно ввести ключевое слово');
      return false;
    } else {
      this.inputElem.setCustomValidity('');
      return true;
    }
  };

  setInitialValue = (value) => {
    if (value) {
      this.inputElem.setAttribute('value', value);
      this.checkValidity();
    }
  };

  disableForm = () => {
    this.element.style.pointerEvents = 'none';
  }

  enableForm = () => {
    this.element.style.pointerEvents = 'initial';
  }
}