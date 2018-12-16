function URLify(s) {
  let url = '';
  for (let char of s) {
    if (char === ' ') {
      url += '%20';
    } else {
      url += char;
    }
  }
  return url;
}

console.log(URLify('Mr John Smith'));
