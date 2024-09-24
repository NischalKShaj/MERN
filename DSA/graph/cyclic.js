// <======================== file to check whether the graph is cyclic or not ===========>

class Graph {
  constructor() {
    this.vertices = new Map();
  }
  // for adding the vertices
  addVertices(data) {
    if (!this.vertices.has(data)) this.vertices.set(data, []);
  }
  // for inserting the vertex and edge
  insert(vertex, edge, isBidirectional = true) {
    if (!this.vertices.has(vertex)) this.addVertices(vertex);

    if (!this.vertices.has(edge)) this.addVertices(edge);

    this.vertices.get(vertex).push(edge);

    if (isBidirectional) this.vertices.get(edge).push(vertex);
  }
  // display the graph
  display() {
    let res = "";
    for (let [vertex, neighbor] of this.vertices) {
      res += `${vertex}: ${neighbor.join(", ")}\n`;
    }
    return res;
  }
  // for checking the cycle graph
  isCycle() {
    const visited = new Set();
    for (let vertex of this.vertices.keys()) {
      if (!visited.has(vertex)) {
        if (this.helper(vertex, visited, -1)) {
          return true;
        }
      }
    }
    return false;
  }
  // for helper function for dfs
  helper(vertex, visited, parent) {
    visited.add(vertex);

    for (let neighbor of this.vertices.get(vertex)) {
      if (!visited.has(neighbor)) {
        if (this.helper(neighbor, visited, vertex)) {
          return true;
        } else if (neighbor !== parent) {
          return true;
        }
      }
    }
    return false;
  }
}

const graph = new Graph();
graph.insert(3, 4, true);
graph.insert(4, 6, true);
graph.insert(6, 5, false);
graph.insert(5, 3, true);
console.log(graph.display());

if (graph.isCycle()) {
  console.log("cycle");
} else {
  console.log("non cycle");
}
