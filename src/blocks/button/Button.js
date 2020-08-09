import BaseComponent from "../../js/components/BaseComponent";

export default class Button extends BaseComponent{
  constructor(...args) {
    super(...args);
    this.hidingClass = 'button_hidden';
  }
}