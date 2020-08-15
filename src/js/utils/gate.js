export default {
  get: (path, payload, config) => {
    const url = new URL(path);
    url.search = new URLSearchParams(payload).toString();
    return fetch(url, config)
      .then(res => {
        if (res.ok) return res.json();
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
};
