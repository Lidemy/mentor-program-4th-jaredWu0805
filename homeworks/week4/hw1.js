const https = require('https');

https.get(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (res) => {
    res.on('data', (chunk) => {
      const parsed = JSON.parse(chunk);
      for (let i = 0; i < 10; i += 1) {
        console.log(`${parsed[i].id} ${parsed[i].name}`);
      }
    });
  },
);
