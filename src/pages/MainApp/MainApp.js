import React, { Component } from 'react';
import Sidebargauche from '../../components/sidebar_gauche/Sidebargauche';
import TopBarre from '../../components/topBarre/TopBarre';
import './MainApp.css';
import PlayerBar from '../../components/player_bar/PlayerBar';

class MainApp extends Component {
  render () {
    return (
      <div className="container_MainApp">
        <div className="flex_elementsmainapp">
          <div className="sidebar_style_MainApp">
            <Sidebargauche />
          </div>
          <div className="fixed_top_relative">
            <div className="fixed_topBarre">
              <TopBarre />
            </div>
          </div>
        </div>
        <div className="player_bar_style_MainApp">
          <PlayerBar />
        </div>
      </div>
    );
  }
}

export default MainApp;
