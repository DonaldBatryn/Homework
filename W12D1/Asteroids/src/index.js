const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Util = require('./utils.js');
const Game = require('./game.js');
const GameView = require('./game_view.js');
const Ship = require('./ship.js');
const Bullet = require('./bullet.js')
console.log("Webpack is working!");

let ctx;
window.addEventListener('DOMContentLoaded', (event) => {
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext('2d');

    let gameV = new GameView(new Game(),ctx);
    gameV.start();
    // let opts = { "pos": [100, 100], "vel": [10,10], "radius": 10, "color": "red" }
    // let testObject = new MovingObject(opts);
    // testObject.draw(ctx);

});



