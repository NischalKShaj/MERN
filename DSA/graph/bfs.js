// <================================= file to show the bfs in graph ===================>

class Graph {
  constructor() {
    this.vertices = new Map();
  }
  addVertices(data) {
    if (!this.vertices.has(data)) {
      this.vertices.set(data, []);
    }
  }
  insert(vertex, edge, isBidirectional = true) {
    if (!this.vertices.has(vertex)) {
      this.addVertices(vertex);
    }
    if (!this.vertices.has(edge)) {
      this.addVertices(edge);
    }
    this.vertices.get(vertex).push(edge);
    if (isBidirectional) {
      this.vertices.get(edge).push(vertex);
    }
  }
  display() {
    let res = "";
    for (let [vertex, neighbor] of this.vertices) {
      res += `${vertex}: ${neighbor.join(", ")}\n`;
    }
    return res;
  }
  start(startIndex) {
    const visited = new Set();
    this.bfs(startIndex, visited);
  }
  bfs(startIndex, visited) {
    const queue = [startIndex];
    visited.add(startIndex);
    while (queue.length > 0) {
      let current = queue.shift();
      console.log(current);
      for (let neighbor of this.vertices.get(current)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

const graph = new Graph();
graph.insert(3, 5, true);
graph.insert(3, 4, true);
graph.insert(5, 6, false);
console.log(graph.display());
graph.start(5);
