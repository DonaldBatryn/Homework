class Clock {
    constructor() {
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        // this.printTime();
        // this._tick();
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        let ending = "A.M."
        let secondsZero = "0"
        let minutesZero = "0"
        if (this.hours > 12) {
            ending = "P.M."
        }
        if(this.minutes >= 10) {
            minutesZero = ""
        }
        if (this.seconds >= 10) {
            secondsZero = ""
        }
        console.log(`${this.hours % 12}:${minutesZero}${this.minutes}:${secondsZero}${this.seconds} ${ending}`);
    }

    _tick() {
        if (this.seconds < 59) { 
            this.seconds += 1;   
        } else {
            this.seconds = 0;

            if (this.minutes < 59) {
                this.minutes += 1;
            } else {
                this.minutes = 0;

                if (this.hours < 23) {   
                    this.hours += 1;
                } else {
                    this.hours = 0; 
                }
            }
        }
        
        this.printTime();        
    }
}
const clock = new Clock();
// console.log(clock.printTime);
// clock._tick();