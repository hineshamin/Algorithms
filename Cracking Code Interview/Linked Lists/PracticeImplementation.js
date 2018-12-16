class Node_s {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}

class Node_d {
  constructor(value) {
    this.value = value;
    this.prev = undefined;
    this.next = undefined;
  }
}

class DLinkedList {
  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  addToFront(value) {
    let node = new Node_d(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  addToEnd(value) {
    let node = new Node_d(value);
    let currNode = this.head;
    if (!this.head) {
      this.head = node;
    } else {
      while (currNode) {
        if (!currNode.next) {
          currNode.next = node;
          node.prev = currNode;
          return this;
        }
        currNode = currNode.next;
      }
    }
  }

  listElements(value) {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }

  reverse() {
    if (this.length <= 1) return this;
    let next;
    let node = this.head;
    while (node) {
      next = node.next;
      node.next = node.prev;
      node.prev = next;
      if (!next) {
        this.head = node;
      }
      node = next;
    }
    return this;
  }
}

class SLinkedList {
  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  addToFront(value) {
    let node = new Node_s(value);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
    this.length++;
    return this;
  }

  addToEnd(value) {
    let node = new Node_s(value);
    let currNode = this.head;
    if (this.head) {
      while (currNode) {
        if (!currNode.next) {
          currNode.next = node;
          return this;
        }
        currNode = currNode.next;
      }
    } else {
      this.head = node;
    }
    this.length++;
    return this;
  }

  delete(value) {
    let currNode = this.head;
    if (currNode.value === value) {
      this.head = currNode.next;
      return this;
    }
    if (currNode) {
      while (currNode) {
        if (currNode.next && currNode.next.value === value) {
          currNode.next = currNode.next.next;
          return this;
        }
        currNode = currNode.next;
      }
    }
    return this;
  }

  listElements() {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }

  removeDup() {
    let seen = new Set([this.head.value]);
    let currNode = this.head;
    while (currNode) {
      if (currNode.next && seen.has(currNode.next.value)) {
        let next = currNode.next;
        while (next && seen.has(next.value)) {
          next = next.next;
        }
        currNode.next = next;
      } else {
        seen.add(currNode.value);
      }
      currNode = currNode.next;
    }
    return this;
  }

  getLength() {
    if (this.head === undefined) {
      return 0;
    }
    let currNode = this.head;
    let length = 1;
    while (currNode) {
      if (currNode.next) length++;
      currNode = currNode.next;
    }
    return length;
  }

  kToLast(k) {
    let length = this.length;
    let currNode = this.head;
    while (length > k) {
      currNode = currNode.next;
      length--;
    }
    return currNode;
  }

  reverse() {
    if (this.length <= 1) return this;
    let currNode = this.head;
    let next;
    let prev;
    while (currNode) {
      next = currNode.next;
      if (!next) {
        this.head = currNode;
      }
      currNode.next = prev;
      prev = currNode;
      currNode = next;
    }
  }
}

let siLinkedList = new DLinkedList();
siLinkedList.addToFront(5);
siLinkedList.addToFront(4);
siLinkedList.addToFront(3);
siLinkedList.addToFront(2);
siLinkedList.addToFront(1);
siLinkedList.reverse();
siLinkedList.listElements();
// console.log(siLinkedList.head.value);
// console.log(siLinkedList.head.next.value);
// console.log(siLinkedList.head.next.next.value);
// console.log(siLinkedList.head.next.next.next.value);
// console.log(siLinkedList.head.next.next.next.next.value);
