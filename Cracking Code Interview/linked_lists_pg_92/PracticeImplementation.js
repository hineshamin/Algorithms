//This file has implementations for both singly lisked lists and doubly linked lists
//as well as common methods for each

//Node for a single linked list
class Node_s {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}

//Node for a doubly linked list
class Node_d {
  constructor(value) {
    this.value = value;
    this.prev = undefined;
    this.next = undefined;
  }
}

//Class for a doubly linked list
class DLinkedList {
  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  //Add a value to the front of the list
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

  //Add a value to the end of the list
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

  //List the elements of the list
  listElements(value) {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }

  //Reverse the list
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

// Class for a singly linked list
class SLinkedList {
  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  // Add a value to the front of the list
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

  // Add a value to the end of the list
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

  // Delete a specific value from the list
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

  // List the elements of the list
  listElements() {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }

  // Remove duplicate values from the list
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

  // Get length of the list
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

  // Get the k to last node
  kToLast(k) {
    let length = this.length;
    let currNode = this.head;
    while (length > k) {
      currNode = currNode.next;
      length--;
    }
    return currNode;
  }

  // Reverse the list
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
