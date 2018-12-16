//https://www.codewars.com/kata/528a0762f51e7a4f1800072a
// This function takes a decimal value and converts to a number base -2 or takes a number in base -2 and converts to decimal

function skrzat(type, input) {
  if (type === 'b') {
    let sum = 0;
    let inputrev = input
      .split('')
      .reverse()
      .join('');
    for (let i = 0; i < inputrev.length; i++) {
      let val = parseInt(inputrev[i]);
      val === 1 ? (sum += Math.pow(-2, i)) : (sum += 0);
    }
    return 'From binary: ' + input + ' is ' + sum;
  } else {
    let arr = [];
    let inputcpy = input;
    while (Math.abs(input) > 0) {
      if (Math.abs(input % 2) === 1) {
        arr.push(1);
        input = (input - 1) / -2;
      } else {
        arr.push(0);
        input = input / -2;
      }
    }
    if (arr.length === 0) {
      return 'From decimal: ' + inputcpy + ' is 0';
    }
    return 'From decimal: ' + inputcpy + ' is ' + arr.reverse().join('');
  }
}
