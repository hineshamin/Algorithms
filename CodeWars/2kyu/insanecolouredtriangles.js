// https://www.codewars.com/kata/5a331ea7ee1aae8f24000175

function triangle(row) {
  //Set up the conversion table
  let conv = {
    RR: 'R',
    GG: 'G',
    BB: 'B',
    BG: 'R',
    GB: 'R',
    RG: 'B',
    GR: 'B',
    BR: 'G',
    RB: 'G'
  };
  //Take out the cases where the row length is <= 3
  if (row.length <= 3) {
    return getColor(row, 1, conv);
  }
  let val = parseInt(Math.log(row.length - 1) / Math.log(3));
  let neededVal = Math.pow(3, val) + 1;
  let newRow = '';
  for (let i = 0; i < row.length - neededVal + 1; i++) {
    newRow += analyzeElements(row[i], row[i + neededVal - 1]);
  }
  return triangle(newRow);
}

//This does enough conversions to get the row length down to the nearest factor of 3^n + 1
function getColor(row, neededVal, conv) {
  if (row.length == neededVal) {
    return row;
  }

  let newRow = '';
  for (let i = 0; i < row.length - 1; i++) {
    let val = row.slice(i, i + 2);
    newRow += conv[val];
  }
  return getColor(newRow, neededVal, conv);
}

//Analyzes the final row
function analyzeElements(s, e) {
  if (s === e) {
    return s;
  }
  if ((s === 'B' && e === 'G') || (s === 'G' && e === 'B')) {
    return 'R';
  }
  if ((s === 'B' && e === 'R') || (s === 'R' && e === 'B')) {
    return 'G';
  }
  if ((s === 'R' && e === 'G') || (s === 'G' && e === 'R')) {
    return 'B';
  }
}
