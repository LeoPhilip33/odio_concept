import React from 'react'
import Main_APP from '../main_app/Main_app'
import Button from '../../components/Button/index'
import './AbonnementPage.css';
import FakeInput from '../../components/FakeInput';


const AbonnementPage = () => {
    return (
        <div> 
            <Main_APP/>
                <div className="ContainerAbonnementPage">
                    <h1>Les offres</h1>
                    <div className="disposition_cadre">
                        <div className="cadre">
                            <h1>FREE</h1>
                               <div className="barre"><div className="gradian_barre"></div></div>
                               <form class="style_form">
                                    <FakeInput text="Qualité Supérieure"/>
                                    <FakeInput text="Qualité Flac"/>
                                    <FakeInput text="Téléchargements"/>
                                    <FakeInput text="Accès aux lives"/>
                                    <FakeInput text="Créer son live"/>
                                    <FakeInput text="Marque-Page"/>
                                    <FakeInput text="Pas de pubs"/>
                                    <FakeInput text="Monétiser ses podcasts"/>
                                </form>
                                   <div className="price_bold" >0€/mois</div>
                                   <Button>S'ABONNER</Button>

                        
                        </div>
                        <div className="cadre">
                            <h1>PREMIUM</h1>
                              <div className="barre"><div className="gradian_barre"></div></div>
                              <div className="price_bold" >10€/mois</div>
                              <Button>S'ABONNER</Button>
                        </div>
                        <div className="cadre">
                            <h1>PROFESSIONELLE</h1>
                                <div className="barre"><div className="gradian_barre"></div></div>
                                <div className="price_bold" >20€/mois</div>
                                <Button>S'ABONNER</Button>
                        </div>
                    </div>
                </div>
                


        </div> 

        
    )
}

export default AbonnementPage;