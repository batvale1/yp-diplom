import BaseComponent from "../../js/components/BaseComponent";


export default class Analytics extends BaseComponent{

  constructor(...args) {
    super(...args);
    this.title = this.element.querySelector('.analytics__title_month');
    this.resultsList = this.element.querySelector('.analytics__table-content');
  }


}