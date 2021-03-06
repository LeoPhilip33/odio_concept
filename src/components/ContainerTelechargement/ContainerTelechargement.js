import React, { Component } from 'react';

import './ContainerTelechargement.css'; 

import logoCoeur from '../img/coeur.svg';
import etoile from '../img/etoile.png';




class ContainerTelechargement extends Component {
  render () {
    return (
      <div className="container_ContainerApp">
        <div className="width_container_app_page">
          <h1 className="modification_title_container_app">
          Mes téléchargements récents
          </h1>

          <div>

            <div className="flex_app_items_podcast">

            <div className="podcastStymeContainer">
            <svg className="style_dollars_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs></defs><title>Fichier 1</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><g id="logo_dollars" data-name="logo dollars"><g id="Groupe_34" data-name="Groupe 34"><path class="cls-1" d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm2.08,24.68v2.43H14.69V24.66c-2.17-.47-4-1.86-4.17-4.34H13c.13,1.34,1,2.38,3.37,2.38,2.5,0,3.06-1.24,3.06-2,0-1.06-.57-2.05-3.4-2.73-3.15-.76-5.31-2.06-5.31-4.67,0-2.19,1.76-3.61,4-4.09V6.75h3.39V9.23a4.5,4.5,0,0,1,3.63,4.31h-2.5c-.07-1.42-.81-2.38-2.83-2.38s-3,.86-3,2.1c0,1.07.83,1.76,3.39,2.43s5.32,1.76,5.32,5C22,23,20.29,24.26,18.08,24.68Z"/></g></g></g></g></svg>
                <svg  className="style_dell_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" width="27.609" height="31.686" viewBox="0 0 27.609 31.686"><path className="style_dell_hover" id="iconmonstr-download-21" d="M28.609,31.686V5.281H18.569v2.64H26.1V29.045H3.51V7.921h7.53V5.281H1v26.4ZM13.549,14.523H8.53L14.8,22.444l6.275-7.921h-5.02V0h-2.51Z" transform="translate(-1)" fill="#fff" fill-rule="evenodd"/></svg>
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
                  <img className="etoile" src={etoile} alt="etoiles"/>
                </div>
              </div>


              <div className="podcastStymeContainer">
              <svg className="style_dollars_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs></defs><title>Fichier 1</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><g id="logo_dollars" data-name="logo dollars"><g id="Groupe_34" data-name="Groupe 34"><path class="cls-1" d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm2.08,24.68v2.43H14.69V24.66c-2.17-.47-4-1.86-4.17-4.34H13c.13,1.34,1,2.38,3.37,2.38,2.5,0,3.06-1.24,3.06-2,0-1.06-.57-2.05-3.4-2.73-3.15-.76-5.31-2.06-5.31-4.67,0-2.19,1.76-3.61,4-4.09V6.75h3.39V9.23a4.5,4.5,0,0,1,3.63,4.31h-2.5c-.07-1.42-.81-2.38-2.83-2.38s-3,.86-3,2.1c0,1.07.83,1.76,3.39,2.43s5.32,1.76,5.32,5C22,23,20.29,24.26,18.08,24.68Z"/></g></g></g></g></svg>
              <svg  className="style_dell_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" width="27.609" height="31.686" viewBox="0 0 27.609 31.686"><path className="style_dell_hover" id="iconmonstr-download-21" d="M28.609,31.686V5.281H18.569v2.64H26.1V29.045H3.51V7.921h7.53V5.281H1v26.4ZM13.549,14.523H8.53L14.8,22.444l6.275-7.921h-5.02V0h-2.51Z" transform="translate(-1)" fill="#fff" fill-rule="evenodd"/></svg>
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
                  <img className="etoile" src={etoile} alt="etoiles"/>
                </div>
                
              </div>

              <div className="podcastStymeContainer">
              <svg className="style_dollars_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs></defs><title>Fichier 1</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><g id="logo_dollars" data-name="logo dollars"><g id="Groupe_34" data-name="Groupe 34"><path class="cls-1" d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm2.08,24.68v2.43H14.69V24.66c-2.17-.47-4-1.86-4.17-4.34H13c.13,1.34,1,2.38,3.37,2.38,2.5,0,3.06-1.24,3.06-2,0-1.06-.57-2.05-3.4-2.73-3.15-.76-5.31-2.06-5.31-4.67,0-2.19,1.76-3.61,4-4.09V6.75h3.39V9.23a4.5,4.5,0,0,1,3.63,4.31h-2.5c-.07-1.42-.81-2.38-2.83-2.38s-3,.86-3,2.1c0,1.07.83,1.76,3.39,2.43s5.32,1.76,5.32,5C22,23,20.29,24.26,18.08,24.68Z"/></g></g></g></g></svg>
              <svg  className="style_dell_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" width="27.609" height="31.686" viewBox="0 0 27.609 31.686"><path className="style_dell_hover" id="iconmonstr-download-21" d="M28.609,31.686V5.281H18.569v2.64H26.1V29.045H3.51V7.921h7.53V5.281H1v26.4ZM13.549,14.523H8.53L14.8,22.444l6.275-7.921h-5.02V0h-2.51Z" transform="translate(-1)" fill="#fff" fill-rule="evenodd"/></svg>
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
                  <img className="etoile" src={etoile} alt="etoiles"/>
                </div>
              </div>

              <div className="podcastStymeContainer">
              <svg  className="style_dell_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" width="27.609" height="31.686" viewBox="0 0 27.609 31.686"><path className="style_dell_hover" id="iconmonstr-download-21" d="M28.609,31.686V5.281H18.569v2.64H26.1V29.045H3.51V7.921h7.53V5.281H1v26.4ZM13.549,14.523H8.53L14.8,22.444l6.275-7.921h-5.02V0h-2.51Z" transform="translate(-1)" fill="#fff" fill-rule="evenodd"/></svg>
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
                  <img className="etoile" src={etoile} alt="etoiles"/>
                </div>
              </div>

              <div className="podcastStymeContainer">
              <svg  className="style_dell_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" width="27.609" height="31.686" viewBox="0 0 27.609 31.686"><path className="style_dell_hover" id="iconmonstr-download-21" d="M28.609,31.686V5.281H18.569v2.64H26.1V29.045H3.51V7.921h7.53V5.281H1v26.4ZM13.549,14.523H8.53L14.8,22.444l6.275-7.921h-5.02V0h-2.51Z" transform="translate(-1)" fill="#fff" fill-rule="evenodd"/></svg>

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
                  <img className="etoile" src={etoile} alt="etoiles"/>
                </div>
              </div>

            </div>
            

          </div>

          <h1 class="modification_title_container_app">
          Marketing          
          </h1>

          <div className="flex_app_items_podcast">

          <div className="podcastStymeContainer">
          <svg className="style_dollars_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs></defs><title>Fichier 1</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><g id="logo_dollars" data-name="logo dollars"><g id="Groupe_34" data-name="Groupe 34"><path class="cls-1" d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm2.08,24.68v2.43H14.69V24.66c-2.17-.47-4-1.86-4.17-4.34H13c.13,1.34,1,2.38,3.37,2.38,2.5,0,3.06-1.24,3.06-2,0-1.06-.57-2.05-3.4-2.73-3.15-.76-5.31-2.06-5.31-4.67,0-2.19,1.76-3.61,4-4.09V6.75h3.39V9.23a4.5,4.5,0,0,1,3.63,4.31h-2.5c-.07-1.42-.81-2.38-2.83-2.38s-3,.86-3,2.1c0,1.07.83,1.76,3.39,2.43s5.32,1.76,5.32,5C22,23,20.29,24.26,18.08,24.68Z"/></g></g></g></g></svg>
          <svg  className="style_dell_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" width="27.609" height="31.686" viewBox="0 0 27.609 31.686"><path className="style_dell_hover" id="iconmonstr-download-21" d="M28.609,31.686V5.281H18.569v2.64H26.1V29.045H3.51V7.921h7.53V5.281H1v26.4ZM13.549,14.523H8.53L14.8,22.444l6.275-7.921h-5.02V0h-2.51Z" transform="translate(-1)" fill="#fff" fill-rule="evenodd"/></svg>
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
              <img className="etoile" src={etoile} alt="etoiles"/>
            </div>
          </div>

          <div className="podcastStymeContainer">
          <svg className="style_dollars_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs></defs><title>Fichier 1</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><g id="logo_dollars" data-name="logo dollars"><g id="Groupe_34" data-name="Groupe 34"><path class="cls-1" d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm2.08,24.68v2.43H14.69V24.66c-2.17-.47-4-1.86-4.17-4.34H13c.13,1.34,1,2.38,3.37,2.38,2.5,0,3.06-1.24,3.06-2,0-1.06-.57-2.05-3.4-2.73-3.15-.76-5.31-2.06-5.31-4.67,0-2.19,1.76-3.61,4-4.09V6.75h3.39V9.23a4.5,4.5,0,0,1,3.63,4.31h-2.5c-.07-1.42-.81-2.38-2.83-2.38s-3,.86-3,2.1c0,1.07.83,1.76,3.39,2.43s5.32,1.76,5.32,5C22,23,20.29,24.26,18.08,24.68Z"/></g></g></g></g></svg>
            <svg  className="style_dell_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" width="27.609" height="31.686" viewBox="0 0 27.609 31.686"><path className="style_dell_hover" id="iconmonstr-download-21" d="M28.609,31.686V5.281H18.569v2.64H26.1V29.045H3.51V7.921h7.53V5.281H1v26.4ZM13.549,14.523H8.53L14.8,22.444l6.275-7.921h-5.02V0h-2.51Z" transform="translate(-1)" fill="#fff" fill-rule="evenodd"/></svg>
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
              <img className="etoile" src={etoile} alt="etoiles"/>
            </div>
          </div>

          <div className="podcastStymeContainer">
          <svg className="style_dollars_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs></defs><title>Fichier 1</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><g id="logo_dollars" data-name="logo dollars"><g id="Groupe_34" data-name="Groupe 34"><path class="cls-1" d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm2.08,24.68v2.43H14.69V24.66c-2.17-.47-4-1.86-4.17-4.34H13c.13,1.34,1,2.38,3.37,2.38,2.5,0,3.06-1.24,3.06-2,0-1.06-.57-2.05-3.4-2.73-3.15-.76-5.31-2.06-5.31-4.67,0-2.19,1.76-3.61,4-4.09V6.75h3.39V9.23a4.5,4.5,0,0,1,3.63,4.31h-2.5c-.07-1.42-.81-2.38-2.83-2.38s-3,.86-3,2.1c0,1.07.83,1.76,3.39,2.43s5.32,1.76,5.32,5C22,23,20.29,24.26,18.08,24.68Z"/></g></g></g></g></svg>
          <svg  className="style_dell_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" width="27.609" height="31.686" viewBox="0 0 27.609 31.686"><path className="style_dell_hover" id="iconmonstr-download-21" d="M28.609,31.686V5.281H18.569v2.64H26.1V29.045H3.51V7.921h7.53V5.281H1v26.4ZM13.549,14.523H8.53L14.8,22.444l6.275-7.921h-5.02V0h-2.51Z" transform="translate(-1)" fill="#fff" fill-rule="evenodd"/></svg>
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
              <img className="etoile" src={etoile} alt="etoiles"/>
            </div>
          </div>

          <div className="podcastStymeContainer">
          <svg className="style_dollars_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs></defs><title>Fichier 1</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><g id="logo_dollars" data-name="logo dollars"><g id="Groupe_34" data-name="Groupe 34"><path class="cls-1" d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm2.08,24.68v2.43H14.69V24.66c-2.17-.47-4-1.86-4.17-4.34H13c.13,1.34,1,2.38,3.37,2.38,2.5,0,3.06-1.24,3.06-2,0-1.06-.57-2.05-3.4-2.73-3.15-.76-5.31-2.06-5.31-4.67,0-2.19,1.76-3.61,4-4.09V6.75h3.39V9.23a4.5,4.5,0,0,1,3.63,4.31h-2.5c-.07-1.42-.81-2.38-2.83-2.38s-3,.86-3,2.1c0,1.07.83,1.76,3.39,2.43s5.32,1.76,5.32,5C22,23,20.29,24.26,18.08,24.68Z"/></g></g></g></g></svg>
              <svg  className="style_dell_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" width="27.609" height="31.686" viewBox="0 0 27.609 31.686"><path className="style_dell_hover" id="iconmonstr-download-21" d="M28.609,31.686V5.281H18.569v2.64H26.1V29.045H3.51V7.921h7.53V5.281H1v26.4ZM13.549,14.523H8.53L14.8,22.444l6.275-7.921h-5.02V0h-2.51Z" transform="translate(-1)" fill="#fff" fill-rule="evenodd"/></svg>
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
                  <img className="etoile" src={etoile} alt="etoiles"/>
                </div>
              </div>

              <div className="podcastStymeContainer">
              <svg  className="style_dell_podcast_containerapp" xmlns="http://www.w3.org/2000/svg" width="27.609" height="31.686" viewBox="0 0 27.609 31.686"><path className="style_dell_hover" id="iconmonstr-download-21" d="M28.609,31.686V5.281H18.569v2.64H26.1V29.045H3.51V7.921h7.53V5.281H1v26.4ZM13.549,14.523H8.53L14.8,22.444l6.275-7.921h-5.02V0h-2.51Z" transform="translate(-1)" fill="#fff" fill-rule="evenodd"/></svg>
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
                  <img className="etoile" src={etoile} alt="etoiles"/>
                </div>
              </div>
        </div>      
      </div>
    </div>
  );
}
}

export default ContainerTelechargement;
