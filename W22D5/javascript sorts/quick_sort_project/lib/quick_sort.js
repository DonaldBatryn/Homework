function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivot = array[0];
    let left = array.slice(1).filter(ele => ele < pivot)
    let right = array.slice(1).filter(ele => ele >= pivot)
    let sortedLeft = quickSort(left)
    let sortedRight = quickSort(right)
    let result = sortedLeft.concat([pivot])
    return result.concat(sortedRight)
}


module.exports = {
    quickSort
};