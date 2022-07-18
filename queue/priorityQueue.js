class Node {
  constructor(item, priority) {
    this.item = item;
    this.priority = priority;
  }
}

class PriorityQueue{
    constructor(){
        this.items = [];
    }
    enqueue(item, priority){
        let newNode = new Node(item, priority);
        let added = false;
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].priority > newNode.priority){
                this.items.splice(i, 0, newNode);
                added = true;
                break;
            }
        }
        if(!added){
            this.items.push(newNode);
        }
    }
    dequeue(){
        return this.items.shift();
    }
    peek(){
        return this.items[0];
    }
    isEmpty(){
        return this.items.length === 0;
    }
}


// 两种不一样的实现方式 第二个更加巧妙
class PriorityQueue2{
    constructor(){
        this.queue = [];
    }
    enqueue(item, priority){
        this.queue.push({item, priority});
        this.sort();
    }
    dequeue(){
        return this.queue.shift().item;
    }
    sort(){
        this.queue.sort((a, b) => a.priority - b.priority);
    }
    isEmpty(){
        return this.queue.length === 0;
    }
}



let pq = new PriorityQueue();
pq.enqueue('a', 1);
pq.enqueue('b', 2);
pq.enqueue('c', 3);
pq.enqueue('d', 4);
pq.enqueue('e', 2);

console.log('[ pq ]-28', pq)