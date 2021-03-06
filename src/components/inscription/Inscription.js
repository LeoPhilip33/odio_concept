import React, { Component } from 'react';
import './Inscription.css';
import logo_blanc_podkast from '../img/logo_blanc_podkast.svg';
import BtnFbGg from '../BtnFbGg/BtnFbGg';
import { Link } from 'react-router-dom';
import Button from '../Button';

class Inscription extends Component {
  render () {
    return (
      <div className="container_inscription">
          <div className="background_color_inscription">
            <div className="center_inscription">
              <img className="logo" src={logo_blanc_podkast} alt="logo podkast"/>
              <div>
                <h1 className="color_white_inscription text_align_center"> Inscrivez-vous ! </h1>
                  <BtnFbGg />
                <div className="flex_inscription">
                  <p className="color_white_inscription"> Déjà inscrit sur Odia ? </p> 
                  <Link to="/connexion" className="color_white_inscription a_unstyle_inscription margin_left_connexion">
                    Connexion
                  </Link>
                </div>
                <div className="input_style_inscription">
                  <input type="text" className="input_inscription" placeholder="Email" ></input>
                  <input type="text" className="input_inscription" placeholder="Nom d'utilisateur"></input>
                  <input type="text" className="input_inscription" placeholder="Mot de passe"></input>
                  <input type="text" className="input_inscription" placeholder="Confirmation du mot de passe"></input>
                </div>
                <div className="flex_btn_inscription">
                  <Button to="/accueil">
                    Inscription
                  </Button>
                  {/* <Button to="/accueil" color="green">
                    non
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <h1> {this.props.title} </h1>
            <Cars color="red" ></Cars>
            <Cars> tedst </Cars>
            <Cars color="ouidqsfsdfsdf"> oui </Cars>
          </div> */}
      </div>
    );
  }
}

export default Inscription;
