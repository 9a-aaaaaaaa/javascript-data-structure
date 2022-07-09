# 数据结构与算法

视频课程： https://www.youtube.com/watch?v=FVoOh6zxEDY&list=PLwIrqQCQ5pQmjH6YyFvH2A9FYL6bBB4Ra
理论：

![理论](./png/1.png "理论基础图片")

- 重点关注：数据结构和算法的特点，应用场景，时间和空间复杂度。
- 刷题：建议分类刷题，相当于集中训练。
- 重点关注：通用套路，时间和空间复杂度分析。


### 关系

- 数据结构：计算机存贮，组织数据的方式。
- 算法：一些列解决问题的清晰指令，就像食谱。
- 程序 = 数据结构 + 算法。
- 数据结构为算法提供服务，算法围绕数据结构操作。


### 主要学习的数据结构
- 栈、队列、链表
- 集合、字典
- 树、堆、图

### 主要关注点
- 链表：遍历链表，删除链表节点
- 树、图：深度、广度优先遍历
- 数组： 冒泡、选择、插入、归并、快速排序； 顺序、二分搜索。

### 复杂度

#### 时间复杂度
![时间复杂度图](./png/2.png)

- O(1) 只会执行一次

```js
let i = 0;
i+=1
```

- O(n) 时间复杂度
```js
for(let i=0; i<n; j+=1) {
    console.log(n)
}
```

如果两个时间复杂度并列，则两个需要相加。O(X)+O(Y)
则下面这个复杂度是 O(1) + O(n)。但是当n足够大的时候，1可以忽略不计。

```js
let i=0;
i +=1;
for(let i=0; i<n; j+=1) {
    console.log(n)
}
```

- O(n) * O(n) = O(n^2)  注意相乘和相加不一样
```js
for(let i=0; i<n; j+=1) {
    for(let i=0; i<n; j+=1) {
        console.log(i,j)
    }
}
```

- O(logN)
  
```js
let i = 1;
while(i<n) {
    console.log(i); // 执行了logN 次
    i *=2;
}
```

#### 空间复杂度
算法在运行过程中临时占用的内存空间大小的量度

- O(1)
```js
let i = 0; // 占用的内存是单个变量，是一个恒定的值。永远是1
i+=1;
```
- O(n)
```js
const list = []; // 声明这个数组，添加了n个值，相当于占用n个内存单元
for(let i=0; i<n; j+=1) {
   list.push(i);
}
```

- O(n^2)
```js
const matrix = []; // 矩阵
for(let i=0; i<n; i+=1) {
    matrix.push([]);
  for(let j=0; j<n; j+=1) {
     matrix[i].push(j)
  }
}
```

# 二叉树

在线可视化网站

- http://btv.melezinek.cz/binary-search-tree.html
- https://visualgo.net/en/bst
