class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(value){
        this.queue.push(value);
    }

    // 出队列的方向和栈完全相反
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
    print(){
        console.log(this.queue);
    }
}