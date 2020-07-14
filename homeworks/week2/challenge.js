var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
  var tmp = lines[0].split(' ')
  var n = Number(tmp[0]);
  var m = Number(tmp[1]);
  var arr = [];
  for (var i = 1; i <= n; i++) {
  	arr.push(Number(lines[i]));
  }
  for (var i = 1; i <= m; i++) {
  	console.log(search(arr, Number(lines[n + i])));
  }
}

function search(arr, target) {
    if (arr.length == 0) return -1;
    return search_index(arr, 0, arr.length - 1, target);
}

function search_index(arr, lo, hi, tar) {

    if (lo > hi) return -1;

    var i = lo + Math.floor((hi - lo) / 2);

    if (arr[i] == tar) return i;
    if (arr[i] > tar) return search_index(arr, lo, i - 1, tar);
    if (arr[i] < tar) return search_index(arr, i + 1, hi, tar);
}
