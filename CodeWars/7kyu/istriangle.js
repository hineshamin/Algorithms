// https://www.codewars.com/kata/56606694ec01347ce800001b
// Return true if the input sides createa valid triangle, else false

function isTriangle(a, b, c) {
  if (a + b <= c) {
    return false;
  } else if (a + c <= b) {
    return false;
  } else if (b + c <= a) {
    return false;
  }
  return true;
}
