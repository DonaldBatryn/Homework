function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentEl = arr[i];
        let j;
        for (j = i - 1; j >= 0 && currentEl < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentEl;
    }
    return arr;
}

module.exports = {ls
    insertionSort
};