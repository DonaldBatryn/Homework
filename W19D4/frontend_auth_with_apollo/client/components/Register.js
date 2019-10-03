import React from 'react';
import { withRouter } from 'react-router-dom';
import { REGISTER_USER } from '../../src/graphql/mutations';
import { Mutation } from 'react-apollo';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return (e) => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    handleSubmit(e, func){
        
        func(this.state)
    }

    updateCache(cache, { data }) {
        console.log(data);
        cache.writeData({
            data: { isLoggedIn: data.register.loggedIn }
        })
    }

    render(){
        return (
            <Mutation 
                mutation={REGISTER_USER}
                onCompleted={data => {
                    console.log(data)
                    const { token } = data.register;
                    localStorage.setItem("auth-token", token);
                    this.props.history.push('/');
                }}
                update={(cache, data) => this.updateCache(cache, data)}
            >
                {(registerUser) => {
                    return (
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            registerUser({ variables: {
                                name: this.state.name,
                                email: this.state.email,
                                password: this.state.password }
                            })
                        }}>
                            <input type="text" value={this.state.name} placeholder="Name" onChange={this.update('name')}/>
                            <input type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')}/>
                            <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')}/>
                            <input type="submit" value="Submit" />
                        </form>
                    )
                }}
            </Mutation>
        )
    }
}

export default withRouter(Register);