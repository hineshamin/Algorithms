//Implementation of a stack
class Stack {
  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  //Push a new value onto the stack
  push(value) {
    let node = new Node(value);
    if (!this.head) this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  //Pop a value off the stack
  pop() {
    if (this.isEmpty()) return 'Cannot pop from empty stack';
    let node = this.head;
    this.head = this.head.next;
    this.length--;
    return node.value;
  }

  //Look at the top of the stack
  peek() {
    if (this.isEmpty()) return 'Stack is empty';
    return this.head.value;
  }

  //Tells you if the stack is empty
  isEmpty() {
    return this.length === 0;
  }
}

//Node class for use in the stack
class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}

module.exports = Stack;
