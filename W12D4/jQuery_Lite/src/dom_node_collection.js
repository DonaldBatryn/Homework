class DOMNodeCollection {
    constructor(domElements) {
        this.domElements = domElements;
    }

    html(arg) {
        if (arg) {
            for(let i = 0; i < this.domElements.length; i++) {
                this.domElements[i].innerHTML = arg;
            }
        } else {
            return this.domElements[0].innerHTML;
        }
        return this.domElements;
    }

    empty() {
        for (let i = 0; i < this.domElements.length; i++) {
            this.domElements[i].innerHTML = "";
        }
    }

    append(arg){ 
          
        if (!(arg instanceof DOMNodeCollection) && typeof(arg) !== "string") {
            arg = new DOMNodeCollection([arg]);
        }
        if (typeof(arg) === "string") {
            for (let i = 0; i < this.domElements.length; i++) {
                // this.domElements[i].appendChild(arg);
                
                this.domElements[i].innerText += arg;

            }
        } else if (arg instanceof DOMNodeCollection) {
             for (let i = 0; i < this.domElements.length; i++) {
                 for (let j = 0; j < arg.domElements.length; j++) {
                     this.domElements[i].appendChild(arg.domElements[j]);
                 }
             }
        }  
        return this.domElements;
    }

    attr(attribute, value) { 
        if (value) {
            this.domElements[0].setAttribute(attribute, value);
        } else if (attribute instanceof Object) {
            const hash = Object.keys(attribute);
            hash.forEach(key => {
                this.domElements[0].setAttribute(key, attribute[key]);
            });
        } else {
            const returnValue = this.domElements[0].getAttribute(attribute);
            return returnValue;
        }
    }

    addClass(newClass) { 
        for (let i = 0; i < this.domElements.length; i++) {
            this.domElements[i].classList.add(newClass);

        }
        
    }

    removeClass(classToRemove) { 
        for (let i = 0; i < this.domElements.length; i++) {
            this.domElements[i].classList.remove(classToRemove);

        }

    }

    children() {
        let childrenArr = [];
        for(let i = 0; i < this.domElements.length; i++) {
            Array.from(this.domElements[i].children).forEach(el => {
                childrenArr.push(el);  
            });
        }
        childrenArr = new DOMNodeCollection(childrenArr);
        return childrenArr;
    }

    parent(){
        let parentArr = [];
        for (let i = 0; i < this.domElements.length; i++) {
            parentArr.push(this.domElements[i].parentElement);
            // Array.from(this.domElements[i].parentElement).forEach(el => {
            //     parentArr.push(el);
            };
            parentArr = new DOMNodeCollection(parentArr);
            return parentArr;
        }

    find(selector){ // (x,y) (x, y) && selector.includes(","))
        let args = [selector];
        let eleArr = [];       
        let results;
        if (selector.includes(", ")) {
            args = selector.split(", ");

        } else if (selector.includes(",")) {
            args = selector.split(",");

        } else if (selector.includes(" ")) {
            args = selector.split(" ");
        }
        args.forEach(ele => {
            results = document.querySelectorAll(ele);
            eleArr = eleArr.concat(results);
            });
        return eleArr;
    }

    remove() {
       // ele = whatever.find("whatever")
       // ele.parent.removeChild(ele)
       Array.from(this.domElements).forEach(ele => ele.remove());
        // this.removeChild(this);
    }

    on(action, callback){
        for (let i = 0; i < this.domElements.length; i++) {
            this.callback = callback;
            this.domElements[i].addEventListener(action, callback)
        }
    }

    off(action){
        for (let i = 0; i < this.domElements.length; i++) {
            
            this.domElements[i].removeEventListener(action, this.callback)
           
        }
        this.callback = "";
    }
    
}

window.DOMNodeCollection = DOMNodeCollection;
module.exports = DOMNodeCollection;