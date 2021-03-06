import React, { Component } from 'react';
import './Connexion.css';
import logo_blanc_podkast from '../img/logo_blanc_podkast.svg';
import BtnFbGg from '../BtnFbGg/BtnFbGg';
import Button from '../Button';
import { Link } from 'react-router-dom';


class Connexion extends Component {
  render () {
    return (
      <div className="container_connexion">
        <div className="background_color_connexion">
          <div className="center_connexion">
            <img className="logo" src={logo_blanc_podkast} alt="logo podkast" />
            <div>
                <h1 className="color_white_connexion text_align_center"> Connectez-vous ! </h1>
                  <BtnFbGg />
                <div className="input_style_connexion">
                  <input type="text" className="input_connexion" placeholder="Email" ></input>
                  <input type="text" className="input_connexion" placeholder="Mot de passe"></input>
                </div>
                <div className="flex_btn_connexion">
                <Button to="/accueil">
                    Connexion
                  </Button>
                </div>
                <p className="text_style_connexion bold_text_style_connexion"> Mot de passe oublié ?</p>
                <p className="text_style_connexion"> Vous ne possédez pas encore de compte sur Odio ?</p>
                <Link to="/inscription" className="text_style_connexion bold_text_style_connexion">
                  Inscivez-vous !
                </Link>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Connexion;
