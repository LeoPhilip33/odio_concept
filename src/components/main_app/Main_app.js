import React, { Component } from 'react';
import Sidebargauche from './sidebar_gauche/Sidebargauche';
import TopBarre from '../topBarre/TopBarre';
import './Main_app.css';
import PlayerBar from './player_bar/PlayerBar';

class Main_app extends Component {
  render () {
    return (
      <div className="container_main_app">
        <div className="flex_elementsmainapp">
          <div className="sidebar_style_main_app">
            <Sidebargauche />
          </div>
          <div>
            <TopBarre />
          </div>
        </div>
        <div className="player_bar_style_main_app">
          <PlayerBar />
        </div>
      </div>
    );
  }
}

export default Main_app;
