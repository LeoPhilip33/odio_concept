import React, { Component } from 'react';

import './ContainerApp.css'; 

import logoCoeur from '../img/coeur.svg';
import logo_dollars from '../img/logo_dollars.svg';

class ContainerApp extends Component {
  render () {
    return (
      <div className="container_ContainerApp">
        <div>

          <h1>
            Les podcasts du moments
          </h1>

          <div>

            <div class="flex_app_items_podcast">

              <div className="podcastStymeContainer">
              <img className="style_dollars_podcast_containerapp" src={logo_dollars} alt="Liker le podcast" ></img>
                <div className="titrepodcast_nom">
                  <div className="disp_flex_titrepodcast_nom">
                    <div className="titlestyle_modif_txt">
                      <div className="titrepodcast_containerApp">Titre du podcast</div>
                      <div>Nom du podcasteur</div>
                    </div>
                    <div className="img_positionnement_containerapp" >
                    <img className="style_like_podcast_containerapp" src={logoCoeur} alt="Liker le podcast" ></img>
                    </div>
                  </div>
                </div>
              </div>

              <div className="podcastStymeContainer">
              <img className="style_dollars_podcast_containerapp" src={logo_dollars} alt="Liker le podcast" ></img>
                <div className="titrepodcast_nom">
                  <div className="disp_flex_titrepodcast_nom">
                    <div className="titlestyle_modif_txt">
                      <div className="titrepodcast_containerApp">Titre du podcast</div>
                      <div>Nom du podcasteur</div>
                    </div>
                    <div className="img_positionnement_containerapp" >
                    <img className="style_like_podcast_containerapp" src={logoCoeur} alt="Liker le podcast" ></img>
                    </div>
                  </div>
                </div>
              </div>

              <div className="podcastStymeContainer">
              <img className="style_dollars_podcast_containerapp" src={logo_dollars} alt="Liker le podcast" ></img>
                <div className="titrepodcast_nom">
                  <div className="disp_flex_titrepodcast_nom">
                    <div className="titlestyle_modif_txt">
                      <div className="titrepodcast_containerApp">Titre du podcast</div>
                      <div>Nom du podcasteur</div>
                    </div>
                    <div className="img_positionnement_containerapp" >
                    <img className="style_like_podcast_containerapp" src={logoCoeur} alt="Liker le podcast" ></img>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            

          </div>

          <h1>
            Nos recommandations
          </h1>

          <div class="flex_app_items_podcast">

<div className="podcastStymeContainer">
<img className="style_dollars_podcast_containerapp" src={logo_dollars} alt="Liker le podcast" ></img>
  <div className="titrepodcast_nom">
    <div className="disp_flex_titrepodcast_nom">
      <div className="titlestyle_modif_txt">
        <div className="titrepodcast_containerApp">Titre du podcast</div>
        <div>Nom du podcasteur</div>
      </div>
      <div className="img_positionnement_containerapp" >
      <img className="style_like_podcast_containerapp" src={logoCoeur} alt="Liker le podcast" ></img>
      </div>
    </div>
  </div>
</div>

<div className="podcastStymeContainer">
  <img className="style_dollars_podcast_containerapp" src={logo_dollars} alt="Liker le podcast" ></img>
  <div className="titrepodcast_nom">
    <div className="disp_flex_titrepodcast_nom">
      <div className="titlestyle_modif_txt">
        <div className="titrepodcast_containerApp">Titre du podcast</div>
        <div>Nom du podcasteur</div>
      </div>
      <div className="img_positionnement_containerapp" >
      <img className="style_like_podcast_containerapp" src={logoCoeur} alt="Liker le podcast" ></img>
      </div>
    </div>
  </div>
</div>

<div className="podcastStymeContainer">
<img className="style_dollars_podcast_containerapp" src={logo_dollars} alt="Liker le podcast" ></img>
  <div className="titrepodcast_nom">
    <div className="disp_flex_titrepodcast_nom">
      <div className="titlestyle_modif_txt">
        <div className="titrepodcast_containerApp">Titre du podcast</div>
        <div>Nom du podcasteur</div>
      </div>
      <div className="img_positionnement_containerapp" >
      <img className="style_like_podcast_containerapp" src={logoCoeur} alt="Liker le podcast" ></img>
      </div>
    </div>
  </div>
</div>

</div>
          

        </div>
      </div>
    );
  }
}

export default ContainerApp;
