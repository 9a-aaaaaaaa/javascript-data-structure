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
        console.log(this.stack.toString());
    }
}

// 有效的括号
// 思路：扫描字符串，遇到左括号入栈，遇到和栈顶元素匹配的右括号出栈，如果出栈的元素不是左括号，则返回false
// 也就是出栈需要校验
// 结束的时候验证一下
const string = "()";

function checkValidString(str){
    const stack = [];
    for(let i=0; i<str.length; i++){
        const c = str[i];
        if(c === '(' || c === '[' || c === '{'){
            stack.push(c);
        } else {
            const top = stack[stack.length - 1];
            if( (top === '(' && c === ')') ||
                (top === '[' && c === ']') ||
                (top === '{' && c === '}') ) {
                stack.pop();
            }
            else {
                return false;
            }  
        }
    }
    return stack.length === 0; 
}

// console.log( checkValidString(string) )

// 前端与堆栈：

function main(){
    fn1();
}

function fn1(){
    fn2();
}

function fn2(){
    fn3();
}
function fn3(){}

main();