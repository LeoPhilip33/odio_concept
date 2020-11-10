import React, { Component } from 'react';
import './PlayerBar.css';
import like from '../../img/like.svg';
import dislike from '../../img/dislike.svg';
import bookmark from '../../img/bookmark.svg';
import chromecast from '../../img/chromecast.svg';
import volume_control from '../../img/volume_control.svg';
import volume_up from '../../img/volume_up.svg';




class PlayerBar extends Component {
  render () {
    return (
        <div className="container_player_bar">

            <div className="info_lecture">
                <div>Titre du podcast</div>
                <div>Nom</div>
                    <div className="like_dislike_align">
                        <img className="like_dislike" src={like}/>
                        <img className="like_dislike" src={dislike}/>
                    </div>
                
            </div>

            <div className="bar_lecture">
                <div className="back_player_bar">
                    
                </div>
                <div className="front_player_bar">

                </div>
                
            </div>

            <div className="icon_setting">
                <img className="icon_setting_bookmark" src={bookmark}/>
                <img className="icon_setting_chromecast" src={chromecast}/>
                <img className="icon_setting_volume_up" src={volume_up}/>
                <img className="icon_setting_volume_control" src={volume_control}/>
            </div>
        </div>
       
    );
  }
}

export default PlayerBar;