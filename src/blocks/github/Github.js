import BaseComponent from "../../js/components/BaseComponent";
import {GITHUB_COMMMITS_PER_PAGE, GITHUB_REPOSITORY_LINK} from "../../js/constants/constants";

export default class Github extends BaseComponent{

  //markup
  #list;
  #githubLink;
  #githubButton;
  #btn;
  //callbacks
  #renderCard;

  constructor(...args) {

    super (...args);

    //markup
    this.#list = this._element.querySelector('.github__swiper');
    this.#githubLink = this._element.querySelector('.github__link');
    this.#githubButton = this._element.querySelector('.github__button');

    //callbacks
    this.#renderCard = this._callbacks.renderCard;

    //dependencies
    const { Button } = this._dependencies;

    if ( Button ) {
      this.#btn = new Button(this.#githubButton);
      this.#btn.addEventListener('click', () => {
        window.open(GITHUB_REPOSITORY_LINK);
      })
    }

  }

  renderList = (data) => {

    if (Array.isArray(data) && data.length) {

      const fragment = document.createDocumentFragment();
      data.slice(0, GITHUB_COMMMITS_PER_PAGE - 1).forEach(item => fragment.appendChild(this.#renderCard(item)));
      this.#list.appendChild(fragment);

    }

  };

  init = () => {
    this.#githubLink.setAttribute('href', GITHUB_REPOSITORY_LINK)
  }
}