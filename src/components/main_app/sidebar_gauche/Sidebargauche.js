import React, { Component } from 'react';

// Imports d'images :
import logo_noir_podkast from '../../img/logo_noir_podkast.svg';
import Acceuil from '../../img/acceuil.svg';
import playlists from '../../img/playlists.svg';
import favoris from '../../img/favoris.svg';
import lives from '../../img/lives.svg';
import telechargements from '../../img/telechargements.svg';

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
                <div>
                  <img class="style_img_sidebargauche" src={Acceuil} alt="Revenir à l'acceuil" ></img>
                </div>
                <div>Accueil</div>
            </div> 

            <div className="flex_color_degrade_sidebargauche">
                <div className="color_degrade_sidebargauche"></div>
                <div>
                  <img class="style_img_sidebargauche" src={playlists} alt="Revenir à l'acceuil" ></img>
                </div>
                <div>Playlists</div>
            </div>  

            <div className="flex_color_degrade_sidebargauche">
                <div className="color_degrade_sidebargauche"></div>
                <div>
                  <img class="style_img_sidebargauche" src={favoris} alt="Revenir à l'acceuil" ></img>
                </div>
                <div>Favoris</div>
            </div> 

            <div className="flex_color_degrade_sidebargauche">
                <div className="color_degrade_sidebargauche"></div>
                <div>
                  <img class="style_img_sidebargauche" src={lives} alt="Revenir à l'acceuil" ></img>
                </div>
                <div>Lives</div>
            </div> 

            <div className="flex_color_degrade_sidebargauche">
                <div className="color_degrade_sidebargauche"></div>
                <div>
                  <img class="style_img_sidebargauche" src={telechargements} alt="Revenir à l'acceuil" ></img>
                </div>
                <div>Téléchargements</div>
            </div> 
          </div>
          
      </div>
    );
  }
}

export default Sidebargauche;
