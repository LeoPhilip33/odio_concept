import React, { Component } from 'react';
import './PlayerBar.css';
import like from '../img/like.svg';
import dislike from '../img/dislike.svg';
import bookmark from '../img/bookmark.svg';
import chromecast from '../img/chromecast.svg';
import volume_control from '../img/volume_control.svg';
import volume_up from '../img/volume_up.svg';
import previous from '../img/icon_left.svg';
import next from '../img/icon_right.svg';
import loop from '../img/icon_loop.svg';
import play from '../img/icon_play.svg';
import random from '../img/icon_random.svg';





class PlayerBar extends Component {
  render () {
    return (
        <div className="container_player_bar">

            <div className="info_lecture">
                <div>Titre du podcast</div>
                <div>Nom</div>
                    <div className="like_dislike_align">
                        <img className="like_dislike" src={like} alt="natation étoiles"/>
                        <img className="like_dislike" src={dislike} alt="natation étoiles"/>
                    </div>
                
            </div>

            <div className="bar_lecture">
                <div className="front_player_bar">
                    <img className="random" src={random} alt="natation étoiles"/>
                    <img className="previous" src={previous} alt="natation étoiles"/>
                    <img className="play" src={play} alt="natation étoiles"/>
                    <img className="next" src={next} alt="natation étoiles"/>
                    <img className="loop" src={loop} alt="natation étoiles"/>
                </div>
                <div className="align_item_playerbar">
                    <div className="back_player_bar">
                        <div className="cursor_playerbar"></div>
                    </div> 
                </div>
                
            </div>

            <div className="icon_setting">
                <img className="icon_setting_bookmark" src={bookmark} alt="natation étoiles"/>
                <img className="icon_setting_chromecast" src={chromecast} alt="natation étoiles"/>
                <img className="icon_setting_volume_up" src={volume_up} alt="natation étoiles"/>
                <img className="icon_setting_volume_control" src={volume_control} alt="natation étoiles"/>
            </div>
        </div>
       
    );
  }
}

export default PlayerBar;