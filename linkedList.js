class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

/**
    单向链表：只有一个指向下一个节点的指针。
    优点：单向链表增加删除节点简单。遍历时候不会死循环；
    缺点：只能从头到尾遍历。只能找到后继，无法找到前驱，也就是只能前进. 适用于节点的增加删除。
    链表的缺点：不能随机查找，必须从第一个开始遍历，查找效率低。
 */

class LinkedList{
    constructor(node){
        this.head  = null || new ListNode(node);
    }

    length(){
        let current = this.head;
        let count = 0;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }

    append(node){
        if(!this.head){
            return this.head = new ListNode(node);
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = new ListNode(node);
    }

    insert(index, node){
        if(index < 0 || index > this.length()){
            return false;
        }

        // insert at the beginning
        if(index === 0){
            const temp = this.head;
            this.head = new ListNode(node);
            if(temp.next) this.head.next = temp.next;
            return true;
        }

        // 1-【6】- 2-3-4-5;
        let current = this.head;
        let count = 0;
        while(count < index - 1){
            current = current.next;
            count++;
        }
        const temp = current.next;
        current.next = new ListNode(node);
        current.next.next = temp;
    }

    find(val) {
        let current = this.head;
        while(current){
            if(current.value === val) return current;
            current = current.next;
        }
        return null;
    }

    remove(val){
        if(!this.head) return false;

        // remove the first node
        if(this.head.value === val){
            if(this.head.next) this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while(current.next){
            if(current.next.value === val) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    print() {
        let current = this.head;
        const result = [];
        while(current){
            result.push(current.value);
            current = current.next;
        }
        console.log(result);
    }

    clear() {
        this.head = null;
    }
}

// const list = new LinkedList(100);
// list.append(200);
// list.append(300);
// list.append(400);
// list.append(500);
// list.print();