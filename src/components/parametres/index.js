import React from 'react';
import image_parametres from '../img/image_parametres.svg';
import icon_fb from '../img/icon_fb.svg';
import icon_google from '../img/icon_google.svg';
import { Link } from 'react-router-dom';
import './parametres.css';


const Parametres = () => {
return (
    <div className="container_parametres">
        <h1> Mes informations </h1>

        <div className="center_containerparam_border">
            <div className="containerparam_border">

                <div  className="sous_containerparam_border">
            
                    <div className="gauche_container_param">
                        <div className="contouring_img_param">
                            <img className="img_parametres_styles" src={image_parametres}  alt="natation étoiles"/>
                        </div>
                    </div>

                    <div className="droit_container_param">

                        <h1> Mon offre </h1>
                        <hr />
                        <p> Vous profitez actuellement de la version de gratuite. </p>
                        <Link to="/abonnement" className="btn_monAbonnementParametres">
                            Gérer mon abonnement
                        </Link>

                        <h1> Information de connexions </h1>
                        <hr />

                        <div className="inputParametersclass">
                            <div className="txt_avant_input_parametres">Email : </div>
                            <input type="text" className="style_impit_parameterclass"  placeholder="utilisateur@email.com"></input>
                            <div className="btn_parametersclass">
                                Modifier
                            </div>
                        </div>

                        <div className="inputParametersclass top_inputParametersclass">
                            <div className="txt_avant_input_parametres">Mot de passe : </div>
                            <input type="password" className="style_impit_parameterclass" placeholder="*************"></input>
                            <div className="btn_parametersclass">
                                Modifier
                            </div>
                        </div>

                        <div className="flex_btn_fb_google_parametres">
                            <div className="btn_fb_google_parametres">
                                <img className="icon_fb_gg_parametre" src={icon_fb} alt="natation étoiles"/>
                                Associer le compte à Facebook
                            </div>

                            <div className="btn_fb_google_parametres">
                                <img className="icon_fb_gg_parametre" src={icon_google} alt="natation étoiles"/>
                                Associer le compte à Google
                            </div>
                        </div>

                        <h1> Information privées </h1>
                        <hr />

                        <div className="flex_informations_privees">
                            <div className="txt_select_box_parametre_compte">
                                <div>
                                    Date de naissance :
                                </div>
                                <div>
                                    Language :
                                </div>
                            </div>
                            <div className="select_infor_privee_age_langue">
                                <div>

                                    <select className="selectclassnameinformationprivees" name="jours" id="langue-select">
                                        <option value="francais">1</option>
                                        <option value="anglais">2</option>
                                        <option value="espagnol">3</option>
                                    </select>

                                    <select className="selectclassnameinformationprivees" name="mois" id="langue-select">
                                        <option value="francais">Janvier</option>
                                        <option value="anglais">Février</option>
                                        <option value="espagnol">Mars</option>
                                    </select>

                                    <select className="selectclassnameinformationprivees" name="Année" id="langue-select">
                                        <option value="francais">2020</option>
                                        <option value="anglais">2019</option>
                                        <option value="espagnol">2018</option>
                                    </select>

                                </div>
                                <div className="top_language_slect_box">

                                    <select className="selectclassnameinformationprivees" name="langues" id="langue-select">
                                        <option value="francais">Français</option>
                                        <option value="anglais">Anglais</option>
                                        <option value="espagnol">Espagnol</option>
                                    </select>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="delet_le_compte_parametre">
                    Supprimer le compte
                </div>

            </div>
        </div>

    </div>
        
    )
}

export default Parametres;