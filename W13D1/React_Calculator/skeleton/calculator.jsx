import React from 'react';



class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { num1: '', num2: '', result: 0 }
        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.setAdd = this.setAdd.bind(this);
        this.setSub = this.setSub.bind(this);
        this.setDiv = this.setDiv.bind(this);
        this.setMultiply = this.setMultiply.bind(this);
        this.resetNumFields = this.resetNumFields.bind(this);
    }

    setNum1(e) {
        e.preventDefault();
        this.setState({ num1: e.currentTarget.value })
        // your code here
    }
    setNum2(e) {
        e.preventDefault();
        this.setState({ num2: e.currentTarget.value })
        // your code here
    }
    setAdd(e) {
        e.preventDefault();
        let newNum = Number(this.state.num1) + Number(this.state.num2)
        this.setState({ result: newNum })
        console.log(newNum)
        // your code here
    }
    setSub(e) {
        e.preventDefault();
        let newNum = this.state.num1 - this.state.num2
        this.setState({ result: newNum })
        // your code here
    }
    setMultiply(e) {
        e.preventDefault();
        let newNum = this.state.num1 * this.state.num2;
        this.setState({ result: newNum });
        // your code here
    }
    setDiv(e) {
        e.preventDefault();
        let newNum = this.state.num1 / this.state.num2;
        this.setState({ result: newNum });
        // your code here
    }

    resetNumFields(e) {
        e.preventDefault();
        this.setState({ num1: "", num2: "", result: 0 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.result}</h1>
                BANANA-CACULATOR!
                <br />
                <input onChange={this.setNum1} value={this.state.num1} />
                <input onChange={this.setNum2} value={this.state.num2} />
                <br />
                <button onClick={this.setAdd} >+</button>
                <button onClick={this.setSub} >-</button>
                <button onClick={this.setMultiply} >*</button>
                <button onClick={this.setDiv} >/</button>
                <button onClick={this.resetNumFields}>RESET CALCULATOR</button>
            </div>
        );
    }
}

export default Calculator;
