//https://leetcode.com/problems/merge-k-sorted-lists/

const {
  Node
} = require('../../Algorithms For Class/arrays-linkedlists/implementation');

const { MinPriorityQueue } = require('../../Algorithms For Class/trees/heap');

class DataNode {
  constructor(data, index) {
    this.data = data;
    this.index = index;
  }
}

function mergeKLists(lists) {
  //Create initial priority queue
  let q = new MinPriorityQueue();
  for (let i = 0; i < lists.length; i++) {
    q.insert(new DataNode(lists[i].data, i));
  }
  //Create a new list to return
  let n;
  //Create a reference to the tail of the list to add to it
  let tail;
  //Main Loop
  while (q.size) {
    let node = q.extract();
    if (!n && !tail) {
      n = new Node(node.data);
      tail = n;
    } else {
      let n1 = new Node(node.data);
      tail.next = n1;
      tail = n1;
    }
    lists[node.index] = lists[node.index].next;
    if (lists[node.index]) {
      q.insert(new DataNode(lists[node.index].data, node.index));
    }
  }
  return n;
}
