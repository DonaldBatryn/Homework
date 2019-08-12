const MovingObject = require('./moving_object.js')
const Util = require('./utils.js')

function Bullet(ship) {
    this.vel = ship.vel;
    this.pos = ship.pos;
    MovingObject.call(this, {
        "pos": this.pos,
        "vel": this.vel,
        "radius": 1,
        "color": "yellow",
        "game": ship.game
    });
}
Util.inherits(Bullet, MovingObject);



Bullet.prototype.collideWith = function(asteroid) {
    if (asteroid instanceof Asteroid) {
        this.game.remove(asteroid);
    }
}

window.Bullet = Bullet;

module.exports = Bullet;