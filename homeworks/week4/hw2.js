const https = require('https');
const process = require('process');

const cmd = process.argv[2];
const arg3 = process.argv[3];
const arg4 = process.argv[4];

function list() {
  https.get(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20', (res) => {
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
}

function read(id) {
  https.get(
    `https://lidemy-book-store.herokuapp.com/books/${id}`, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return console.log('Fetch failed');
      }
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(rawData);
          console.log(parsed.name);
        } catch (e) {
          console.error(e.message);
        }
      });
      return true;
    },
  );
}

function deleteBook(id) {
  const deleteOptions = {
    hostname: 'lidemy-book-store.herokuapp.com',
    path: `/books/${id}`,
    port: 443,
    method: 'DELETE',
  };
  const req = https.request(deleteOptions);
  req.end();
}

function create(bookName) {
  const data = JSON.stringify({
    name: bookName,
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
}

function update(id, bookName) {
  const updateData = JSON.stringify({
    name: bookName,
  });

  const updateOptions = {
    hostname: 'lidemy-book-store.herokuapp.com',
    path: `/books/${id}`,
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
}

switch (cmd) {
  case 'list':
    list();
    break;
  case 'read':
    read(arg3);
    break;
  case 'delete':
    deleteBook(arg3);
    break;
  case 'create':
    create(arg3);
    break;
  case 'update':
    update(arg3, arg4);
    break;
  default:
    console.log('Command not found.');
}
