import React from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'


class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(field){
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault()
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    
    render(){
      
        let type;
        let linkType;
        if (this.props.formType === 'login'){
            type = 'Login';
            linkType = 'signup'
        } else {
            type = 'Sign Up'
            linkType = 'login'
        }
        let err = this.props.errors.errors;
        let firstLet = linkType.charAt(0).toUpperCase()
        let linkText = firstLet + linkType.slice(1)
        return (
            <div>
                <h2>{type}</h2>
                <form>
                    <label>Username:
                        <input onChange={this.handleInput('username')} type="text" value={this.state.username}/>
                    </label>
                    <label>Password:
                        <input onChange={this.handleInput('password')} type="password" value={this.state.password} />
                    </label>
                    <button onClick={this.handleSubmit}>{type}</button>
                </form>
                <br/>
                <h3><Link to={`/${linkType}`}>{linkText}</Link></h3>
                {err}
            </div>
        )
    }
}
export default SessionForm;