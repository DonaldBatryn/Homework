// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

  
    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val)

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.length--;
        this.tail = newTail;
        this.tail.next = null;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val)
        let currentHead;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = null;
        } else {
            currentHead = this.head;
            newNode.next = currentHead;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentHead
    }

    // TODO: Implement the contains method here
    contains(target) {
        if (!this.head) return false;
        let current = this.head;
        while (current) {
            if (current.value === target) {
                return true
            }
            current = current.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index >= this.length || index < 0) return null; 
        let currentNode = this.head
        for (let i = 0; i !== index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let foundNode = this.get(index);
        if (!foundNode) return false;
        foundNode.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    // 3rd -n4th - 5th
    insert(index, val) {
        let newNode = new Node(val);
        let foundNode = this.get(index);
        let prevNode = this.get(index - 1)
        if (!foundNode) return false;
        if (index === this.length) {
            this.addToTail(val)
        } else if (index === 0) {
            this.addToHead(val)
        } else {
            newNode.next = foundNode;
            prevNode.next = newNode;
            this.length++;
        }
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        let foundNode = this.get(index)
        if (!foundNode) return undefined;
        let prevNode = this.get(index - 1)
        if (index === this.length) {
            this.removeTail()
        } else if (index === 0) {
            this.removeHead()
        } else {
            prevNode.next = foundNode.next
            // foundNode.next = null;
            this.length--;
        }
        return foundNode
    }

    // TODO: Implement the size method here
    size() {
        return this.length
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
