class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;

    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let i=0;
        let curr = this.head.next;

        while(curr) {
            if(i == index) {
                return curr.val; 
            }
            i++;
            curr = curr.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new ListNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        if(!newNode.next) {
            this.tail = newNode;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let curr = this.head;
        let i=0;

        while(i < index && curr) {
            curr = curr.next;
            i++;
        }

        if(curr && curr.next) {
            if(curr.next === this.tail) {
                this.tail = curr;
            }
            curr.next = curr.next.next;
            return true;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let vals = [];
        let curr = this.head.next;
        while(curr) {
            vals.push(curr.val);
            curr = curr.next;
        }
        return vals;
    }
}
