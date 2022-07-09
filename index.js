// binary search tree
class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    if (!this.value) return (this.value = val);
    if (val > this.value) {
      if (!this.right) this.right = new BST(val);
      else this.right.insert(val);
    } else {
      if (!this.left) this.left = new BST(val);
      else this.left.insert(val);
    }
  }

  // 这个其实就是深度搜索算法
  // Depth-First Search，DFS
  // 递归实现
  depthFirstSearch(val) {
    if (this.value === val) return this;
    else {
      if (val < this.value) {
        if (this.left) return this.left.depthFirstSearch(val);
        else return null;
      } else {
        if (this.right) return this.right.depthFirstSearch(val);
        else return null;
      }
    }
  }

  // 非递归实现
  depthFirstSearchNotRecursive() {
    const queue = [];
  }

  // bfs
  // 广度搜索
  breadthFirstSearch(val) {
    const queue = [this];
    while (queue.length) {
      const active = queue.shift();
      if (active.value === val) return active;
      if (active.left) queue.push(active.left);
      if (active.right) queue.push(active.right);
    }
    return null;
  }

  max() {
    if (this.right) return this.right.max();
    return this.value;
  }

  min() {
    if (this.left) return this.left.min();
    return this.value;
  }

  // 中序遍历 左根右
  inOrderTraverse(callback) {
    this.left && this.left.inOrderTraverse(callback);
    callback(this.value);
    this.right && this.right.inOrderTraverse(callback);
  }

  // 后序：左右根
  postOrderTraverse(callback) {
    if (this.left) {
      this.left.afterOrderTraverse(callback);
    }

    if (this.right) {
      this.right.afterOrderTraverse(callback);
    }

    callback(this.value);
  }

  // 前序： 根左右
  preOrderTraverse(callback) {
    callback(this.value);
    if (this.left) {
      this.left.preOrderTraverse(callback);
    }

    if (this.right) {
      this.right.preOrderTraverse(callback);
    }
  }
}

var bst = new BST();

bst.insert(100);
bst.insert(150);
bst.insert(50);
bst.insert(80);
bst.insert(30);
bst.insert(130);
bst.insert(180);

console.log('bst is', bst);

console.log('this depthFirstSearch val1 50', bst.depthFirstSearch(50));
console.log('this depthFirstSearch val1 150', bst.depthFirstSearch(150));
console.log('this depthFirstSearch val1 80', bst.depthFirstSearch(80));
console.log('this depthFirstSearch val1 60', bst.depthFirstSearch(60));
console.log('this depthFirstSearch val1 160', bst.depthFirstSearch(160));
console.log('this depthFirstSearch val1 1000', bst.depthFirstSearch(1000));

console.log('max is', bst.max());
console.log('min is', bst.min());

bst.preOrderTraverse((i) => console.log('先序遍历的结果是', i));
console.log('bfs', bst.breadthFirstSearch(130));
