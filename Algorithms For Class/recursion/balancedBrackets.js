let left = new Set(['{', '[', '(']);
let right = new Set(['}', ']', ')']);
let compareObj = {
  '}': '{',
  ']': '[',
  ')': '('
};
let compareObj1 = {
  '{': '}',
  '[': ']',
  '(': ')'
};

function balancedBrackets(s, i = 0, looking = '') {
  while (i < s.length && i !== false) {
    let char = s[i];
    if (left.has(char)) {
      i = balancedBrackets(s, i + 1, compareObj1[char]);
      if (i === false) return false;
    } else if (right.has(char) && char !== looking) return false;
    else if (right.has(char) && char === looking) return i + 1;
    else {
      i++;
    }
  }
  if (looking !== '') return false;
  return true;
}

console.log(balancedBrackets('hellothere]'));
