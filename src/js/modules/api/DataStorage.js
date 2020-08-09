export default class DataStorage {

  constructor() {

  }

  getData = (item) => {
    return JSON.parse(localStorage.getItem(item));
  };

  setData = (item, value) => {
    localStorage.setItem(item, JSON.stringify(value));
  };

  appendData = (item, value) => {
    const currentData = this.getData(item);
    if (currentData) {
      localStorage.setItem(item, JSON.stringify([...value, ...currentData]));
    }
  }
}
