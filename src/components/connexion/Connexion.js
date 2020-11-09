import React, { Component } from 'react';
import './Connexion.css';
import logo_blanc from '../img/logo_blanc.svg';

class Connexion extends Component {
  render () {
    return (
      <div className="container_connexion">
        <div className="background_color_connexion">
          <div className="center_connexion">
            <img className="logo" src={logo_blanc} alt="logo podkast" />
          </div>
        </div>
      </div>
    );
  }
}

export default Connexion;
