import BaseComponent from "../../js/components/BaseComponent";

export default class Button extends BaseComponent{
  constructor(...args) {
    super(...args);

    //markup
    this._invisibleClass = 'button_hidden';
  }
}