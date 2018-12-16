// https://www.codewars.com/kata/55f2b110f61eb01779000053
// This algorithm sums up all the integers between a and b

function GetSum(a, b) {
  var sum = 0;
  if (a == b) {
    return a;
  } else if (a < b) {
    for (var i = a; i < b + 1; i++) {
      sum += i;
    }
  } else {
    for (var i = b; i < a + 1; i++) {
      sum += i;
    }
  }
  return sum;
}
