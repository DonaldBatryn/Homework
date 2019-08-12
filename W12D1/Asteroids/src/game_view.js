const Game = require("./game.js")

function GameView(game, ctx) {
    this.game = game;
    this.ctx = ctx;
};

GameView.prototype.start = function() {
    let that = this;
    that.bindKeyHandlers();
    setInterval(function() {
        that.game.draw(that.ctx);
        that.game.step(that.ctx);
    }, 20);
}

GameView.prototype.bindKeyHandlers = function() {
    let gameV = this;
    key("d", function() { gameV.game.ship.power([0.5, 0])});
    key("a", function() { gameV.game.ship.power([-0.5, 0])});

    key("w", function() { gameV.game.ship.power([0, -0.5])});
    key("s", function() { gameV.game.ship.power([0, 0.5])});
    key("space", function() { gameV.game.ship.fireBullet() });
}

window.GameView = GameView;
module.exports = GameView;