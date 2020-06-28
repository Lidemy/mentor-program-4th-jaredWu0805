const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

function judgeNarcissistic(n, m) {
  for (let i = n; i <= m; i += 1) {
    if (i >= 0 && i < 10) {
      console.log(i);
    } else {
      let tmp = i;
      const arr = [];
      let sum = 0;
      while (tmp > 0) {
        arr.push(tmp % 10);
        tmp = Math.floor(tmp / 10);
      }

      const leng = arr.length;
      for (let j = 0; j < leng; j += 1) {
        sum += (arr[j] ** leng);
      }
      if (i === sum) console.log(sum);
    }
  }
}

function solve(input) {
  const tmp = input[0].split(' ');
  judgeNarcissistic(Number(tmp[0]), Number(tmp[1]));
}

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});
