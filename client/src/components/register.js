import React, { Component } from 'react';
import './register.css';
import Nav from './nav';
import {register} from './userFunction'


class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            userName: this.state.userName,
            password : this.state.password
        }
        register(user).then(res => {
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
                            <span class="fa fa-spinner bigicon"></span>
                            <h2>SignUp</h2>
                            <div>
                                <input name="firstName" id="firstName" type="text" placeholder="FirstName" 
                                value={this.state.firstName}
                                    onChange={this.onChange}/>
                                <input name="lastName" id="lastName" type="text" placeholder="LastName" 
                                value= {this.state.lastName}
                                onChange={this.onChange}/>
                                <input name="email" id="email" type="email" placeholder="Email" 
                                value={this.state.email}
                                onChange={this.onChange}/>
                                <input name="userName" id="userName" type="text" placeholder="UserName" 
                                value={this.state.userName}
                                onChange={this.onChange}/>
                                <input name="password" id="password" type="password" placeholder="Password" 
                                value={this.state.password}
                                onChange={this.onChange}/>
                                <button type="submit" class="button-signup" >Submit</button>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Register