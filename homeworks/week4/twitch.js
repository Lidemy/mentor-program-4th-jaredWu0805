/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
const request = require('request');
const process = require('process');

const gameName = process.argv[2];
const clientID = 'x14has4vzwes16ijg7e05j9xz8rcwp';
const accept = 'application/vnd.twitchtv.v5+json';

const gamesOptions = {
  url: `https://api.twitch.tv/kraken/search/games?query=${gameName}`,
  headers: {
    'Client-ID': clientID,
    Accept: accept,
  },
};

function strPadding(input) {
  return input.padEnd(25);
}

function printTop200Streams(str, offset) {
  if (offset < 200) {
    const streamsOptions = {
      url: `https://api.twitch.tv/kraken/streams/?game=${str}&limit=100&offset=${offset}`,
      headers: {
        'Client-ID': clientID,
        Accept: accept,
      },
    };

    request(streamsOptions, (err, res, body) => {
      const data = JSON.parse(body);
      const streamsArr = data.streams;
      streamsArr.forEach((stream) => {
        let strData = '';
        strData += strPadding(`name: ${stream.channel.name}`);
        strData += strPadding(`id: ${stream.channel._id}`);
        strData += `viewers: ${stream.viewers}`;
        console.log(strData);
      });

      printTop200Streams(str, offset + 100);
    });
  }
}

function searchGamesStreams(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    printTop200Streams(arr[i].name, 0);
  }
}

request(gamesOptions, (err, res, body) => {
  const data = JSON.parse(body);
  if (data.games == null) return console.log('Game not found');
  searchGamesStreams(data.games);
  return true;
});
