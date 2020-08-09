import BaseComponent from "../../js/components/BaseComponent";

export default class Card extends BaseComponent{

  constructor(data, template) {
    super();
    this.data = data;
    this.template = template;
  }

  create = () => {
    const newCard = this.template.cloneNode(true);
    const cardLink = newCard.querySelector('.card__link');
    const cardImage = newCard.querySelector('.card__img');
    const cardPublishedAt = newCard.querySelector('.card__caption');
    const cardTitle = newCard.querySelector('.card__heading');
    const cardDescription = newCard.querySelector('.card__text');
    const cardSource = newCard.querySelector('.card__source');

    cardLink.setAttribute('href', this.data.url);
    cardImage.setAttribute('src', this.data.urlToImage);
    cardImage.onerror = () => {
      cardImage.setAttribute('src', require('../../images/no-image.jpg'));
    };
    cardImage.setAttribute('alt', this.data.title);
    cardPublishedAt.textContent = this.data.publishedAt;
    cardTitle.textContent = this.data.title;
    cardDescription.textContent = this.data.description;
    cardSource.textContent = this.data.source.name;

    this.element = newCard;
    return newCard;
  }
}