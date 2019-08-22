import React from 'react';
import uniqueId from '../../util/utils';


export default class TodoForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {title: "", body: ""}
        this.updateText = this.updateText.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    updateText(event){
      event.preventDefault();
        this.setState({title: event.target.value})
    }

    updateBody(event) {
        event.preventDefault();
        this.setState({body: event.target.value })
    }

    submitForm(event){
        event.preventDefault();

        const newTodo = Object.assign({}, this.state, {id: uniqueId()})
        this.props.receiveTodo(newTodo)
        this.setState({title: "", body: ""})

        // const newTodo = {
        //   todo: {
        //       id: uniqueId(),
        //     title: this.state.title,
        //     body: this.state.body,
        //     done: false
        //   }
        // }
        // this.props.receiveTodo(newTodo)
        // this.setState({title: "", body: ""})
         
   
    }

    render(){
        return (
            <form onSubmit={this.submitForm} >
                Title
                <input onChange={this.updateText} type="text" value={this.state.title}/>
                Body
                <input onChange={this.updateBody} type="text" value={this.state.body}/>
                <input type="submit" value="Add Todo"/>
            </form>
        )
    }
}