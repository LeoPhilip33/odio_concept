import React, { Component } from 'react';

import './modaleTopBarre.css'; 

class ModaleTopBarre extends Component {
  render () {
    return (
      <div className="container_modale_TopBare">
        <div className="blod_user_name_top_barre">
          [Nom de l'utilisateur]
        </div>
        <hr></hr>
        <div>
          <div className="displayflex_modale_top_barre">
            <div> Paramètre du compte </div>
            <div className="fleche_param_compte_topbarre"> > </div>
          </div>
          <div className="color_deconnexion_param_compte">
            Déconnexion
          </div>
          <hr></hr>
          <div>
          <div className="displayflex_modale_top_barre">
            <div>Mode Sombre</div>
             <div>

              <div className="toggle_modale">
                <div className="toggle_modale_styled">
                </div>
              </div>
               
             </div>
            </div>
            <div className="displayflex_modale_top_barre top_espacement_daltonienMode">
            <div>Mode daltonien</div>
             <div>

              <div className="toggle_modale">
                <div className="toggle_modale_styled">
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

export default ModaleTopBarre;
