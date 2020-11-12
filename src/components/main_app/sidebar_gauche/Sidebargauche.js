import React, { Component } from 'react';

// Imports d'images :
import logo_noir_podkast from '../../img/logo_noir_podkast.svg';
import Acceuil from '../../img/acceuil.svg';
import playlists from '../../img/playlists.svg';
import favoris from '../../img/favoris.svg';
import lives from '../../img/lives.svg';
import telechargements from '../../img/telechargements.svg';

import './Sidebargauche.css';
import { Link } from 'react-router-dom';

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
            <Link to="/home">
              <div className="flex_color_degrade_sidebargauche">
                  <div className="color_degrade_sidebargauche"></div>
                  <div>
                    <img class="style_img_sidebargauche" src={Acceuil} alt="Acceuil" ></img>
                  </div>
                  <div>Accueil</div>
              </div> 
            </Link>
            
            <Link to="/playlists">
              <div className="flex_color_degrade_sidebargauche">
                  <div className="color_degrade_sidebargauche"></div>
                  <div>
                    <img class="style_img_sidebargauche" src={playlists} alt="Playlists" ></img>
                  </div>
                  <div>Playlists</div>
              </div>  
            </Link>

            <Link to="/favoris">
              <div className="flex_color_degrade_sidebargauche">
                  <div className="color_degrade_sidebargauche"></div>
                  <div>
                    <img class="style_img_sidebargauche" src={favoris} alt="Favoris" ></img>
                  </div>
                  <div>Favoris</div>
              </div> 
            </Link>

            <Link to="lives">
              <div className="flex_color_degrade_sidebargauche">
                  <div className="color_degrade_sidebargauche"></div>
                  <div>
                    <img class="style_img_sidebargauche" src={lives} alt="Lives" ></img>
                  </div>
                  <div>Lives</div>
              </div> 
            </Link>

            <Link to="telechargement">
              <div className="flex_color_degrade_sidebargauche">
                  <div className="color_degrade_sidebargauche"></div>
                  <div>
                    <img class="style_img_sidebargauche" src={telechargements} alt="Téléchargements" ></img>
                  </div>
                  <div>Téléchargements</div>
              </div> 
            </Link>
          </div>
          
          
      </div>
    );
  }
}

export default Sidebargauche;
