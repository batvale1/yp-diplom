import BaseComponent from "../../js/components/BaseComponent";
import {
  ERROR_SEARCH_TEXT,
  ERROR_SEARCH_TITLE,
  LOADING_SEARCH_TEXT,
  NOTHING_FOUND_TEXT,
  NOTHING_FOUND_TITLE
} from "../../js/constants/constants";

export default class Searching extends BaseComponent{

  constructor(...args) {
    super(...args);
    this.messageElem = this.element.querySelector('.searching__text');
    this.messageTitleElem = this.element.querySelector('.searching__heading');
    this.hidingClass = 'searching_hidden';
  }

  showErrorMessage() {
    if (this.messageTitleElem) {
      this.messageTitleElem.textContent = ERROR_SEARCH_TITLE;
    }
    if (this.messageElem) {
      this.messageElem.textContent = ERROR_SEARCH_TEXT;
    }
    this.show();
  }

  showEmptyResultsMessage() {
    if (this.messageTitleElem) {
      this.messageTitleElem.textContent = NOTHING_FOUND_TITLE;
    }
    if (this.messageElem) {
      this.messageElem.textContent = NOTHING_FOUND_TEXT;
    }
    this.show();
  }

  showLoadingMessage() {
    if (this.messageElem) {
      this.messageElem.textContent = LOADING_SEARCH_TEXT;
    }
    this.show();
  }
}