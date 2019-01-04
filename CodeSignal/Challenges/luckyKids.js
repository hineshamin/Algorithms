// Given an array of behaviors, determine how many kids get gifts
// if they must behave better than at least half of their older siblings

const { MinHeap, MaxHeap } = require('../../Algorithms For Class/trees/heap');

//Below is a naive n^2 algorithm
// function luckyKids(behaviors) {
//   let num = 0;
//   for (let i = 0; i < behaviors.length; i++) {
//     num += checkKid(behaviors, i);
//   }
//   return num;
// }

// function checkKid(behaviors, i) {
//   if (i === behaviors.length - 1) return 1;
//   let numRequired = (behaviors.length - i - 1) / 2;
//   let num = 0;
//   for (let j = i + 1; j < behaviors.length; j++) {
//     if (behaviors[i] > behaviors[j]) num++;
//   }
//   if (num >= numRequired) return 1;
//   return 0;
// }

//Below is a better time complexity algorithm of n log n by using heaps
//Maintains a value that is required to get a gift
function luckyKids(behaviors) {
  let min = new MinHeap();
  let max = new MaxHeap();
  max.insert(behaviors[behaviors.length - 1]);
  let minRequired = [];
  for (let i = behaviors.length - 2; i >= 0; i--) {
    minRequired[i] = max.peek();
    fixHeaps(min, max, behaviors[i]);
  }
  return calcNumGifts(behaviors, minRequired);
}

//Changes around the heaps to maintain the desired structure
function fixHeaps(min, max, val) {
  if (val <= max.peek()) max.insert(val);
  else min.insert(val);
  if (min.size - max.size > 0) max.insert(min.extract());
  if (max.size - min.size > 1) min.insert(max.extract());
}

//Final check
function calcNumGifts(behaviors, minRequired) {
  let num = 1;
  for (let i = 0; i < minRequired.length; i++) {
    if (minRequired[i] < behaviors[i]) num++;
  }
  return num;
}

let b = [3, 3, 4, 5, 2, 1, 5, 5];

console.log(luckyKids(b));
