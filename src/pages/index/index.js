import './index.css';
import '../../favicons/favicons';
import DataStorage from "../../js/modules/storage/DataStorage";
import NewsApi from "../../js/modules/api/NewsApi";
import Results from "../../blocks/results/Results";
import Card from "../../blocks/card/Card";
import Button from "../../blocks/button/Button";
import Searching from "../../blocks/searching/Searching";
import Search from "../../blocks/search/Search";
import FormValidator from "../../js/modules/service/FormValidator";

//выборка DOM
const searchForm = document.querySelector('.search');
const cardTemplate = document.getElementById('card-template').content.querySelector('.card');
const resultsDOMElement = document.querySelector('.results');
const searchNothingFoundDOMElement = document.querySelector('.searching_type_nothing-found');
const searchLoadingDOMElement = document.querySelector('.searching_type_loading');

//экземпляры классов
const dataStorage = new DataStorage();
const newsAPI = new NewsApi();
const results = new Results(resultsDOMElement, {renderCard}, {Button});
const search = new Search(searchForm, {showCards}, {FormValidator});
const searchNothingFound = new Searching(searchNothingFoundDOMElement);
const searchLoading = new Searching(searchLoadingDOMElement);

//логика
function renderCard(cardData) {
  return new Card(cardTemplate).create(cardData);
}

function renderCards() {
  results.renderList(getCardList());
}

function getCardList() {
  return dataStorage.getData('articles');
}

function showCards() {

  const searchValue = search.getSearchValue();

  results.clear();
  searchLoading.showLoadingMessage();
  searchNothingFound.hide();
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

      renderCards();

    })
    .finally(() => {

      search.enableForm();

    })
    .catch((e) => {

      searchLoading.hide();
      searchNothingFound.showErrorMessage();

    })

}

function init() {
  renderCards();
  search.setInitialValue(dataStorage.getData('searchValue'));
  search.addEventListeners();
}

init();