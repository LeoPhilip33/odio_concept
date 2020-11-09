import React, { Component } from 'react';
import './Connexion.css';
import logo_blanc_podkast from '../img/logo_blanc_podkast.svg';

class Connexion extends Component {
  render () {
    return (
      <div className="container_connexion">
        <div className="background_color_connexion">
          <div className="center_connexion">
            <img className="logo" src={logo_blanc_podkast} alt="logo podkast" />
          </div>
        </div>
      </div>
    );
  }
}

export default Connexion;
