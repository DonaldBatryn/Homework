Array.prototype.uniq = function () {
    let newArray = [];
    this.forEach(el => {
        if (!newArray.includes(el)) {
            newArray.push(el);
        };
    });
  
    return newArray;
};

// [1, 2, 3, 3, 3, 4, 4, 5].uniq();

Array.prototype.twoSum = function () {
    let posArray = [];
    
    
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                posArray.push([i, j]);
            };
        };
    };
    console.log(posArray);
    return posArray;
};

// [1, -1, 2, 3, -3, 4, 5, 6, -6].twoSum();

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]] => [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

Array.prototype.transpose = function () {
    let newArray = [];
    // let subArr = [];
    for (let i = 0; i < this.length; i++) {
        let subArr = [];
        for (let j = 0; j < this[i].length; j++) {
            subArr.push(this[j][i]);
        };
        newArray.push(subArr);
    };
    return newArray;
};
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]].transpose();

Array.prototype.myEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}

Array.prototype.myMap = function(cb) {
    let results = [];
    this.myEach(el => {
        results.push(cb(el));
    });
    return results;
}

Array.prototype.myReduce = function(cb, initialValue) {
    let acc = 0;
    if (typeof initialValue === "undefined") {
        acc = this[0];
        this.slice(1).myEach(el => {
            acc = cb(acc, el);
        });
    } else {
        acc = initialValue;
        this.myEach(el => {
            acc = cb(acc, el);
        });
    };
    return acc;
};

Array.prototype.bubbleSort = function() {
    let sorted = false
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length -1; i++) {
            if (this[i] > this[i+1]) {
                [this[i], this[i+1]] = [this[i+1], this[i]];
                sorted = false;
            };
        };
    };
    
    return this;
}

String.prototype.substrings = function() {
    let subs = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i+1; j <= this.length; j++) {
            subs.push(this.slice(i, j));
        };
    };
    return subs;
};


const range = function(start, end) {
    if (end === start) {
        return [start];
    }
    let array = range(start, end-1);
    array.push(end);
    return array;
}

function sumRec(array) {
    if (array.length === 1) {
        return array[0];
    };
    let total = array[0] + sumRec(array.slice(1));
    return total;
}

function exp(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * exp(base, exponent-1);
}

function exp2(base, exponent) {
    if (exponent === 0) {
        return 1;
    }; 
    if (exponent === 1) {
        return base;
    };
    if (exponent % 2 === 0) {
        return exp2(base, exponent/2)**2;
    } else {
        return base*(exp2(base, (exponent-1)/2)**2);
    };
}

function fibonnaci(n) {
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return [1];
    }
    if (n === 2) {
        return [1, 1];
    }

    let array = fibonnaci(n-1);
    let lastTwo = array.slice(-2);
    let nextEle = lastTwo.reduce((a, b) => a + b);
    array.push(nextEle);
    return array;
}

function deepDupe(array) {
    if (array.length <= 1) {
        return array;
    }
    let duplicate = [];
    array.forEach(el => {
        if (typeof el === (Array)) {
            duplicate.concat(deepDupe(el));
        } else {
            duplicate.push(el);
        };
    });
    return duplicate;
}