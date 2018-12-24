//Given a list of word, determine which ones are on the boggle board

function wordBoggle(board, words) {
  return words.filter(word => findSingleWord(board, word));
}

function findSingleWord(board, word) {
  let firstLetter = word[0];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === firstLetter) {
        if (wordExists(board, word, [i, j])) return true;
      }
    }
  }
  return false;
}

function wordExists(board, word, currPos, explored = new Set(), idx = 1) {
  if (idx === word.length) return true;
  explored.add(`${currPos[0]},${currPos[1]}`);
  let letterSeeking = word[idx];
  let possible = posNext(board, currPos[0], currPos[1], explored, idx);
  for (let p of possible) {
    if (board[p[0]][p[1]] === letterSeeking) {
      if (wordExists(board, word, p, explored, idx + 1)) return true;
      explored.delete(`${p[0]},${p[1]}`);
    }
  }
  return false;
}

function posNext(board, row, col, explored) {
  let next = [];
  let orderCheck = [
    [row - 1, col - 1],
    [row - 1, col],
    [row - 1, col + 1],
    [row, col + 1],
    [row + 1, col + 1],
    [row + 1, col],
    [row + 1, col - 1],
    [row, col - 1]
  ];
  for (let p of orderCheck) {
    if (board[p[0]] && board[p[0]][p[1]] && !explored.has(`${p[0]},${p[1]}`))
      next.push([p[0], p[1]]);
  }
  return next;
}
