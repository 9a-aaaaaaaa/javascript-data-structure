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