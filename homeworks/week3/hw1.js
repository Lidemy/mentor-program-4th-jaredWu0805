/* eslint-disable linebreak-style */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

function solve(input) {
  const tmp = input[0].split(' ');
  console.log(Number(tmp[0]) + Number(tmp[1]));
}

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});
