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
            <div>
                <h1 className="color_white_connexion text_align_center"> Connectez-vous ! </h1>
                <div className="flex_connexion">
                    <div className="fle_btn_facebook_logo">
                      <button className="bouton_connexion_fb_gg">Facebook</button>
                    </div>
                    <div className="le_btn_facebook_logo">
                      <button className="bouton_connexion_fb_gg">Google</button>
                    </div>
                </div>
                <div className="flex_connexion">
                  <p className="color_white_connexion"> Déjà inscrit sur Odia ? </p> <a href="https://www.google.com/" className="color_white_connexion a_unstyle_connexion margin_left_connexion">Connexion</a>
                </div>
                <div className="input_style_connexion">
                  <input type="text" className="input_connexion" placeholder="Email" ></input>
                  <input type="text" className="input_connexion" placeholder="Mot de passe"></input>
                </div>
                <div className="flex_btn_connexion">
                  <button className="bouton_connexion_inscr">Connexion</button>
                </div>
                <p> Mot de passe oublié ?</p>
                <p> Vous ne possédez pas encore de compte sur Odio ?</p>
                <p> connexion ?</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Connexion;
