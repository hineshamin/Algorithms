//https://leetcode.com/problems/flipping-an-image/
function flipAndInvertImage(A) {
  reverseRows(A);
  flip(A);
  return A;
}

function reverseRows(A) {
  for (let row of A) {
    reverseSingleRow(row);
  }
}

function reverseSingleRow(r) {
  let i = 0;
  let j = r.length - 1;
  while (i < j) {
    [r[i], r[j]] = [r[j], r[i]];
    i++;
    j--;
  }
}

function flip(A) {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      A[i][j] = A[i][j] === 0 ? 1 : 0;
    }
  }
}
