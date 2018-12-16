// https://www.codewars.com/kata/5267faf57526ea542e0007fb
// This program implements common math methods

Math.round = function(number) {
  if (number.toString().split('.')[1] === undefined) {
    return parseInt(number);
  }
  if (number.toString().split('.')[1][0] >= 5) {
    return parseInt(number) + 1;
  }
  return parseInt(number);
};

Math.ceil = function(number) {
  if (number.toString().split('.')[1] === undefined) {
    return parseInt(number);
  }
  return parseInt(number) + 1; // TODO: fix this
};

Math.floor = function(number) {
  return parseInt(number); // TODO: fix this
};

Math.pow = function(x, y) {
  let mult = 1;
  for (let i = 0; i < y; i++) {
    mult *= x;
  }
  return mult;
};
