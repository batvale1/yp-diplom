import {DEFAULT_VALIDATION_FAIL_TEXTS} from "../../constants/constants";

export default class FormValidator {

  constructor(form, submitBtn) {
    this.form = form;
    this.submitBtn = submitBtn;
  }

  setFormValidationListeners = () => {
    //выставляем ошибки и статус сабмита при инпутах
    this.form.addEventListener('input', this.#checkInputValidity.bind(this));
    //выставляем изначальное состояние формы при открытии
    this.setSubmitButtonState();
  };

  #checkInputValidity = (event) => {
    const curItem = event.target;
    const errorItem = curItem.nextElementSibling;
    if (curItem.validity.valueMissing) {
      errorItem.textContent = DEFAULT_VALIDATION_FAIL_TEXTS.valueMissing;
    } else {
      errorItem.textContent = '';
    }

    this.setSubmitButtonState(event.currentTarget);
  };

  setSubmitButtonState = () => {
    const submitBtn = this.submitBtn;
    if (this.form.checkValidity()) {
      submitBtn.removeAttribute('disabled');
    } else {
      submitBtn.setAttribute('disabled', 'true');
    }
  }

}