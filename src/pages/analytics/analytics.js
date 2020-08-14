import './analytics.css';
import '../../favicons/favicons';
import YouAsk from "../../blocks/you-ask/YouAsk";
import DataStorage from "../../js/modules/storage/DataStorage";
import Analytics from "../../blocks/analytics/Analytics";
import AnalyticsCard from "../../blocks/analytics-card/AnalyticsCard";
import Searching from "../../blocks/searching/Searching";

//выборка DOM
const youAskDOMElement = document.querySelector('.you-ask');
const analyticsDOMElement = document.querySelector('.analytics');
const analyticsCardTemplate = document.getElementById('analytics-card-template').content.querySelector('.analytics-card');
const searchNothingFoundDOMElement = document.querySelector('.searching_type_nothing-found');

//экземпляры классов
const youAsk = new YouAsk(youAskDOMElement, {getData: getYouAskData});
const analytics = new Analytics(analyticsDOMElement, {getData: getAnalyticsData, renderCard});
const dataStorage = new DataStorage();
const searchNothingFound = new Searching(searchNothingFoundDOMElement);

//логика
function getYouAskData() {

  const data = {
    searchValue: dataStorage.getData('searchValue'),
    articles: dataStorage.getData('articles'),
  };

  if (!data.searchValue) {
    youAsk.hide();
    searchNothingFound.show();
  }

  return data;

}

function getAnalyticsData() {
  return dataStorage.getData('articles');
}

function renderCard(item) {
  return new AnalyticsCard(analyticsCardTemplate).createCard(item);
}

function init() {

  youAsk.create();
  analytics.create();

}

init();