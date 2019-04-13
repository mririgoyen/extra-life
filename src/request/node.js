import https from 'https';

export default url => {
  return new Promise((resolve, reject) => {
    https
      .get(url, res => {
        if (res.statusCode >= 400) {
          return reject(new Error(`Bad Request: ${res.statusCode}`));
        }

        let data = '';

        res.on('data', chunk => {
          data += chunk;
        });

        res.on('end', () => {
          return resolve(JSON.parse(data));
        });
      })
      .on('error', reject);
  });
};
