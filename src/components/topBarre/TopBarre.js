import React, { useState } from 'react';

// Imports d'images :
import logo_user from '../img/logo_user.svg';
import notifications from '../img/notifications.svg';

import ModaleTopBarre from '../modaleTopBarre';

import './TopBarre.css'; 

const TopBarre = () => {
  const [isOpen, updateIsOpen] = useState(false) 
  const toggleModale = () => {
    if ( isOpen === false ) {
      updateIsOpen(true)
    }
    else {
      updateIsOpen(false)
    }
  }
  return (
    <div className="container_TopBarre">
      <div className="topbar_style">
          <div className="search_dim_topbar" >
              <input class="searchbar_topbar" type="text" placeholder="Recherche d'un podcast" ></input>
          </div>
          <div className="logo_searchbar_topbar" >
            <div>
              <img className="dim_logo_topbarre" src={notifications} alt="Notifications" ></img>
            </div>
            <div>
              <img onClick={toggleModale} className="dim_logo_topbarre" src={logo_user} alt="Utilisateur" ></img>
              {isOpen && (
                <ModaleTopBarre />
              )}
            </div>
          </div>
      </div>
    </div>
  );
}

export default TopBarre;
