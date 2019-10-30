// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val) {
        if (val instanceof Object){
            val = val['value']
        }
        const newNode = new Node(val);

        if (!this.top){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }

        this.length++;
        return this.length;
    }

    pop() {
        if (!this.top) return null;
        const temp = this.top;
        if (this.top === this.bottom) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next
        }
        this.length--;
        return temp;
    }

    size(){
        return this.length
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor() {
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = this.outStack.top || null;
        this.back = this.inStack.top || null;
        this.length = (this.inStack.size() + this.outStack.size())
    }

    enqueue(val) {
        const newNode = new Node(val)
        let currentBack;
        if (this.back) currentBack = this.back
        if (this.inStack.size() === 0) {
            this.inStack.push(newNode)
            this.front = newNode;
            this.back = newNode;
        } else {
            this.inStack.push(newNode)
            this.back = newNode
            currentBack.next = newNode
        }
        return ++this.length;
    }   

    dequeue(){
        let flippedNode;
        let newFront;
        let currentFront;
        if (this.front) currentFront = this.front
        if (this.outStack.size() === 0) {
            while (this.inStack.length) {
                flippedNode = this.inStack.pop()
                this.outStack.push(flippedNode)
            }
            if (this.length === 1) {
                this.front = this.outStack.top
                this.back = this.outStack.top
                this.outStack.top.next = null;
            }
            this.front = this.outStack.top

            this.length--;
            return this.outStack.pop()
        } else {
            newFront = currentFront.next
            this.front = newFront;
            this.length--;
            return this.outStack.pop()
        }

    }

    size(){
        return this.length >= 0 ? this.length : 0
        
    }
};



exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
