import React from 'react';

export default class TodoList extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        // const todoLis = this.props.todos.map(el => el)
        return (
            <ul>
                <h1>List goes here </h1>
                {/* {todoLis} */}
            </ul>
        )
    }
}

