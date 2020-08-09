import gate from '../../utils/gate';
import {CARDS_PER_TIME, NEWS_API_KEY, NEWS_API_URL} from "../../constants/constants";
import {addToDate, dateInISOFormat} from "../../utils/date-formatter";

export default class NewsApi {
  getNews = (requestValue, page) => {
    return gate.get(NEWS_API_URL, {
      q: requestValue,
      apiKey: NEWS_API_KEY,
      from: dateInISOFormat(addToDate(new Date, {
        days: -7
      })),
      to: dateInISOFormat(new Date),
      language: 'ru',
      pageSize: CARDS_PER_TIME,
      page
    });
  }
}
