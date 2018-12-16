// https://www.codewars.com/kata/541c8630095125aba6000c00
// Takes in a number and return the sum of the digits of the number

function digital_root(n) {
  if (n.toString().length === 1) {
    return n;
  } else {
    var str = n.toString();
    var arr = str.split('');
    var numarr = [];
    for (var i = 0; i < arr.length; i++) {
      numarr.push(Number(arr[i]));
    }
    var sum = numarr.reduce(function(x, y) {
      return x + y;
    });
    return digital_root(sum);
  }
}
