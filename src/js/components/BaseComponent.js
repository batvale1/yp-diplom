export default class BaseComponent {

  constructor(element, callbacks = {}, dependencies = {}) {

    this.element = element;
    this.hidingClass = '';
    this.callbacks = callbacks;
    this.dependencies = dependencies;
  }

  addEventListener(...args) {
    this.element.addEventListener(...args);
  }

  show() {
    this.element.classList.remove(this.hidingClass);
  }

  hide() {
    this.element.classList.add(this.hidingClass);
  }

}