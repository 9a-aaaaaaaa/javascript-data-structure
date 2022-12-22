class Graph {
    constructor() {

        //  用于存储所有的顶点，使用一个数组来保存。
        this.vertexes = [];

        //  adj 是 adjoin 的缩写，邻接的意思。adjList 用于存储所有的边，这里采用邻接表的形式。
        this.adjList = new Map();
    }

    // 添加顶点
    addVertex(val) {
        // 添加点
        this.vertexes.push(val)
        // 添加点的关系  采用邻接矩阵法 结构用Map
        this.adjList.set(val, [])
    }

    // 添加边
    addEdge(val1, val2) {
        // 添加边需要传入两个顶点, 因为边是两个顶点之间的边, 边不可能单独存在.
        // 这里实现的是无向图, 所以这里不考虑方向问题
        this.adjList.get(val1).push(val2)
        this.adjList.get(val2).push(val1)
    }
}

// 测试代码
let graph = new Graph();

// 添加顶点
let myVertexes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let i = 0; i < myVertexes.length; i++) {
  graph.addVertex(myVertexes[i]);
}

// 添加边
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log(graph);