const Util = require('./utils.js')
const MovingObject = require('./moving_object.js')



function Asteroid(pos, game) {
    // debugger
    this.COLOR = "pink";
    this.RADIUS = 15;
    this.game = game;
    MovingObject.call(this, {
        "pos": pos,
        "vel": Util.randomVec(5),
        "radius": this.RADIUS,
        "color": this.COLOR,
        "game": game
    });
}
Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Ship) {
        // debugger
        otherObject.relocate();
    } else {
        // debugger
        this.game.remove(this);
        this.game.remove(otherObject);
    }
};


window.Asteroid = Asteroid;

module.exports = Asteroid;