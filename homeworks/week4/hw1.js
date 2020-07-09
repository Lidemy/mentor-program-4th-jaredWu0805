const https = require('https');

https.get(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (res) => {
    if (res.statusCode < 200 || res.statusCode >= 300) {
      return console.log('Fetch failed');
    }
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsed = JSON.parse(rawData);
        parsed.forEach(book => console.log(`${book.id} ${book.name}`));
      } catch (e) {
        console.error(e.message);
      }
    });
    return true;
  },
);
