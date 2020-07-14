const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

function isPrime(num) {
  if (num === 1) return false;
  for (let n = 2; n < num; n += 1) {
    if (num % n === 0) {
      return false;
    }
  }
  return true;
}

function solve(input) {
  const tmp = Number(input[0]);
  for (let i = 1; i <= tmp; i += 1) {
    console.log(isPrime(Number(input[i])) ? 'Prime' : 'Composite');
  }
}

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});
