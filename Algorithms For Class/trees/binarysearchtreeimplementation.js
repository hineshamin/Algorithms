const { Queue } = require('../stacks-queues/implementation');

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  findIteratively(x) {
    let currNode = this;
    while (currNode) {
      if (currNode.value === x) return currNode;
      currNode = x < currNode.value ? currNode.left : currNode.right;
    }
  }

  findRecursively(x, currNode = this) {
    if (!currNode) return;
    if (currNode.value === x) return currNode;
    if (x < currNode.value) return this.findRecursively(x, currNode.left);
    if (x > currNode.value) return this.findRecursively(x, currNode.right);
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  insert(x) {
    let n = new Node(x);
    let currNode = this.root;
    let found = false;
    if (!currNode) {
      found = true;
      this.root = n;
    }
    while (!found) {
      if (currNode.value > x) {
        if (!currNode.left) {
          currNode.left = n;
          found = true;
        } else {
          currNode = currNode.left;
        }
      } else {
        if (!currNode.right) {
          currNode.right = n;
          found = true;
        } else {
          currNode = currNode.right;
        }
      }
    }
    return this;
  }

  insertRecursively(x) {
    let n = new Node(x);
    let currNode = this.root;

    function recurse(currNode) {
      if (!currNode.left && x < currNode.value) {
        currNode.left = n;
        return;
      }
      if (!currNode.right && x > currNode.value) {
        currNode.right = n;
        return;
      }
      if (x < currNode.value) {
        return recurse(currNode.left);
      }
      if (x > currNode.value) {
        return recurse(currNode.right);
      }
    }

    if (!currNode) {
      this.root = n;
    } else {
      recurse(this.root);
    }
  }

  findIteratively(x) {
    return this.root.findIteratively(x);
  }

  findRecursively(x) {
    return this.root.findRecursively(x);
  }
}
var binarySearchTree = new Tree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
var foundNode = binarySearchTree.findRecursively(20);
console.log(foundNode.value); // 20
foundNode.left; // null
foundNode.right; // null

var binarySearchTree = new Tree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
var foundNode = binarySearchTree.findRecursively(120);
console.log(foundNode); // undefined
