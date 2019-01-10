class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Append to the end of a linked list
  append(data) {
    let node = new Node(data);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  //Get a value at a specific index
  getAt(idx) {
    if (idx > this.length - 1) throw new Error('Index invalid value');
    let currNode = this.head;
    while (currNode) {
      if (idx === 0) return currNode.data;
      idx--;
      currNode = currNode.next;
    }
  }

  //Add data to the front of the list
  unshift(data) {
    let node = new Node(data);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  //Remove from the front of the list
  shift() {
    if (this.length === 0) throw new Error('Cannot remove from empty list');
    let node = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return node.data;
  }

  //Remove from the end of the list
  pop() {
    if (this.length === 0) throw new Error('Cannot remove from empty list');
    let node = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
      this.length--;
      return node.data;
    }
    this.length--;
    let currNode = this.head;
    while (currNode.next.next) {
      currNode = currNode.next;
    }
    currNode.next = null;
    this.tail = currNode;
    return node.data;
  }

  //Insert at a specific index
  insertAt(idx, data) {
    if (idx > this.length - 1) throw new Error('Index invalid value');
    let node = new Node(data);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else if (idx === 0) {
      this.unshift(data);
    } else if (idx === this.length - 1) {
      this.append(data);
    } else {
      let currNode = this.head;
      while (idx > 1) {
        currNode = currNode.next;
        idx--;
      }
      node.next = currNode.next;
      currNode.next = node;
      this.length++;
    }
  }

  //Remove from a specific index
  removeAt(idx) {
    if (idx > this.length - 1 && idx !== 0) {
      throw new Error('Index invalid value');
    } else if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      let currNode = this.head;
      while (idx > 1) {
        currNode = currNode.next;
        idx--;
      }
      let retNode = currNode.next;
      currNode.next = currNode.next.next;
      this.length--;
      return retNode.data;
    }
  }

  //Get the average of the list of numbers
  averageOfList() {
    let sum = 0;
    if (this.length === 0) throw new Error('No average');
    let currNode = this.head;
    while (currNode) {
      sum += currNode.data;
      currNode = currNode.next;
    }
    return sum / this.length;
  }

  //Reverse the list in place
  reverse() {
    if (this.length < 2) return this;
    let prev = null;
    let currNode = this.head;
    this.tail = currNode;
    let next;
    while (currNode) {
      next = currNode.next;
      if (next === null) {
        this.head = currNode;
      }
      currNode.next = prev;
      prev = currNode;
      currNode = next;
    }
    return this;
  }
}

module.exports = { LinkedList, Node };
