function swap(arr, i, j) {
    return [arr[i], arr[j]] = [arr[j], arr[i]];
}

// 主要参考链接是： https://blog.csdn.net/weixin_44803753/article/details/118901128
/**
    左侧节点的位置是 2*index+1 
    右侧节点的位置是 2*index+2 
    父节点位置是 ~~((index - 1) / 2) 
 */
class MinHeap{
	//创建一个构造器，存放一个堆
	constructor(){
		this.heap = [];
	}

     //交换节点i1和i2之间的位置
    swap(i1, i2){
        return swap(this.heap, i1, i2);
    }

    //获取父节点的位置
    getParentIndex(i){
        return ~~((i - 1) / 2);
    }

    //获取左节点的位置
    getLeftIndex(i){
        return (i * 2) + 1;
    }

    //获取右节点的位置
    getRightIndex(i){
        return (i * 2) + 2;
    }

    // shiftUp进行上移操作
    shiftUp(i){
        // 如果再堆的顶点处，则不需要上移
        if(!i) return;

        let parentIndex = this.getParentIndex(i);
        if(parentIndex < 0) return;

        // 如果父节点的值大于子节点的值，进行位置交换
        if(this.heap[parentIndex] < this.heap[i]){
            this.swap(parentIndex, i);
            // 交换完成之后，继续递归进行上移操作
            this.shiftUp(parentIndex);
        }
    }

     // 进行下移操作
     shiftDown(index){
        // 获取左右侧子节点
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
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

    // 向堆中添加一个元素
    //插入结点值的操作，value为被插入的值
    insert(value){
        //把新的值放到数组的最后一位
        this.heap.push(value);
        //将值进行上移操作
        this.shiftUp(this.heap.length - 1);
    }

    //删除堆顶操作
    pop(){
        //将尾部的值赋值给堆顶
        this.heap[0] = this.heap.pop();
        //进行下移操作
        this.shiftDown(0);
    }

    //获取堆顶的值
    peek(){
        return this.heap[0];
    }

    //获取堆的大小
    size(){
        return this.heap.length;
    }
}


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


