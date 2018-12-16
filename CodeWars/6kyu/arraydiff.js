// https://www.codewars.com/kata/523f5d21c841566fde000009
// This algorithm removes all instances of b from a

function array_diff(a, b) {
  arr = [];
  var found = false;
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        found = true;
      }
    }
    if (found === false) {
      arr.push(a[i]);
    }
    found = false;
  }
  return arr;
}
