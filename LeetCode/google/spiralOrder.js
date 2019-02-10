//https://leetcode.com/problems/spiral-matrix/
let next = {
  R: 'D',
  D: 'L',
  L: 'U',
  U: 'R'
};

let direction = {
  R: [0, 1],
  L: [0, -1],
  D: [1, 0],
  U: [-1, 0]
};

//RECURSIVE
// function spiralOrder(m) {
//   if (m.length === 0) return [];
//   let path = [];
//   function util(
//     currRow = 0,
//     currCol = 0,
//     seen = new Set(),
//     currDirection = 'R'
//   ) {
//     path.push(m[currRow][currCol]);
//     seen.add(`${currRow},${currCol}`);
//     if (seen.size < m.length * m[0].length) {
//       let nextRow = currRow + direction[currDirection][0];
//       let nextCol = currCol + direction[currDirection][1];
//       if (
//         seen.has(`${nextRow},${nextCol}`) ||
//         !m[nextRow] ||
//         !m[nextRow][nextCol]
//       ) {
//         currDirection = next[currDirection];
//         nextRow = currRow + direction[currDirection][0];
//         nextCol = currCol + direction[currDirection][1];
//       }
//       util(nextRow, nextCol, seen, currDirection);
//     }
//   }
//   util();
//   return path;
// }

//ITERATIVE
function spiralOrder(m) {
  if (m.length === 0) return [];
  let path = [];
  let currRow = 0;
  let currCol = 0;
  let seen = new Set();
  let currDirection = 'R';
  while (seen.size < m.length * m[0].length) {
    path.push(m[currRow][currCol]);
    seen.add(`${currRow},${currCol}`);
    let nextRow = currRow + direction[currDirection][0];
    let nextCol = currCol + direction[currDirection][1];
    if (
      seen.has(`${nextRow},${nextCol}`) ||
      !m[nextRow] ||
      !m[nextRow][nextCol]
    ) {
      currDirection = next[currDirection];
      nextRow = currRow + direction[currDirection][0];
      nextCol = currCol + direction[currDirection][1];
    }
    currRow = nextRow;
    currCol = nextCol;
  }
  return path;
}
