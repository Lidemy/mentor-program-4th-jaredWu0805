const https = require('https');

https.get(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (res) => {
    res.on('data', (chunk) => {
      const parsed = JSON.parse(chunk);
      parsed.forEach(book => console.log(`${book.id} ${book.name}`));
    });
  },
);
