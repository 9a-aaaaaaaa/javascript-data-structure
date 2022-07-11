/***
 * 双向链表缺点: 内存是单向的一倍，对多出来的那个指针很在意内存占用。
 * 
 * 优点： 双向链表可以插入删除任意位置, 可以找到前驱和后继，可进可退；，功能更加强大。
 * 
 * 双向链表极高的灵活性，还表现在它可以封装成栈，队列。在没有随机访问的场景里，它几乎是完美的顺序结构
 * 
 * 
 * 从链表中删除插入/任意一个节点，双链表只要O(1)单链表要O(n), 
 * 查找的时候：可以借用二分法的思路，从head（首结点）向后查找操作和tail（尾结点）向前查找操作同步进行，这样双链表的效率可以提高一倍。
 */

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // 1=>2=>3=>4=>5=>6=>7=>8=>9=>10
    append(data){
       if(!this.head && !this.tail){
           this.head = new Node(data);
           this.tail = this.head;
           this.data = data;
       }
       else {
            const temp = new Node(data);
            this.tail.next = temp;
            temp.prev = this.tail;
            this.tail = temp;
       }
    }

    length(){
        let current = this.head;
        let length = 0;
        while(current){
            length++;
            current = current.next;
        }
        return length;
    }

    // 单向遍历查找
    find(value){
        let current = this.head;
        while(current){
            if(current.data === value){
                return current;
            }
            current = current.next;
        }
        return null;
    }
    
    // 双向遍历查找
    findValue(value){
        let current = this.head;
        let tail = this.tail;

        // 注意：这里的while循环是为了找到前驱和后继。 只写current 和 current && tail 一个效果
        while(current){
            if(current.data === value) return current;
            if(tail.data === value) return tail;
            current = current.next;
            tail = tail.prev;
        }
        return null;
    }

    remove(value) {
        if(this.head.data === value){
            if(this.head.next) this.head = this.head.next;
            return true;
        }

        if(this.tail.data === value){
            const temp = this.tail.prev;
            temp.next = null;
            this.tail = temp;
            return true;
        }

        let current = this.head;
        let tail = this.tail;
        while( current ){
            if(current.data === value){
                current.prev.next = current.next;
                current.next.prev = current.prev;
                return true;
            }
            if(tail.data === value){
                tail.prev.next = tail.next;
                tail.next.prev = tail.prev;
                return true;
            }
            current = current.next;
            tail = tail.prev;
        }
    }

    indexOf(value){
      let current = this.head;
      let tail = this.tail;
      let index = 0;

      while(current !== tail ){
        if(current.data === value) return index;
        current = current.next;

        // 这里需要仔细琢磨一下
        if(tail.data === value) return this.length() - 1 - index;
        tail = tail.prev;

        index++;
      }

      return -1;
    }

    print() {
        let current = this.head;
        const result = [];
        while(current){
            result.push(current.data);
            current = current.next;
        }
        console.log(result);
    }
}


const list = new DoubleLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);

// list.remove(5);
list.print();
console.log( list.indexOf(6) )
