const graph = {
    0: [1,2],
    1: [2],
    2: [0,3],
    3: [3]
};

const list = new Set();
// function dfs(n) {
//     console.log(n);
//     list.add(n);
    
//     graph[n].forEach(c => {
//         if(!list.has(c)) dfs(c);
//     });
// }
// dfs(2);


// 起始节点添加进去
list.add(2);
let q = [2];
while(q.length) {
    let n = q.shift();
    console.log(n);

    graph[n].forEach(c => {
        if(!list.has(c)) {
            q.push(c);
            list.add(c);
        }
    });
}











