const bt = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: {
            val: 4,
            left: {
                val: 5,
                left: null,
                right: null,
            },
            right: null,
        },
    },
    right: {
        val: 6,
        left: null,
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};


// 先序遍历
function preSort(bt) {
    if(!bt) return [];
    let res = [];
    res.push(bt.val);
    res = [...res, ...preSort(bt.left)];
    res = [...res, ...preSort(bt.right)];

    return res;
}

// 非递归  利用堆栈来模拟是现在这个过程
function preSort2(root) {
    let res = [];
    let q = [root];
    while(q.length) {
        let cur = q.pop();
        res.push(cur.val);

        // 先右边 后左边是因为栈的特定决定的 先入后出
        cur.right && q.push(cur.right);
        cur.left && q.push(cur.left);
    }
    return res;
}


// 中序遍历 
function midSort(bt) {
    if(!bt) return [];
    let res = [];
    res = [...res, ...midSort(bt.left)];
    res.push(bt.val);
    res = [...res, ...midSort(bt.right)];

    return res;
}

function midSort2(bt) {
    let res = [];
    let stack = [];

    // 指针，需要将所有的左放到栈里面
    let p = bt;
   
    while(stack.length || p) {
        while(p) {
            stack.push(p);
            p = p.left;
        }

         // 尽头的左节点 就是栈顶元素访问，然后访问它的右边节点，移动指针
         let cur = stack.pop();
         res.push(cur.val);
     
         // 重新将指针放到右节点
         p = cur.right;
    }

    return res;
}

// 后续遍历
function afterSort(bt) {
    if(!bt) return [];
    let res = [];
    res = [...res, ...afterSort(bt.left)];
    res = [...res, ...afterSort(bt.right)];
    res.push(bt.val);
    return res;
}

// 后续遍历比较麻烦，所以采用转换的思路
// 左右根 -> 转化为根右左
// 先序遍历是 ->根左右 
// 二者非常的像，只要输出的时候倒着输出即可           
function afterSort2(bt) {
    if(!bt) return [];
    let res = [];
    let queue = [bt];
    let cq = [];

    while(queue.length) {
        let cur = queue.pop();
        cq.push(cur);
        cur.left && queue.push(cur.left);
        cur.right && queue.push(cur.right);
    }

    while(cq.length) {
        res.push(cq.pop().val);
    }

    return res;
}

console.log(midSort2(bt));
