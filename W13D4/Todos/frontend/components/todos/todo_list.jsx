import React from 'react';
import TodoListItem from '../todo_list/todo_list_item'
import TodoForm from '../todo_list/todo_form'
import uniqueId from '../../util/utils';


export default class TodoList extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.fetchTodos
    }

    render(){
        // debugger
        // let newId;
        const todoLis = this.props.todos.map(el => {
            // const newId = uniqueId();
            return <TodoListItem key={el.id} todo={el} />
            
            })
        return (
            <ul>
                {todoLis}
                <TodoForm createTodo={this.props.createTodo} errors={this.props.errors} receiveTodo={this.props.receiveTodo} />
            </ul>
        )
    }
}


