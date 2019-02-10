//https://leetcode.com/problems/generate-parentheses/
function generateParenthesis(n) {
  let pos = [];
  function util(currPar = '', countLeft = 0, countRight = 0) {
    if (countRight > countLeft || countLeft > n || countRight > n) {
      return;
    }
    if (currPar.length === n * 2) {
      pos.push(currPar);
      return;
    }
    util(currPar + '(', countLeft + 1, countRight);
    util(currPar + ')', countLeft, countRight + 1);
  }
  util();
  return pos;
}
