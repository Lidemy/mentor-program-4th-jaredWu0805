const request = require('request');
const process = require('process');

const countryName = process.argv[2];

request(`https://restcountries.eu/rest/v2/name/${countryName}`, (err, res, body) => {
  if (err) {
    return console.log('Request failed', err);
  }

  const data = JSON.parse(body);
  if (data.status === 404) return console.log(data.message);

  data.forEach((country) => {
    console.log(
      `============
國家：${country.name}
首都：${country.capital}
貨幣：${country.currencies[0].code}
國碼：${country.callingCodes}`,
    );
  });
  return true;
});
