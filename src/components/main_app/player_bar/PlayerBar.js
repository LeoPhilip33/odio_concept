import React, { Component } from 'react';
import './PlayerBar.css';
import

class PlayerBar extends Component {
  render () {
    return (
        <div className="container_player_bar">
            <div className="info_lecture">
                <div>Titre du podcast</div>
                <div>Nom</div>
                <img className="like_dislike" src={like}/>
                <img className="like_dislike" src={dislike}/>
            </div>
        </div>
       
    );
  }
}

export default PlayerBar;