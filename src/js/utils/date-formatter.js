export const DAYS_IN_FORMAT_TWO_LETTERS = ['вс', 'пн','вт' ,'ср' ,'чт' ,'пт' ,'cб'];
export const MONTHS_FORMAT_PARENT_CASE = ['января', 'февраля','марта' ,'апреля' ,'мая' ,'июня' ,'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
export const MONTHS_FORMAT_DEFAULT = ['январь', 'февраль','март' ,'апрель' ,'май' ,'июнь' ,'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

export const dateInISOFormat = (date) => {

  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() + (offset*60*1000));
  return date.toISOString();

};

export const addToDate = (date, {years, months, days, hours, minutes, seconds}) => {

  date.setFullYear(date.getFullYear() + (+years ? +years : 0));
  date.setMonth(date.getMonth() + (+months ? +months : 0));
  date.setDate(date.getDate() + (+days ? +days : 0));
  date.setTime(date.getTime() + (+hours ? +hours * 3600000 : 0));
  date.setTime(date.getTime() + (+minutes ? +minutes * 600000 : 0));
  date.setTime(date.getTime() + (+seconds ? +seconds *1000 : 0));
  return date;

};

export const getMonth = (date, format) => {
  return format[date.getMonth()];
};

export const getDayOfTheWeek = (date, format) => {
  return format[date.getDay()];
};