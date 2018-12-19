const { Stack } = require('./implementation');

class Queue {
  constructor() {
    this.add = new Stack();
    this.remove = new Stack();
  }

  enqueue(data) {
    this.moveFromRemoveToAdd();
    this.add.push(data);
  }

  dequeue(data) {
    this.moveFromAddToRemove();
    return this.remove.pop();
  }

  peek() {
    this.moveFromAddToRemove();
    return this.remove.peek().data;
  }

  moveFromAddToRemove() {
    while (this.add.length > 0) {
      this.remove.push(this.add.pop());
    }
  }

  moveFromRemoveToAdd() {
    while (this.remove.length > 0) {
      this.add.push(this.remove.pop());
    }
  }
}
