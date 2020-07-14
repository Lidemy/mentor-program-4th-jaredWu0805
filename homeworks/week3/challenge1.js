/* eslint-disable no-param-reassign */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

function addNeighbor(node, n, m, matrix, queue) {
  const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const newStep = node[2] + 1;
  // Go through node's neighbors
  for (let i = 0; i < dir.length; i += 1) {
    const x = node[0] + dir[i][0];
    const y = node[1] + dir[i][1];
    if (x >= 0 && x < n && y >= 0 && y < m
    && matrix[x][y] === '.' && matrix[x][y] !== 'X') {
      queue.push([x, y, newStep]);
      matrix[x][y] = 'X'; // Mark as checked
    }
  }
}

function shortestPath(h, w, arr) {
  // Using BFS
  const nodeQueue = [];
  nodeQueue.push([0, 0, 0]); // Initialize start point - x, y, step
  while (nodeQueue.length !== 0) {
    for (let i = 0; i < nodeQueue.length; i += 1) {
      const tmp = nodeQueue.shift();
      if (tmp[0] === h - 1 && tmp[1] === w - 1) {
        return tmp[2];
      }
      addNeighbor(tmp, h, w, arr, nodeQueue);
    }
  }
  return 0;
}

function solve(input) {
  const tmp = input[0].split(' ');

  // Initialize maze
  const height = Number(tmp[0]);
  const width = Number(tmp[1]);
  const maze = [];
  for (let i = 1; i <= height; i += 1) {
    maze.push(input[i].split(''));
  }
  console.log(shortestPath(height, width, maze));
}

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});
