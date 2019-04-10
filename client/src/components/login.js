import React, { Component } from 'react';
import './login.css';
import Nav from './nav';
import {login} from './userFunction';


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            password: ''
        }
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();

        const user = {
            userName: this.state.userName,
            password : this.state.password
        }
        login(user).then(res => {
            if(res) {
                this.props.history.push('/profile')
            }
        })
    }
    
    render() {
        return (
            <div className="container">
                <Nav />
                <form onSubmit={this.onSubmit}>
                    <div className="row colored">
                        <div id="contentdiv" className="contcustom">
                            <span className="fa fa-spinner bigicon"></span>
                            <h2>Login</h2>
                            <div>
                                <input name="userName" id="userName" type="text" placeholder="userName"
                                value={this.state.userName} onChange={this.onChange} />
                                <input name="password" id="password" type="password" placeholder="password"
                                value={this.state.password} onChange={this.onChange} />
                                <button type="submit" class="button-login" >Login</button>
                            </div>
                            <div>
                                <br />
                                <p>
                                    <a className="btn btn-link" className="text-muted">Forget Password ?</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Login