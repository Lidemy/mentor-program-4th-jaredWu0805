const https = require('https');
const process = require('process');

const cmd = process.argv[2];

if (cmd === 'list') {
  https.get(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20', (res) => {
      res.on('data', (chunk) => {
        const parsed = JSON.parse(chunk);
        parsed.forEach(book => console.log(`${book.id} ${book.name}`));
      });
    },
  );
} else if (cmd === 'read') {
  https.get(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, (res) => {
      res.on('data', (chunk) => {
        const parsed = JSON.parse(chunk);
        console.log(parsed.name);
      });
    },
  );
} else if (cmd === 'delete') {
  const deleteOptions = {
    hostname: 'lidemy-book-store.herokuapp.com',
    path: `/books/${process.argv[3]}`,
    port: 443,
    method: 'DELETE',
  };
  const req = https.request(deleteOptions);
  req.end();
} else if (cmd === 'create') {
  const data = JSON.stringify({
    name: process.argv[3],
  });

  const createOptions = {
    hostname: 'lidemy-book-store.herokuapp.com',
    path: '/books',
    port: 443,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
    },
  };
  const createReq = https.request(createOptions);

  createReq.write(data);
  createReq.end();
} else if (cmd === 'update') {
  const updateData = JSON.stringify({
    name: process.argv[4],
  });

  const updateOptions = {
    hostname: 'lidemy-book-store.herokuapp.com',
    path: `/books/${process.argv[3]}`,
    port: 443,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': updateData.length,
    },
  };
  const updateReq = https.request(updateOptions);

  updateReq.write(updateData);
  updateReq.end();
} else {
  console.log('Command not found.');
}
