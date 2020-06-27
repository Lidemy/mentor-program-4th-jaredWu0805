const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

function printStars(n) {
  for (let i = 1; i <= n; i += 1) {
    let s = '';
    for (let j = 1; j <= i; j += 1) {
      s += '*';
    }
    console.log(s);
  }
}

function solve(input) {
  const tmp = Number(input[0]);
  printStars(tmp);
}

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});
