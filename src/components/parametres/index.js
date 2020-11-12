import React, { Component } from 'react';
import './parametres.css';
import image_parametres from '../img/image_parametres.svg';

class Parametres extends Component {
  render () {
    return (
        <div className="container_parametres">
            <h1> Mes informations </h1>

            <div className="center_containerparam_border">
                <div className="containerparam_border">
                
                    <div className="gauche_container_param">
                        <div className="contouring_img_param">
                            <img className="img_parametres_styles" src={image_parametres}/>
                        </div>
                    </div>

                    <div className="droit_container_param">

                        <h1> Mon offre </h1>
                        <hr></hr>
                        <p> Vous profitez actuellement de la version de gratuite. </p>
                        <div className="btn_monAbonnementParametres">
                            Gérer mon abonnement
                        </div>

                        <h1> Information de connexions </h1>

                        <div className="inputParametersclass">
                            <div>Email : </div>
                            <input type="text" className="style_impit_parameterclass"  placeholder="utilisateur@email.com"></input>
                            <div className="btn_parametersclass">
                                Modifier
                            </div>
                        </div>

                        <div className="inputParametersclass">
                            <div>Mot de passe : </div>
                            <input type="password" className="style_impit_parameterclass" placeholder="*************"></input>
                            <div className="btn_parametersclass">
                                Modifier
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
       
    );
  }
}

export default Parametres;