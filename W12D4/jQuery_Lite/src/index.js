const DOMNodeCollection = require("./dom_node_collection.js");

function $l(arg) {
    let array;
    // debugger
    let funcsArray = []; // new funcs in with push, call funcs in order with shift
    if (typeof arg === "string") {
        const nodeList = document.querySelectorAll(arg);
        array = Array.from(nodeList);
        return array;
    } else if (arg instanceof HTMLElement) {
        array = Array.from(arg);
        return new DOMNodeCollection(array);
    } else if (typeof arg === "function") {
        funcsArray.push(arg);
        document.addEventListener("DOMContentLoaded", () => {
            for (let i = 0; i < funcsArray.length; i++) {
                funcsArray[i]();
            }
        })
    }

}

$l.extend = function(arg1, arg2) { // 0: {}, 1: {}, 2: {}
    let otherArgs = Array.from(arguments).slice(2);
    let nextKeys;
    let keys = Object.keys(arg2);
    keys.forEach(el => {
        arg1[el] = arg2[el];
    })
    if (otherArgs) {
        for (let i = 0; i < otherArgs.length; i++) {
            nextKeys = Object.keys(otherArgs[i])
            nextKeys.forEach(el => {
                arg1[el] = otherArgs[i][el];
            })
        }
    }

    return arg1;
    
}

$l.ajax = function(options){
    let defaults = {
        method: "GET",
        url: "http: //api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b",
        contentType: "json",
        success(data) {
            console.log(data);
        },
        error() {
            console.log("Something went wrong...")
        }
    }
    
    options = options || defaults;
    $l.extend(defaults, options);
    
    const xhr = new XMLHttpRequest();
    xhr.open(defaults.method, defaults.url);
    xhr.onload = function() {
        console.log(xhr.status);
        console.log(xhr.responseType);
        console.log(JSON.parse(xhr.response));
    }
    xhr.send(options);
}


window.$l = $l;
