//Shelter that operates on a first in, first out basis

//Animal shelter class
class AnimalShelter {
  constructor() {
    this.dogs = new LinkedList();
    this.cats = new LinkedList();
  }

  //Enqueue either a dog or cat
  enqueue(type) {
    let order = Math.max(this.dogs.head.val || 0, this.cats.head.val || 0) + 1;
    let animal = new Animal(type, order);
    if (type === 'dog') this.dogs.enqueue(animal);
    if (type === 'cat') this.cats.enqueue(animal);
  }

  //Will dequeue the oldest of the 2
  dequeueAny() {
    if (this.dogs.isEmpty && this.cats.isEmpty) throw new Error('Cant');
    if (this.dogs.isEmpty) return this.dequeueCat();
    if (this.cats.isEmpty) return this.dequeueDog();
    if (this.dogs.tail.order < this.cats.tail.order) return this.dequeueDog();
    else return this.dequeueCat();
  }

  //Dequeue a cat
  dequeueCat() {
    if (!this.cats.isEmpty) return this.cats.dequeue();
  }

  //Dequeue a dog
  dequeueDog() {
    if (!this.dogs.isEmpty) return this.dogs.dequeue();
  }
}

//This animal class extends node in order to add an order attribute
class Animal extends Node {
  constructor(type, order) {
    super(type);
    this.order = order;
  }
}
