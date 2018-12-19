const { Queue } = require('./implementation');

function josephusSurvivor(numPeople, skip) {
  let peopleQueue = createQueue(numPeople);
  let count = 0;
  let person;
  while (peopleQueue.length > 0) {
    person = peopleQueue.dequeue();
    count++;
    if (count !== skip) {
      peopleQueue.enqueue(person);
    } else {
      count = 0;
    }
  }
  return person;
}

function createQueue(numPeople) {
  let peopleQueue = new Queue();
  for (let i = 1; i <= numPeople; i++) {
    peopleQueue.enqueue(i);
  }
  return peopleQueue;
}

console.log(josephusSurvivor(10, 3));
