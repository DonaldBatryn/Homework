import React from 'react';


class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {time: new Date()}
        this.tick = this.tick.bind(this);
    }

    tick(){
        this.setState({time: new Date()})
    }

    componentDidMount() {
        let timer = setInterval(this.tick, 1000)
    }

    componentWillUnmount(){
        clearInterval(timer);
    }

    render(){
        const seconds = this.state.time.getSeconds()
        const minutes = this.state.time.getMinutes()
        const hours = this.state.time.getHours()
        const day = this.state.time.getDate()
        const month = this.state.time.getMonth()
        const year = this.state.time.getFullYear()
        return (
            <div>
                <div class="verticalClock">
                    <h1>T i m e / D a t e</h1>
                    <h1>{hours % 12}</h1>
                    <h1>:{minutes}</h1>
                    <h1>:{seconds}</h1>
                </div>
                <div class="verticalDate">
                
                    <h1>{month+1}</h1>
                    <h1>/{day}</h1>
                    <h1>/{year}</h1>
                </div>
                
            </div>
        
        )
    }
}

export default Clock;