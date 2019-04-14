export default url => {
  return fetch(url)
    .then(res => res.json().then(json => ({
      headers: res.headers,
      status: res.status,
      json
    })))
    .then(({ headers, status, json }) => {
      if (status >= 400) {
        return new Error(`Bad Request: ${status}`);
      }
      const numRecords = headers.get('num-records');
      if (numRecords !== null) {
        return {
          totalRecords: parseInt(numRecords),
          records: json
        };
      }
      return json;
    })
    .catch(err => err);
};