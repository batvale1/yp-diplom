import './about.css';
import Swiper, { Navigation, Pagination } from 'swiper';
import GithubApi from "../../js/modules/api/GithubApi";
import Github from "../../blocks/github/Github";
import GithubCard from "../../blocks/github-card/Github-card";
import Button from "../../blocks/button/Button";
import {SWIPER_CONFIG} from "../../js/constants/constants";

//выборка DOM
const githubElement = document.querySelector('.github');
const cardTemplate = document.getElementById('github-card-template').content.querySelector('.github-card');

//экземпляры классов
const github = new Github(githubElement, {renderCard}, {Button});
github.init();

const gitHubResults = new GithubApi();

//настройки swiper
Swiper.use([Navigation, Pagination]);

//логика
function initSwiper() {
  new Swiper('.swiper__container', SWIPER_CONFIG);
}

function renderCard(cardData) {
  return new GithubCard(cardTemplate).create(cardData);
}

function renderCards(commits) {

  github.renderList(commits);
  initSwiper();

}

function init() {

  gitHubResults.getCommits()
    .then(commits => renderCards(commits))
    .catch(e => alert(e));

}

init();