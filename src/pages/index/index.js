import './index.css';
import '../../favicons/favicons';
import DataStorage from "../../js/modules/api/DataStorage";
import NewsApi from "../../js/modules/api/NewsApi";
import Results from "../../blocks/results/Results";
import Card from "../../blocks/card/Card";
import Button from "../../blocks/button/Button";
import Searching from "../../blocks/searching/Searching";
import Search from "../../blocks/search/Search";


const searchForm = document.querySelector('.search');
const cardTemplate = document.getElementById('card-template').content.querySelector('.card');
const resultsDOMElement = document.querySelector('.results');
const searchNothingFoundDOMElement = document.querySelector('.searching_type_nothing-found');
const searchLoadingDOMElement = document.querySelector('.searching_type_loading');

const dataStorage = new DataStorage();
const newsAPI = new NewsApi();
const results = new Results(resultsDOMElement, {renderCard}, {Button});
const search = new Search(searchForm, {showCards});
const searchNothingFound = new Searching(searchNothingFoundDOMElement);
const searchLoading = new Searching(searchLoadingDOMElement);

function renderCard(cardData) {
  return new Card(cardData, cardTemplate).create();
}

function renderCards(articles) {
  results.renderList(articles);
}

function showCards() {
  const searchValue = search.getSearchValue();
  results.clear();
  searchLoading.showLoadingMessage();
  search.disableForm();
  newsAPI.getNews(searchValue)
    .then(res => {
      const {totalResults, articles} = res;
      dataStorage.setData('totalResults', totalResults);
      dataStorage.setData('articles', articles);
      dataStorage.setData('searchValue', searchValue);
      searchLoading.hide();
      if (!articles.length) {
        searchNothingFound.showEmptyResultsMessage();
      } else {
        searchNothingFound.hide();
      }
      //throw new Error('test'); тест ошибки
      renderCards(articles);
    })
    .finally(() => {
      search.enableForm();
    })
    .catch((e) => {
      console.log(e);
      searchNothingFound.showErrorMessage();
    })
}

function init() {
  renderCards(dataStorage.getData('articles'));
  search.setInitialValue(dataStorage.getData('searchValue'));
}

init();