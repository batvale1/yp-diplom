export default {
  post: async (path, payload) => fetch(path, {
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then(res => {
      if (res.ok) return res.json();
      return Promise.reject(`Ошибка: ${res.status}`);
    }),
  get: async (path, payload) => {
    const url = new URL(path);
    url.search = new URLSearchParams(payload).toString();
    return fetch(url)
      .then(res => {
        if (res.ok) return res.json();
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
};
