import React, { Component } from 'react';
import logo_noir_podkast from '../../img/logo_noir_podkast.svg';
import './Sidebargauche.css';

class Sidebargauche extends Component {
  render () {
    return (
      <div className="container_sidebar_gauche">
        <div className="padding_logo_abo_sidebar_gauche">
          <img src={logo_noir_podkast} alt="logo podkast" />

          <div className="abonnement_premium">
            <div className="p_modify_slidebar"> Vous utiliser la version gratuite. </div>
            <div className="hr_modify_sidebar" ></div>
            <div className="p_modify_slidebar"> S'ABONNER </div>
          </div>
        </div>

          <div className="txt_links_slidebar">
            <div className="flex_color_degrade_sidebargauche">
                <div className="color_degrade_sidebargauche"></div>
                <div>Mon image</div>
                <div>okeazfozkef</div>
            </div> 

            <div>
                okeazfozkef
            </div>  

            <div>
                okeazfozkef
            </div> 

            <div>
                okeazfozkef
            </div>
          </div>
          
      </div>
    );
  }
}

export default Sidebargauche;
