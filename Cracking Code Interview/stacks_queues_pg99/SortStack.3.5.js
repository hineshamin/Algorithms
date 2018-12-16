const Stack = require('./Stack');

//Function that will sort a stack so that the largest elements are on top
//O(n^2) time and O(n) space
function sortStack(s) {
  //Create tempStack that will hold the elements in sorted order
  let tempStack = new Stack();
  while (!s.isEmpty()) {
    let temp = s.pop();
    if (tempStack.isEmpty()) tempStack.push(temp);
    else {
      while (tempStack.peek() < temp && !tempStack.isEmpty()) {
        s.push(tempStack.pop());
      }
      tempStack.push(temp);
    }
  }
  return tempStack;
}
