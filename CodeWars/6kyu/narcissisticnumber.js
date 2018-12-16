// https://www.codewars.com/kata/5287e858c6b5a9678200083c
// This algorithm return true if each digit raised to the number of digits in the number
// is are added together equals the original number, otherwise false
function narcissistic(value) {
  var arr = value.toString().split('');
  var sum = arr.reduce(function(x, y) {
    return x + Math.pow(Number(y), arr.length);
  }, 0);
  if (sum === value) {
    return true;
  }
  return false;
}
