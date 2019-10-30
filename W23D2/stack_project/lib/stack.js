// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.bottom = null;
        this.top = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.top) {
            this.top = newNode
            this.bottom = newNode
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this.length;
    }

    pop(){
        if (!this.top) return null;
        let oldTop = this.top
        let newTop = this.top.next;
        this.top = newTop;
        this.length--;
        if (this.length === 1) this.bottom = newTop;
        if (this.length === 0) {
            this.top = null;
            this.bottom = null;
        }
        return oldTop.value
    }

    size() {
        return this.length
    }
}

exports.Node = Node;
exports.Stack = Stack;
