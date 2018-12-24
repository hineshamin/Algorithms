//Given a sudoku board, determine if there is a valid solution
//Used backtracking to solve

let cand = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

function sudokuSolve(board) {
  let spaces = findEmptySpaces(board);
  function helper(board, idx = 0) {
    if (idx === spaces.length) {
      return true;
    }
    let [row, col] = spaces[idx];
    let cands = getCandidates(board, row, col);
    for (let c of cands) {
      board[row][col] = c;
      if (helper(board, idx + 1)) return true;
      board[row][col] = '.';
    }
    return false;
  }
  return helper(board);
}

function findEmptySpaces(board) {
  let spaces = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === '.') spaces.push([i, j]);
    }
  }
  return spaces;
}

function getCandidates(board, row, col) {
  let cands = [];
  for (let c of cand) {
    let collision = false;
    for (let i = 0; i < board.length; i++) {
      if (
        board[row][i] === c ||
        board[i][col] === c ||
        board[row - (row % 3) + Math.floor(i / 3)][col - (col % 3) + (i % 3)] ==
          c
      ) {
        collision = true;
        break;
      }
    }
    if (!collision) cands.push(c);
  }
  return cands;
}
