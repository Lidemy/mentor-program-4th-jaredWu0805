const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

function isPalindrome(str) {
  if (str.length === 0) return false;
  let n = str.length - 1;
  let i = 0;
  while (i < n) {
    if (str[i] !== str[n]) return false;
    n -= 1;
    i += 1;
  }
  return true;
}

function solve(input) {
  const tmp = input[0];
  console.log(isPalindrome(tmp) ? 'True' : 'False');
}

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});
