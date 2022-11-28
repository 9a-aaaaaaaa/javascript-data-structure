function swap(arr, i, j) {
    return [arr[i], arr[j]] = [arr[j], arr[i]];
}

// 主要参考链接是： https://blog.csdn.net/weixin_44803753/article/details/118901128
/**
    左侧节点的位置是 2*index+1 
    右侧节点的位置是 2*index+2 
    父节点位置是 ~~((index - 1) / 2) 
 */
class MinHeap {
    //创建一个构造器，存放一个堆
    constructor(data) {
        this.heap = (data &&  [...data]) || [] ;
        if( data ) {
            MinHeap.heapfy()
        }        
    }

    get peek() {
        return this.heap[0];
    }

    get size() {
        return this.heap.length;
    }

    heapfy(tree=[]) {
        if( tree.length ) {
            tree.forEach(i=>this.insert(i));
        }
    }

    //交换节点i1和i2之间的位置
    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }

    //获取父节点的位置
    getParentIndex(i) {
        return (i - 1) >> 1;
    }

    //获取左侧子节点，i为当前节点的索引
    getLeftIndex(i) {
        return i * 2 + 1;
    }

    //获取右侧子节点，i为当前节点的索引
    getRightIndex(i) {
        return i * 2 + 2;
    }

    //shiftUp进行上移操作
    // 先判断当前节点的位置是否在堆的顶点处，如果是，则不进行上移操作；如果否，则继续进行比较；
    // 获取父节点的位置索引，获取索引的目的是为了获取该索引的具体值；
    // 将当前节点的值与父节点的值进行对比，如果父节点的值大于当前节点的值，则进行上移操作；
    // 递归进行上移操作，直到到达堆顶为止。
    shiftUp(index) {
        //如果在堆的顶点处，则不进行上移操作，直接返回结果
        if (index === 0) {
            return;
        }
        //获取父节点(即获取当前节点的父节点的值，且每个节点的父节点只有一个)
        const parentIndex = this.getParentIndex(index);
        //判断如果堆的父节点如果大于子节点，则进行位置交换
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            //交换完成之后，继续递归进行上移操作
            this.shiftUp(parentIndex);
        }
    }

     //  进行下移操作：
     //  先获取左右侧节点；
     //  将左侧子节点与当前节点进行比较，如果左侧子节点比当前节点小，则进行位置交换，之后将交换完的节点继续进行比较；
     //  左侧节点比较完之后，接下来比较右侧节点；
     //  将右侧子节点与当前节点进行比较，如果右侧子节点比当前节点小，则进行位置交换，之后将交换完的节点继续进行比较；
     //  此循环操作，直到最后一个节点为止。

     shiftDown(index){
        // 获取左右侧子节点
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        // 没有顺序关系，实现都可以，只要满足完全二叉树即可。
        //  对左侧结点进行交换
        if(this.heap[leftIndex] < this.heap[index]){
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        //  对右侧结点进行交换
        if(this.heap[rightIndex] < this.heap[index]){
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }

      //插入结点值的操作，value为被插入的值
      insert(value){
        //把新的值放到数组的最后一位
        this.heap.push(value);
        //将值进行上移操作
        this.shiftUp(this.heap.length - 1);
    }

    // 删除堆顶思路: 直接删除会破坏堆解构
    // 尾部元素替换堆顶，然后下移
    pop() {
        if( this.size === 1) return this.heap.length = 0;
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }
}

let h = new MinHeap();
h.insert(10);
h.insert(5);
h.insert(4);
h.insert(1);
h.insert(2);
h.insert(3);

console.log(h);

h.heapfy([0,2]);
console.log(h);


const h = new MinHeap();
h.insert(10);
h.insert(8);
h.insert(15);
h.insert(5);
h.insert(7);

console.log('[ h ]-104', h)
console.log("peek is:", h.peek());
// h.pop();
// console.log(h); // MinHeap { heap: [ 2, 4, 3 ] }
// h.peek();
// h.size();
// console.log(h.peek()); // 2
// console.log(h.size()); // 3


