class Queue{
    constructor(){
        this.queue = [];
    }

    // enter queue
    enqueue(value){
        this.queue.push(value);
    }

    // delete queue  出队列的方向和栈完全相反
    dequeue(){
        return this.queue.shift();
    }

    // 查看队列头部的元素
    peek(){
        return this.queue[0];
    }
    
    isEmpty(){
        return this.queue.length === 0;
    }

    size(){
        return this.queue.length;
    }

    print(){
        console.log(this.queue);
    }
}

// 击鼓传花：围成一个圈，每个人报数，数到某个数字的人开始淘汰，最后一个人是胜利者。
function hotPotato(nameList, num){
    let queue = new Queue();
    for(let i = 0; i < nameList.length; i++){
        queue.enqueue(nameList[i]);
    }

    while(queue.size() > 1){
        // 注意这个开始i 是1
        for(let i = 1; i<num; i++){
            queue.enqueue(queue.dequeue());
        }
        queue.dequeue();
    }
    return queue.peek();
}


console.log(hotPotato(['a','b','c','d','e','f','g'],3));
// ['b','d','e','g','a',] => f
// ['a','b','d','e','f','g'] => d
// ['a','b','e','f','g'] => e
// ['a','b','f','g'] => f
// ['a','b','g'] => g
// ['a','b'] => a
// ['b'] => b

