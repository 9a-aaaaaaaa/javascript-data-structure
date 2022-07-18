import './test.js';
// binary search tree
// left < root < right

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (!this.value) return (this.value = value);
    if (value < this.value) {
      if (!this.left) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
  contains(value) {
    if (value === this.value) return true;
    if (value < this.value) {
      if (!this.left) return false;
      else return this.left.contains(value);
    } else {
      if (!this.right) return false;
      else return this.right.contains(value);
    }
  }

  // 中序是从最小遍历到最大的过程
  // 左根右
  inOrderTraverse(callback) {
    if (this.left) {
      this.left.inOrderTraverse(callback);
    }
    callback(this.value);
    if (this.right) {
      this.right.inOrderTraverse(callback);
    }
  }

  // 先序遍历
  // 根左右
  preOrderTraverse(callback) {
    callback(this.value);
    if (this.left) {
      this.left.preOrderTraverse(callback);
    }
    if (this.right) {
      this.right.preOrderTraverse(callback);
    }
  }

  // 后续 从大到小的过程
  // 左右根
  postOrderTraverse(callback) {
    if (this.left) {
      this.left.postOrderTraverse(callback);
    }

    if (this.right) {
      this.right.postOrderTraverse(callback);
    }

    callback(this.value);
  }

  // 广度优先搜索
  // 广度优先搜索算法（又称宽度优先搜索）是最简便的图的搜索算法之一。
  // BFS 搜索结果是一个队列，每次从队列中取出一个节点，然后将其所有的相邻节点加入队列中，
  // 可以结合可视化来观察实现，实现非常的巧妙
  breadthFirstSearch(value) {
    let queue = [this];
    while (queue.length) {
      console.log('查看queue列表是', JSON.parse(JSON.stringify(queue)));
      let node = queue.shift();
      if (node.value === value) return node;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return null;
  }

  // 深度优先搜索
  // DFS 搜索结果是一个栈，每次从栈中取出一个节点，然后将其所有的相邻节点压入栈中，
  // https://blog.csdn.net/weixin_43314519/article/details/107412412
  depthFirstSearch(value) {
    if (value === this.value) return this;
    if (value < this.value) {
      if (!this.left) return null;
      else return this.left.depthFirstSearch(value);
    } else {
      if (!this.right) return null;
      else return this.right.depthFirstSearch(value);
    }
  }

  max() {
    if (this.right) return this.right.max();
    return this.value;
  }

  min() {
    if (this.left) return this.left.min();
    return this.value;
  }

  // 需要考虑以下三种情况的case: 来实现。
  // 1:叶子节点
  // 2:有一个子节点
  // 3:有两个子节点
  remove(value) {
    if (value < this.value) {
      if (!this.left) return null;
      this.left = this.left.remove(value);
    } else if (value > this.value) {
      if (!this.right) return null;
      this.right = this.right.remove(value);
    } else {
      if (!this.left && !this.right) return null;
      else if (!this.left) return this.right;
      else if (!this.right) return this.left;
      else {
        let temp = this.right;
        while (temp.left) {
          temp = temp.left;
        }
        this.value = temp.value;
        this.right = this.right.remove(temp.value);
      }
    }
    return this;
  }
}

var bst = new BST();
console.log('[ =====bst ]-146', bst);

bst.insert(100);
bst.insert(50);
bst.insert(150);
bst.insert(25);
bst.insert(75);
bst.insert(125);
bst.insert(175);
bst.insert(10);

// bst.inOrderTraverse(i=>console.log(i));
// bst.postOrderTraverse(i=>console.log(i));
bst.preOrderTraverse((i) => console.log(i));

const res = bst.breadthFirstSearch(25);
console.log('搜索的结果是', res);

console.log('是否包含', bst.contains(101));

console.log('[ 最大值是 ]-139', bst.max());
console.log('[ 最小值是 ]-25', bst.min());

console.log('测试执行结果');

bst.remove(25);
