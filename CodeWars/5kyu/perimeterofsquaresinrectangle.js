// https://www.codewars.com/kata/559a28007caad2ac4e000083
// The function takes in the number of squares in a rectangle and adds up their perimeter
// The squares follow the fibonacci sequence for size

function perimeter(n) {
  let arr = [1, 1];
  for (let k = 2; k < n + 1; k++) {
    arr.push(arr[k - 2] + arr[k - 1]);
  }
  return (
    4 *
    arr.reduce(function(x, y) {
      return x + y;
    }, 0)
  );
}
