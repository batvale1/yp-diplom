import TemplatedBaseComponent from "../../js/components/TemplatedBaseComponent";
import {getMonth, MONTHS_FORMAT_PARENT_CASE} from "../../js/utils/date-formatter";

export default class Card extends TemplatedBaseComponent{

  constructor(...args) {

    super(...args);

  }

  create = ({url, urlToImage, title, publishedAt, description, source}) => {

    const newCard = this._template.cloneNode(true);
    const cardLink = newCard.querySelector('.card__link');
    const cardImage = newCard.querySelector('.card__img');
    const cardPublishedAt = newCard.querySelector('.card__caption');
    const cardTitle = newCard.querySelector('.card__heading');
    const cardDescription = newCard.querySelector('.card__text');
    const cardSource = newCard.querySelector('.card__source');

    cardLink.setAttribute('href', url);

    cardImage.setAttribute('src', urlToImage);
    cardImage.onerror = () => {
      cardImage.setAttribute('src', require('../../images/no-image.jpg'));
    };
    cardImage.setAttribute('alt', title);

    const dateToRender = new Date(publishedAt);
    cardPublishedAt.textContent = `${dateToRender.getDate().toString()} ${getMonth(dateToRender, MONTHS_FORMAT_PARENT_CASE)}, ${dateToRender.getFullYear()}`;

    cardTitle.textContent = title;
    cardDescription.textContent = description;
    cardSource.textContent = source.name;

    this._element = newCard;
    return newCard;
  }
}