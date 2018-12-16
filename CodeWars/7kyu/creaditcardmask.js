// https://www.codewars.com/kata/5412509bd436bd33920011bc
// Changes everything except the last 4 characters to '#'

function maskify(cc) {
  var str = '';
  if (cc.length <= 4) {
    return cc;
  }
  for (var i = 0; i < cc.length - 4; i++) {
    str += '#';
  }
  return str + cc.slice(cc.length - 4);
}
