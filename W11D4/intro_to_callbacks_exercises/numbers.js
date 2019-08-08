// const readline = require('readline');

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// addNumbers
function addNumbers(sum, numsLeft, completionCallback) {
    let total = sum;
    if (numsLeft > 0) {
        reader.question("Please input a number: ", (res1) => {
            const num1 = parseInt(res1);
            total += num1
            console.log(total);
            addNumbers(total, numsLeft - 1, completionCallback);
        });
    } else {
        completionCallback(total);
        reader.close();
    };
};

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// absurdBubbleSort
function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}? `, (res) => {
        if (res === "yes") {
            callback(true);
        } else if (res === "no") {
            callback(false);
        }
    })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  
    if (i === arr.length-1) {
        outerBubbleSortLoop(madeAnySwaps);
    } else {
        askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
            if (isGreaterThan === true) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        });
    }
};

function absurdBubbleSort(arr, sortCompletionCallback) {
    const outerBubbleSortLoop = (madeAnySwaps) => {
        if (madeAnySwaps === true) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        };
    };
    outerBubbleSortLoop(true);
};


// absurdBubbleSort([3, 2, 1], function (arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
// });

// myBind(context)
Function.prototype.myBind = function(context, args) {

    return () => { this.apply(context, args) }; 
}


// class Lamp {
//     constructor() {
//         this.name = "a lamp";
//     }
// }

// const turnOn = function (name) {
//     console.log(`${name} is Turning on ${this.name}`);
// };

// const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// boundTurnOn();
// const myBoundTurnOn = turnOn.myBind(lamp, ["Winnie"]);
// myBoundTurnOn();

Function.prototype.myThrottle = function (interval) {
    let tooSoon = false;
    
    return (...args) => {

        if (tooSoon) {
            // console.log("too soon!");
        } else {
            this(...args);
            tooSoon = true;
            
            setTimeout(() => { 
                tooSoon = false;
            }, interval);
        }
    }
}

// class Neuron {
//   fire() {
//     console.log("Firing!");
//   }
// };

// const neuron = new Neuron;
// When we create a new Neuron, 
// we can call #fire as frequently as we want

// The following code will try to #fire the neuron every 10ms. Try it in the console:
// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);

// You can use clearInterval to stop the firing:
// clearInterval(interval);

// Using Function#myThrottle, we should be able to throttle 
// the #fire function of our neuron so that it can only fire 
// once every 500ms:

// neuron.fire = neuron.fire.myThrottle(5000);

// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);

// This time, if our Function#myThrottle worked correctly, 
// the Neuron#fire function should only be able to execute 
// every 500ms, even though we're still trying to invoke it 
// every 10ms!

// If we want this behavior for ALL neurons, we can do the same logic in the constructor:

// class Neuron {
//   constructor() {
//     this.fire = this.fire.myThrottle(500);
//   }

//   fire() {
//     console.log("Firing!");
//   }
// };
  
Function.prototype.myDebounce = function (interval) {
    let timeOut = null;
    return (...args) => {
        clearTimeout(timeOut)
        timeOut = setTimeout(() => {
            this(...args);
        }, interval);
        
    };
};

class SearchBar {
  constructor() {
    this.query = "";

    this.type = this.type.bind(this);
    this.search = this.search.bind(this).myDebounce(500);
  }
  
  type(letter) {
    this.query += letter;
    this.search();
  }

  search() {
    console.log(`searching for ${this.query}`);
  }
}

const searchBar = new SearchBar;

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  searchBar.type("w");
  searchBar.type("o");
  searchBar.type("r");
  searchBar.type("l");
  searchBar.type("d");
}




// Assign searchBar.search to the returned debounced version
// searchBar.search = searchBar.search.myDebounce(500);
queryForHelloWorld();