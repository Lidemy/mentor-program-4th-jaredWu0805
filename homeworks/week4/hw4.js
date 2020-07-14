const request = require('request');

const clientID = 'x14has4vzwes16ijg7e05j9xz8rcwp';

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    'Client-ID': clientID,
    Accept: 'application/vnd.twitchtv.v5+json',
  },
};

function printTopGame(arr) {
  arr.forEach((games) => {
    console.log(`${games.viewers} ${games.game.name}`);
  });
}

request(options, (err, res, body) => {
  if (err) {
    return console.log('Request failed', err);
  }

  const data = JSON.parse(body);
  printTopGame(data.top);
  return true;
});
