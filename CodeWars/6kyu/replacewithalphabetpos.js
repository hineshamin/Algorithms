// https://www.codewars.com/kata/546f922b54af40e1e90001da
// Replaces every chacter with it's position in the alphabet

function alphabetPosition(text) {
  var cap = text.toUpperCase();
  var asciiarr = [];
  for (var i = 0; i < cap.length; i++) {
    if (cap.charCodeAt(i) - 64 >= 1 && cap.charCodeAt(i) - 64 <= 26) {
      asciiarr.push(cap.charCodeAt(i) - 64);
    }
  }
  return asciiarr.join(' ');
}
