class Stack{
    constructor(){
        this.stack = [];
    }

    push(val){
        this.stack.push(val);
    }

    pop(){
        return this.stack.pop();
    }

    // 查看栈顶元素
    peek(){
        return this.stack[this.stack.length - 1];
    }

    // 查看栈是否为空
    isEmpty(){
        return this.stack.length === 0;
    }

    size(){
        return this.stack.length;
    }
    
    clear(){
        this.stack = [];
    }

    print(){
        console.log(this.stack.toString());
    }
}