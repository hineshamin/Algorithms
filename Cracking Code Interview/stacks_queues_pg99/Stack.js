class Stack {
  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if (!this.head) this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) return 'Cannot pop from empty stack';
    let node = this.head;
    this.head = this.head.next;
    this.length--;
    return node.value;
  }

  peek() {
    if (this.isEmpty()) return 'Stack is empty';
    return this.head.value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}

module.exports = Stack;
