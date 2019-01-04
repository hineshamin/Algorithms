class MaxHeap {
  constructor() {
    this.h = [];
  }

  insert(val) {
    this.h.push(val);
    this._bubbleUp();
  }

  extract() {
    [this.h[0], this.h[this.h.length - 1]] = [
      this.h[this.h.length - 1],
      this.h[0]
    ];
    let retVal = this.h.pop();
    this._bubbleDown();
    return retVal;
  }

  peek() {
    return this.h[0];
  }

  get size() {
    return this.h.length;
  }

  _bubbleUp() {
    let i = this.h.length - 1;
    while (i > 0 && this.h[i] > this.h[Math.floor((i - 1) / 2)]) {
      [this.h[i], this.h[Math.floor((i - 1) / 2)]] = [
        this.h[Math.floor((i - 1) / 2)],
        this.h[i]
      ];
      i = Math.floor((i - 1) / 2);
    }
  }

  _bubbleDown() {
    let i = 0;
    while (
      i < this.h.length &&
      (this.h[i] < this.h[2 * i + 1] || this.h[i] < this.h[2 * i + 2])
    ) {
      let maxIdx;
      if (this.h[2 * i + 1] && !this.h[2 * i + 2]) maxIdx = 2 * i + 1;
      else if (this.h[2 * i + 1] > this.h[2 * i + 2]) maxIdx = 2 * i + 1;
      else maxIdx = 2 * i + 2;
      [this.h[i], this.h[maxIdx]] = [this.h[maxIdx], this.h[i]];
      i = maxIdx;
    }
  }
}

class MinHeap {
  constructor() {
    this.h = [];
  }

  insert(val) {
    this.h.push(val);
    this._bubbleUp();
  }

  extract() {
    [this.h[0], this.h[this.h.length - 1]] = [
      this.h[this.h.length - 1],
      this.h[0]
    ];
    let retVal = this.h.pop();
    this._bubbleDown();
    return retVal;
  }

  peek() {
    return this.h[0];
  }

  get size() {
    return this.h.length;
  }

  _bubbleUp() {
    let i = this.h.length - 1;
    while (i > 0 && this.h[i] < this.h[Math.floor((i - 1) / 2)]) {
      [this.h[i], this.h[Math.floor((i - 1) / 2)]] = [
        this.h[Math.floor((i - 1) / 2)],
        this.h[i]
      ];
      i = Math.floor((i - 1) / 2);
    }
  }

  _bubbleDown() {
    let i = 0;
    while (
      i < this.h.length &&
      (this.h[i] > this.h[2 * i + 1] || this.h[i] > this.h[2 * i + 2])
    ) {
      let minIdx;
      if (this.h[2 * i + 1] && !this.h[2 * i + 2]) minIdx = 2 * i + 1;
      else if (this.h[2 * i + 1] < this.h[2 * i + 2]) minIdx = 2 * i + 1;
      else minIdx = 2 * i + 2;
      [this.h[i], this.h[minIdx]] = [this.h[minIdx], this.h[i]];
      i = minIdx;
    }
  }
}

module.exports = { MinHeap, MaxHeap };
