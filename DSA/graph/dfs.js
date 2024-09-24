// <========================= file to show the dfs in graph ==================>

class Graph {
  constructor() {
    this.vertices = new Map();
  }
  // for adding the vertices
  addVertices(data) {
    if (!this.vertices.has(data)) {
      this.vertices.set(data, []);
    }
  }
  // for inserting the vertex and edge
  insert(vertex, edge, isBidirectional = true) {
    if (!this.vertices.has(vertex)) this.addVertices(vertex);

    if (!this.vertices.has(edge)) this.addVertices(edge);

    this.vertices.get(vertex).push(edge);

    if (isBidirectional) this.vertices.get(edge).push(vertex);
  }
  // for displaying the graph
  display() {
    let res = "";
    for (let [vertex, neighbor] of this.vertices) {
      res += `${vertex}:${neighbor.join(", ")}\n`;
    }
    return res;
  }
  // for getting the start index
  start(startIndex) {
    const visited = new Set();
    this.dfs(visited, startIndex);
  }
  // for performing dfs
  dfs(visited, startIndex) {
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
graph.insert(3, 4, true);
graph.insert(4, 6, true);
graph.insert(6, 5, false);
console.log(graph.display());
graph.start(4);
