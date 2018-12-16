// https://www.codewars.com/kata/5324945e2ece5e1f32000370
// This algorithm adds 2 numbers represented as strings

function sumStrings(a, b) {
  a = removeleadingzeroes(a);
  b = removeleadingzeroes(b);
  let str = '';
  let multiplier = 0;
  if (a.length > b.length) {
    for (let i = 0; i < b.length; i++) {
      let sum =
        parseInt(b[b.length - i - 1]) +
        parseInt(a[a.length - i - 1]) +
        multiplier;
      if (sum >= 10) {
        multiplier = 1;
        sum = sum % 10;
      } else {
        multiplier = 0;
      }
      str = sum.toString() + str;
    }
    if (multiplier === 1) {
      str =
        a.slice(0, a.length - b.length - 1) +
        (parseInt(a[a.length - b.length - 1]) + 1).toString() +
        str;
    } else {
      str = a.slice(0, a.length - b.length) + str;
    }
  } else if (b.length > a.length) {
    for (let i = 0; i < a.length; i++) {
      let sum =
        parseInt(b[b.length - i - 1]) +
        parseInt(a[a.length - i - 1]) +
        multiplier;
      if (sum >= 10) {
        multiplier = 1;
        sum = sum % 10;
      } else {
        multiplier = 0;
      }
      str = sum.toString() + str;
    }
    if (multiplier === 1) {
      str =
        b.slice(0, b.length - a.length - 1) +
        (parseInt(b[b.length - a.length - 1]) + 1).toString() +
        str;
    } else {
      str = b.slice(0, b.length - a.length) + str;
    }
  } else {
    for (let i = 0; i < a.length; i++) {
      let sum =
        parseInt(b[b.length - i - 1]) +
        parseInt(a[a.length - i - 1]) +
        multiplier;
      if (sum >= 10) {
        multiplier = 1;
        sum = sum % 10;
      } else {
        multiplier = 0;
      }
      str = sum.toString() + str;
    }
    if (multiplier === 1) {
      str = '1' + str;
    }
  }
  return str;
}

function removeleadingzeroes(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      count += 1;
    } else {
      break;
    }
  }
  return str.slice(count);
}
