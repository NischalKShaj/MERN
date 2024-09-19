// <========================= file to show the dfs in graph ==================>

class Graph {
  constructor() {
    this.vertices = new Map();
  }
  addValue(data) {
    if (!this.vertices.has(data)) {
      this.vertices.set(data, []);
    }
  }
  insert(vertex, edge, isBidirectional = true) {
    if (!this.vertices.has(vertex)) {
      this.addValue(vertex);
    }
    if (!this.vertices.has(edge)) {
      this.addValue(edge);
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
    this.dfs(startIndex, visited);
  }
  dfs(startIndex, visited) {
    const stack = [startIndex];
    visited.add(startIndex);
    while (stack.length > 0) {
      let current = stack.pop();
      console.log(current);
      for (let neighbor of this.vertices.get(current)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
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
