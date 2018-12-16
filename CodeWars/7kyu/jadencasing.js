// https://www.codewars.com/kata/5390bac347d09b7da40006f6
// Capitalizes every word in a string

String.prototype.toJadenCase = function() {
  var arr = this.split(' ');
  var returnarr = [];
  for (var i = 0; i < arr.length; i++) {
    returnarr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  }
  return returnarr.join(' ');
};
