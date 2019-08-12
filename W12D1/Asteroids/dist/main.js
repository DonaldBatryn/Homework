/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\n\n\n\nfunction Asteroid(pos, game) {\n    // debugger\n    this.COLOR = \"pink\";\n    this.RADIUS = 15;\n    this.game = game;\n    MovingObject.call(this, {\n        \"pos\": pos,\n        \"vel\": Util.randomVec(5),\n        \"radius\": this.RADIUS,\n        \"color\": this.COLOR,\n        \"game\": game\n    });\n}\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function (otherObject) {\n    if (otherObject instanceof Ship) {\n        // debugger\n        otherObject.relocate();\n    } else {\n        // debugger\n        this.game.remove(this);\n        this.game.remove(otherObject);\n    }\n};\n\n\nwindow.Asteroid = Asteroid;\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\n\nfunction Bullet(ship) {\n    this.vel = ship.vel;\n    this.pos = ship.pos;\n    MovingObject.call(this, {\n        \"pos\": this.pos,\n        \"vel\": this.vel,\n        \"radius\": 1,\n        \"color\": \"yellow\",\n        \"game\": ship.game\n    });\n}\nUtil.inherits(Bullet, MovingObject);\n\n\n\nBullet.prototype.collideWith = function(asteroid) {\n    if (asteroid instanceof Asteroid) {\n        this.game.remove(asteroid);\n    }\n}\n\nwindow.Bullet = Bullet;\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__ (/*! ./asteroid.js */ \"./src/asteroid.js\")\nconst Ship = __webpack_require__ (/*! ./ship.js */ \"./src/ship.js\")\n\nfunction Game() {\n    this.DIM_X = 900;\n    this.DIM_Y = 700;\n    this.NUM_ASTEROIDS = 10;\n    this.asteroids = [];\n    this.addAsteroids();\n    this.ship = new Ship(this);\n    this.bullets = [];\n}\n\nwindow.Game = Game;\n\nGame.prototype.addAsteroids = function (){\n    while (this.asteroids.length < this.NUM_ASTEROIDS) {\n        this.asteroids.push(new Asteroid(this.randomPosition(), this));\n    }\n};\n\n\nGame.prototype.randomPosition = function (){\n    let x = Math.floor(Math.random() * this.DIM_X);\n    let y = Math.floor(Math.random() * this.DIM_Y);\n \n    return [x, y];\n};\n\n\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0, 0, 900, 700);\n    // debugger\n    this.allObjects().forEach( function(object){ \n        object.draw(ctx);\n    });\n    // debugger\n}\n\nGame.prototype.moveObjects = function (ctx) {\n    // ctx.clearRect(0, 0, 900, 700);\n    this.allObjects().forEach(function (object) {\n        \n        object.move(ctx);\n    });\n}\n\nGame.prototype.wrap = function (pos) {\n    let x;\n    let y;\n    if (pos[0] < 0) {\n        x = this.DIM_X;\n    } else {\n        x = (pos[0] % this.DIM_X);\n    } \n    if (pos[1] < 0) {\n        y = this.DIM_Y;\n    } else {\n        y = (pos[1] % this.DIM_Y);\n    }\n    return [x, y];\n};\n\nGame.prototype.checkCollisions = function (){\n    // debugger\n   \n    for (let i= 0; i < this.allObjects().length; i++) {\n        for (let j= 0; j < this.allObjects().length; j++) {\n            // debugger\n            if (j === i) {\n                continue;\n            }\n            if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {\n                // debugger\n                this.allObjects()[i].collideWith(this.allObjects()[j]);\n            };\n        }\n    }\n}\n\nGame.prototype.step = function (ctx){\n    this.moveObjects(ctx);\n    this.checkCollisions();\n}\n\nGame.prototype.remove = function(asteroid) {\n    let idx = this.asteroids.indexOf(asteroid);\n    this.asteroids.splice(idx, 1);\n}\n\nGame.prototype.allObjects = function() {\n    let everything = [];\n    for (let i = 0; i < this.asteroids.length; i++) {\n        everything.push(this.asteroids[i]);\n    }\n\n    for (let i = 0; i < this.bullets.length; i++) {\n        everything.push(this.bullets[i]);\n    }\n\n    everything.push(this.ship);\n    return everything;\n}\n\n// Game.prototype.add = function(obj) {\n\n// }\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nfunction GameView(game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n};\n\nGameView.prototype.start = function() {\n    let that = this;\n    that.bindKeyHandlers();\n    setInterval(function() {\n        that.game.draw(that.ctx);\n        that.game.step(that.ctx);\n    }, 20);\n}\n\nGameView.prototype.bindKeyHandlers = function() {\n    let gameV = this;\n    key(\"d\", function() { gameV.game.ship.power([0.5, 0])});\n    key(\"a\", function() { gameV.game.ship.power([-0.5, 0])});\n\n    key(\"w\", function() { gameV.game.ship.power([0, -0.5])});\n    key(\"s\", function() { gameV.game.ship.power([0, 0.5])});\n    key(\"space\", function() { gameV.game.ship.fireBullet() });\n}\n\nwindow.GameView = GameView;\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\")\nconsole.log(\"Webpack is working!\");\n\nlet ctx;\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    let canvas = document.getElementById(\"game-canvas\");\n    let ctx = canvas.getContext('2d');\n\n    let gameV = new GameView(new Game(),ctx);\n    gameV.start();\n    // let opts = { \"pos\": [100, 100], \"vel\": [10,10], \"radius\": 10, \"color\": \"red\" }\n    // let testObject = new MovingObject(opts);\n    // testObject.draw(ctx);\n\n});\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("MovingObject = function (options) {\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n    this.game = options[\"game\"];\n};\n\nwindow.MovingObject = MovingObject\n\nMovingObject.prototype.draw = function (ctx) {\n    // debugger\n    ctx.beginPath();\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n    );\n    ctx.strokeStyle = this.color;\n    ctx.lineWidth = 10;\n    ctx.fillStyle = this.color;\n    ctx.stroke();\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(ctx) {\n   \n    let x = this.pos[0] + this.vel[0];\n    let y = this.pos[1] + this.vel[1];\n    this.pos = this.game.wrap([x, y]);\n    \n    this.draw(ctx);\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n    // check if two objs are radius*2 or closer?\n    let radiusSum = (this.radius + otherObject.radius);\n \n    let distBetween = Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);\n    if (distBetween <= radiusSum) {\n        return true;\n    } else {\n        return false;\n    };\n\n}\n\nMovingObject.prototype.collideWith = function(otherObject) {\n    // this.game.remove(this);\n    // this.game.remove(otherObject);\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\")\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nfunction Ship(game) {\n    this.RADIUS = 10;\n    this.COLOR = \"black\";\n    this.game = game;\n    MovingObject.call(this, {\n        \"pos\": this.game.randomPosition(),\n        \"vel\": [0,0],\n        \"radius\": this.RADIUS,\n        \"color\": this.COLOR,\n        \"game\": this.game,\n    })\n    // debugger\n}\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function () {\n    this.pos = this.game.randomPosition();\n    this.vel = [0,0];\n};\n\nShip.prototype.power = function(impulse) {\n    let x = this.vel[0] + impulse[0]\n    let y = this.vel[1] + impulse[1]\n    this.vel = [x,y];\n\n}\n\nShip.prototype.fireBullet = function() {\n    let newBullet = new Bullet(this);\n    // newBullet.vel = this.vel;\n    this.game.bullets.push(newBullet);\n}\n\n\nwindow.Ship = Ship;\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n\n    inherits(childClass, parentClass) {\n        function Surrogate() { };\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n    \n}\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });