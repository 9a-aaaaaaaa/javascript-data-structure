const tree = {
    val: "a",
    children: [
        {
            val: "b",
            children: [
                {
                    val: "d",
                    children: [
                        {
                            val: "f",
                            children:[]
                        }
                    ]
                },
                {
                    val: "e",
                    children: [
                        {
                            val: "g",
                            children: []
                        },
                        {
                            val: "h",
                            children: []
                        },
                    ]
                }
            ]
        },
        {
            val:"c",
            children:[]
        }
    ]
};

function dfs(tree) {
    // 初始化取值
    let result = [];
    let {val,children} = tree;
    
    // 每一轮添加当前的值    
    if (val) result.push(val);
    if(!children.length) return result;

    // 进行递归
    children.forEach(el => {
        result = [...result, ...dfs(el)]
    });
    return result;
}


function bfs(tree) {
    let q = [tree];
    let res = [];

    while (q.length) {
        let cur = q.shift();
        res.push(cur.val);
        cur.children.forEach(i=>q.push(i))
    }

    return res;
}

console.log(bfs(tree));