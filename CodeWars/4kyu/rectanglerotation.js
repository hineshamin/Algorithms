// https://www.codewars.com/kata/5886e082a836a691340000c3
// This algorithm take a rectangles of sides a and b, rotates it 45 degrees, and then
// finds the number of integer coordinates inside it.

function rectangleRotation(a, b) {
  let count = 0;
  let midright = a / 2 / Math.sqrt(2);
  let midleft = -1 * midright;
  let x = b / 2 / Math.sqrt(2);
  let p1 = [midleft - x, midleft + x];
  let p2 = [midleft + x, midleft - x];
  let p3 = [midright - x, midright + x];
  let p4 = [midright + x, midright - x];
  let startx = Math.ceil(p1[0]);
  let endx = Math.floor(p4[0]);
  for (let i = startx; i <= endx; i++) {
    if (a > b) {
      if (i <= p2[0]) {
        count +=
          Math.floor(getyvaluefromline(p1, i, 1)) -
          Math.ceil(getyvaluefromline(p1, i, -1)) +
          1;
      } else if (i > p2[0] && i <= p3[0]) {
        count +=
          Math.floor(getyvaluefromline(p1, i, 1)) -
          Math.ceil(getyvaluefromline(p2, i, 1)) +
          1;
      } else {
        count +=
          Math.floor(getyvaluefromline(p3, i, -1)) -
          Math.ceil(getyvaluefromline(p2, i, 1)) +
          1;
      }
    } else {
      if (i <= p3[0]) {
        count +=
          Math.floor(getyvaluefromline(p1, i, 1)) -
          Math.ceil(getyvaluefromline(p1, i, -1)) +
          1;
      } else if (i > p3[0] && i <= p2[0]) {
        count +=
          Math.floor(getyvaluefromline(p3, i, -1)) -
          Math.ceil(getyvaluefromline(p1, i, -1)) +
          1;
      } else {
        count +=
          Math.floor(getyvaluefromline(p3, i, -1)) -
          Math.ceil(getyvaluefromline(p2, i, 1)) +
          1;
      }
    }
  }
  return count;
}

function getyvaluefromline(p, x, slope) {
  return slope * (x - p[0]) + p[1];
}
