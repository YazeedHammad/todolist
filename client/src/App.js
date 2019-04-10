import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Nav from './components/nav'

class App extends Component {
  render() {
    return (

      <div className="app-container">
      <Nav />
        <div className="grid-container">
          <div className="btnCont">
            <h1>CG Imagine & invent</h1><br /><br />
            <h3>Where Technology Meets Innovation !</h3><br />
            <Link to="/login"><button className="btnHome">Login</button></Link>
            <Link to="/register"><button className="btnHome">SignUp</button></Link>
          </div>
        </div>


        <div className="clients"><h1>Our Clients</h1>
          <div className="row">
            <div className="column">
              <img src="http://pngimg.com/uploads/cocacola_logo/cocacola_logo_PNG11.png" width="150" height="150" alt=""/>
            </div>
            <div className="column">
              <img src="http://pngimg.com/uploads/mercedes_logos/mercedes_logos_PNG28.png" width="150" height="150" alt=""/>
            </div>
            <div className="column">
              <img src="https://www.freepnglogos.com/uploads/vw-png-logo/vw-audi-skoda-passat-golf-jetta-png-logo-18.png" width="150" height="150" alt=""/>
            </div>
            <div className="column">
              <img src="https://cdn.freebiesupply.com/logos/large/2x/pepsi-3-logo-png-transparent.png" width="150" height="150" alt=""/>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
