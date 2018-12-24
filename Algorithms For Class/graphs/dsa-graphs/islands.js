//https://leetcode.com/problems/number-of-islands/
//Given a 2d grid of 1's and 0's, find the number of islands

function numIslands(grid) {
  let explored = new Set();
  let count = 0;
  //Have a for loop that runs DFS every time a node hasn't been seen
  //and count how many times DFS ran
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!explored.has(`${i},${j}`) && grid[i][j] === '1') {
        explored = dfs(grid, `${i},${j}`, explored);
        count++;
      }
    }
  }
  return count;
}

//DFS search to find the whole island
function dfs(grid, start, explored) {
  explored.add(start);
  let pos = possible(grid, start);
  for (let p of pos) {
    if (!explored.has(p)) {
      dfs(grid, p, explored);
    }
  }
  return explored;
}

//Not used
function dfsIterative(grid, start, explored) {
  let s = [start];
  while (s.length > 0) {
    let currNode = s.pop();
    explored.add(currNode);
    let pos = possible(grid, currNode);
    for (let p of pos) {
      if (!explored.has(p)) {
        explored.add(p);
        s.push(p);
      }
    }
  }
  return explored;
}

//Finds the next possible spots that we could go to
function possible(grid, current) {
  let [x, y] = current.split(',').map(Number);
  let pos = [];
  if (grid[x - 1] && grid[x - 1][y] === '1') pos.push(`${x - 1},${y}`);
  if (grid[x + 1] && grid[x + 1][y] === '1') pos.push(`${x + 1},${y}`);
  if (grid[x][y - 1] === '1') pos.push(`${x},${y - 1}`);
  if (grid[x][y + 1] === '1') pos.push(`${x},${y + 1}`);
  return pos;
}

let grid = [
  ['1', '0', '1', '0', '1'],
  ['0', '1', '0', '1', '0'],
  ['1', '0', '1', '0', '1'],
  ['0', '1', '0', '1', '0']
];

// possible(grid, '1,1');

// console.log(dfs(grid, '0,0', new Set()));
console.log(numIslands(grid));
