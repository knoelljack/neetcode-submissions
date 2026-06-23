class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = new Node(0,0);
        this.tail = new Node(0,0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _remove(node) {
        const prev = node.prev;
        const next = node.next;

        next.prev = prev;
        prev.next = next;
    }

    _insertToFront(node) {
        const prev = this.tail.prev;
        prev.next = node;
        node.prev = prev;

        node.next = this.tail;
        this.tail.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)) return -1;

        const node = this.map.get(key);

        this._remove(node);
        this._insertToFront(node);

        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)) {
            const node = this.map.get(key);

            node.value = value;

            this._remove(node);
            this._insertToFront(node);
            return;
        }

        const node = new Node(key, value);
        this.map.set(key, node);
        this._insertToFront(node);

        if(this.map.size > this.capacity) {
            const lru = this.head.next;

            this._remove(lru);
            this.map.delete(lru.key);
        }
    }
}
