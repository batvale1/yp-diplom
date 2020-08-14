import BaseComponent from "./BaseComponent";

export default class TemplatedBaseComponent extends BaseComponent{

  constructor(template, ...args) {

    super(...args);

    this._template = template;

  }

}