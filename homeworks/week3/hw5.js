/* eslint-disable no-undef */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

function compare(numA, numB, rule) {
  if (numA === numB) return 'DRAW';

  if (rule === '1') {
    if (numA > numB) {
      return 'A';
    }
    return 'B';
  }
  if (numA > numB) {
    return 'B';
  }
  return 'A';
}

function solve(input) {
  const tmp = Number(input[0]);
  for (let i = 1; i <= tmp; i += 1) {
    const tmpLine = input[i].split(' ');
    const a = tmpLine[0];
    const b = tmpLine[1];
    const c = tmpLine[2];
    console.log(compare(BigInt(a), BigInt(b), c));
  }
}

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});
