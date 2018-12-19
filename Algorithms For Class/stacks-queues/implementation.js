const LinkedList = require('../arrays-linkedlists/implementation');

class Stack {
  constructor() {
    this.stack = new LinkedList();
    this.length = 0;
  }

  push(data) {
    this.stack.unshift(data);
    this.length++;
  }

  pop() {
    this.length--;
    return this.stack.shift();
  }

  peek() {
    return this.stack.head;
  }

  isEmpty() {
    return this.length === 0;
  }
}

class Queue {
  constructor() {
    this.queue = new LinkedList();
    this.length = 0;
  }

  enqueue(data) {
    this.queue.append(data);
    this.length++;
  }

  dequeue() {
    this.length--;
    return this.queue.shift();
  }

  peek() {
    return this.queue.head;
  }

  isEmpty() {
    return this.length === 0;
  }
}

module.exports = {
  Stack,
  Queue
};
