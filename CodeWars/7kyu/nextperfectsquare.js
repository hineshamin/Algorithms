// https://www.codewars.com/kata/56269eb78ad2e4ced1000013
// Return the next square if sq if a perfect square, -1 otherwise

function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq)) === false) {
    return -1;
  }
  var nextsqrrt = Math.sqrt(sq) + 1;
  return nextsqrrt * nextsqrrt;
}
