function sum(...args) {
    let total = 0;
    args.forEach(el => {
        total += el;
    })
    return total;
};

// console.log(sum(100, 1000, 1000));

Function.prototype.myBind = function(context)  {
    let bindArgs = [].slice.call(arguments, 1);
    let that = this;
    
    return function () {
        let callArgs = [].slice.call(arguments);
        // console.log(bindArgs);
       
        return that.apply(context, bindArgs.concat(callArgs))
    };
}

Function.prototype.myBind = function(context, ...bindArgs) {

    return (...callArgs) => { this.apply(context, bindArgs.concat(callArgs))}
}

// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

function curriedSum(numArgs) {
    let numbers = [];
    return _curriedSum = (num) => {
        numbers.push(num);
        if (numbers.length < numArgs) {
            return _curriedSum;
        } else {
            return sum(...numbers)
        }
    };
    // return _curriedSum;
}
// console.log(curriedSum(3)(30)(30)(3));

Function.prototype.curry = function(numArgs) {
    let numbers = [];
    let that = this; // sum
    return _curry = (num) => {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return that.apply(null, numbers);
        } else {
            return _curry;
        }
    }
}

Function.prototype.curry2 = function (numArgs) {
    let numbers = [];
    let that = this; // sum
    return _curry = (num) => {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return that(...numbers);
        } else {
            return _curry;
        }
    }
}

const currySum = sum.curry2(3);
console.log(currySum(3)(0)(9000));
