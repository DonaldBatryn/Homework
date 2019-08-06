//====================================================//
/////////////INTRO TO JAVASCRIPT PROBLEMS //////////////
//====================================================//

function madLib(verb, adjective, noun) {
    console.log(`We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`);
};

// madLib(`make`, `best`, `guac`);


function isSubstring(searchString, subString) {
    words = searchString.split(" ");
    if (words.includes(subString)) {
        return true;
    } else {
        return false;
    };

};

// isSubstring("time to program", "time")
// true
// isSubstring("Jump for joy", "joys")
// false

function fizzBuzz(array) {
    let newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0 && array[i] % 5 === 0) {
            continue;
        } else if ((array[i] % 3 === 0) || (array[i] % 5 === 0)) {
            newArray.push(array[i]);
        } else {
            continue;
        }
    }
   
    console.log(newArray);
};

// fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// fizzBuzz([3, 15, 30, 75, 45, 60])

function isPrime(num) {
    if (num < 2) {
        console.log(false);
        return false;
    };
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(false);
            return false;
        };
    };
    console.log(true);
    return true;
};

// isPrime(2)
// true

// isPrime(10)
// false

// isPrime(15485863)
// true

// isPrime(3548563)
// false

function sumOfNPrimes(n) {
    let primeSum = 0;
    let numPrimes = 0;
    for (let i = 2; numPrimes < n; i++) {
        if (isPrime(i) === true) {
            primeSum = primeSum + i;
            numPrimes = numPrimes + 1;
            console.log("------");
        };
    };
    console.log(primeSum);
    
}


sumOfNPrimes(0)
// 0

sumOfNPrimes(1)
// 2

sumOfNPrimes(4)
// 17