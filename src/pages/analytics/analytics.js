import './analytics.css';
import '../../favicons/favicons';
import YouAsk from "../../blocks/you-ask/YouAsk";
import DataStorage from "../../js/modules/api/DataStorage";

const youAskDOMElement = document.querySelector('.you-ask');

const youAsk = new YouAsk(youAskDOMElement, {getData});
const dataStorage = new DataStorage();

function getData() {
  return {
    searchValue: dataStorage.getData('searchValue'),
    totalResults: dataStorage.getData('totalResults'),
    articles: dataStorage.getData('articles'),
  }
}

youAsk.showData();