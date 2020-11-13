import React, { Component } from 'react';

import './ContainerApp.css'; 

import logoCoeur from '../img/coeur.svg';
import logo_dollars from '../img/logo_dollars.svg';
import etoile from '../img/etoile.png';

import ContainerTheme from '../containerTheme/';

class ContainerApp extends Component {
  render () {
    return (
      <div className="container_ContainerApp">
        <div className="width_container_app_page">
          <h1 className="modification_title_container_app">
            Les podcasts du moments
          </h1>

          <div>

            <div className="flex_app_items_podcast">

            <div className="podcastStymeContainer">
              <img className="style_dollars_podcast_containerapp" src={logo_dollars} alt="Liker le podcast" ></img>
                <div className="titrepodcast_nom">
                  <div className="disp_flex_titrepodcast_nom">
                    <div className="titlestyle_modif_txt">
                      <div className="titrepodcast_containerApp">Titre du podcast</div>
                      <div className="nom_podcasteur_containerApp">Nom du podcasteur</div>
                    </div>
                    <div className="img_positionnement_containerapp" >
                    <img className="style_like_podcast_containerapp" src={logoCoeur} alt="Liker le podcast" ></img>
                    </div>
                  </div>
                </div>
                <div className="container_etoile_size_modifications">
                  <img className="etoile" src={etoile} alt="Etoiles de notations"/>
                </div>
              </div>


              <div className="podcastStymeContainer">
              <img className="style_dollars_podcast_containerapp" src={logo_dollars} alt="Logo dollars" ></img>
                <div className="titrepodcast_nom">
                  <div className="disp_flex_titrepodcast_nom">
                    <div className="titlestyle_modif_txt">
                      <div className="titrepodcast_containerApp">Titre du podcast</div>
                      <div className="nom_podcasteur_containerApp">Nom du podcasteur</div>
                    </div>
                    <div className="img_positionnement_containerapp" >
                    <img className="style_like_podcast_containerapp" src={logoCoeur} alt="Logo Coeur" ></img>
                    </div>
                  </div>
                </div>

                <div className="container_etoile_size_modifications">
                  <img className="etoile" src={etoile} alt="notation étoiles"/>
                </div>
                
              </div>

              <div className="podcastStymeContainer">
              <img className="style_dollars_podcast_containerapp" src={logo_dollars} alt="Logo dollars" ></img>
                <div className="titrepodcast_nom">
                  <div className="disp_flex_titrepodcast_nom">
                    <div className="titlestyle_modif_txt">
                      <div className="titrepodcast_containerApp">Titre du podcast</div>
                      <div className="nom_podcasteur_containerApp">Nom du podcasteur</div>
                    </div>
                    <div className="img_positionnement_containerapp" >
                    <img className="style_like_podcast_containerapp" src={logoCoeur} alt="Logo coeurs" ></img>
                    </div>
                  </div>
                </div>
                <div className="container_etoile_size_modifications">
                  <img className="etoile" src={etoile} alt="Etoiles de notation"/>
                </div>
              </div>

              <div className="podcastStymeContainer">
                <img className="style_dollars_podcast_containerapp" src={logo_dollars} alt="Logo dollars" ></img>
                  <div className="titrepodcast_nom">
                    <div className="disp_flex_titrepodcast_nom">
                      <div className="titlestyle_modif_txt">
                        <div className="titrepodcast_containerApp">Titre du podcast</div>
                        <div className="nom_podcasteur_containerApp">Nom du podcasteur</div>
                      </div>
                        <div className="img_positionnement_containerapp" >
                      <img className="style_like_podcast_containerapp" src={logoCoeur} alt="Logo coeurs" ></img>
                    </div>
                  </div>
                </div>
                <div className="container_etoile_size_modifications">
                  <img className="etoile" src={etoile} alt="notation étoiles"/>
                </div>
              </div>

              <div className="podcastStymeContainer">
                <img className="style_dollars_podcast_containerapp" src={logo_dollars} alt="Logo dollars" ></img>
                  <div className="titrepodcast_nom">
                    <div className="disp_flex_titrepodcast_nom">
                      <div className="titlestyle_modif_txt">
                        <div className="titrepodcast_containerApp">Titre du podcast</div>
                        <div className="nom_podcasteur_containerApp">Nom du podcasteur</div>
                      </div>
                        <div className="img_positionnement_containerapp" >
                      <img className="style_like_podcast_containerapp" src={logoCoeur} alt="Logo coeurs" ></img>
                    </div>
                  </div>
                </div>
                <div className="container_etoile_size_modifications">
                  <img className="etoile" src={etoile} alt="notation étoiles"/>
                </div>
              </div>

            </div>
            

          </div>

          <h1 class="modification_title_container_app">
            Nos recommandations
          </h1>

          <div className="flex_app_items_podcast">

          <div className="podcastStymeContainer">
          <img className="style_dollars_podcast_containerapp" src={logo_dollars} alt="logo dollars" ></img>
            <div className="titrepodcast_nom">
              <div className="disp_flex_titrepodcast_nom">
                <div className="titlestyle_modif_txt">
                  <div className="titrepodcast_containerApp">Titre du podcast</div>
                  <div className="nom_podcasteur_containerApp">Nom du podcasteur</div>
                </div>
                <div className="img_positionnement_containerapp" >
                <img className="style_like_podcast_containerapp" src={logoCoeur} alt="logo coeurs" ></img>
                </div>
              </div>
            </div>
            <div className="container_etoile_size_modifications">
              <img className="etoile" src={etoile} alt="notation étoiles"/>
            </div>
          </div>

          <div className="podcastStymeContainer">
            <img className="style_dollars_podcast_containerapp" src={logo_dollars} alt="Logo dollars" ></img>
            <div className="titrepodcast_nom">
              <div className="disp_flex_titrepodcast_nom">
                <div className="titlestyle_modif_txt">
                  <div className="titrepodcast_containerApp">Titre du podcast</div>
                  <div className="nom_podcasteur_containerApp">Nom du podcasteur</div>
                </div>
                <div className="img_positionnement_containerapp" >
                <img className="style_like_podcast_containerapp" src={logoCoeur} alt="Logo coeurs" ></img>
                </div>
              </div>
            </div>
            <div className="container_etoile_size_modifications">
              <img className="etoile" src={etoile} alt="natation étoiles"/>
            </div>
          </div>

          <div className="podcastStymeContainer">
          <img className="style_dollars_podcast_containerapp" src={logo_dollars} alt="Liker le podcast" ></img>
            <div className="titrepodcast_nom">
              <div className="disp_flex_titrepodcast_nom">
                <div className="titlestyle_modif_txt">
                  <div className="titrepodcast_containerApp">Titre du podcast</div>
                  <div className="nom_podcasteur_containerApp">Nom du podcasteur</div>
                </div>
                <div className="img_positionnement_containerapp" >
                <img className="style_like_podcast_containerapp" src={logoCoeur} alt="Liker le podcast" ></img>
                </div>
              </div>
            </div>
            <div className="container_etoile_size_modifications">
              <img className="etoile" src={etoile} alt="natation étoiles"/>
            </div>
          </div>

          <div className="podcastStymeContainer">
              <img className="style_dollars_podcast_containerapp" src={logo_dollars} alt="Liker le podcast" ></img>
                <div className="titrepodcast_nom">
                  <div className="disp_flex_titrepodcast_nom">
                    <div className="titlestyle_modif_txt">
                      <div className="titrepodcast_containerApp">Titre du podcast</div>
                      <div className="nom_podcasteur_containerApp">Nom du podcasteur</div>
                    </div>
                    <div className="img_positionnement_containerapp" >
                    <img className="style_like_podcast_containerapp" src={logoCoeur} alt="Liker le podcast" ></img>
                    </div>
                  </div>
                </div>
                <div className="container_etoile_size_modifications">
                  <img className="etoile" src={etoile} alt="natation étoiles"/>
                </div>
              </div>

              <div className="podcastStymeContainer">
              <img className="style_dollars_podcast_containerapp" src={logo_dollars} alt="Liker le podcast" ></img>
                <div className="titrepodcast_nom">
                  <div className="disp_flex_titrepodcast_nom">
                    <div className="titlestyle_modif_txt">
                      <div className="titrepodcast_containerApp">Titre du podcast</div>
                      <div className="nom_podcasteur_containerApp">Nom du podcasteur</div>
                    </div>
                    <div className="img_positionnement_containerapp" >
                    <img className="style_like_podcast_containerapp" src={logoCoeur} alt="Liker le podcast" ></img>
                    </div>
                  </div>
                </div>
                <div className="container_etoile_size_modifications">
                  <img className="etoile" src={etoile} alt="natation étoiles"/>
                </div>
              </div>

        </div>

        <h1 className="modification_title_container_app"> Tous les thèmes </h1>
        
        <ContainerTheme />

      </div>
    </div>
  );
}
}

export default ContainerApp;
