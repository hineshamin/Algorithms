// https://www.codewars.com/kata/54d81488b981293527000c8f
// This algorithm takes in a list of integers and a target sum
// It returns the first pair that adds up to the target sum

var sumPairs = function(ints, s) {
  var arr = [];
  var hash = {};
  for (var i = 0; i < ints.length; i++) {
    if ((s - ints[i]).toString() in hash) {
      arr.push(hash[s - ints[i].toString()]);
      arr.push(ints[i]);
      return arr;
    } else {
      hash[ints[i]] = ints[i];
    }
  }
  return undefined;
};
