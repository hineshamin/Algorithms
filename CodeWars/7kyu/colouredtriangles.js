// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111
// Simple version of the insane coloured traingles in 2kyu

function triangle(row) {
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
  if (row.length === 1) {
    return row;
  }
  let newRow = '';
  for (let i = 0; i < row.length - 1; i++) {
    let val = row.slice(i, i + 2);
    newRow += conv[val];
  }
  return triangle(newRow);
}
