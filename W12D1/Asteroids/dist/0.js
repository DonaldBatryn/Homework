(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject (options) {\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObect.prototype.draw = function (ctx) {\n    ctx.fillstyle = this.color;\n    ctx.beginPath();\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n    );\n    ctx.strokeStyle = this.color;\n    ctx.lineWidth = 10;\n    ctx.stroke();\n    ctx.fill();\n}\n\nlet opts = { \"pos\": [100, 100], \"vel\": 0, \"radius\": 10, \"color\": \"red\" }\nlet testObject = new MovingObject(opts);\ntestObject.draw(ctx);\n\n\n\nmodule.exports = MovingObject\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ })

}]);