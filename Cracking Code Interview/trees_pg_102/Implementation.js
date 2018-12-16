// Graph node class
class NodeG {
  constructor(value) {
    this.value = value;
    this.adjacent = null;
    this.visited = false;
  }
}

module.exports = {
  NodeG
};
