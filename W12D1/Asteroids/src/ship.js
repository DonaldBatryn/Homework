const MovingObject = require('./moving_object.js')
const Bullet = require('./bullet.js')
const Util = require('./utils.js')
const Game = require('./game.js')

function Ship(game) {
    this.RADIUS = 10;
    this.COLOR = "black";
    this.game = game;
    MovingObject.call(this, {
        "pos": this.game.randomPosition(),
        "vel": [0,0],
        "radius": this.RADIUS,
        "color": this.COLOR,
        "game": this.game,
    })
    // debugger
}
Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
};

Ship.prototype.power = function(impulse) {
    let x = this.vel[0] + impulse[0]
    let y = this.vel[1] + impulse[1]
    this.vel = [x,y];

}

Ship.prototype.fireBullet = function() {
    let newBullet = new Bullet(this);
    // newBullet.vel = this.vel;
    this.game.bullets.push(newBullet);
}


window.Ship = Ship;
module.exports = Ship;