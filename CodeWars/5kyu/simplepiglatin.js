// https://www.codewars.com/kata/520b9d2ad5c005041100000f
// This algorithm takes the first letter of each word to the end and then adds 'ay' to the end of the word

function pigIt(str) {
  console.log('z'.charCodeAt(0));
  return str
    .split(' ')
    .map(function(x) {
      if (x.split(' ').every(y => isLetter(y))) {
        return x.slice(1) + x.slice(0, 1) + 'ay';
      }
      return x;
    })
    .join(' ');
}

function isLetter(n) {
  if (
    (n.charCodeAt(n) >= 65 && n.charCodeAt(n) <= 90) ||
    (n.charCodeAt(n) >= 97 && n.charCodeAt(n) <= 122)
  ) {
    return true;
  }
  return false;
}
