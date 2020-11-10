import React, { Component } from 'react';

// Imports d'images :
import logo_user from '../img/logo_user.svg';
import notifications from '../img/notifications.svg';

import './TopBarre.css'; 

class TopBarre extends Component {
  render () {
    return (
      <div className="container_TopBarre">
        <div className="topbar_style">
            <div className="search_dim_topbar" >
                <input class="searchbar_topbar" type="text" ></input>
            </div>
            <div className="logo_searchbar_topbar" >
                <img class="dim_logo_topbarre" src={logo_user} alt="Utilisateur" ></img>
                <img class="dim_logo_topbarre" src={notifications} alt="Notifications" ></img>
            </div>
        </div>
      </div>
    );
  }
}

export default TopBarre;
