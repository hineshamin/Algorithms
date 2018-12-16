// https://www.codewars.com/kata/56882731514ec3ec3d000009
// Algorithm that determines who the winner is based on a sequence of connect four moves

// Main function
function whoIsWinner(piecesPositionList) {
  // No one can have won if there have been less than 7 moves
  if (piecesPositionList.length < 7) {
    return 'Draw';
  }
  // Initialize board
  let board = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: []
  };
  // Add pieces to the board and check for a winner as each piece is added
  for (let i = 0; i < piecesPositionList.length; i++) {
    board = addPieceToBoard(board, piecesPositionList[i]);
    if (i >= 7) {
      let winner = checkForWinner(board);
      if (winner !== 'Draw') {
        return winner;
      }
    }
  }
  return 'Draw';
}

// Add piece to the board
function addPieceToBoard(board, piece) {
  let p = piece.split('_');
  let col = p[0];
  let color = p[1];
  board[col].push(color);
  return board;
}

// Checks for a winner through 4 different methods
function checkForWinner(board) {
  if (checkForVerticalWinner(board)) {
    return checkForVerticalWinner(board);
  }
  if (checkForHorizontalWinner(board)) {
    return checkForHorizontalWinner(board);
  }
  if (checkForLDiagWinner(board)) {
    return checkForLDiagWinner(board);
  }
  if (checkForRDiagWinner(board)) {
    return checkForRDiagWinner(board);
  }
  return 'Draw';
}

// Check to see if there is a vertical winner on the board
function checkForVerticalWinner(board) {
  for (let key in board) {
    if (board[key].length >= 4) {
      for (let i = 0; i < board[key].length - 3; i++) {
        let init_color = board[key][i];
        if (init_color !== undefined) {
          if (
            board[key][i + 1] === init_color &&
            board[key][i + 2] === init_color &&
            board[key][i + 3] === init_color
          ) {
            return init_color;
          }
        }
      }
    }
  }
  return false;
}

// Check to see if there is a horizontal winner on the board
function checkForHorizontalWinner(board) {
  let keys = Object.keys(board);
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      let init_color = board[keys[j]][i];
      if (init_color !== undefined) {
        if (
          board[keys[j + 1]][i] === init_color &&
          board[keys[j + 2]][i] === init_color &&
          board[keys[j + 3]][i] === init_color
        ) {
          return init_color;
        }
      }
    }
  }
  return false;
}

// Check to see if there is a right diagonal winner on the board
function checkForRDiagWinner(board) {
  let keys = Object.keys(board);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      let init_color = board[keys[j]][i];
      if (init_color !== undefined) {
        if (
          board[keys[j + 1]][i + 1] === init_color &&
          board[keys[j + 2]][i + 2] === init_color &&
          board[keys[j + 3]][i + 3] === init_color
        ) {
          return init_color;
        }
      }
    }
  }
  return false;
}

// Check to see if there is a left diagonal winner on the board
function checkForLDiagWinner(board) {
  let keys = Object.keys(board);
  for (let i = 0; i < 3; i++) {
    for (let j = keys.length - 1; j >= 3; j--) {
      let init_color = board[keys[j]][i];
      if (init_color !== undefined) {
        if (
          board[keys[j - 1]][i + 1] === init_color &&
          board[keys[j - 2]][i + 2] === init_color &&
          board[keys[j - 3]][i + 3] === init_color
        ) {
          return init_color;
        }
      }
    }
  }
  return false;
}
