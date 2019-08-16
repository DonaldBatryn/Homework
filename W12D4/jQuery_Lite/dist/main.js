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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor(domElements) {\n        this.domElements = domElements;\n    }\n\n    html(arg) {\n        if (arg) {\n            for(let i = 0; i < this.domElements.length; i++) {\n                this.domElements[i].innerHTML = arg;\n            }\n        } else {\n            return this.domElements[0].innerHTML;\n        }\n        return this.domElements;\n    }\n\n    empty() {\n        for (let i = 0; i < this.domElements.length; i++) {\n            this.domElements[i].innerHTML = \"\";\n        }\n    }\n\n    append(arg){ \n          \n        if (!(arg instanceof DOMNodeCollection) && typeof(arg) !== \"string\") {\n            arg = new DOMNodeCollection([arg]);\n        }\n        if (typeof(arg) === \"string\") {\n            for (let i = 0; i < this.domElements.length; i++) {\n                // this.domElements[i].appendChild(arg);\n                \n                this.domElements[i].innerText += arg;\n\n            }\n        } else if (arg instanceof DOMNodeCollection) {\n             for (let i = 0; i < this.domElements.length; i++) {\n                 for (let j = 0; j < arg.domElements.length; j++) {\n                     this.domElements[i].appendChild(arg.domElements[j]);\n                 }\n             }\n        }  \n        return this.domElements;\n    }\n\n    attr(attribute, value) { \n        if (value) {\n            this.domElements[0].setAttribute(attribute, value);\n        } else if (attribute instanceof Object) {\n            const hash = Object.keys(attribute);\n            hash.forEach(key => {\n                this.domElements[0].setAttribute(key, attribute[key]);\n            });\n        } else {\n            const returnValue = this.domElements[0].getAttribute(attribute);\n            return returnValue;\n        }\n    }\n\n    addClass(newClass) { \n        for (let i = 0; i < this.domElements.length; i++) {\n            this.domElements[i].classList.add(newClass);\n\n        }\n        \n    }\n\n    removeClass(classToRemove) { \n        for (let i = 0; i < this.domElements.length; i++) {\n            this.domElements[i].classList.remove(classToRemove);\n\n        }\n\n    }\n\n    children() {\n        let childrenArr = [];\n        for(let i = 0; i < this.domElements.length; i++) {\n            Array.from(this.domElements[i].children).forEach(el => {\n                childrenArr.push(el);  \n            });\n        }\n        childrenArr = new DOMNodeCollection(childrenArr);\n        return childrenArr;\n    }\n\n    parent(){\n        let parentArr = [];\n        for (let i = 0; i < this.domElements.length; i++) {\n            parentArr.push(this.domElements[i].parentElement);\n            // Array.from(this.domElements[i].parentElement).forEach(el => {\n            //     parentArr.push(el);\n            };\n            parentArr = new DOMNodeCollection(parentArr);\n            return parentArr;\n        }\n\n    find(selector){ // (x,y) (x, y) && selector.includes(\",\"))\n        let args = [selector];\n        let eleArr = [];       \n        let results;\n        if (selector.includes(\", \")) {\n            args = selector.split(\", \");\n\n        } else if (selector.includes(\",\")) {\n            args = selector.split(\",\");\n\n        } else if (selector.includes(\" \")) {\n            args = selector.split(\" \");\n        }\n        args.forEach(ele => {\n            results = document.querySelectorAll(ele);\n            eleArr = eleArr.concat(results);\n            });\n        return eleArr;\n    }\n\n    remove() {\n       // ele = whatever.find(\"whatever\")\n       // ele.parent.removeChild(ele)\n       Array.from(this.domElements).forEach(ele => ele.remove());\n        // this.removeChild(this);\n    }\n\n    on(action, callback){\n        for (let i = 0; i < this.domElements.length; i++) {\n            this.callback = callback;\n            this.domElements[i].addEventListener(action, callback)\n        }\n    }\n\n    off(action){\n        for (let i = 0; i < this.domElements.length; i++) {\n            \n            this.domElements[i].removeEventListener(action, this.callback)\n           \n        }\n        this.callback = \"\";\n    }\n    \n}\n\nwindow.DOMNodeCollection = DOMNodeCollection;\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nfunction $l(arg) {\n    let array;\n    // debugger\n    let funcsArray = []; // new funcs in with push, call funcs in order with shift\n    if (typeof arg === \"string\") {\n        const nodeList = document.querySelectorAll(arg);\n        array = Array.from(nodeList);\n        return array;\n    } else if (arg instanceof HTMLElement) {\n        array = Array.from(arg);\n        return new DOMNodeCollection(array);\n    } else if (typeof arg === \"function\") {\n        funcsArray.push(arg);\n        document.addEventListener(\"DOMContentLoaded\", () => {\n            for (let i = 0; i < funcsArray.length; i++) {\n                funcsArray[i]();\n            }\n        })\n    }\n\n}\n\n$l.extend = function(arg1, arg2) { // 0: {}, 1: {}, 2: {}\n    let otherArgs = Array.from(arguments).slice(2);\n    let nextKeys;\n    let keys = Object.keys(arg2);\n    keys.forEach(el => {\n        arg1[el] = arg2[el];\n    })\n    if (otherArgs) {\n        for (let i = 0; i < otherArgs.length; i++) {\n            nextKeys = Object.keys(otherArgs[i])\n            nextKeys.forEach(el => {\n                arg1[el] = otherArgs[i][el];\n            })\n        }\n    }\n\n    return arg1;\n    \n}\n\n$l.ajax = function(options){\n    let defaults = {\n        method: \"GET\",\n        url: \"http: //api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b\",\n        contentType: \"json\",\n        success(data) {\n            console.log(data);\n        },\n        error() {\n            console.log(\"Something went wrong...\")\n        }\n    }\n    \n    options = options || defaults;\n    $l.extend(defaults, options);\n    \n    const xhr = new XMLHttpRequest();\n    xhr.open(defaults.method, defaults.url);\n    xhr.onload = function() {\n        console.log(xhr.status);\n        console.log(xhr.responseType);\n        console.log(JSON.parse(xhr.response));\n    }\n    xhr.send(options);\n}\n\n\nwindow.$l = $l;\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });