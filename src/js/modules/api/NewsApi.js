import {CARDS_PER_TIME, NEWS_API_KEY, NEWS_API_URL, NEWS_BY_DAYS_AGO} from "../../constants/constants";
import {addToDate, dateInISOFormat} from "../../utils/date-formatter";
import Gate from "./Gate";

export default class NewsApi extends Gate{

  getNews = (requestValue) => {

    return this._get(NEWS_API_URL, {
      q: requestValue,
      apiKey: NEWS_API_KEY,
      from: dateInISOFormat(addToDate(new Date, {
        days: -NEWS_BY_DAYS_AGO
      })),
      to: dateInISOFormat(new Date),
      language: 'ru',
      pageSize: CARDS_PER_TIME
    });

  }

}
