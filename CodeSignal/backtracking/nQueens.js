// What are the different ways you can place
// nQueens on an nxn chessboard such that
// no queens attack each other

function nQueens(n) {
  let arr = [];
  function helper(currBoard, currCol = 0, currPlacements = []) {
    if (currCol === n) {
      arr.push(currPlacements);
      return;
    }
    for (let row = 0; row < n; row++) {
      if (isSafe(currBoard, row, currCol)) {
        currBoard[row][currCol] = 1;
        helper(currBoard, currCol + 1, [...currPlacements, row + 1]);
        currBoard[row][currCol] = 0;
      }
    }
  }
  helper(generateBoard(n));
  return arr;
}

// Generate an nxn board filled with 0's
function generateBoard(n) {
  let board = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    board.push(row);
  }
  return board;
}

function isSafe(board, row, col) {
  // Check the cols to the left
  for (let i = col - 1; i >= 0; i--) {
    if (board[row][i] === 1) return false;
  }
  // Check the left diag up
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 1) return false;
  }
  // Check the left diag down
  for (let i = row + 1, j = col - 1; i < board.length && j >= 0; i++, j--) {
    if (board[i][j] === 1) return false;
  }
  return true;
}

nQueens(4);
