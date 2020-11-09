import React, { Component } from 'react';
import './Inscription.css';
import logo_blanc from './img/logo_blanc.svg';
import icon_google from './img/ico_google.svg';
import icon_fb from './img/ico_fb.svg';
import Cars from '../test/Cars';

class Inscription extends Component {
  render () {
    return (
      <div className="container_inscription">
          <div className="background_color_inscription">
            <div className="center_inscription">
              <img className="logo" src={logo_blanc} alt="logo podkast"/>
              <div>
                <h1 className="color_white_inscription text_align_center"> Inscrivez-vous ! </h1>
                <div className="flex_inscription">
                    <div className="fle_btn_facebook_logo">
                      <button className="bouton_inscription_fb_gg">Facebook</button>
                    </div>
                    <div className="le_btn_facebook_logo">
                      <button className="bouton_inscription_fb_gg">Google</button>
                    </div>
                </div>
                <div className="flex_inscription">
                  <p className="color_white_inscription"> Déjà inscrit sur Odia ? </p> <a href="https://www.google.com/" className="color_white_inscription a_unstyle_inscription margin_left_connexion">Connexion</a>
                </div>
                <div className="input_style_inscription">
                  <input type="text" className="input_inscription" placeholder="Email" ></input>
                  <input type="text" className="input_inscription" placeholder="Nom d'utilisateur"></input>
                  <input type="text" className="input_inscription" placeholder="Mot de passe"></input>
                  <input type="text" className="input_inscription" placeholder="Confirmation du mot de passe"></input>
                </div>
                <div className="flex_btn_inscription">
                  <button className="bouton_inscription_inscr">Inscription</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1> {this.props.title} </h1>
            <Cars color="red" ></Cars>
            <Cars> tedst </Cars>
            <Cars color="ouidqsfsdfsdf"> oui </Cars>
          </div>
      </div>
    );
  }
}

export default Inscription;
