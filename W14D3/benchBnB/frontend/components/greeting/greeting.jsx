import React from 'react'
import {Link} from 'react-router-dom';

export default class Greeting extends React.Component {
    constructor(props){
        super(props)
    }
    
   
   
    render(){
        if (!this.props.currentUser){
            return (
                <div>
                    <Link to='/signup' />
                    <Link to='/login' />
                </div>
            )
        }
        let name = this.props.currentUser.username
        return (
            <div>
                <h1>Welcome, {name}</h1>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }
}