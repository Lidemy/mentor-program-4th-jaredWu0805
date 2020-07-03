const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

// the array of items
const arr = [];
let numOfItems = 0;

function greedyThief(capacity, index) {
  if (index >= numOfItems) return 0;
  const tmp1 = greedyThief(capacity, index + 1);
  const weight = arr[index][0];
  const value = arr[index][1];
  if (weight > capacity) {
    return tmp1;
  }
  const tmp2 = greedyThief(capacity - weight, index + 1) + value;
  return Math.max(tmp1, tmp2);
}

function solve(input) {
  const tmp = input[0].split(' ');
  let limit;
  [numOfItems, limit] = tmp;
  for (let i = 1; i <= tmp[0]; i += 1) {
    const item = input[i].split(' ');
    item[0] = Number(item[0]);
    item[1] = Number(item[1]);
    arr.push(item);
  }
  console.log(greedyThief(limit, 0));
}

rl.on('line', line => lines.push(line));

rl.on('close', () => solve(lines));
