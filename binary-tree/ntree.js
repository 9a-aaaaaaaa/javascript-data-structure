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
    res = [...res, ...preSort(bt.left)];
    res.push(bt.val);
    res = [...res, ...preSort(bt.right)];

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

// 后续遍历
function afterSort(bt) {
    if(!bt) return [];
    let res = [];
    res = [...res, ...afterSort(bt.left)];
    res = [...res, ...afterSort(bt.right)];
    res.push(bt.val);
    return res;
}

console.log(afterSort(bt));