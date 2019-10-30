// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Modify the definition of the Stack class provided to create an enhanced 
// version of a Stack data structure called MinMaxStack.
//
// A MinMaxStack has all of the same behavior as a Stack, but can also return
// the node with the minimum or maximum value in constant time.
//
// You may alter any of the original Stack's methods, including the 
// constructor.
//  
// Values of nodes of the MinMaxStack are always guaranteed to be numbers.
//
//
// ------------
// Constraints:
// ------------
//
// (1) All MinMaxStack methods must run in constant time, O(1).
//
//
// --------
// Example:
// --------
//
// const minMaxStack = new MinMaxStack();
//
// minMaxStack.push(10);
// minMaxStack.push(12);
// minMaxStack.push(8);
// minMaxStack.push(2);
// minMaxStack.push(20);
//
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 20
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 8
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 10
//
// minMaxStack.pop();
// console.log(minMaxStack.min());   => null
// console.log(minMaxStack.max());   => null
//
//
// -----------
// Let's code!
// -----------
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// Refactor the regular Stack below into a MinMaxStack!
class MinMaxStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
        this.maxNode = null;
        this.minNode = null;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
            this.minNode = newNode
            this.maxNode = newNode
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
            this.maxNode = this.max()
            this.minNode = this.min()
        }
       
        return ++this.length;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        const temp = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
            this.minNode = null;
            this.maxNode = null;
        }
        if (temp === this.maxNode) {
            this.maxNode = this.max()
        }
        if (temp === this.minNode) {
            
            this.minNode = this.min()
        }
        this.top = this.top.next;
        this.length--;
        return temp;
    }

    size() {
        if (this.length >= 0 ) return this.length;
        return 0;
    }

    min() {
        if (this.length === 0) return null;
        if (this.length === 1) return this.top;
        // return this.min[this.min.length - 1] || null
        let currentMinNode = this.top;
        let currentNode = this.top;
        while (currentNode.next) {
            currentNode = currentNode.next
            if (currentNode.value < currentMinNode.value) {
                currentMinNode = currentNode
            }
        }
        return currentMinNode
    }

    max() {
        if (this.length === 0) return null;
        if (this.length === 1) return this.top;

        let currentMaxNode = this.top;
        let currentNode = this.top;
        while (currentNode.next) {
            currentNode = currentNode.next
            if (currentNode.value > currentMaxNode.value) {
                currentMaxNode = currentNode
            }
        }
        return currentMaxNode
    }
}

// Forgetting something down here? 
exports.Node = Node;
exports.MinMaxStack = MinMaxStack;
