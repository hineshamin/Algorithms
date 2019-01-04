//Given a binary tree, design an algorithm which creates a linked list
//of all the nodes at each depth

const {
  Node,
  Tree
} = require('../../Algorithms For Class/trees/binarytreeimplementation');
const LinkedList = require('../../Algorithms For Class/arrays-linkedlists/implementation');

//Main Function
function listOfDepths(tree) {
  let depths = {};
  function create(node, currDepth = 0) {
    if (node) {
      if (depths[currDepth]) depths[currDepth].append(node.value);
      else {
        depths[currDepth] = new LinkedList();
        depths[currDepth].append(node.value);
      }
      create(node.left, currDepth + 1);
      create(node.right, currDepth + 1);
    }
  }
  create(tree.root);
  return depths;
}

//Make a binary tree
let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);
let n7 = new Node(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.right = n6;
n6.left = n7;

let t = new Tree(n1);

console.log(listOfDepths(t));
