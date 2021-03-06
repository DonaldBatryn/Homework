function binarySearch(array, target) {
    if (array.length === 0) {
        return false;
    }

    let mid = Math.floor(array.length / 2)
    let left = array.slice(0, mid)
    let right = array.slice(mid + 1)

    if (array[mid] > target) {
        return binarySearch(left, target)
    } else if (array[mid] < target) {
        return binarySearch(right, target)
    } else {
        return true;
    }
}

function binarySearchIndex(array, target) {
    if (array.length === 0) {
        return -1;
    }

    let mid = Math.floor(array.length / 2)
    let left = array.slice(0, mid)
    let right = array.slice(mid + 1)

    if (array[mid] > target) {
        return binarySearchIndex(left, target)
    } else if (array[mid] < target) {
        let result = binarySearchIndex(right, target) 
        // console.log(result)
        if (result === -1) {
            return -1;
        } else {
            return result + (mid + 1)
        }
    } else {
        return mid;
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};