import TemplatedBaseComponent from "../../js/components/TemplatedBaseComponent";
import {DAYS_IN_FORMAT_TWO_LETTERS, getDayOfTheWeek} from "../../js/utils/date-formatter";

export default class AnalyticsCard extends TemplatedBaseComponent{

  constructor(...args) {

    super(...args);

  }

  createCard = ({date, count, total}) => {

    const newCard = this._template.cloneNode(true);
    const cardTitle = newCard.querySelector('.analytics-card__title');
    const cardValue = newCard.querySelector('.analytics-card__value');
    const cardNumber = newCard.querySelector('.analytics-card__value-number');

    const dateToRender = new Date(date);
    cardTitle.textContent = `${dateToRender.getDate().toString()}, ${getDayOfTheWeek(dateToRender, DAYS_IN_FORMAT_TWO_LETTERS)}`;

    cardValue.style.width = (count / total * 100) + '%';

    cardNumber.textContent = count;

    this._element = newCard;

    return newCard;

  }
}