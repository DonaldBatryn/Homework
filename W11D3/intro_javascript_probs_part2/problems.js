// ///////////////////////////////////////////////////////////////////////////////
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   More JS fun   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ///////////////////////////////////////////////////////////////////////////////



function titleize(array, callback) {
    let newArr = array.map(el => `Mx. ${el} Jingleheimer Schmidt`);
    callback(newArr);
}

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
    
}

Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant goes phrRRRRR!!`);
}

Elephant.prototype.grow = function() {
    this.height += 12;
    console.log(`${this.name} grew to ${this.height}!`)
}

Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick);
    console.log(`${this.name} the elephant learned ${trick}!`)
}

Elephant.prototype.play = function() {
    let randomItem = this.tricks[Math.floor(Math.random()*this.tricks.length)];
    console.log(`${this.name} is ${randomItem}!`)
}

let donnie = new Elephant("Donnie", 198, ["giving human friends a ride", "playing hide and seek"]);
let polly = new Elephant("Polly", 150, ["painting pictures", "spraying water for a slip and slide"]);
let brenton = new Elephant("Brenton", 234, ["writing letters", "stealing peanuts"]);
let allen = new Elephant("Allen", 200, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [donnie, polly, brenton, allen];

Elephant.paradeHelper = function (elephant) {
    console.log(`${elephant.name} is parading by!`);
};

const dinerBreakfast = function() {
    let order = "I'd like cheesy scrambled eggs please";
    console.log(order);

    return function(food) {
        order = `${order.slice(0, order.length - 8)} and ${food} please.`;
        console.log(order);
    };
};