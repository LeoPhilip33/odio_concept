import React from 'react'
import MainApp from '../MainApp/MainApp'
import './AbonnementPage.css';
import CheckboxVide from '../../components/CheckboxVide';
import CheckboxRemplis from '../../components/CheckboxRemplis';
import Return from '../../components/img/return_arrow.svg'



const AbonnementPage = () => {
    return (
        <div> 
            <MainApp/>
                <div className="ContainerAbonnementPage">
                    <div className="box_flex"> 
                        <div className="style_retune">
                            <img className="arrow_return" src={Return}  alt="natation étoiles"/>
                            <div className="retour">Retour</div>
                        </div>
                        <h1 className="style_title_abonnementPage">Les offres</h1>
                    </div>
                    <div className="disposition_cadre">
                        <div className="cadre">
                            <h1>FREE</h1>
                            <div className="barre"><div className="gradian_barre"></div></div>
                            <form class="style_form">
                                <CheckboxVide text="Qualité Supérieure"/>
                                <CheckboxVide text="Qualité Flac"/>
                                <CheckboxVide text="Téléchargements"/>
                                <CheckboxVide text="Accès aux lives"/>
                                <CheckboxVide text="Créer son live"/>
                                <CheckboxVide text="Marque-Page"/>
                                <CheckboxVide text="Pas de pubs"/>
                                <CheckboxVide text="Monétiser ses podcasts"/>
                            </form>
                            <p className="price_bold" >0€/mois</p>
                            <div className="container_btnAbonnementPageAbonne">
                                <div className="btnAbonnementPageAbonne"> S'ABONNER </div>
                            </div>                       
                        </div>
                        <div className="cadre">
                            <h1>PREMIUM</h1>
                              <div className="barre"><div className="gradian_barre"></div></div>
                                <form class="style_form">
                                    <CheckboxRemplis text="Qualité Supérieure"/>
                                    <CheckboxVide text="Qualité Flac"/>
                                    <CheckboxRemplis text="Téléchargements"/>
                                    <CheckboxRemplis text="Accès aux lives"/>
                                    <CheckboxVide text="Créer son live"/>
                                    <CheckboxRemplis text="Marque-Page"/>
                                    <CheckboxRemplis text="Pas de pubs"/>
                                    <CheckboxVide text="Monétiser ses podcasts"/>
                                </form> 
                              <p className="price_bold" >10€/mois</p>
                              <div className="container_btnAbonnementPageAbonne">
                                <div className="btnAbonnementPageAbonne"> S'ABONNER </div>
                              </div>
                        </div>
                        <div className="cadre">
                            <h1>PROFESSIONELLE</h1>
                            <div className="barre">
                                <div className="gradian_barre"></div>
                            </div>
                            <div>
                                <form class="style_form">
                                    <CheckboxRemplis text="Qualité Supérieure"/>
                                    <CheckboxRemplis text="Qualité Flac"/>
                                    <CheckboxRemplis text="Téléchargements"/>
                                    <CheckboxRemplis text="Accès aux lives"/>
                                    <CheckboxRemplis text="Créer son live"/>
                                    <CheckboxRemplis text="Marque-Page"/>
                                    <CheckboxRemplis text="Pas de pubs"/>
                                    <CheckboxRemplis text="Monétiser ses podcasts"/>
                                </form>
                                <p className="price_bold" >20€/mois</p>
                                <div className="container_btnAbonnementPageAbonne">
                                    <div className="btnAbonnementPageAbonne"> S'ABONNER </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

        </div> 

        
    )
}

export default AbonnementPage;