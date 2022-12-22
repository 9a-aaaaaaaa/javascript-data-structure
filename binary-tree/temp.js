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

// 先序遍历 根 左 右
function mid_sort(root) {
    let queue = [root];
}

console.log(mid_sort(bt));