//Implement a function to check if a binary tree is a
//valid binary search tree

const {
  Node,
  Tree
} = require('../../Algorithms For Class/trees/binarytreeimplementation');

function validBST(node, min = -Infinity, max = Infinity) {
  if (node) {
    if (node.value < min || node.value > max) return false;
    if (!validBST(node.left, min, node.value)) return false;
    if (!validBST(node.right, node.value, max)) return false;
  }
  return true;
}

//Make a binary tree
let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);
let n7 = new Node(7);
let n8 = new Node(8);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.right = n6;
n6.left = n7;
n7.right = n8;

let t1 = new Tree(n1);

console.log(validBST(t1.root));

//Make a binary search tree
let n9 = new Node(50);
let n10 = new Node(10);
let n11 = new Node(5);
let n12 = new Node(100);
let n13 = new Node(75);
let n14 = new Node(200);

n9.left = n10;
n10.left = n11;
n9.right = n12;
n12.left = n13;
n12.right = n14;

let t2 = new Tree(n9);

console.log(validBST(t2.root));
