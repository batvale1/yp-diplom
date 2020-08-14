import TemplatedBaseComponent from "../../js/components/TemplatedBaseComponent";
import {
  DAYS_IN_FORMAT_TWO_LETTERS,
  getDayOfTheWeek,
  getMonth,
  MONTHS_FORMAT_PARENT_CASE
} from "../../js/utils/date-formatter";

export default class GithubCard extends TemplatedBaseComponent{

  constructor(...args) {

    super(...args);

  }

  create({commit, author}) {
    const newCard = this._template.cloneNode(true);
    const newCardDate = newCard.querySelector('.github-card__date');
    const newCardAvatar = newCard.querySelector('.github-card__author-image');
    const newCardName = newCard.querySelector('.github-card__author-name');
    const newCardEmail = newCard.querySelector('.github-card__author-email');
    const newCardContent = newCard.querySelector('.github-card__content');

    const { committer, message } = commit;
    const { date, name, email} = committer;
    const { avatar_url } = author;
    
    const dateToRender = new Date(date);

    newCardDate.textContent = `${dateToRender.getDate().toString()} ${getMonth(dateToRender, MONTHS_FORMAT_PARENT_CASE)}, ${dateToRender.getFullYear()}`;
    newCardAvatar.setAttribute('src', avatar_url);
    newCardName.textContent = name;
    newCardEmail.textContent = email;
    newCardContent.textContent = message;

    this._element = newCard;
    return newCard;
  }
}