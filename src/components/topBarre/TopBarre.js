import React, { Component } from 'react';

// Imports d'images :
import logo_user from '../img/logo_user.svg';
import notifications from '../img/notifications.svg';

import './TopBarre.css'; 

class TopBarre extends Component {
  render () {
    return (
      <div className="container_TopBarre">
          <input type="text" ></input>
          <img src={logo_user} alt="Utilisateur" ></img>
          <img src={notifications} alt="Notifications" ></img>
        
      </div>
    );
  }
}

export default TopBarre;
