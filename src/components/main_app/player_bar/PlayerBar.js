import React, { Component } from 'react';
import './PlayerBar.css';

class PlayerBar extends Component {
  render () {
    return (
        <div className="container_player_bar">
            <div className="info_lecture">
                <div>Titre du podcast</div>
                <div>Nom</div>
                

            </div>
        </div>
       
    );
  }
}

export default PlayerBar;