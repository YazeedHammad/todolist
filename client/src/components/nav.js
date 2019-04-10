import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';


class Nav extends React.Component {

    logOut= (e) => {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        window.location.href ='/';
    }

    render(
    ) {
        const userLink = (
            <Link to="/login"><a href="" onClick={this.logOut}>Logout</a></Link>
        )
        return (
            <div>
                <nav>
                    <div class="topnav">
                        <Link to="/"><a class="active" href="">Home</a></Link>
                        <Link to="/profile"><a href="">Todo</a></Link>
                        <Link to=""><a href="">Contact</a></Link>
                        <Link to=""><a href="">About</a></Link>
                        {localStorage.usertoken ? userLink : null}
                    </div>
                </nav>
            </div>
        )
    }
}
export default Nav