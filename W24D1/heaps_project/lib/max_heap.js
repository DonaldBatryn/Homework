class MaxHeap {
    constructor() {
        this.array = [ null ];
    }

    getParent(idx) {
        if (idx <= 1) return null
        return Math.floor(idx / 2)
    }

    getLeftChild(idx) {
        return idx * 2
    }

    getRightChild(idx) {
        return idx * 2 + 1
    }

    siftUp(idx) {
        if (idx === 1) return;
        let node = this.array[idx];
        let parent = this.getParent(idx);
        if (node > this.array[parent]) {
            [this.array[idx], this.array[parent]] = [this.array[parent], this.array[idx]]
            this.siftUp(parent);
        } 
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1)
    } 

    siftDown(idx) {
        let nodeVal = this.array[idx];
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        
        let leftVal = this.array[leftIdx];
        let rightVal = this.array[rightIdx];

        
        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;
        if (nodeVal > leftVal && nodeVal > rightVal) return;

        let swapIdx;
        if (leftVal > rightVal) {
            swapIdx = leftIdx;
        } else {
            swapIdx = rightIdx;
        }
        [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]]
        this.siftDown(swapIdx);
    }

    deleteMax() {
        if (this.array.length === 1) return null;
        if (this.array.length === 2) return this.array.pop();
        let max = this.array[1]
        this.array[1] = this.array.pop()
        this.siftDown(1);
        return max;
    }
}

module.exports = {
    MaxHeap
};