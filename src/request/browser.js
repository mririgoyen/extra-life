export default url => {
  return fetch(url)
    .then(res => {
      if (res.status >= 400) {
        return new Error(`Bad Request: ${res.status}`);
      }
      return res.json();
    })
    .then(json => json)
    .catch(err => err);
};