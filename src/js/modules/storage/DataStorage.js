export default class DataStorage {

  getData = (item) => {
    return JSON.parse(localStorage.getItem(item));
  };

  setData = (item, value) => {
    localStorage.setItem(item, JSON.stringify(value));
  };

}
