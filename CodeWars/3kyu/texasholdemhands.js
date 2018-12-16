// https://www.codewars.com/kata/524c74f855025e2495000262
// Algorithm that looks at a texas hold em hand and determines the highest score

//Class for a card
class Card {
  constructor(cardData) {
    if (cardData.slice(0, 2) === '10') {
      this.rank = '10';
      this.rankVal = 10;
      this.suit = cardData.charCodeAt(2);
    } else {
      this.rank = cardData[0];
      this.rankVal = this.convRankToNum(cardData);
      this.suit = cardData.charCodeAt(1);
    }
  }

  convRankToNum(cardData) {
    let conversion = {
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      '10': 10,
      J: 11,
      Q: 12,
      K: 13,
      A: 14
    };
    return conversion[cardData[0]];
  }
}

//Class that will store a list of sorted cards
class CardList {
  constructor(cardDataList) {
    this.cards = this.sortListofCards(cardDataList);
  }
  createListOfCards(cardDataList) {
    let cards = [];
    for (let i = 0; i < cardDataList.length; i++) {
      cards.push(new Card(cardDataList[i]));
    }
    return cards;
  }
  sortListofCards(cardDataList) {
    let cards = this.createListOfCards(cardDataList);
    return cards.sort((a, b) => b.rankVal - a.rankVal);
  }
}
//Main function
function hand(holeCards, communityCards) {
  let fullHand = holeCards.concat(communityCards);
  //Create card list to run the functions
  let cardList;
  //Setup an array of functions to run in succession
  let run = [
    nothing,
    highestPair,
    highestTwoPair,
    highestThreeOfAKind,
    highestStraight,
    highestFlush,
    highestFullHouse,
    highestFourOfAKind,
    highestStraightFlush
  ];
  //Run the functions starting from the end
  for (let i = run.length - 1; i >= 0; i--) {
    //Reset cardlist each run
    cardList = new CardList(fullHand);
    let highestSoFar = run[i](cardList.cards);
    if (highestSoFar) {
      return highestSoFar;
    }
  }
}

//From https://gist.github.com/axelpale/3118596 to get all combinations of cards
function k_combinations(set, k) {
  let i, j, combs, head, tailcombs;

  // There is no way to take e.g. sets of 5 elements from
  // a set of 4.
  if (k > set.length || k <= 0) {
    return [];
  }

  // K-sized set has only one K-sized subset.
  if (k == set.length) {
    return [set];
  }

  // There is N 1-sized subsets in a N-sized set.
  if (k == 1) {
    combs = [];
    for (i = 0; i < set.length; i++) {
      combs.push([set[i]]);
    }
    return combs;
  }

  combs = [];
  for (i = 0; i < set.length - k + 1; i++) {
    // head is a list that includes only our current element.
    head = set.slice(i, i + 1);
    // We take smaller combinations from the subsequent elements
    tailcombs = k_combinations(set.slice(i + 1), k - 1);
    // For each (k-1)-combination we join it with the current
    // and store it to the set of k-combinations.
    for (j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}

//////////////////////////////////// CHECK FOR HANDS /////////////////////////////

//Check for nothing
function nothing(cards) {
  let ranks = [];
  for (let i = 0; i < 5; i++) {
    ranks.push(cards[i].rank);
  }
  return { type: 'nothing', ranks };
}

//Check for highest pair
function highestPair(cards) {
  let cardPairs = k_combinations(cards, 2);
  let max = 0;
  let maxPair;
  let ranks = [];
  for (let i = 0; i < cardPairs.length; i++) {
    if (
      cardPairs[i][0].rankVal === cardPairs[i][1].rankVal &&
      cardPairs[i][0].rankVal > max
    ) {
      max = cardPairs[i][0].rankVal;
      maxPair = [cardPairs[i][0].rank, cardPairs[i][1].rank];
    }
  }
  if (maxPair) {
    for (let i = 0; i < maxPair.length; i++) {
      cards.splice(cards.findIndex(x => x.rank === maxPair[i]), 1);
    }
    ranks.push(maxPair[0]);
    let i = 0;
    while (i < 3) {
      if (cards[i]) {
        ranks.push(cards[i].rank);
      }
      i++;
    }
    return { type: 'pair', ranks };
  }
  return false;
}

//Check for highest two pair
function highestTwoPair(cards) {
  let ranks = [];
  let high = highestPair(cards);
  //If there isn't a single pair there definitely is not 2 pairs
  if (!high) {
    return false;
  }
  high = high.ranks[0];
  //Run highest pair again to get the remaining high pair
  let high2 = highestPair(cards);
  if (!high2) {
    return false;
  }
  high2 = high2.ranks[0];
  //If we made it this far then there are 2 pairs
  ranks.push(high, high2, cards[0].rank);
  return { type: 'two pair', ranks };
}

//Check for highest three of a kind
function highestThreeOfAKind(cards) {
  let cardTriples = k_combinations(cards, 3);
  let max = 0;
  let maxTriple;
  let ranks = [];
  for (let i = 0; i < cardTriples.length; i++) {
    if (
      cardTriples[i][0].rankVal === cardTriples[i][1].rankVal &&
      cardTriples[i][1].rankVal === cardTriples[i][2].rankVal &&
      cardTriples[i][0].rankVal > max
    ) {
      max = cardTriples[i][0].rankVal;
      maxTriple = [
        cardTriples[i][0].rank,
        cardTriples[i][1].rank,
        cardTriples[i][2].rank
      ];
    }
  }
  if (maxTriple) {
    for (let i = 0; i < maxTriple.length; i++) {
      cards.splice(cards.findIndex(x => x.rank === maxTriple[i]), 1);
    }
    ranks.push(maxTriple[0]);
    let i = 0;
    while (i < 2) {
      if (cards[i]) {
        ranks.push(cards[i].rank);
      }
      i++;
    }
    return { type: 'three-of-a-kind', ranks };
  }
  return false;
}

//Check for highest straight
function highestStraight(cards) {
  let ranks;
  let max = 0;
  let maxStraight;
  //Get all combos of 5
  let cardCombos = k_combinations(cards, 5);
  for (let i = 0; i < cardCombos.length; i++) {
    //Sort each cardcombo from largest to smallest
    let temp = cardCombos[i].sort((a, b) => b.rankVal - a.rankVal);
    let tempMax = temp[0].rankVal;
    let found = true;
    for (let i = 1; i < temp.length; i++) {
      if (temp[i].rankVal !== tempMax - i) {
        found = false;
      }
    }
    if (found && tempMax > max) {
      max = tempMax;
      ranks = temp.map(x => x.rank);
    }
  }
  if (ranks) {
    return { type: 'straight', ranks };
  }
  return false;
}

//Check for highest flush
function highestFlush(cards) {
  let ranks;
  let max = 0;
  let maxFlush;
  //Get all combos of 5
  let cardCombos = k_combinations(cards, 5);
  for (let i = 0; i < cardCombos.length; i++) {
    //Sort each cardcombo from largest to smallest
    let temp = cardCombos[i].sort((a, b) => b.rankVal - a.rankVal);
    let tempMax = temp[4].rankVal;
    let tempSuit = temp[4].suit;
    let found = true;
    for (let i = 0; i < temp.length - 1; i++) {
      if (temp[i].suit !== tempSuit) {
        found = false;
      }
    }
    if (found && tempMax > max) {
      max = tempMax;
      ranks = temp.map(x => x.rank);
    }
  }
  if (ranks) {
    return { type: 'flush', ranks };
  }
  return false;
}

//Check for highest full house
function highestFullHouse(cards) {
  let highThreeOfAKind = highestThreeOfAKind(cards);
  //If there isn't a three of a kind it can't be a full house
  if (!highThreeOfAKind) {
    return false;
  }
  let highPair = highestPair(cards);
  //If there isn't a pair then there it isn't a full house
  if (!highPair) {
    return false;
  }
  let ranks = [highThreeOfAKind.ranks[0], highPair.ranks[0]];
  return { type: 'full house', ranks };
}

//Check for highest four of a kind
function highestFourOfAKind(cards) {
  let cardQuads = k_combinations(cards, 4);
  let max = 0;
  let maxQuad;
  let ranks = [];
  for (let i = 0; i < cardQuads.length; i++) {
    let temp = cardQuads[i][0].rankVal;
    if (
      cardQuads[i][1].rankVal === temp &&
      cardQuads[i][2].rankVal === temp &&
      cardQuads[i][3].rankVal === temp &&
      cardQuads[i][0].rankVal > max
    ) {
      max = cardQuads[i][0].rankVal;
      maxQuad = [
        cardQuads[i][0].rank,
        cardQuads[i][1].rank,
        cardQuads[i][2].rank,
        cardQuads[i][3].rank
      ];
    }
  }
  if (maxQuad) {
    for (let i = 0; i < maxQuad.length; i++) {
      cards.splice(cards.findIndex(x => x.rank === maxQuad[i]), 1);
    }
    ranks.push(maxQuad[0]);
    let i = 0;
    while (i < 1) {
      if (cards[i]) {
        ranks.push(cards[i].rank);
      }
      i++;
    }
    return { type: 'four-of-a-kind', ranks };
  }
  return false;
}

//Check for highest straight flush
function highestStraightFlush(cards) {
  //There needs to be a straight to be a straight flush
  let straight = highestStraight(cards);
  if (!straight) {
    return false;
  }
  //There needs to be a flush to be a straight flush
  let flush = highestFlush(cards);
  if (!flush) {
    return false;
  }
  //All the ranks in the straight and flush need to be the same
  let same = true;
  for (let i = 0; i < straight.ranks.length; i++) {
    if (straight.ranks[i] !== flush.ranks[i]) {
      same = false;
    }
  }
  if (same) {
    return { type: 'straight-flush', ranks: straight.ranks };
  }
  return false;
}
