const { Stack } = require('./implementation');

function balancedBrackets(s) {
  let left = new Set(['{', '[', '(']);
  let right = new Set(['}', ']', ')']);
  let compareObj = {
    '}': '{',
    ']': '[',
    ')': '('
  };
  let stack = new Stack();
  for (let char of s) {
    if (left.has(char)) stack.push(char);
    if (right.has(char) && stack.length === 0) return false;
    if (right.has(char) && stack.pop() !== compareObj[char]) return false;
  }
  if (stack.length > 0) return false;
  return true;
}
