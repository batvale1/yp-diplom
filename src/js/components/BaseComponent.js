export default class BaseComponent {

  constructor(element, callbacks = {}, dependencies = {}) {

    this._element = element;
    this._invisibleClass = '';
    this._callbacks = callbacks;
    this._dependencies = dependencies;
  }

  addEventListener(...args) {
    this._element.addEventListener(...args);
  }

  show() {
    this._element.classList.remove(this._invisibleClass);
  }

  hide() {
    this._element.classList.add(this._invisibleClass);
  }

}