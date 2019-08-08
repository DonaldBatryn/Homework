const range = function (start, end) {
    if (end === start) {
        return [start];
    }
    let array = range(start, end - 1);
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
    return base * exp(base, exponent - 1);
}

function exp2(base, exponent) {
    if (exponent === 0) {
        return 1;
    };
    if (exponent === 1) {
        return base;
    };
    if (exponent % 2 === 0) {
        return exp2(base, exponent / 2) ** 2;
    } else {
        return base * (exp2(base, (exponent - 1) / 2) ** 2);
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

    let array = fibonnaci(n - 1);
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