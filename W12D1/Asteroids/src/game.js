const Asteroid = require ("./asteroid.js")
const Ship = require ("./ship.js")

function Game() {
    this.DIM_X = 900;
    this.DIM_Y = 700;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Ship(this);
    this.bullets = [];
}

window.Game = Game;

Game.prototype.addAsteroids = function (){
    while (this.asteroids.length < this.NUM_ASTEROIDS) {
        this.asteroids.push(new Asteroid(this.randomPosition(), this));
    }
};


Game.prototype.randomPosition = function (){
    let x = Math.floor(Math.random() * this.DIM_X);
    let y = Math.floor(Math.random() * this.DIM_Y);
 
    return [x, y];
};


Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, 900, 700);
    // debugger
    this.allObjects().forEach( function(object){ 
        object.draw(ctx);
    });
    // debugger
}

Game.prototype.moveObjects = function (ctx) {
    // ctx.clearRect(0, 0, 900, 700);
    this.allObjects().forEach(function (object) {
        
        object.move(ctx);
    });
}

Game.prototype.wrap = function (pos) {
    let x;
    let y;
    if (pos[0] < 0) {
        x = this.DIM_X;
    } else {
        x = (pos[0] % this.DIM_X);
    } 
    if (pos[1] < 0) {
        y = this.DIM_Y;
    } else {
        y = (pos[1] % this.DIM_Y);
    }
    return [x, y];
};

Game.prototype.checkCollisions = function (){
    // debugger
   
    for (let i= 0; i < this.allObjects().length; i++) {
        for (let j= 0; j < this.allObjects().length; j++) {
            // debugger
            if (j === i) {
                continue;
            }
            if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
                // debugger
                this.allObjects()[i].collideWith(this.allObjects()[j]);
            };
        }
    }
}

Game.prototype.step = function (ctx){
    this.moveObjects(ctx);
    this.checkCollisions();
}

Game.prototype.remove = function(asteroid) {
    let idx = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(idx, 1);
}

Game.prototype.allObjects = function() {
    let everything = [];
    for (let i = 0; i < this.asteroids.length; i++) {
        everything.push(this.asteroids[i]);
    }

    for (let i = 0; i < this.bullets.length; i++) {
        everything.push(this.bullets[i]);
    }

    everything.push(this.ship);
    return everything;
}

// Game.prototype.add = function(obj) {

// }

module.exports = Game;