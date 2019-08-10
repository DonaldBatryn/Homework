// "monkey patched version"
Function.prototype.inherits = function(SuperClass) {
    function Surrogate() {};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};

// method version
// function inherits(childClass, parentClass) {
//     function Surrogate() {};
//     Surrogate.prototype = parentClass.prototype;
//     childClass.prototype = new Surrogate();
//     childClass.prototype.constructor = childClass;
// }
  
// test ///
function Animal() {
    
};

Animal.prototype.eat = function() {
    // console.log(this);
    console.log(`${this.name} is eating!!!`);
    
}

function Dog(name) {
    this.name = name;
    console.log(`the name is assigned to ${this.name}`);
    // this.inherits(Animal);
}
// Dog.inherits(Animal);
Dog.inherits(Animal);

const toto = new Dog("Toto");

toto.eat();


// function MovingObject() { }

// function Ship() { }
// Ship.inherits(MovingObject);

// function Asteroid() { }
// Asteroid.inherits(MovingObject);


