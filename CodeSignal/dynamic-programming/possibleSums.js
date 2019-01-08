//This problem gives you a list of coins with quantity and ask
//how many different sums can be made with a non empty subset
//Solved with a tabulation DP method

function possibleSums(coins, quantity) {
  const { maxSum, coinArr } = createCoinArr(coins, quantity);
  let T = Array.from({ length: maxSum + 1 }, val => false);
  T[0] = true;
  for (let i = 0; i < coinArr.length; i++) {
    let coin = coinArr[i][0];
    let q = coinArr[i][1];
    for (let b = 0; b < coin; b++) {
      let num = -1;
      for (let j = b; j < T.length; j += coin) {
        if (T[j]) num = 0;
        else if (num >= 0) num += 1;
        T[j] = num >= 0 && num <= q;
      }
    }
  }
  let s = T.reduce((acc, val) => {
    if (val === true) acc++;
    return acc;
  }, 0);
  return s - 1;
}

function createCoinArr(coins, quantity) {
  let coinArr = [];
  let maxSum = 0;
  for (let i = 0; i < coins.length; i++) {
    maxSum += coins[i] * quantity[i];
    coinArr.push([coins[i], quantity[i]]);
  }
  return { maxSum, coinArr };
}

let c = [1, 5, 10];
let q = [1, 2, 1];

console.log(possibleSums(c, q));
