class Stack{
    constructor(){
        this.stack = [];
    }

    push(val){
        this.stack.push(val);
    }

    // 弹出栈顶元素,方向很关键
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
        return this.stack.toString();
    }
}


// 进制的转换
function changeNumber(num){
    const stack = new Stack();
    let result = '';
    while(num > 0){
        const remainder = num % 2;
        stack.push(remainder);
        num = Math.floor(num / 2);
    }

    while(!stack.isEmpty()){
        result += stack.pop();
    }
    
    console.log('[ stack ]-47', result)
}

changeNumber(100);